import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import BasicParser from './common/basicParser';
import { Suggestions, SyntaxContextType, SyntaxSuggestion } from './common/basic-parser-types';
import { StarRocksSqlLexer } from '../lib/starrocks/StarRocksSqlLexer';
import {
    QualifiedNameContext,
    StarRocksSqlParser,
    StatementContext,
    ProgramContext,
} from '../lib/starrocks/StarRocksSqlParser';
import { StarRocksSqlParserListener } from '../lib/starrocks/StarRocksSqlParserListener';
import { STARROCKS_KEYWORDS } from './keywords/starrocks';

export default class StarRocks extends BasicParser<
    StarRocksSqlLexer,
    ProgramContext,
    StarRocksSqlParser
> {
    protected createLexerFormCharStream(charStreams): StarRocksSqlLexer {
        const lexer = new StarRocksSqlLexer(charStreams);
        return lexer;
    }

    protected createParserFromTokenStream(tokenStream): StarRocksSqlParser {
        return new StarRocksSqlParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([
        StarRocksSqlParser.RULE_qualifiedName,
        StarRocksSqlParser.RULE_partitionNames,
        StarRocksSqlParser.RULE_columnReference,
    ]);

    protected get splitListener() {
        return new starRocksSqlSplitListener();
    }

    protected processCandidates(
        candidates: CandidatesCollection,
        allTokens: Token[],
        caretTokenIndex: number,
        tokenIndexOffset: number
    ): Suggestions<Token> {
        const originalSyntaxSuggestions: SyntaxSuggestion<Token>[] = [];
        const keywords: string[] = [];

        for (const candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate;
            const startTokenIndex = candidateRule.startTokenIndex + tokenIndexOffset;
            const tokenRanges = allTokens.slice(
                startTokenIndex,
                caretTokenIndex + tokenIndexOffset + 1
            );

            let syntaxContextType: SyntaxContextType;
            switch (ruleType) {
                case StarRocksSqlParser.RULE_qualifiedName: {
                    syntaxContextType = SyntaxContextType.TABLE;
                    break;
                }
                case StarRocksSqlParser.RULE_partitionNames: {
                    syntaxContextType = SyntaxContextType.PARTITION;
                    break;
                }
                case StarRocksSqlParser.RULE_columnReference: {
                    syntaxContextType = SyntaxContextType.COLUMN;
                    break;
                }
                default:
                    break;
            }

            if (syntaxContextType) {
                originalSyntaxSuggestions.push({
                    syntaxContextType,
                    wordRanges: tokenRanges,
                });
            }
        }

        for (const candidate of candidates.tokens) {
            const symbolicName = this._parser.vocabulary.getSymbolicName(candidate[0]);
            const displayName = this._parser.vocabulary.getDisplayName(candidate[0]);
            if (symbolicName && STARROCKS_KEYWORDS.includes(symbolicName)) {
                const keyword =
                    displayName.startsWith("'") && displayName.endsWith("'")
                        ? displayName.slice(1, -1)
                        : displayName;
                keywords.push(keyword);
            }
        }

        return {
            syntax: originalSyntaxSuggestions,
            keywords,
        };
    }
}

export class starRocksSqlSplitListener implements StarRocksSqlParserListener {
    private _statementsContext: StatementContext[] = [];

    enterStatement = (ctx: StatementContext) => {
        this._statementsContext.push(ctx);
    };

    get statementsContext() {
        return this._statementsContext;
    }

    private _tableNamesContext: QualifiedNameContext[] = [];

    enterQualifiedName = (ctx: QualifiedNameContext) => {
        this._tableNamesContext.push(ctx);
    };

    get tableNamesContext() {
        return this._tableNamesContext;
    }
}
