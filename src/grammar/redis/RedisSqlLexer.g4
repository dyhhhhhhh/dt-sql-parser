// Define a grammar called Hello

// $antlr-format alignTrailingComments true, columnLimit 150, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine true, allowShortBlocksOnASingleLine true, minEmptyLines 0, alignSemicolons none, alignColons trailing
// $antlr-format singleLineOverrulesHangingColon true, alignLexerCommands true, alignLabels true, alignTrailers true
// $antlr-format spaceBeforeAssignmentOperators false, groupedAlignments true

lexer grammar RedisSqlLexer;

options {
    caseInsensitive= true;
}

channels {
    MYSQLCOMMENT,
    ERRORCHANNEL
}

/* skip spaces */
SPACE              : [ \t\r\n]+                                                           -> channel(HIDDEN);
SPEC_MYSQL_COMMENT : '/*!' .+? '*/'                                                       -> channel(MYSQLCOMMENT);
COMMENT_INPUT      : '/*' .*? '*/'                                                        -> channel(HIDDEN);
LINE_COMMENT: (('--' [ \t]* | '#') ~[\r\n]* ('\r'? '\n' | EOF) | '--' ('\r'? '\n' | EOF)) -> channel(HIDDEN);

/* key command words */
COPY        : 'COPY';
DEL         : 'DEL';
DUMP        : 'DUMP';
EXISTS      : 'EXISTS';
EXPIRE      : 'EXPIRE';
EXPIREAT    : 'EXPIREAT';
EXPIRETIME  : 'EXPIRETIME';
KEYS        : 'KEYS';
MOVE        : 'MOVE';
OBJECT      : 'OBJECT';
PERSIST     : 'PERSIST';
PEXPIRE     : 'PEXPIRE';
PEXPIREAT   : 'PEXPIREAT';
PEXPIRETIME : 'PEXPIRETIME';
TTL         : 'TTL';
PTTL        : 'PTTL';
RANDOMKEY   : 'RANDOMKEY';
RENAME      : 'RENAME';
RENAMENX    : 'RENAMENX';
RESTORE     : 'RESTORE';
SCAN        : 'SCAN';
SORT        : 'SORT';
SORT_RO     : 'SORT_RO';
TOUCH       : 'TOUCH';
TYPE        : 'TYPE';
UNLINK      : 'UNLINK';
WAIT        : 'WAIT';
/* string command words */
APPEND      : 'APPEND';
DECR        : 'DECR';
DECRBY      : 'DECRBY';
GET         : 'GET';
GETDEL      : 'GETDEL';
GETEX       : 'GETEX';
GETRANGE    : 'GETRANGE';
GETSET      : 'GETSET';
GETBIT      : 'GETBIT';
INCR        : 'INCR';
INCRBY      : 'INCRBY';
INCRBYFLOAT : 'INCRBYFLOAT';
LCS         : 'LCS';
MGET        : 'MGET';
MSET        : 'MSET';
MSETNX      : 'MSETNX';
SETEX       : 'SETEX';
PSETEX      : 'PSETEX';
SET         : 'SET';
SETNX       : 'SETNX';
SETRANGE    : 'SETRANGE';
SETBIT      : 'SETBIT';
STRLEN      : 'STRLEN';
SUBSTR      : 'SUBSTR';
/* hash command words */
HDEL         : 'HDEL';
HEXISTS      : 'HEXISTS';
HGET         : 'HGET';
HGETALL      : 'HGETALL';
HINCRBY      : 'HINCRBY';
HINCRBYFLOAT : 'HINCRBYFLOAT';
HKEYS        : 'HKEYS';
HLEN         : 'HLEN';
HMGET        : 'HMGET';
HMSET        : 'HMSET';
HRANDFIELD   : 'HRANDFIELD';
HSCAN        : 'HSCAN';
HSET         : 'HSET';
HSETNX       : 'HSETNX';
HSTRLEN      : 'HSTRLEN';
HVALS        : 'HVALS';
/* list command words */
BLMOVE     : 'BLMOVE';
BLMPOP     : 'BLMPOP';
BLPOP      : 'BLPOP';
BRPOP      : 'BRPOP';
BRPOPLPUSH : 'BRPOPLPUSH';
LINDEX     : 'LINDEX';
LINSERT    : 'LINSERT';
LLEN       : 'LLEN';
LMOVE      : 'LMOVE';
LMPOP      : 'LMPOP';
LPOP       : 'LPOP';
LPOS       : 'LPOS';
LPUSH      : 'LPUSH';
LPUSHX     : 'LPUSHX';
LRANGE     : 'LRANGE';
LREM       : 'LREM';
LSET       : 'LSET';
LTRIM      : 'LTRIM';
RPOP       : 'RPOP';
RPOPLPUSH  : 'RPOPLPUSH';
RPUSH      : 'RPUSH';
RPUSHX     : 'RPUSHX';
/* set command words */
SADD        : 'SADD';
SCARD       : 'SCARD';
SDIFF       : 'SDIFF';
SDIFFSTORE  : 'SDIFFSTORE';
SINTER      : 'SINTER';
SINTERCARD  : 'SINTERCARD';
SINTERSTORE : 'SINTERSTORE';
SISMEMBER   : 'SISMEMBER';
SMEMBERS    : 'SMEMBERS';
SMISMEMBER  : 'SMISMEMBER';
SMOVE       : 'SMOVE';
SPOP        : 'SPOP';
SRANDMEMBER : 'SRANDMEMBER';
SREM        : 'SREM';
SSCAN       : 'SSCAN';
SUNION      : 'SUNION';
SUNIONSTORE : 'SUNIONSTORE';
/* sorted set command words */
BZMPOP           : 'BZMPOP';
BZPOPMAX         : 'BZPOPMAX';
BZPOPMIN         : 'BZPOPMIN';
ZADD             : 'ZADD';
ZCARD            : 'ZCARD';
ZCOUNT           : 'ZCOUNT';
ZDIFF            : 'ZDIFF';
ZDIFFSTORE       : 'ZDIFFSTORE';
ZINCRBY          : 'ZINCRBY';
ZINTER           : 'ZINTER';
ZINTERCARD       : 'ZINTERCARD';
ZINTERSTORE      : 'ZINTERSTORE';
ZLEXCOUNT        : 'ZLEXCOUNT';
ZMPOP            : 'ZMPOP';
ZMSCORE          : 'ZMSCORE';
ZPOPMAX          : 'ZPOPMAX';
ZPOPMIN          : 'ZPOPMIN';
ZRANDMEMBER      : 'ZRANDMEMBER';
ZRANGE           : 'ZRANGE';
ZRANGEBYLEX      : 'ZRANGEBYLEX';
ZRANGEBYSCORE    : 'ZRANGEBYSCORE';
ZRANGESTORE      : 'ZRANGESTORE';
ZRANK            : 'ZRANK';
ZREM             : 'ZREM';
ZREMRANGEBYLEX   : 'ZREMRANGEBYLEX';
ZREMRANGEBYRANK  : 'ZREMRANGEBYRANK';
ZREMRANGEBYSCORE : 'ZREMRANGEBYSCORE';
ZREVRANGE        : 'ZREVRANGE';
ZREVRANGEBYLEX   : 'ZREVRANGEBYLEX';
ZREVRANGEBYSCORE : 'ZREVRANGEBYSCORE';
ZREVRANK         : 'ZREVRANK';
ZSCAN            : 'ZSCAN';
ZSCORE           : 'ZSCORE';
ZUNION           : 'ZUNION';
ZUNIONSTORE      : 'ZUNIONSTORE';
/* publish commands words */
PSUBSCRIBE    : 'PSUBSCRIBE';
PUBSUB        : 'PUBSUB';
PUBLISH       : 'PUBLISH';
CHANNELS      : 'CHANNELS';
NUMSUB        : 'NUMSUB';
NUMPAT        : 'NUMPAT';
SHARDCHANNELS : 'SHARDCHANNELS';
SHARDNUMSUB   : 'SHARDNUMSUB';
PUNSUBSCRIBE  : 'PUNSUBSCRIBE';
SPUBLISH      : 'SPUBLISH';
SUBSCRIBE     : 'SUBSCRIBE';
UNSUBSCRIBE   : 'UNSUBSCRIBE';
SSUBSCRIBE    : 'SSUBSCRIBE';
SUNSUBSCRIBE  : 'SUNSUBSCRIBE';
/* info command words */
SERVER       : 'SERVER';
CLIENTS      : 'CLIENTS';
MEMORY       : 'MEMORY';
PERSISTENCE  : 'PERSISTENCE';
STATS        : 'STATS';
REPLICATION  : 'REPLICATION';
CPU          : 'CPU';
COMMANDSTATS : 'COMMANDSTATS';
LATENCYSTATS : 'LATENCYSTATS';
SENTINEL     : 'SENTINEL';
MODULES      : 'MODULES';
KEYSPACE     : 'KEYSPACE';
ERRORSTATS   : 'ERRORSTATS';
ALL          : 'ALL';
DEFAULT      : 'DEFAULT';
EVERYTHING   : 'EVERYTHING';
/* cluster command words */
ASKING          : 'ASKING';
CLUSTER         : 'CLUSTER';
ADDSLOTS        : 'ADDSLOTS';
DELSLOTS        : 'DELSLOTS';
ADDSLOTSRANGE   : 'ADDSLOTSRANGE';
BUMPEPOCH       : 'BUMPEPOCH';
COUNTKEYSINSLOT : 'COUNTKEYSINSLOT';
DELSLOTSRANGE   : 'DELSLOTSRANGE';
FAILOVER        : 'FAILOVER';
FLUSHSLOTS      : 'FLUSHSLOTS';
FORGET          : 'FORGET';
GETKEYSINSLOT   : 'GETKEYSINSLOT';
KEYSLOT         : 'KEYSLOT';
LINKS           : 'LINKS';
MEET            : 'MEET';
MYID            : 'MYID';
MYSHARDID       : 'MYSHARDID';
FORCE           : 'FORCE';
TAKEOVER        : 'TAKEOVER';
NODE            : 'NODE';
NODES           : 'NODES';
REPLICAS        : 'REPLICAS';
REPLICATE       : 'REPLICATE';
RESET           : 'RESET';
HARD            : 'HARD';
SOFT            : 'SOFT';
SAVECONFIG      : 'SAVECONFIG';
SETSLOT         : 'SETSLOT';
IMPORTING       : 'IMPORTING';
MIGRATING       : 'MIGRATING';
STABLE          : 'STABLE';
SHARDS          : 'SHARDS';
SLAVES          : 'SLAVES';
READONLY        : 'READONLY';
READWRITE       : 'READWRITE';
//SETCONFIGEPOCH          : [sS][eE][tT][-][cC][oO][nN][fF][iI][gG][-][eE][pP][oO][cC][hH];
//COUNT-FAILURE-REPORTS: [cC][oO][uU][nN][tT][--][fF][aA][iI][lL][uU][rR][eE][--][rR][eE][pP][oO][rR][tT][sS];

/* other command words */
FLUSHDB      : 'FLUSHDB';
SCRIPT       : 'SCRIPT';
EVAL         : 'EVAL';
EVALSHA      : 'EVALSHA';
EXEC         : 'EXEC';
WATCH        : 'WATCH';
DISCARD      : 'DISCARD';
UNWATCH      : 'UNWATCH';
MULTI        : 'MULTI';
PFMERGE      : 'PFMERGE';
PFADD        : 'PFADD';
PFCOUNT      : 'PFCOUNT';
ECHO         : 'ECHO';
PING         : 'PING';
SAVE         : 'SAVE';
SLOWLOG      : 'SLOWLOG';
LASTSAVE     : 'LASTSAVE';
CONFIG       : 'CONFIG';
CLIENT       : 'CLIENT';
SHUTDOWN     : 'SHUTDOWN';
SYNC         : 'SYNC';
ROLE         : 'ROLE';
MONITOR      : 'MONITOR';
SLAVEOF      : 'SLAVEOF';
FLUSHALL     : 'FLUSHALL';
SELECT       : 'SELECT';
QUIT         : 'QUIT';
AUTH         : 'AUTH';
DBSIZE       : 'DBSIZE';
BGREWRITEAOF : 'BGREWRITEAOF';
TIME         : 'TIME';
INFO         : 'INFO';
BGSAVE       : 'BGSAVE';
COMMAND      : 'COMMAND';
DEBUG        : 'DEBUG';
/* token words */
DB           : 'DB';
NX           : 'NX';
XX           : 'XX';
GT           : 'GT';
LT           : 'LT';
ENCODING     : 'ENCODING';
FREQ         : 'FREQ';
IDLETIME     : 'IDLETIME';
REFCOUNT     : 'REFCOUNT';
ABSTTL       : 'ABSTTL';
BY           : 'BY';
ASC          : 'ASC';
DESC         : 'DESC';
ALPHA        : 'ALPHA';
STORE        : 'STORE';
REPLACE      : 'REPLACE';
EX           : 'EX';
PX           : 'PX';
EXAT         : 'EXAT';
PXAT         : 'PXAT';
LEN          : 'LEN';
IDX          : 'IDX';
MINMATCHLEN  : 'MINMATCHLEN';
WITHMATCHLEN : 'WITHMATCHLEN';
KEEPTTL      : 'KEEPTTL';
WITHSCORES   : 'WITHSCORES';
LIMIT        : 'LIMIT';
BEFORE       : 'BEFORE';
AFTER        : 'AFTER';
FLUSH        : 'FLUSH';
RESETSTAT    : 'RESETSTAT';
REWRITE      : 'REWRITE';
PAUSE        : 'PAUSE';
SETNAME      : 'SETNAME';
GETNAME      : 'GETNAME';
LIST         : 'LIST';
NOSAVE       : 'NOSAVE';
SLOTS        : 'SLOTS';
GETKEYS      : 'GETKEYS';
COUNT        : 'COUNT';
SEGFAULT     : 'SEGFAULT';
KILL         : 'KILL';
LOAD         : 'LOAD';
WITHVALUES   : 'WITHVALUES';
MATCH        : 'MATCH';
MIN          : 'MIN';
MAX          : 'MAX';
CH           : 'CH';
WEIGHTS      : 'WEIGHTS';
AGGREGATE    : 'AGGREGATE';
SUM          : 'SUM';
BYSCORE      : 'BYSCORE';
BYLEX        : 'BYLEX';
REV          : 'REV';
LEFT         : 'LEFT';
RIGHT        : 'RIGHT';
RANK         : 'RANK';
MAXLEN       : 'MAXLEN';
ASYNC        : 'ASYNC';

/* 数字 */
HEX_NUM     : '0' 'X' [0-9A-F]+; // 十六进制：0x12345
OCT_NUM     : '0' 'O' [0-7]+;    // 八 进 制：0o1234567
BIT_NUM     : '0' 'B' [01]+;     // 二 进 制：0b01010101100
INTEGER_NUM : '-'? [0-9]+;       // 十进制数：-0000234 or 123
DECIMAL_NUM:
    '-'? (([0-9]* '.' [0-9]+) | [1-9]+) // 浮点数
    ('E' [+-]? [1-9][0-9]*)?;           // 科学计数法

/* 字符串 */
//MULTI_STRING    : '"""' TRANS* '"""'
//                | '\'\'\'' TRANS* '\'\'\''
//                ;
//MULTI_STRING    : '""""""' | MULTI2;
//fragment MULTI2 : '"""' -> pushMode(EXT_MULTI2);
STRING           : '""' | ('"' (~["\r\n] | TRANS)* '"') | '\'\'' | '\'' (~['\r\n] | TRANS)* '\'';
fragment TRANS   : '\\' (['"\\/bfnrt] | UNICODE);
fragment UNICODE : 'u' HEX HEX HEX HEX;
fragment HEX     : [0-9A-F];

/* command token words */
HOST         : IPT '.' IPT '.' IPT '.' IPT;
HOST_PORT    : HOST ':' INTEGER_NUM;
fragment IPT : [0-9][0-9]? [0-9]?;

NAME_TOKEN: (~[ \r\n] | TRANS)+;

/* 扩展代码块 */
//mode EXT_MULTI2;
//CLOS_TAG        : '"""' -> popMode;
//BODY            : (CHAR1 | CHAR2)+;
//fragment CHAR1  : ~["]+;
//fragment CHAR2  : '"' | '""';