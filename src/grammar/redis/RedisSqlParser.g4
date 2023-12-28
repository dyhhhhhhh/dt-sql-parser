// Define a grammar called Hello

// $antlr-format alignTrailingComments true, columnLimit 150, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging
// $antlr-format spaceBeforeAssignmentOperators false, keepEmptyLinesAtTheStartOfBlocks true

parser grammar RedisSqlParser;

options {
    tokenVocab= RedisSqlLexer;
}

program
    : sqlStatements? EOF
    ;

sqlStatements
    : (sqlStatement | emptyStatement_)* (sqlStatement SEMI? | emptyStatement_)
    ;

emptyStatement_
    : SEMI
    ;

/* ----------------------------------------------------------------------------------- basic type */
keyName
    : NAME_TOKEN
    | STRING
    ;

fieldName
    : NAME_TOKEN
    | STRING
    ;

stringValue
    : STRING
    ;

intValue
    : INTEGER_NUM
    ;

floatValue
    : DECIMAL_NUM
    | INTEGER_NUM
    ;

pattern
    : NAME_TOKEN
    | STRING
    ;

cursor
    : intValue
    ;

min
    : intValue
    ;

max
    : intValue
    ;

multiString
    : STRING /* | MULTI_STRING TODO */
    ;

/* ------ for cluster */
cout
    : intValue
    ;

start
    : intValue
    ;

end
    : intValue
    ;

port
    : intValue
    ;

keyAndString
    : keyName stringValue
    ;

intAndString
    : intValue stringValue
    ;

/* part commands tokens */
infoOpt
    : SERVER
    | CLIENTS
    | MEMORY
    | PERSISTENCE
    | STATS
    | REPLICATION
    | CPU
    | COMMANDSTATS
    | LATENCYSTATS
    | SENTINEL
    | MODULES
    | KEYSPACE
    | ERRORSTATS
    | ALL
    | DEFAULT
    | EVERYTHING
    ; // only for INFO

//clusterOpt      : ADDSLOTS | ADDSLOTSRANGE | BUMPEPOCH | COUNTKEYSINSLOT | DELSLOTSRANGE | FAILOVER | FLUSHSLOTS |
//                  FORGET | GETKEYSINSLOT | KEYSLOT | LINKS | MEET | MYID | MYSHARDID;       // only for CLUSTER
patternOpt
    : GET pattern
    ; // only for SORT、SORT_RO

keyOpt
    : NX
    | XX
    | GT
    | LT
    ; // only for EXPIRE、EXPIREAT、PEXPIRE、PEXPIREAT

idletimeOpt
    : IDLETIME intValue
    ;

freqOpt
    : FREQ intValue
    ;

limitOpt
    : LIMIT intValue intValue
    ;

sortOpt
    : ASC
    | DESC
    ;

getsetOpt
    : (EX | PX | EXAT | PXAT) intValue
    ; // only for SET、GETEX

lrOpt
    : LEFT
    | RIGHT
    ; // only for BLMOVE、LMPOP、LMOVE

rankOpt
    : RANK intValue
    ; // only for LPOS

countOpt
    : COUNT intValue
    ;

maxlenOpt
    : MAXLEN intValue
    ; // only for LPOS

/* ----------------------------------------------------------------------------------- Keys commands */
cmdCopy
    : COPY keyName keyName (DB intValue)? REPLACE?
    ;

cmdDel
    : DEL keyName+
    ;

cmdDump
    : DUMP keyName
    ;

cmdExists
    : EXISTS keyName+
    ;

cmdExpire
    : EXPIRE keyName intValue keyOpt?
    ;

cmdExpireat
    : EXPIREAT keyName intValue keyOpt?
    ;

cmdExpireTime
    : EXPIRETIME keyName
    ;

cmdKeys
    : KEYS pattern
    ;

//cmdMigrate      : MIGRATE host port key|"" destination-db timeout [COPY] [REPLACE] [AUTH password] [AUTH2 username password] [KEYS key [key ...]]
cmdMove
    : MOVE keyName intValue
    ;

cmdObject
    : OBJECT (ENCODING | FREQ | IDLETIME | REFCOUNT) keyName
    ;

cmdPersist
    : PERSIST keyName
    ;

cmdPexpire
    : PEXPIRE keyName intValue keyOpt?
    ;

cmdPexpireat
    : PEXPIREAT keyName intValue keyOpt?
    ;

cmdPExpireTime
    : PEXPIRETIME keyName
    ;

cmdTtl
    : TTL keyName
    ;

cmdPttl
    : PTTL keyName
    ;

cmdRandomkey
    : RANDOMKEY
    ;

cmdRename
    : RENAME keyName keyName
    ;

cmdRenamenx
    : RENAMENX keyName keyName
    ;

cmdRestore
    : RESTORE keyName intValue stringValue REPLACE? ABSTTL? idletimeOpt? freqOpt?
    ;

cmdScan
    : SCAN cursor pattern intValue? (TYPE stringValue)?
    ;

cmdSort
    : SORT keyName (BY pattern)? limitOpt? (patternOpt+)? sortOpt? ALPHA? (STORE stringValue)?
    ;

cmdSortro
    : SORT_RO keyName (BY pattern)? limitOpt? (patternOpt+)? sortOpt? ALPHA?
    ;

cmdTouch
    : TOUCH keyName+
    ;

cmdType
    : TYPE keyName
    ;

cmdUnlink
    : UNLINK keyName+
    ;

cmdWait
    : WAIT intValue intValue
    ;

/* ----------------------------------------------------------------------------------- String commands */
cmdAppend
    : APPEND keyName stringValue
    ;

cmdDecr
    : DECR keyName
    ;

cmdDecrby
    : DECRBY keyName intValue
    ;

cmdGet
    : GET keyName
    ;

cmdGetdel
    : GETDEL keyName
    ;

cmdGetex
    : GETEX keyName (getsetOpt | PERSIST)?
    ;

cmdGetrange
    : GETRANGE keyName intValue intValue
    ;

cmdGetset
    : GETSET keyName stringValue
    ;

cmdGetbit
    : GETBIT keyName intValue
    ;

cmdInc
    : INCR keyName                   # cmdIncr
    | INCRBY keyName intValue        # cmdIncrby
    | INCRBYFLOAT keyName floatValue # cmdIncrbyFloat
    ;

cmdLcs
    : LCS keyName keyName LEN? IDX? (MINMATCHLEN intValue)? WITHMATCHLEN?
    ;

cmdMget
    : MGET keyName+
    ;

cmdMset
    : MSET keyAndString+
    ;

cmdMsetnx
    : MSETNX keyAndString+
    ;

cmdSetex
    : (SETEX | PSETEX) keyName intValue stringValue
    ;

cmdSet
    : SET keyName stringValue (getsetOpt | KEEPTTL)? (NX | XX)? GET?
    ;

cmdSetnx
    : SETNX keyName stringValue
    ;

cmdSetrange
    : SETRANGE keyName intValue stringValue
    ;

cmdSetbit
    : SETBIT keyName intValue intValue
    ;

cmdStrlen
    : STRLEN keyName
    ;

cmdSubstr
    : SUBSTR keyName intValue intValue
    ;

/* ----------------------------------------------------------------------------------- Hash commands */
cmdHdelMget
    : (HDEL | HMGET) keyName fieldName+
    ;

cmdHexistsGetKeysStrlen
    : (HEXISTS | HGET | HSTRLEN) keyName fieldName
    ;

cmdHgetallLenVals
    : (HGETALL | HLEN | HVALS | HKEYS) keyName
    ;

cmdHmsetHset
    : (HMSET | HSET) keyName keyAndString+
    ;

cmdHincrby
    : (HINCRBY | HINCRBYFLOAT) keyName fieldName floatValue
    ;

cmdHrandfield
    : HRANDFIELD keyName (intValue WITHVALUES?)?
    ;

cmdHscan
    : HSCAN keyName intValue (MATCH pattern)? (COUNT intValue)?
    ;

cmdHsetnx
    : HSETNX keyName keyAndString
    ;

/* ----------------------------------------------------------------------------------- List commands */
cmdBlmove
    : BLMOVE keyName keyName lrOpt lrOpt intValue
    ;

cmdLmpop
    : (LMPOP | BLMPOP) intValue intValue keyName+ lrOpt intValue?
    ;

cmdBpop
    : (BLPOP | BRPOP) keyName+ intValue
    ;

cmdBrpoplpush
    : BRPOPLPUSH keyName keyName intValue
    ;

cmdLindex
    : LINDEX keyName intValue
    ;

cmdLinsert
    : LINSERT keyName (BEFORE | AFTER) stringValue stringValue
    ;

cmdLlen
    : LLEN keyName
    ;

cmdLmove
    : LMOVE keyName keyName lrOpt lrOpt
    ;

cmdPop
    : (LPOP | RPOP) keyName intValue?
    ;

cmdLpos
    : LPOS keyName fieldName rankOpt? countOpt? maxlenOpt?
    ;

cmdPush
    : (LPUSH | LPUSHX | RPUSH | RPUSHX) keyName stringValue+
    ;

cmdLrangeTrim
    : (LRANGE | LTRIM) keyName intValue intValue
    ;

cmdLremSet
    : (LREM | LSET) keyName intValue stringValue
    ;

cmdRpoplpush
    : RPOPLPUSH keyName keyName
    ;

/* ----------------------------------------------------------------------------------- Set commands */
cmdSadd
    : (SADD | SREM | SMISMEMBER) keyName fieldName+
    ;

cmdScard
    : (SCARD | SMEMBERS) keyName
    ;

cmdSdiff
    : (SDIFF | SINTER | SUNION) keyName+
    ;

cmdSdiffstore
    : (SDIFFSTORE | SINTERSTORE | SUNIONSTORE) keyName keyName+
    ;

cmdSintercard
    : SINTERCARD intValue keyName+ (LIMIT intValue)?
    ;

cmdSismember
    : SISMEMBER keyName fieldName
    ;

cmdSmove
    : SMOVE keyName keyName fieldName
    ;

cmdSpop
    : (SPOP | SRANDMEMBER) keyName intValue?
    ;

cmdSscan
    : SSCAN keyName intValue (MATCH pattern)? countOpt?
    ;

/* ----------------------------------------------------------------------------------- sorted set commands */
cmdBzmpop
    : BZMPOP intValue intValue keyName+ (MIN | MAX) countOpt?
    ;

cmdBzpopmax
    : (BZPOPMAX | BZPOPMIN) keyName+ intValue
    ;

cmdZadd
    : ZADD keyName (NX | XX)? (GT | LT)? CH? INCR? intAndString+
    ;

cmdZcard
    : ZCARD keyName
    ;

cmdZcount
    : (ZCOUNT | ZLEXCOUNT | ZREMRANGEBYLEX | ZREMRANGEBYSCORE) keyName min max
    ;

cmdZdiff
    : ZDIFF intValue keyName+ WITHSCORES?
    ;

cmdZdiffstore
    : ZDIFFSTORE keyName intValue keyName+
    ;

cmdZincrby
    : ZINCRBY keyName intValue fieldName
    ;

cmdZinter
    : ZINTER intValue keyName+ (WEIGHTS intValue+)? (AGGREGATE (SUM | MIN | MAX))? WITHSCORES?
    ;

cmdZintercard
    : ZINTERCARD intValue keyName+ (LIMIT intValue)?
    ;

cmdZinterstore
    : ZINTERSTORE keyName intValue keyName+ (WEIGHTS intValue+)? (AGGREGATE (SUM | MIN | MAX))?
    ;

cmdZmpop
    : ZMPOP intValue keyName+ (MIN | MAX) countOpt
    ;

cmdZmscore
    : (ZMSCORE | ZREM) keyName fieldName+
    ;

cmdZpopmax
    : (ZPOPMAX | ZPOPMIN) keyName intValue?
    ;

cmdZrandmember
    : ZRANDMEMBER keyName (intValue WITHSCORES?)?
    ;

cmdZrange
    : ZRANGE keyName min max (BYSCORE | BYLEX)? REV? limitOpt? WITHSCORES?
    ;

cmdZrangebylex
    : ZRANGEBYLEX keyName min max limitOpt?
    ;

cmdZrangebyscore
    : ZRANGEBYSCORE keyName min max WITHSCORES? limitOpt?
    ;

cmdZrangestore
    : ZRANGESTORE keyName keyName min max (BYSCORE | BYLEX)? limitOpt?
    ;

cmdZrank
    : (ZRANK | ZREVRANK | ZSCORE) keyName fieldName
    ;

cmdZremrangebyrank
    : ZREMRANGEBYRANK keyName intValue intValue
    ;

cmdZrevrange
    : ZREVRANGE keyName intValue intValue WITHSCORES?
    ;

cmdZrevrangebylex
    : (ZREVRANGEBYLEX | ZREVRANGEBYSCORE) keyName max min WITHSCORES? limitOpt?
    ;

cmdZscan
    : ZSCAN keyName intValue (MATCH pattern)? countOpt
    ;

cmdZunion
    : ZUNION intValue keyName+ (WEIGHTS intValue+)? (AGGREGATE (SUM | MIN | MAX))? WITHSCORES?
    ;

cmdZunionstore
    : ZUNIONSTORE keyName intValue keyName+ (WEIGHTS intValue+)? (AGGREGATE (SUM | MIN | MAX))?
    ;

/* ----------------------------------------------------------------------------------- script commands */
cmdScriptKill
    : SCRIPT KILL
    ;

cmdScriptLoad
    : SCRIPT LOAD multiString
    ;

cmdEval
    : EVAL multiString intValue keyName*
    ;

cmdEvalsha
    : EVALSHA stringValue intValue keyName*
    ;

cmdScriptExists
    : SCRIPT EXISTS stringValue
    ;

cmdScriptFlush
    : SCRIPT FLUSH
    ;

/* ----------------------------------------------------------------------------------- tx commands */
cmdExec
    : EXEC
    ;

cmdWatch
    : WATCH keyName+
    ;

cmdDiscard
    : DISCARD
    ;

cmdUnwatch
    : UNWATCH
    ;

cmdMulti
    : MULTI
    ;

/* ----------------------------------------------------------------------------------- HyperLog commands */
cmdPfmerge
    : PFMERGE keyName keyName+
    ;

cmdPfadd
    : PFADD keyName fieldName+
    ;

cmdPfcount
    : PFCOUNT keyName keyName+
    ;

/* ----------------------------------------------------------------------------------- publish commands */
cmdSsubscribe
    : (SSUBSCRIBE | SUBSCRIBE | PSUBSCRIBE) keyName+
    ;

cmdUnsubscribe
    : (UNSUBSCRIBE | PUNSUBSCRIBE | SUNSUBSCRIBE) (keyName+)?
    ;

cmdPusubnumpat
    : PUBSUB NUMPAT
    ;

cmdPusubnumsub
    : PUBSUB (NUMSUB | SHARDNUMSUB) (keyName+)?
    ;

cmdPusubchannels
    : PUBSUB (CHANNELS | SHARDCHANNELS) keyName?
    ;

cmdPublish
    : PUBLISH keyName fieldName
    ;

//cmdSpublish             : SPUBLISH                  keyName fieldName;
//cmdPsubscribe           : PSUBSCRIBE                pattern+;
/* ----------------------------------------------------------------------------------- cluster commands */
cmdAsking
    : ASKING
    ;

cmdReadonly
    : READONLY
    ;

cmdReadwrite
    : READWRITE
    ;

cmdAddDelSlots
    : CLUSTER (ADDSLOTS | DELSLOTS) intValue+
    ;

cmdCountKeysInSlot
    : CLUSTER COUNTKEYSINSLOT intValue
    ;

cmdFailOver
    : CLUSTER FAILOVER (FORCE | TAKEOVER)?
    ;

cmdForget
    : CLUSTER FORGET stringValue
    ;

cmdGetKeysInSlot
    : CLUSTER GETKEYSINSLOT intValue cout
    ;

cmdClusterOrder
    : CLUSTER (
        INFO
        | BUMPEPOCH
        | LINKS
        | FLUSHSLOTS
        | MYID
        | MYSHARDID
        | NODES
        | SAVECONFIG
        | SHARDS
        | SLOTS
    )
    ;

cmdKeySlot
    : CLUSTER KEYSLOT keyName
    ;

cmdMeet
    : CLUSTER MEET HOST port intValue?
    ;

cmdReplicaesSlave
    : CLUSTER (REPLICAS | REPLICATE | SLAVES) stringValue
    ;

cmdReset
    : CLUSTER RESET (HARD | SOFT)
    ;

cmdSetSlot
    : CLUSTER SETSLOT intValue (
        (MIGRATING stringValue)
        | (IMPORTING stringValue |)
        | (NODE stringValue)
        | STABLE
    )
    ;

/* ----------------------------------------------------------------------------------- geo commands */
//Redis GEOHASH 命令
//Redis GEOPOS 命令
//Redis GEODIST 命令
//Redis GEORADIUS 命令
//Redis GEOADD 命令
//Redis GEORADIUSBYMEMBER 命令
/* ----------------------------------------------------------------------------------- control commands */
cmdFlushdb
    : FLUSHDB (ASYNC | SYNC)?
    ;

cmdEcho
    : ECHO stringValue
    ;

cmdSave
    : SAVE
    ;

cmdSlowlog
    : SLOWLOG sqlStatement
    ;

cmdLastsave
    : LASTSAVE
    ;

cmdConfig
    : CONFIG (GET pattern)          # cmdConfigGet
    | (SET stringValue stringValue) # cmdConfigSet
    | RESETSTAT                     # cmdConfigReset
    | REWRITE                       # cmdConfigRewrite
    ;

cmdClient
    : CLIENT (PAUSE intValue) # cmdClientPause
    | (KILL HOST_PORT)        # cmdClientKill
    | GETNAME                 # cmdClientGetname
    | (SETNAME stringValue)   # cmdClientSetname
    | LIST                    # cmdClientList
    ;

cmdShutdown
    : SHUTDOWN NOSAVE? SAVE?
    ;

cmdSync
    : SYNC
    ;

cmdRole
    : ROLE
    ;

cmdMonitor
    : MONITOR
    ;

cmdSlaveof
    : SLAVEOF HOST intValue
    ;

cmdFlushall
    : FLUSHALL
    ;

cmdSelect
    : SELECT intValue
    ;

cmdPing
    : PING
    ;

cmdQuit
    : QUIT
    ;

cmdAuth
    : AUTH stringValue
    ;

cmdDbsize
    : DBSIZE
    ;

cmdBgrewriteaof
    : BGREWRITEAOF
    ;

//cmdClusterSlots : CLUSTER SLOTS;
cmdTime
    : TIME
    ;

cmdInfo
    : INFO (infoOpt+)?
    ;

cmdBgsave
    : BGSAVE
    ;

cmdCmd
    : COMMAND
    ;

cmdCmdx
    : COMMAND (INFO keyName+) # cmdCmdInfo
    | (GETKEYS keyName+)      # cmdCmdGetkeys
    | COUNT                   # cmdCmdCount
    ;

cmdDebug
    : DEBUG (SEGFAULT | OBJECT keyName)
    ;

sqlStatement
    :
    // keys commands
    cmdCopy
    | cmdDel
    | cmdDump
    | cmdExists
    | cmdExpire
    | cmdExpireat
    | cmdExpireTime
    | cmdKeys /* | cmdMigrate */
    | cmdMove
    | cmdObject
    | cmdPersist
    | cmdPexpire
    | cmdPexpireat
    | cmdPExpireTime
    | cmdTtl
    | cmdPttl
    | cmdRandomkey
    | cmdRename
    | cmdRenamenx
    | cmdRestore
    | cmdScan
    | cmdSort
    | cmdSortro
    | cmdTouch
    | cmdType
    | cmdUnlink
    | cmdWait
    // string commands
    | cmdAppend
    | cmdDecr
    | cmdDecrby
    | cmdGet
    | cmdGetdel
    | cmdGetex
    | cmdGetrange
    | cmdGetset
    | cmdGetbit
    | cmdInc
    | cmdLcs
    | cmdMget
    | cmdMset
    | cmdMsetnx
    | cmdSetex
    | cmdSet
    | cmdSetnx
    | cmdSetrange
    | cmdSetbit
    | cmdStrlen
    | cmdSubstr
    // hash commands
    | cmdHdelMget
    | cmdHexistsGetKeysStrlen
    | cmdHgetallLenVals
    | cmdHincrby
    | cmdHmsetHset
    | cmdHrandfield
    | cmdHscan
    | cmdHsetnx
    // list commands
    | cmdBlmove
    | cmdLmpop
    | cmdBpop
    | cmdBrpoplpush
    | cmdLindex
    | cmdLinsert
    | cmdLlen
    | cmdLmove
    | cmdPop
    | cmdLpos
    | cmdPush
    | cmdLrangeTrim
    | cmdLremSet
    | cmdRpoplpush
    // set commands
    | cmdSadd
    | cmdScard
    | cmdSdiff
    | cmdSdiffstore
    | cmdSintercard
    | cmdSismember
    | cmdSmove
    | cmdSpop
    | cmdSscan
    // sorted set commands
    | cmdBzmpop
    | cmdBzpopmax
    | cmdZadd
    | cmdZcard
    | cmdZcount
    | cmdZdiff
    | cmdZdiffstore
    | cmdZincrby
    | cmdZinter
    | cmdZintercard
    | cmdZinterstore
    | cmdZmpop
    | cmdZmscore
    | cmdZpopmax
    | cmdZrandmember
    | cmdZrange
    | cmdZrangebylex
    | cmdZrangebyscore
    | cmdZrangestore
    | cmdZrank
    | cmdZremrangebyrank
    | cmdZrevrange
    | cmdZrevrangebylex
    | cmdZscan
    | cmdZunion
    | cmdZunionstore
    // script commands
    | cmdScriptKill
    | cmdScriptLoad
    | cmdEval
    | cmdEvalsha
    | cmdScriptExists
    | cmdScriptFlush
    // tx commands
    | cmdExec
    | cmdWatch
    | cmdDiscard
    | cmdUnwatch
    | cmdMulti
    // HyperLog commands
    | cmdPfmerge
    | cmdPfadd
    | cmdPfcount
    // control commands
    | cmdEcho
    | cmdSelect
    | cmdPing
    | cmdSave
    | cmdSlowlog
    | cmdLastsave
    | cmdConfig
    | cmdClient
    | cmdShutdown
    | cmdSync
    | cmdRole
    | cmdMonitor
    | cmdSlaveof
    | cmdFlushall
    | cmdQuit
    | cmdAuth
    | cmdDbsize
    | cmdBgrewriteaof
    | cmdTime
    | cmdInfo
    | cmdBgsave
    | cmdCmd
    | cmdCmdx
    | cmdDebug
    | cmdFlushdb
    // publish commands
    | cmdSsubscribe
    | cmdUnsubscribe
    | cmdPusubnumsub
    | cmdPusubnumpat
    | cmdPusubchannels
    | cmdPublish
    // info commands
    | cmdInfo
    // cluster commands
    | cmdAsking
    | cmdAddDelSlots
    | cmdCountKeysInSlot
    | cmdFailOver
    | cmdForget
    | cmdGetKeysInSlot
    | cmdClusterOrder
    | cmdKeySlot
    | cmdMeet
    | cmdReadonly
    | cmdReadwrite
    | cmdReplicaesSlave
    | cmdReset
    | cmdSetSlot
    ;