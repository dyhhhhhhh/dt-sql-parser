import { Token } from 'antlr4ts';
import { CandidatesCollection } from 'antlr4-c3';
import BasicParser from './common/basicParser';
import { Suggestions, SyntaxContextType, SyntaxSuggestion } from './common/basic-parser-types';
import { REDIS_KEYWORDS } from './keywords/redis';
import { RedisSqlParserListener } from '../lib/redis/RedisSqlParserListener';
import { RedisSqlLexer } from '../lib/redis/RedisSqlLexer';
import {
    RedisSqlParser,
    ProgramContext,
    SqlStatementContext,
    KeyNameContext,
} from '../lib/redis/RedisSqlParser';

export default class Redis extends BasicParser<RedisSqlLexer, ProgramContext, RedisSqlParser> {
    protected createLexerFormCharStream(charStreams): RedisSqlLexer {
        const lexer = new RedisSqlLexer(charStreams);
        return lexer;
    }

    protected createParserFromTokenStream(tokenStream): RedisSqlParser {
        return new RedisSqlParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([RedisSqlParser.RULE_keyName]);

    protected get splitListener() {
        return new redisSqlSplitListener();
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
                case RedisSqlParser.RULE_keyName: {
                    syntaxContextType = SyntaxContextType.Key;
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
            if (symbolicName && REDIS_KEYWORDS.includes(symbolicName)) {
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

export class redisSqlSplitListener implements RedisSqlParserListener {
    private _statementsContext: SqlStatementContext[] = [];

    enterSqlStatement = (ctx: SqlStatementContext) => {
        this._statementsContext.push(ctx);
    };

    get statementsContext() {
        return this._statementsContext;
    }

    private _tableNamesContext: KeyNameContext[] = [];

    enterKeyName = (ctx: KeyNameContext) => {
        this._tableNamesContext.push(ctx);
    };

    get tableNamesContext() {
        return this._tableNamesContext;
    }
}
