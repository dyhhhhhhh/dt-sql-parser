export { AbstractParseTreeVisitor } from 'antlr4ts/tree/AbstractParseTreeVisitor';

export {
    MySQL,
    // FlinkSQL,
    // SparkSQL,
    // HiveSQL,
    PostgresSQL,
    // TrinoSQL,
    // ImpalaSQL,
    // PLSQL,
    RedisSQL,
    StarRocksSQL,
} from './parser';

export type {
    MySqlParserListener,
    MySqlParserVisitor,
    // FlinkSqlParserListener,
    // FlinkSqlParserVisitor,
    // SparkSqlParserListener,
    // SparkSqlParserVisitor,
    // HiveSqlParserListener,
    // HiveSqlParserVisitor,
    // PlSqlParserListener,
    // PlSqlParserVisitor,
    PostgreSQLParserListener,
    PostgreSQLParserVisitor,
    // TrinoSqlListener,
    // TrinoSqlVisitor,
    // ImpalaSqlParserListener,
    // ImpalaSqlParserVisitor,
    RedisSqlParserListener,
    RedisSqlParserVisitor,
    StarRocksSqlParserListener,
    StarRocksSqlParserVisitor,
} from './lib';

export { SyntaxContextType } from './parser/common/basic-parser-types';

export type {
    CaretPosition,
    WordRange,
    Suggestions,
    SyntaxSuggestion,
    TextSlice,
} from './parser/common/basic-parser-types';

export type { SyntaxError, ParseError, ErrorListener } from './parser/common/parseErrorListener';

/**
 * @deprecated legacy, will be removed.
 */
export * from './utils';
