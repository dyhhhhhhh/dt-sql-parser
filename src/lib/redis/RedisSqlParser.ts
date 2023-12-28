// Generated from dt-sql-parser/src/grammar/redis/RedisSqlParser.g4 by ANTLR 4.9.0-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { RedisSqlParserListener } from "./RedisSqlParserListener";
import { RedisSqlParserVisitor } from "./RedisSqlParserVisitor";


export class RedisSqlParser extends Parser {
	public static readonly SPACE = 1;
	public static readonly SPEC_MYSQL_COMMENT = 2;
	public static readonly COMMENT_INPUT = 3;
	public static readonly LINE_COMMENT = 4;
	public static readonly COPY = 5;
	public static readonly DEL = 6;
	public static readonly DUMP = 7;
	public static readonly EXISTS = 8;
	public static readonly EXPIRE = 9;
	public static readonly EXPIREAT = 10;
	public static readonly EXPIRETIME = 11;
	public static readonly KEYS = 12;
	public static readonly MOVE = 13;
	public static readonly OBJECT = 14;
	public static readonly PERSIST = 15;
	public static readonly PEXPIRE = 16;
	public static readonly PEXPIREAT = 17;
	public static readonly PEXPIRETIME = 18;
	public static readonly TTL = 19;
	public static readonly PTTL = 20;
	public static readonly RANDOMKEY = 21;
	public static readonly RENAME = 22;
	public static readonly RENAMENX = 23;
	public static readonly RESTORE = 24;
	public static readonly SCAN = 25;
	public static readonly SORT = 26;
	public static readonly SORT_RO = 27;
	public static readonly TOUCH = 28;
	public static readonly TYPE = 29;
	public static readonly UNLINK = 30;
	public static readonly WAIT = 31;
	public static readonly APPEND = 32;
	public static readonly DECR = 33;
	public static readonly DECRBY = 34;
	public static readonly GET = 35;
	public static readonly GETDEL = 36;
	public static readonly GETEX = 37;
	public static readonly GETRANGE = 38;
	public static readonly GETSET = 39;
	public static readonly GETBIT = 40;
	public static readonly INCR = 41;
	public static readonly INCRBY = 42;
	public static readonly INCRBYFLOAT = 43;
	public static readonly LCS = 44;
	public static readonly MGET = 45;
	public static readonly MSET = 46;
	public static readonly MSETNX = 47;
	public static readonly SETEX = 48;
	public static readonly PSETEX = 49;
	public static readonly SET = 50;
	public static readonly SETNX = 51;
	public static readonly SETRANGE = 52;
	public static readonly SETBIT = 53;
	public static readonly STRLEN = 54;
	public static readonly SUBSTR = 55;
	public static readonly HDEL = 56;
	public static readonly HEXISTS = 57;
	public static readonly HGET = 58;
	public static readonly HGETALL = 59;
	public static readonly HINCRBY = 60;
	public static readonly HINCRBYFLOAT = 61;
	public static readonly HKEYS = 62;
	public static readonly HLEN = 63;
	public static readonly HMGET = 64;
	public static readonly HMSET = 65;
	public static readonly HRANDFIELD = 66;
	public static readonly HSCAN = 67;
	public static readonly HSET = 68;
	public static readonly HSETNX = 69;
	public static readonly HSTRLEN = 70;
	public static readonly HVALS = 71;
	public static readonly BLMOVE = 72;
	public static readonly BLMPOP = 73;
	public static readonly BLPOP = 74;
	public static readonly BRPOP = 75;
	public static readonly BRPOPLPUSH = 76;
	public static readonly LINDEX = 77;
	public static readonly LINSERT = 78;
	public static readonly LLEN = 79;
	public static readonly LMOVE = 80;
	public static readonly LMPOP = 81;
	public static readonly LPOP = 82;
	public static readonly LPOS = 83;
	public static readonly LPUSH = 84;
	public static readonly LPUSHX = 85;
	public static readonly LRANGE = 86;
	public static readonly LREM = 87;
	public static readonly LSET = 88;
	public static readonly LTRIM = 89;
	public static readonly RPOP = 90;
	public static readonly RPOPLPUSH = 91;
	public static readonly RPUSH = 92;
	public static readonly RPUSHX = 93;
	public static readonly SADD = 94;
	public static readonly SCARD = 95;
	public static readonly SDIFF = 96;
	public static readonly SDIFFSTORE = 97;
	public static readonly SINTER = 98;
	public static readonly SINTERCARD = 99;
	public static readonly SINTERSTORE = 100;
	public static readonly SISMEMBER = 101;
	public static readonly SMEMBERS = 102;
	public static readonly SMISMEMBER = 103;
	public static readonly SMOVE = 104;
	public static readonly SPOP = 105;
	public static readonly SRANDMEMBER = 106;
	public static readonly SREM = 107;
	public static readonly SSCAN = 108;
	public static readonly SUNION = 109;
	public static readonly SUNIONSTORE = 110;
	public static readonly BZMPOP = 111;
	public static readonly BZPOPMAX = 112;
	public static readonly BZPOPMIN = 113;
	public static readonly ZADD = 114;
	public static readonly ZCARD = 115;
	public static readonly ZCOUNT = 116;
	public static readonly ZDIFF = 117;
	public static readonly ZDIFFSTORE = 118;
	public static readonly ZINCRBY = 119;
	public static readonly ZINTER = 120;
	public static readonly ZINTERCARD = 121;
	public static readonly ZINTERSTORE = 122;
	public static readonly ZLEXCOUNT = 123;
	public static readonly ZMPOP = 124;
	public static readonly ZMSCORE = 125;
	public static readonly ZPOPMAX = 126;
	public static readonly ZPOPMIN = 127;
	public static readonly ZRANDMEMBER = 128;
	public static readonly ZRANGE = 129;
	public static readonly ZRANGEBYLEX = 130;
	public static readonly ZRANGEBYSCORE = 131;
	public static readonly ZRANGESTORE = 132;
	public static readonly ZRANK = 133;
	public static readonly ZREM = 134;
	public static readonly ZREMRANGEBYLEX = 135;
	public static readonly ZREMRANGEBYRANK = 136;
	public static readonly ZREMRANGEBYSCORE = 137;
	public static readonly ZREVRANGE = 138;
	public static readonly ZREVRANGEBYLEX = 139;
	public static readonly ZREVRANGEBYSCORE = 140;
	public static readonly ZREVRANK = 141;
	public static readonly ZSCAN = 142;
	public static readonly ZSCORE = 143;
	public static readonly ZUNION = 144;
	public static readonly ZUNIONSTORE = 145;
	public static readonly PSUBSCRIBE = 146;
	public static readonly PUBSUB = 147;
	public static readonly PUBLISH = 148;
	public static readonly CHANNELS = 149;
	public static readonly NUMSUB = 150;
	public static readonly NUMPAT = 151;
	public static readonly SHARDCHANNELS = 152;
	public static readonly SHARDNUMSUB = 153;
	public static readonly PUNSUBSCRIBE = 154;
	public static readonly SPUBLISH = 155;
	public static readonly SUBSCRIBE = 156;
	public static readonly UNSUBSCRIBE = 157;
	public static readonly SSUBSCRIBE = 158;
	public static readonly SUNSUBSCRIBE = 159;
	public static readonly SERVER = 160;
	public static readonly CLIENTS = 161;
	public static readonly MEMORY = 162;
	public static readonly PERSISTENCE = 163;
	public static readonly STATS = 164;
	public static readonly REPLICATION = 165;
	public static readonly CPU = 166;
	public static readonly COMMANDSTATS = 167;
	public static readonly LATENCYSTATS = 168;
	public static readonly SENTINEL = 169;
	public static readonly MODULES = 170;
	public static readonly KEYSPACE = 171;
	public static readonly ERRORSTATS = 172;
	public static readonly ALL = 173;
	public static readonly DEFAULT = 174;
	public static readonly EVERYTHING = 175;
	public static readonly ASKING = 176;
	public static readonly CLUSTER = 177;
	public static readonly ADDSLOTS = 178;
	public static readonly DELSLOTS = 179;
	public static readonly ADDSLOTSRANGE = 180;
	public static readonly BUMPEPOCH = 181;
	public static readonly COUNTKEYSINSLOT = 182;
	public static readonly DELSLOTSRANGE = 183;
	public static readonly FAILOVER = 184;
	public static readonly FLUSHSLOTS = 185;
	public static readonly FORGET = 186;
	public static readonly GETKEYSINSLOT = 187;
	public static readonly KEYSLOT = 188;
	public static readonly LINKS = 189;
	public static readonly MEET = 190;
	public static readonly MYID = 191;
	public static readonly MYSHARDID = 192;
	public static readonly FORCE = 193;
	public static readonly TAKEOVER = 194;
	public static readonly NODE = 195;
	public static readonly NODES = 196;
	public static readonly REPLICAS = 197;
	public static readonly REPLICATE = 198;
	public static readonly RESET = 199;
	public static readonly HARD = 200;
	public static readonly SOFT = 201;
	public static readonly SAVECONFIG = 202;
	public static readonly SETSLOT = 203;
	public static readonly IMPORTING = 204;
	public static readonly MIGRATING = 205;
	public static readonly STABLE = 206;
	public static readonly SHARDS = 207;
	public static readonly SLAVES = 208;
	public static readonly READONLY = 209;
	public static readonly READWRITE = 210;
	public static readonly FLUSHDB = 211;
	public static readonly SCRIPT = 212;
	public static readonly EVAL = 213;
	public static readonly EVALSHA = 214;
	public static readonly EXEC = 215;
	public static readonly WATCH = 216;
	public static readonly DISCARD = 217;
	public static readonly UNWATCH = 218;
	public static readonly MULTI = 219;
	public static readonly PFMERGE = 220;
	public static readonly PFADD = 221;
	public static readonly PFCOUNT = 222;
	public static readonly ECHO = 223;
	public static readonly PING = 224;
	public static readonly SAVE = 225;
	public static readonly SLOWLOG = 226;
	public static readonly LASTSAVE = 227;
	public static readonly CONFIG = 228;
	public static readonly CLIENT = 229;
	public static readonly SHUTDOWN = 230;
	public static readonly SYNC = 231;
	public static readonly ROLE = 232;
	public static readonly MONITOR = 233;
	public static readonly SLAVEOF = 234;
	public static readonly FLUSHALL = 235;
	public static readonly SELECT = 236;
	public static readonly QUIT = 237;
	public static readonly AUTH = 238;
	public static readonly DBSIZE = 239;
	public static readonly BGREWRITEAOF = 240;
	public static readonly TIME = 241;
	public static readonly INFO = 242;
	public static readonly BGSAVE = 243;
	public static readonly COMMAND = 244;
	public static readonly DEBUG = 245;
	public static readonly DB = 246;
	public static readonly NX = 247;
	public static readonly XX = 248;
	public static readonly GT = 249;
	public static readonly LT = 250;
	public static readonly ENCODING = 251;
	public static readonly FREQ = 252;
	public static readonly IDLETIME = 253;
	public static readonly REFCOUNT = 254;
	public static readonly ABSTTL = 255;
	public static readonly BY = 256;
	public static readonly ASC = 257;
	public static readonly DESC = 258;
	public static readonly ALPHA = 259;
	public static readonly STORE = 260;
	public static readonly REPLACE = 261;
	public static readonly EX = 262;
	public static readonly PX = 263;
	public static readonly EXAT = 264;
	public static readonly PXAT = 265;
	public static readonly LEN = 266;
	public static readonly IDX = 267;
	public static readonly MINMATCHLEN = 268;
	public static readonly WITHMATCHLEN = 269;
	public static readonly KEEPTTL = 270;
	public static readonly WITHSCORES = 271;
	public static readonly LIMIT = 272;
	public static readonly BEFORE = 273;
	public static readonly AFTER = 274;
	public static readonly FLUSH = 275;
	public static readonly RESETSTAT = 276;
	public static readonly REWRITE = 277;
	public static readonly PAUSE = 278;
	public static readonly SETNAME = 279;
	public static readonly GETNAME = 280;
	public static readonly LIST = 281;
	public static readonly NOSAVE = 282;
	public static readonly SLOTS = 283;
	public static readonly GETKEYS = 284;
	public static readonly COUNT = 285;
	public static readonly SEGFAULT = 286;
	public static readonly KILL = 287;
	public static readonly LOAD = 288;
	public static readonly WITHVALUES = 289;
	public static readonly MATCH = 290;
	public static readonly MIN = 291;
	public static readonly MAX = 292;
	public static readonly CH = 293;
	public static readonly WEIGHTS = 294;
	public static readonly AGGREGATE = 295;
	public static readonly SUM = 296;
	public static readonly BYSCORE = 297;
	public static readonly BYLEX = 298;
	public static readonly REV = 299;
	public static readonly LEFT = 300;
	public static readonly RIGHT = 301;
	public static readonly RANK = 302;
	public static readonly MAXLEN = 303;
	public static readonly ASYNC = 304;
	public static readonly HEX_NUM = 305;
	public static readonly OCT_NUM = 306;
	public static readonly BIT_NUM = 307;
	public static readonly INTEGER_NUM = 308;
	public static readonly DECIMAL_NUM = 309;
	public static readonly STRING = 310;
	public static readonly HOST = 311;
	public static readonly HOST_PORT = 312;
	public static readonly NAME_TOKEN = 313;
	public static readonly SEMI = 314;
	public static readonly RULE_program = 0;
	public static readonly RULE_sqlStatements = 1;
	public static readonly RULE_emptyStatement_ = 2;
	public static readonly RULE_keyName = 3;
	public static readonly RULE_fieldName = 4;
	public static readonly RULE_stringValue = 5;
	public static readonly RULE_intValue = 6;
	public static readonly RULE_floatValue = 7;
	public static readonly RULE_pattern = 8;
	public static readonly RULE_cursor = 9;
	public static readonly RULE_min = 10;
	public static readonly RULE_max = 11;
	public static readonly RULE_multiString = 12;
	public static readonly RULE_cout = 13;
	public static readonly RULE_start = 14;
	public static readonly RULE_end = 15;
	public static readonly RULE_port = 16;
	public static readonly RULE_keyAndString = 17;
	public static readonly RULE_intAndString = 18;
	public static readonly RULE_infoOpt = 19;
	public static readonly RULE_patternOpt = 20;
	public static readonly RULE_keyOpt = 21;
	public static readonly RULE_idletimeOpt = 22;
	public static readonly RULE_freqOpt = 23;
	public static readonly RULE_limitOpt = 24;
	public static readonly RULE_sortOpt = 25;
	public static readonly RULE_getsetOpt = 26;
	public static readonly RULE_lrOpt = 27;
	public static readonly RULE_rankOpt = 28;
	public static readonly RULE_countOpt = 29;
	public static readonly RULE_maxlenOpt = 30;
	public static readonly RULE_cmdCopy = 31;
	public static readonly RULE_cmdDel = 32;
	public static readonly RULE_cmdDump = 33;
	public static readonly RULE_cmdExists = 34;
	public static readonly RULE_cmdExpire = 35;
	public static readonly RULE_cmdExpireat = 36;
	public static readonly RULE_cmdExpireTime = 37;
	public static readonly RULE_cmdKeys = 38;
	public static readonly RULE_cmdMove = 39;
	public static readonly RULE_cmdObject = 40;
	public static readonly RULE_cmdPersist = 41;
	public static readonly RULE_cmdPexpire = 42;
	public static readonly RULE_cmdPexpireat = 43;
	public static readonly RULE_cmdPExpireTime = 44;
	public static readonly RULE_cmdTtl = 45;
	public static readonly RULE_cmdPttl = 46;
	public static readonly RULE_cmdRandomkey = 47;
	public static readonly RULE_cmdRename = 48;
	public static readonly RULE_cmdRenamenx = 49;
	public static readonly RULE_cmdRestore = 50;
	public static readonly RULE_cmdScan = 51;
	public static readonly RULE_cmdSort = 52;
	public static readonly RULE_cmdSortro = 53;
	public static readonly RULE_cmdTouch = 54;
	public static readonly RULE_cmdType = 55;
	public static readonly RULE_cmdUnlink = 56;
	public static readonly RULE_cmdWait = 57;
	public static readonly RULE_cmdAppend = 58;
	public static readonly RULE_cmdDecr = 59;
	public static readonly RULE_cmdDecrby = 60;
	public static readonly RULE_cmdGet = 61;
	public static readonly RULE_cmdGetdel = 62;
	public static readonly RULE_cmdGetex = 63;
	public static readonly RULE_cmdGetrange = 64;
	public static readonly RULE_cmdGetset = 65;
	public static readonly RULE_cmdGetbit = 66;
	public static readonly RULE_cmdInc = 67;
	public static readonly RULE_cmdLcs = 68;
	public static readonly RULE_cmdMget = 69;
	public static readonly RULE_cmdMset = 70;
	public static readonly RULE_cmdMsetnx = 71;
	public static readonly RULE_cmdSetex = 72;
	public static readonly RULE_cmdSet = 73;
	public static readonly RULE_cmdSetnx = 74;
	public static readonly RULE_cmdSetrange = 75;
	public static readonly RULE_cmdSetbit = 76;
	public static readonly RULE_cmdStrlen = 77;
	public static readonly RULE_cmdSubstr = 78;
	public static readonly RULE_cmdHdelMget = 79;
	public static readonly RULE_cmdHexistsGetKeysStrlen = 80;
	public static readonly RULE_cmdHgetallLenVals = 81;
	public static readonly RULE_cmdHmsetHset = 82;
	public static readonly RULE_cmdHincrby = 83;
	public static readonly RULE_cmdHrandfield = 84;
	public static readonly RULE_cmdHscan = 85;
	public static readonly RULE_cmdHsetnx = 86;
	public static readonly RULE_cmdBlmove = 87;
	public static readonly RULE_cmdLmpop = 88;
	public static readonly RULE_cmdBpop = 89;
	public static readonly RULE_cmdBrpoplpush = 90;
	public static readonly RULE_cmdLindex = 91;
	public static readonly RULE_cmdLinsert = 92;
	public static readonly RULE_cmdLlen = 93;
	public static readonly RULE_cmdLmove = 94;
	public static readonly RULE_cmdPop = 95;
	public static readonly RULE_cmdLpos = 96;
	public static readonly RULE_cmdPush = 97;
	public static readonly RULE_cmdLrangeTrim = 98;
	public static readonly RULE_cmdLremSet = 99;
	public static readonly RULE_cmdRpoplpush = 100;
	public static readonly RULE_cmdSadd = 101;
	public static readonly RULE_cmdScard = 102;
	public static readonly RULE_cmdSdiff = 103;
	public static readonly RULE_cmdSdiffstore = 104;
	public static readonly RULE_cmdSintercard = 105;
	public static readonly RULE_cmdSismember = 106;
	public static readonly RULE_cmdSmove = 107;
	public static readonly RULE_cmdSpop = 108;
	public static readonly RULE_cmdSscan = 109;
	public static readonly RULE_cmdBzmpop = 110;
	public static readonly RULE_cmdBzpopmax = 111;
	public static readonly RULE_cmdZadd = 112;
	public static readonly RULE_cmdZcard = 113;
	public static readonly RULE_cmdZcount = 114;
	public static readonly RULE_cmdZdiff = 115;
	public static readonly RULE_cmdZdiffstore = 116;
	public static readonly RULE_cmdZincrby = 117;
	public static readonly RULE_cmdZinter = 118;
	public static readonly RULE_cmdZintercard = 119;
	public static readonly RULE_cmdZinterstore = 120;
	public static readonly RULE_cmdZmpop = 121;
	public static readonly RULE_cmdZmscore = 122;
	public static readonly RULE_cmdZpopmax = 123;
	public static readonly RULE_cmdZrandmember = 124;
	public static readonly RULE_cmdZrange = 125;
	public static readonly RULE_cmdZrangebylex = 126;
	public static readonly RULE_cmdZrangebyscore = 127;
	public static readonly RULE_cmdZrangestore = 128;
	public static readonly RULE_cmdZrank = 129;
	public static readonly RULE_cmdZremrangebyrank = 130;
	public static readonly RULE_cmdZrevrange = 131;
	public static readonly RULE_cmdZrevrangebylex = 132;
	public static readonly RULE_cmdZscan = 133;
	public static readonly RULE_cmdZunion = 134;
	public static readonly RULE_cmdZunionstore = 135;
	public static readonly RULE_cmdScriptKill = 136;
	public static readonly RULE_cmdScriptLoad = 137;
	public static readonly RULE_cmdEval = 138;
	public static readonly RULE_cmdEvalsha = 139;
	public static readonly RULE_cmdScriptExists = 140;
	public static readonly RULE_cmdScriptFlush = 141;
	public static readonly RULE_cmdExec = 142;
	public static readonly RULE_cmdWatch = 143;
	public static readonly RULE_cmdDiscard = 144;
	public static readonly RULE_cmdUnwatch = 145;
	public static readonly RULE_cmdMulti = 146;
	public static readonly RULE_cmdPfmerge = 147;
	public static readonly RULE_cmdPfadd = 148;
	public static readonly RULE_cmdPfcount = 149;
	public static readonly RULE_cmdSsubscribe = 150;
	public static readonly RULE_cmdUnsubscribe = 151;
	public static readonly RULE_cmdPusubnumpat = 152;
	public static readonly RULE_cmdPusubnumsub = 153;
	public static readonly RULE_cmdPusubchannels = 154;
	public static readonly RULE_cmdPublish = 155;
	public static readonly RULE_cmdAsking = 156;
	public static readonly RULE_cmdReadonly = 157;
	public static readonly RULE_cmdReadwrite = 158;
	public static readonly RULE_cmdAddDelSlots = 159;
	public static readonly RULE_cmdCountKeysInSlot = 160;
	public static readonly RULE_cmdFailOver = 161;
	public static readonly RULE_cmdForget = 162;
	public static readonly RULE_cmdGetKeysInSlot = 163;
	public static readonly RULE_cmdClusterOrder = 164;
	public static readonly RULE_cmdKeySlot = 165;
	public static readonly RULE_cmdMeet = 166;
	public static readonly RULE_cmdReplicaesSlave = 167;
	public static readonly RULE_cmdReset = 168;
	public static readonly RULE_cmdSetSlot = 169;
	public static readonly RULE_cmdFlushdb = 170;
	public static readonly RULE_cmdEcho = 171;
	public static readonly RULE_cmdSave = 172;
	public static readonly RULE_cmdSlowlog = 173;
	public static readonly RULE_cmdLastsave = 174;
	public static readonly RULE_cmdConfig = 175;
	public static readonly RULE_cmdClient = 176;
	public static readonly RULE_cmdShutdown = 177;
	public static readonly RULE_cmdSync = 178;
	public static readonly RULE_cmdRole = 179;
	public static readonly RULE_cmdMonitor = 180;
	public static readonly RULE_cmdSlaveof = 181;
	public static readonly RULE_cmdFlushall = 182;
	public static readonly RULE_cmdSelect = 183;
	public static readonly RULE_cmdPing = 184;
	public static readonly RULE_cmdQuit = 185;
	public static readonly RULE_cmdAuth = 186;
	public static readonly RULE_cmdDbsize = 187;
	public static readonly RULE_cmdBgrewriteaof = 188;
	public static readonly RULE_cmdTime = 189;
	public static readonly RULE_cmdInfo = 190;
	public static readonly RULE_cmdBgsave = 191;
	public static readonly RULE_cmdCmd = 192;
	public static readonly RULE_cmdCmdx = 193;
	public static readonly RULE_cmdDebug = 194;
	public static readonly RULE_sqlStatement = 195;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "sqlStatements", "emptyStatement_", "keyName", "fieldName", 
		"stringValue", "intValue", "floatValue", "pattern", "cursor", "min", "max", 
		"multiString", "cout", "start", "end", "port", "keyAndString", "intAndString", 
		"infoOpt", "patternOpt", "keyOpt", "idletimeOpt", "freqOpt", "limitOpt", 
		"sortOpt", "getsetOpt", "lrOpt", "rankOpt", "countOpt", "maxlenOpt", "cmdCopy", 
		"cmdDel", "cmdDump", "cmdExists", "cmdExpire", "cmdExpireat", "cmdExpireTime", 
		"cmdKeys", "cmdMove", "cmdObject", "cmdPersist", "cmdPexpire", "cmdPexpireat", 
		"cmdPExpireTime", "cmdTtl", "cmdPttl", "cmdRandomkey", "cmdRename", "cmdRenamenx", 
		"cmdRestore", "cmdScan", "cmdSort", "cmdSortro", "cmdTouch", "cmdType", 
		"cmdUnlink", "cmdWait", "cmdAppend", "cmdDecr", "cmdDecrby", "cmdGet", 
		"cmdGetdel", "cmdGetex", "cmdGetrange", "cmdGetset", "cmdGetbit", "cmdInc", 
		"cmdLcs", "cmdMget", "cmdMset", "cmdMsetnx", "cmdSetex", "cmdSet", "cmdSetnx", 
		"cmdSetrange", "cmdSetbit", "cmdStrlen", "cmdSubstr", "cmdHdelMget", "cmdHexistsGetKeysStrlen", 
		"cmdHgetallLenVals", "cmdHmsetHset", "cmdHincrby", "cmdHrandfield", "cmdHscan", 
		"cmdHsetnx", "cmdBlmove", "cmdLmpop", "cmdBpop", "cmdBrpoplpush", "cmdLindex", 
		"cmdLinsert", "cmdLlen", "cmdLmove", "cmdPop", "cmdLpos", "cmdPush", "cmdLrangeTrim", 
		"cmdLremSet", "cmdRpoplpush", "cmdSadd", "cmdScard", "cmdSdiff", "cmdSdiffstore", 
		"cmdSintercard", "cmdSismember", "cmdSmove", "cmdSpop", "cmdSscan", "cmdBzmpop", 
		"cmdBzpopmax", "cmdZadd", "cmdZcard", "cmdZcount", "cmdZdiff", "cmdZdiffstore", 
		"cmdZincrby", "cmdZinter", "cmdZintercard", "cmdZinterstore", "cmdZmpop", 
		"cmdZmscore", "cmdZpopmax", "cmdZrandmember", "cmdZrange", "cmdZrangebylex", 
		"cmdZrangebyscore", "cmdZrangestore", "cmdZrank", "cmdZremrangebyrank", 
		"cmdZrevrange", "cmdZrevrangebylex", "cmdZscan", "cmdZunion", "cmdZunionstore", 
		"cmdScriptKill", "cmdScriptLoad", "cmdEval", "cmdEvalsha", "cmdScriptExists", 
		"cmdScriptFlush", "cmdExec", "cmdWatch", "cmdDiscard", "cmdUnwatch", "cmdMulti", 
		"cmdPfmerge", "cmdPfadd", "cmdPfcount", "cmdSsubscribe", "cmdUnsubscribe", 
		"cmdPusubnumpat", "cmdPusubnumsub", "cmdPusubchannels", "cmdPublish", 
		"cmdAsking", "cmdReadonly", "cmdReadwrite", "cmdAddDelSlots", "cmdCountKeysInSlot", 
		"cmdFailOver", "cmdForget", "cmdGetKeysInSlot", "cmdClusterOrder", "cmdKeySlot", 
		"cmdMeet", "cmdReplicaesSlave", "cmdReset", "cmdSetSlot", "cmdFlushdb", 
		"cmdEcho", "cmdSave", "cmdSlowlog", "cmdLastsave", "cmdConfig", "cmdClient", 
		"cmdShutdown", "cmdSync", "cmdRole", "cmdMonitor", "cmdSlaveof", "cmdFlushall", 
		"cmdSelect", "cmdPing", "cmdQuit", "cmdAuth", "cmdDbsize", "cmdBgrewriteaof", 
		"cmdTime", "cmdInfo", "cmdBgsave", "cmdCmd", "cmdCmdx", "cmdDebug", "sqlStatement",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, undefined, undefined, undefined, undefined, "'COPY'", "'DEL'", 
		"'DUMP'", "'EXISTS'", "'EXPIRE'", "'EXPIREAT'", "'EXPIRETIME'", "'KEYS'", 
		"'MOVE'", "'OBJECT'", "'PERSIST'", "'PEXPIRE'", "'PEXPIREAT'", "'PEXPIRETIME'", 
		"'TTL'", "'PTTL'", "'RANDOMKEY'", "'RENAME'", "'RENAMENX'", "'RESTORE'", 
		"'SCAN'", "'SORT'", "'SORT_RO'", "'TOUCH'", "'TYPE'", "'UNLINK'", "'WAIT'", 
		"'APPEND'", "'DECR'", "'DECRBY'", "'GET'", "'GETDEL'", "'GETEX'", "'GETRANGE'", 
		"'GETSET'", "'GETBIT'", "'INCR'", "'INCRBY'", "'INCRBYFLOAT'", "'LCS'", 
		"'MGET'", "'MSET'", "'MSETNX'", "'SETEX'", "'PSETEX'", "'SET'", "'SETNX'", 
		"'SETRANGE'", "'SETBIT'", "'STRLEN'", "'SUBSTR'", "'HDEL'", "'HEXISTS'", 
		"'HGET'", "'HGETALL'", "'HINCRBY'", "'HINCRBYFLOAT'", "'HKEYS'", "'HLEN'", 
		"'HMGET'", "'HMSET'", "'HRANDFIELD'", "'HSCAN'", "'HSET'", "'HSETNX'", 
		"'HSTRLEN'", "'HVALS'", "'BLMOVE'", "'BLMPOP'", "'BLPOP'", "'BRPOP'", 
		"'BRPOPLPUSH'", "'LINDEX'", "'LINSERT'", "'LLEN'", "'LMOVE'", "'LMPOP'", 
		"'LPOP'", "'LPOS'", "'LPUSH'", "'LPUSHX'", "'LRANGE'", "'LREM'", "'LSET'", 
		"'LTRIM'", "'RPOP'", "'RPOPLPUSH'", "'RPUSH'", "'RPUSHX'", "'SADD'", "'SCARD'", 
		"'SDIFF'", "'SDIFFSTORE'", "'SINTER'", "'SINTERCARD'", "'SINTERSTORE'", 
		"'SISMEMBER'", "'SMEMBERS'", "'SMISMEMBER'", "'SMOVE'", "'SPOP'", "'SRANDMEMBER'", 
		"'SREM'", "'SSCAN'", "'SUNION'", "'SUNIONSTORE'", "'BZMPOP'", "'BZPOPMAX'", 
		"'BZPOPMIN'", "'ZADD'", "'ZCARD'", "'ZCOUNT'", "'ZDIFF'", "'ZDIFFSTORE'", 
		"'ZINCRBY'", "'ZINTER'", "'ZINTERCARD'", "'ZINTERSTORE'", "'ZLEXCOUNT'", 
		"'ZMPOP'", "'ZMSCORE'", "'ZPOPMAX'", "'ZPOPMIN'", "'ZRANDMEMBER'", "'ZRANGE'", 
		"'ZRANGEBYLEX'", "'ZRANGEBYSCORE'", "'ZRANGESTORE'", "'ZRANK'", "'ZREM'", 
		"'ZREMRANGEBYLEX'", "'ZREMRANGEBYRANK'", "'ZREMRANGEBYSCORE'", "'ZREVRANGE'", 
		"'ZREVRANGEBYLEX'", "'ZREVRANGEBYSCORE'", "'ZREVRANK'", "'ZSCAN'", "'ZSCORE'", 
		"'ZUNION'", "'ZUNIONSTORE'", "'PSUBSCRIBE'", "'PUBSUB'", "'PUBLISH'", 
		"'CHANNELS'", "'NUMSUB'", "'NUMPAT'", "'SHARDCHANNELS'", "'SHARDNUMSUB'", 
		"'PUNSUBSCRIBE'", "'SPUBLISH'", "'SUBSCRIBE'", "'UNSUBSCRIBE'", "'SSUBSCRIBE'", 
		"'SUNSUBSCRIBE'", "'SERVER'", "'CLIENTS'", "'MEMORY'", "'PERSISTENCE'", 
		"'STATS'", "'REPLICATION'", "'CPU'", "'COMMANDSTATS'", "'LATENCYSTATS'", 
		"'SENTINEL'", "'MODULES'", "'KEYSPACE'", "'ERRORSTATS'", "'ALL'", "'DEFAULT'", 
		"'EVERYTHING'", "'ASKING'", "'CLUSTER'", "'ADDSLOTS'", "'DELSLOTS'", "'ADDSLOTSRANGE'", 
		"'BUMPEPOCH'", "'COUNTKEYSINSLOT'", "'DELSLOTSRANGE'", "'FAILOVER'", "'FLUSHSLOTS'", 
		"'FORGET'", "'GETKEYSINSLOT'", "'KEYSLOT'", "'LINKS'", "'MEET'", "'MYID'", 
		"'MYSHARDID'", "'FORCE'", "'TAKEOVER'", "'NODE'", "'NODES'", "'REPLICAS'", 
		"'REPLICATE'", "'RESET'", "'HARD'", "'SOFT'", "'SAVECONFIG'", "'SETSLOT'", 
		"'IMPORTING'", "'MIGRATING'", "'STABLE'", "'SHARDS'", "'SLAVES'", "'READONLY'", 
		"'READWRITE'", "'FLUSHDB'", "'SCRIPT'", "'EVAL'", "'EVALSHA'", "'EXEC'", 
		"'WATCH'", "'DISCARD'", "'UNWATCH'", "'MULTI'", "'PFMERGE'", "'PFADD'", 
		"'PFCOUNT'", "'ECHO'", "'PING'", "'SAVE'", "'SLOWLOG'", "'LASTSAVE'", 
		"'CONFIG'", "'CLIENT'", "'SHUTDOWN'", "'SYNC'", "'ROLE'", "'MONITOR'", 
		"'SLAVEOF'", "'FLUSHALL'", "'SELECT'", "'QUIT'", "'AUTH'", "'DBSIZE'", 
		"'BGREWRITEAOF'", "'TIME'", "'INFO'", "'BGSAVE'", "'COMMAND'", "'DEBUG'", 
		"'DB'", "'NX'", "'XX'", "'GT'", "'LT'", "'ENCODING'", "'FREQ'", "'IDLETIME'", 
		"'REFCOUNT'", "'ABSTTL'", "'BY'", "'ASC'", "'DESC'", "'ALPHA'", "'STORE'", 
		"'REPLACE'", "'EX'", "'PX'", "'EXAT'", "'PXAT'", "'LEN'", "'IDX'", "'MINMATCHLEN'", 
		"'WITHMATCHLEN'", "'KEEPTTL'", "'WITHSCORES'", "'LIMIT'", "'BEFORE'", 
		"'AFTER'", "'FLUSH'", "'RESETSTAT'", "'REWRITE'", "'PAUSE'", "'SETNAME'", 
		"'GETNAME'", "'LIST'", "'NOSAVE'", "'SLOTS'", "'GETKEYS'", "'COUNT'", 
		"'SEGFAULT'", "'KILL'", "'LOAD'", "'WITHVALUES'", "'MATCH'", "'MIN'", 
		"'MAX'", "'CH'", "'WEIGHTS'", "'AGGREGATE'", "'SUM'", "'BYSCORE'", "'BYLEX'", 
		"'REV'", "'LEFT'", "'RIGHT'", "'RANK'", "'MAXLEN'", "'ASYNC'",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "SPACE", "SPEC_MYSQL_COMMENT", "COMMENT_INPUT", "LINE_COMMENT", 
		"COPY", "DEL", "DUMP", "EXISTS", "EXPIRE", "EXPIREAT", "EXPIRETIME", "KEYS", 
		"MOVE", "OBJECT", "PERSIST", "PEXPIRE", "PEXPIREAT", "PEXPIRETIME", "TTL", 
		"PTTL", "RANDOMKEY", "RENAME", "RENAMENX", "RESTORE", "SCAN", "SORT", 
		"SORT_RO", "TOUCH", "TYPE", "UNLINK", "WAIT", "APPEND", "DECR", "DECRBY", 
		"GET", "GETDEL", "GETEX", "GETRANGE", "GETSET", "GETBIT", "INCR", "INCRBY", 
		"INCRBYFLOAT", "LCS", "MGET", "MSET", "MSETNX", "SETEX", "PSETEX", "SET", 
		"SETNX", "SETRANGE", "SETBIT", "STRLEN", "SUBSTR", "HDEL", "HEXISTS", 
		"HGET", "HGETALL", "HINCRBY", "HINCRBYFLOAT", "HKEYS", "HLEN", "HMGET", 
		"HMSET", "HRANDFIELD", "HSCAN", "HSET", "HSETNX", "HSTRLEN", "HVALS", 
		"BLMOVE", "BLMPOP", "BLPOP", "BRPOP", "BRPOPLPUSH", "LINDEX", "LINSERT", 
		"LLEN", "LMOVE", "LMPOP", "LPOP", "LPOS", "LPUSH", "LPUSHX", "LRANGE", 
		"LREM", "LSET", "LTRIM", "RPOP", "RPOPLPUSH", "RPUSH", "RPUSHX", "SADD", 
		"SCARD", "SDIFF", "SDIFFSTORE", "SINTER", "SINTERCARD", "SINTERSTORE", 
		"SISMEMBER", "SMEMBERS", "SMISMEMBER", "SMOVE", "SPOP", "SRANDMEMBER", 
		"SREM", "SSCAN", "SUNION", "SUNIONSTORE", "BZMPOP", "BZPOPMAX", "BZPOPMIN", 
		"ZADD", "ZCARD", "ZCOUNT", "ZDIFF", "ZDIFFSTORE", "ZINCRBY", "ZINTER", 
		"ZINTERCARD", "ZINTERSTORE", "ZLEXCOUNT", "ZMPOP", "ZMSCORE", "ZPOPMAX", 
		"ZPOPMIN", "ZRANDMEMBER", "ZRANGE", "ZRANGEBYLEX", "ZRANGEBYSCORE", "ZRANGESTORE", 
		"ZRANK", "ZREM", "ZREMRANGEBYLEX", "ZREMRANGEBYRANK", "ZREMRANGEBYSCORE", 
		"ZREVRANGE", "ZREVRANGEBYLEX", "ZREVRANGEBYSCORE", "ZREVRANK", "ZSCAN", 
		"ZSCORE", "ZUNION", "ZUNIONSTORE", "PSUBSCRIBE", "PUBSUB", "PUBLISH", 
		"CHANNELS", "NUMSUB", "NUMPAT", "SHARDCHANNELS", "SHARDNUMSUB", "PUNSUBSCRIBE", 
		"SPUBLISH", "SUBSCRIBE", "UNSUBSCRIBE", "SSUBSCRIBE", "SUNSUBSCRIBE", 
		"SERVER", "CLIENTS", "MEMORY", "PERSISTENCE", "STATS", "REPLICATION", 
		"CPU", "COMMANDSTATS", "LATENCYSTATS", "SENTINEL", "MODULES", "KEYSPACE", 
		"ERRORSTATS", "ALL", "DEFAULT", "EVERYTHING", "ASKING", "CLUSTER", "ADDSLOTS", 
		"DELSLOTS", "ADDSLOTSRANGE", "BUMPEPOCH", "COUNTKEYSINSLOT", "DELSLOTSRANGE", 
		"FAILOVER", "FLUSHSLOTS", "FORGET", "GETKEYSINSLOT", "KEYSLOT", "LINKS", 
		"MEET", "MYID", "MYSHARDID", "FORCE", "TAKEOVER", "NODE", "NODES", "REPLICAS", 
		"REPLICATE", "RESET", "HARD", "SOFT", "SAVECONFIG", "SETSLOT", "IMPORTING", 
		"MIGRATING", "STABLE", "SHARDS", "SLAVES", "READONLY", "READWRITE", "FLUSHDB", 
		"SCRIPT", "EVAL", "EVALSHA", "EXEC", "WATCH", "DISCARD", "UNWATCH", "MULTI", 
		"PFMERGE", "PFADD", "PFCOUNT", "ECHO", "PING", "SAVE", "SLOWLOG", "LASTSAVE", 
		"CONFIG", "CLIENT", "SHUTDOWN", "SYNC", "ROLE", "MONITOR", "SLAVEOF", 
		"FLUSHALL", "SELECT", "QUIT", "AUTH", "DBSIZE", "BGREWRITEAOF", "TIME", 
		"INFO", "BGSAVE", "COMMAND", "DEBUG", "DB", "NX", "XX", "GT", "LT", "ENCODING", 
		"FREQ", "IDLETIME", "REFCOUNT", "ABSTTL", "BY", "ASC", "DESC", "ALPHA", 
		"STORE", "REPLACE", "EX", "PX", "EXAT", "PXAT", "LEN", "IDX", "MINMATCHLEN", 
		"WITHMATCHLEN", "KEEPTTL", "WITHSCORES", "LIMIT", "BEFORE", "AFTER", "FLUSH", 
		"RESETSTAT", "REWRITE", "PAUSE", "SETNAME", "GETNAME", "LIST", "NOSAVE", 
		"SLOTS", "GETKEYS", "COUNT", "SEGFAULT", "KILL", "LOAD", "WITHVALUES", 
		"MATCH", "MIN", "MAX", "CH", "WEIGHTS", "AGGREGATE", "SUM", "BYSCORE", 
		"BYLEX", "REV", "LEFT", "RIGHT", "RANK", "MAXLEN", "ASYNC", "HEX_NUM", 
		"OCT_NUM", "BIT_NUM", "INTEGER_NUM", "DECIMAL_NUM", "STRING", "HOST", 
		"HOST_PORT", "NAME_TOKEN", "SEMI",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(RedisSqlParser._LITERAL_NAMES, RedisSqlParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return RedisSqlParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "RedisSqlParser.g4"; }

	// @Override
	public get ruleNames(): string[] { return RedisSqlParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return RedisSqlParser._serializedATN; }

	protected createFailedPredicateException(predicate?: string, message?: string): FailedPredicateException {
		return new FailedPredicateException(this, predicate, message);
	}

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(RedisSqlParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, RedisSqlParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 393;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << RedisSqlParser.COPY) | (1 << RedisSqlParser.DEL) | (1 << RedisSqlParser.DUMP) | (1 << RedisSqlParser.EXISTS) | (1 << RedisSqlParser.EXPIRE) | (1 << RedisSqlParser.EXPIREAT) | (1 << RedisSqlParser.EXPIRETIME) | (1 << RedisSqlParser.KEYS) | (1 << RedisSqlParser.MOVE) | (1 << RedisSqlParser.OBJECT) | (1 << RedisSqlParser.PERSIST) | (1 << RedisSqlParser.PEXPIRE) | (1 << RedisSqlParser.PEXPIREAT) | (1 << RedisSqlParser.PEXPIRETIME) | (1 << RedisSqlParser.TTL) | (1 << RedisSqlParser.PTTL) | (1 << RedisSqlParser.RANDOMKEY) | (1 << RedisSqlParser.RENAME) | (1 << RedisSqlParser.RENAMENX) | (1 << RedisSqlParser.RESTORE) | (1 << RedisSqlParser.SCAN) | (1 << RedisSqlParser.SORT) | (1 << RedisSqlParser.SORT_RO) | (1 << RedisSqlParser.TOUCH) | (1 << RedisSqlParser.TYPE) | (1 << RedisSqlParser.UNLINK) | (1 << RedisSqlParser.WAIT))) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & ((1 << (RedisSqlParser.APPEND - 32)) | (1 << (RedisSqlParser.DECR - 32)) | (1 << (RedisSqlParser.DECRBY - 32)) | (1 << (RedisSqlParser.GET - 32)) | (1 << (RedisSqlParser.GETDEL - 32)) | (1 << (RedisSqlParser.GETEX - 32)) | (1 << (RedisSqlParser.GETRANGE - 32)) | (1 << (RedisSqlParser.GETSET - 32)) | (1 << (RedisSqlParser.GETBIT - 32)) | (1 << (RedisSqlParser.INCR - 32)) | (1 << (RedisSqlParser.INCRBY - 32)) | (1 << (RedisSqlParser.INCRBYFLOAT - 32)) | (1 << (RedisSqlParser.LCS - 32)) | (1 << (RedisSqlParser.MGET - 32)) | (1 << (RedisSqlParser.MSET - 32)) | (1 << (RedisSqlParser.MSETNX - 32)) | (1 << (RedisSqlParser.SETEX - 32)) | (1 << (RedisSqlParser.PSETEX - 32)) | (1 << (RedisSqlParser.SET - 32)) | (1 << (RedisSqlParser.SETNX - 32)) | (1 << (RedisSqlParser.SETRANGE - 32)) | (1 << (RedisSqlParser.SETBIT - 32)) | (1 << (RedisSqlParser.STRLEN - 32)) | (1 << (RedisSqlParser.SUBSTR - 32)) | (1 << (RedisSqlParser.HDEL - 32)) | (1 << (RedisSqlParser.HEXISTS - 32)) | (1 << (RedisSqlParser.HGET - 32)) | (1 << (RedisSqlParser.HGETALL - 32)) | (1 << (RedisSqlParser.HINCRBY - 32)) | (1 << (RedisSqlParser.HINCRBYFLOAT - 32)) | (1 << (RedisSqlParser.HKEYS - 32)) | (1 << (RedisSqlParser.HLEN - 32)))) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & ((1 << (RedisSqlParser.HMGET - 64)) | (1 << (RedisSqlParser.HMSET - 64)) | (1 << (RedisSqlParser.HRANDFIELD - 64)) | (1 << (RedisSqlParser.HSCAN - 64)) | (1 << (RedisSqlParser.HSET - 64)) | (1 << (RedisSqlParser.HSETNX - 64)) | (1 << (RedisSqlParser.HSTRLEN - 64)) | (1 << (RedisSqlParser.HVALS - 64)) | (1 << (RedisSqlParser.BLMOVE - 64)) | (1 << (RedisSqlParser.BLMPOP - 64)) | (1 << (RedisSqlParser.BLPOP - 64)) | (1 << (RedisSqlParser.BRPOP - 64)) | (1 << (RedisSqlParser.BRPOPLPUSH - 64)) | (1 << (RedisSqlParser.LINDEX - 64)) | (1 << (RedisSqlParser.LINSERT - 64)) | (1 << (RedisSqlParser.LLEN - 64)) | (1 << (RedisSqlParser.LMOVE - 64)) | (1 << (RedisSqlParser.LMPOP - 64)) | (1 << (RedisSqlParser.LPOP - 64)) | (1 << (RedisSqlParser.LPOS - 64)) | (1 << (RedisSqlParser.LPUSH - 64)) | (1 << (RedisSqlParser.LPUSHX - 64)) | (1 << (RedisSqlParser.LRANGE - 64)) | (1 << (RedisSqlParser.LREM - 64)) | (1 << (RedisSqlParser.LSET - 64)) | (1 << (RedisSqlParser.LTRIM - 64)) | (1 << (RedisSqlParser.RPOP - 64)) | (1 << (RedisSqlParser.RPOPLPUSH - 64)) | (1 << (RedisSqlParser.RPUSH - 64)) | (1 << (RedisSqlParser.RPUSHX - 64)) | (1 << (RedisSqlParser.SADD - 64)) | (1 << (RedisSqlParser.SCARD - 64)))) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (RedisSqlParser.SDIFF - 96)) | (1 << (RedisSqlParser.SDIFFSTORE - 96)) | (1 << (RedisSqlParser.SINTER - 96)) | (1 << (RedisSqlParser.SINTERCARD - 96)) | (1 << (RedisSqlParser.SINTERSTORE - 96)) | (1 << (RedisSqlParser.SISMEMBER - 96)) | (1 << (RedisSqlParser.SMEMBERS - 96)) | (1 << (RedisSqlParser.SMISMEMBER - 96)) | (1 << (RedisSqlParser.SMOVE - 96)) | (1 << (RedisSqlParser.SPOP - 96)) | (1 << (RedisSqlParser.SRANDMEMBER - 96)) | (1 << (RedisSqlParser.SREM - 96)) | (1 << (RedisSqlParser.SSCAN - 96)) | (1 << (RedisSqlParser.SUNION - 96)) | (1 << (RedisSqlParser.SUNIONSTORE - 96)) | (1 << (RedisSqlParser.BZMPOP - 96)) | (1 << (RedisSqlParser.BZPOPMAX - 96)) | (1 << (RedisSqlParser.BZPOPMIN - 96)) | (1 << (RedisSqlParser.ZADD - 96)) | (1 << (RedisSqlParser.ZCARD - 96)) | (1 << (RedisSqlParser.ZCOUNT - 96)) | (1 << (RedisSqlParser.ZDIFF - 96)) | (1 << (RedisSqlParser.ZDIFFSTORE - 96)) | (1 << (RedisSqlParser.ZINCRBY - 96)) | (1 << (RedisSqlParser.ZINTER - 96)) | (1 << (RedisSqlParser.ZINTERCARD - 96)) | (1 << (RedisSqlParser.ZINTERSTORE - 96)) | (1 << (RedisSqlParser.ZLEXCOUNT - 96)) | (1 << (RedisSqlParser.ZMPOP - 96)) | (1 << (RedisSqlParser.ZMSCORE - 96)) | (1 << (RedisSqlParser.ZPOPMAX - 96)) | (1 << (RedisSqlParser.ZPOPMIN - 96)))) !== 0) || ((((_la - 128)) & ~0x1F) === 0 && ((1 << (_la - 128)) & ((1 << (RedisSqlParser.ZRANDMEMBER - 128)) | (1 << (RedisSqlParser.ZRANGE - 128)) | (1 << (RedisSqlParser.ZRANGEBYLEX - 128)) | (1 << (RedisSqlParser.ZRANGEBYSCORE - 128)) | (1 << (RedisSqlParser.ZRANGESTORE - 128)) | (1 << (RedisSqlParser.ZRANK - 128)) | (1 << (RedisSqlParser.ZREM - 128)) | (1 << (RedisSqlParser.ZREMRANGEBYLEX - 128)) | (1 << (RedisSqlParser.ZREMRANGEBYRANK - 128)) | (1 << (RedisSqlParser.ZREMRANGEBYSCORE - 128)) | (1 << (RedisSqlParser.ZREVRANGE - 128)) | (1 << (RedisSqlParser.ZREVRANGEBYLEX - 128)) | (1 << (RedisSqlParser.ZREVRANGEBYSCORE - 128)) | (1 << (RedisSqlParser.ZREVRANK - 128)) | (1 << (RedisSqlParser.ZSCAN - 128)) | (1 << (RedisSqlParser.ZSCORE - 128)) | (1 << (RedisSqlParser.ZUNION - 128)) | (1 << (RedisSqlParser.ZUNIONSTORE - 128)) | (1 << (RedisSqlParser.PSUBSCRIBE - 128)) | (1 << (RedisSqlParser.PUBSUB - 128)) | (1 << (RedisSqlParser.PUBLISH - 128)) | (1 << (RedisSqlParser.PUNSUBSCRIBE - 128)) | (1 << (RedisSqlParser.SUBSCRIBE - 128)) | (1 << (RedisSqlParser.UNSUBSCRIBE - 128)) | (1 << (RedisSqlParser.SSUBSCRIBE - 128)) | (1 << (RedisSqlParser.SUNSUBSCRIBE - 128)))) !== 0) || _la === RedisSqlParser.ASKING || _la === RedisSqlParser.CLUSTER || ((((_la - 209)) & ~0x1F) === 0 && ((1 << (_la - 209)) & ((1 << (RedisSqlParser.READONLY - 209)) | (1 << (RedisSqlParser.READWRITE - 209)) | (1 << (RedisSqlParser.FLUSHDB - 209)) | (1 << (RedisSqlParser.SCRIPT - 209)) | (1 << (RedisSqlParser.EVAL - 209)) | (1 << (RedisSqlParser.EVALSHA - 209)) | (1 << (RedisSqlParser.EXEC - 209)) | (1 << (RedisSqlParser.WATCH - 209)) | (1 << (RedisSqlParser.DISCARD - 209)) | (1 << (RedisSqlParser.UNWATCH - 209)) | (1 << (RedisSqlParser.MULTI - 209)) | (1 << (RedisSqlParser.PFMERGE - 209)) | (1 << (RedisSqlParser.PFADD - 209)) | (1 << (RedisSqlParser.PFCOUNT - 209)) | (1 << (RedisSqlParser.ECHO - 209)) | (1 << (RedisSqlParser.PING - 209)) | (1 << (RedisSqlParser.SAVE - 209)) | (1 << (RedisSqlParser.SLOWLOG - 209)) | (1 << (RedisSqlParser.LASTSAVE - 209)) | (1 << (RedisSqlParser.CONFIG - 209)) | (1 << (RedisSqlParser.CLIENT - 209)) | (1 << (RedisSqlParser.SHUTDOWN - 209)) | (1 << (RedisSqlParser.SYNC - 209)) | (1 << (RedisSqlParser.ROLE - 209)) | (1 << (RedisSqlParser.MONITOR - 209)) | (1 << (RedisSqlParser.SLAVEOF - 209)) | (1 << (RedisSqlParser.FLUSHALL - 209)) | (1 << (RedisSqlParser.SELECT - 209)) | (1 << (RedisSqlParser.QUIT - 209)) | (1 << (RedisSqlParser.AUTH - 209)) | (1 << (RedisSqlParser.DBSIZE - 209)) | (1 << (RedisSqlParser.BGREWRITEAOF - 209)))) !== 0) || ((((_la - 241)) & ~0x1F) === 0 && ((1 << (_la - 241)) & ((1 << (RedisSqlParser.TIME - 241)) | (1 << (RedisSqlParser.INFO - 241)) | (1 << (RedisSqlParser.BGSAVE - 241)) | (1 << (RedisSqlParser.COMMAND - 241)) | (1 << (RedisSqlParser.DEBUG - 241)))) !== 0) || ((((_la - 276)) & ~0x1F) === 0 && ((1 << (_la - 276)) & ((1 << (RedisSqlParser.RESETSTAT - 276)) | (1 << (RedisSqlParser.REWRITE - 276)) | (1 << (RedisSqlParser.SETNAME - 276)) | (1 << (RedisSqlParser.GETNAME - 276)) | (1 << (RedisSqlParser.LIST - 276)) | (1 << (RedisSqlParser.GETKEYS - 276)) | (1 << (RedisSqlParser.COUNT - 276)) | (1 << (RedisSqlParser.KILL - 276)))) !== 0) || _la === RedisSqlParser.SEMI) {
				{
				this.state = 392;
				this.sqlStatements();
				}
			}

			this.state = 395;
			this.match(RedisSqlParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlStatements(): SqlStatementsContext {
		let _localctx: SqlStatementsContext = new SqlStatementsContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, RedisSqlParser.RULE_sqlStatements);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 401;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
				if (_alt === 1) {
					{
					this.state = 399;
					this._errHandler.sync(this);
					switch (this._input.LA(1)) {
					case RedisSqlParser.COPY:
					case RedisSqlParser.DEL:
					case RedisSqlParser.DUMP:
					case RedisSqlParser.EXISTS:
					case RedisSqlParser.EXPIRE:
					case RedisSqlParser.EXPIREAT:
					case RedisSqlParser.EXPIRETIME:
					case RedisSqlParser.KEYS:
					case RedisSqlParser.MOVE:
					case RedisSqlParser.OBJECT:
					case RedisSqlParser.PERSIST:
					case RedisSqlParser.PEXPIRE:
					case RedisSqlParser.PEXPIREAT:
					case RedisSqlParser.PEXPIRETIME:
					case RedisSqlParser.TTL:
					case RedisSqlParser.PTTL:
					case RedisSqlParser.RANDOMKEY:
					case RedisSqlParser.RENAME:
					case RedisSqlParser.RENAMENX:
					case RedisSqlParser.RESTORE:
					case RedisSqlParser.SCAN:
					case RedisSqlParser.SORT:
					case RedisSqlParser.SORT_RO:
					case RedisSqlParser.TOUCH:
					case RedisSqlParser.TYPE:
					case RedisSqlParser.UNLINK:
					case RedisSqlParser.WAIT:
					case RedisSqlParser.APPEND:
					case RedisSqlParser.DECR:
					case RedisSqlParser.DECRBY:
					case RedisSqlParser.GET:
					case RedisSqlParser.GETDEL:
					case RedisSqlParser.GETEX:
					case RedisSqlParser.GETRANGE:
					case RedisSqlParser.GETSET:
					case RedisSqlParser.GETBIT:
					case RedisSqlParser.INCR:
					case RedisSqlParser.INCRBY:
					case RedisSqlParser.INCRBYFLOAT:
					case RedisSqlParser.LCS:
					case RedisSqlParser.MGET:
					case RedisSqlParser.MSET:
					case RedisSqlParser.MSETNX:
					case RedisSqlParser.SETEX:
					case RedisSqlParser.PSETEX:
					case RedisSqlParser.SET:
					case RedisSqlParser.SETNX:
					case RedisSqlParser.SETRANGE:
					case RedisSqlParser.SETBIT:
					case RedisSqlParser.STRLEN:
					case RedisSqlParser.SUBSTR:
					case RedisSqlParser.HDEL:
					case RedisSqlParser.HEXISTS:
					case RedisSqlParser.HGET:
					case RedisSqlParser.HGETALL:
					case RedisSqlParser.HINCRBY:
					case RedisSqlParser.HINCRBYFLOAT:
					case RedisSqlParser.HKEYS:
					case RedisSqlParser.HLEN:
					case RedisSqlParser.HMGET:
					case RedisSqlParser.HMSET:
					case RedisSqlParser.HRANDFIELD:
					case RedisSqlParser.HSCAN:
					case RedisSqlParser.HSET:
					case RedisSqlParser.HSETNX:
					case RedisSqlParser.HSTRLEN:
					case RedisSqlParser.HVALS:
					case RedisSqlParser.BLMOVE:
					case RedisSqlParser.BLMPOP:
					case RedisSqlParser.BLPOP:
					case RedisSqlParser.BRPOP:
					case RedisSqlParser.BRPOPLPUSH:
					case RedisSqlParser.LINDEX:
					case RedisSqlParser.LINSERT:
					case RedisSqlParser.LLEN:
					case RedisSqlParser.LMOVE:
					case RedisSqlParser.LMPOP:
					case RedisSqlParser.LPOP:
					case RedisSqlParser.LPOS:
					case RedisSqlParser.LPUSH:
					case RedisSqlParser.LPUSHX:
					case RedisSqlParser.LRANGE:
					case RedisSqlParser.LREM:
					case RedisSqlParser.LSET:
					case RedisSqlParser.LTRIM:
					case RedisSqlParser.RPOP:
					case RedisSqlParser.RPOPLPUSH:
					case RedisSqlParser.RPUSH:
					case RedisSqlParser.RPUSHX:
					case RedisSqlParser.SADD:
					case RedisSqlParser.SCARD:
					case RedisSqlParser.SDIFF:
					case RedisSqlParser.SDIFFSTORE:
					case RedisSqlParser.SINTER:
					case RedisSqlParser.SINTERCARD:
					case RedisSqlParser.SINTERSTORE:
					case RedisSqlParser.SISMEMBER:
					case RedisSqlParser.SMEMBERS:
					case RedisSqlParser.SMISMEMBER:
					case RedisSqlParser.SMOVE:
					case RedisSqlParser.SPOP:
					case RedisSqlParser.SRANDMEMBER:
					case RedisSqlParser.SREM:
					case RedisSqlParser.SSCAN:
					case RedisSqlParser.SUNION:
					case RedisSqlParser.SUNIONSTORE:
					case RedisSqlParser.BZMPOP:
					case RedisSqlParser.BZPOPMAX:
					case RedisSqlParser.BZPOPMIN:
					case RedisSqlParser.ZADD:
					case RedisSqlParser.ZCARD:
					case RedisSqlParser.ZCOUNT:
					case RedisSqlParser.ZDIFF:
					case RedisSqlParser.ZDIFFSTORE:
					case RedisSqlParser.ZINCRBY:
					case RedisSqlParser.ZINTER:
					case RedisSqlParser.ZINTERCARD:
					case RedisSqlParser.ZINTERSTORE:
					case RedisSqlParser.ZLEXCOUNT:
					case RedisSqlParser.ZMPOP:
					case RedisSqlParser.ZMSCORE:
					case RedisSqlParser.ZPOPMAX:
					case RedisSqlParser.ZPOPMIN:
					case RedisSqlParser.ZRANDMEMBER:
					case RedisSqlParser.ZRANGE:
					case RedisSqlParser.ZRANGEBYLEX:
					case RedisSqlParser.ZRANGEBYSCORE:
					case RedisSqlParser.ZRANGESTORE:
					case RedisSqlParser.ZRANK:
					case RedisSqlParser.ZREM:
					case RedisSqlParser.ZREMRANGEBYLEX:
					case RedisSqlParser.ZREMRANGEBYRANK:
					case RedisSqlParser.ZREMRANGEBYSCORE:
					case RedisSqlParser.ZREVRANGE:
					case RedisSqlParser.ZREVRANGEBYLEX:
					case RedisSqlParser.ZREVRANGEBYSCORE:
					case RedisSqlParser.ZREVRANK:
					case RedisSqlParser.ZSCAN:
					case RedisSqlParser.ZSCORE:
					case RedisSqlParser.ZUNION:
					case RedisSqlParser.ZUNIONSTORE:
					case RedisSqlParser.PSUBSCRIBE:
					case RedisSqlParser.PUBSUB:
					case RedisSqlParser.PUBLISH:
					case RedisSqlParser.PUNSUBSCRIBE:
					case RedisSqlParser.SUBSCRIBE:
					case RedisSqlParser.UNSUBSCRIBE:
					case RedisSqlParser.SSUBSCRIBE:
					case RedisSqlParser.SUNSUBSCRIBE:
					case RedisSqlParser.ASKING:
					case RedisSqlParser.CLUSTER:
					case RedisSqlParser.READONLY:
					case RedisSqlParser.READWRITE:
					case RedisSqlParser.FLUSHDB:
					case RedisSqlParser.SCRIPT:
					case RedisSqlParser.EVAL:
					case RedisSqlParser.EVALSHA:
					case RedisSqlParser.EXEC:
					case RedisSqlParser.WATCH:
					case RedisSqlParser.DISCARD:
					case RedisSqlParser.UNWATCH:
					case RedisSqlParser.MULTI:
					case RedisSqlParser.PFMERGE:
					case RedisSqlParser.PFADD:
					case RedisSqlParser.PFCOUNT:
					case RedisSqlParser.ECHO:
					case RedisSqlParser.PING:
					case RedisSqlParser.SAVE:
					case RedisSqlParser.SLOWLOG:
					case RedisSqlParser.LASTSAVE:
					case RedisSqlParser.CONFIG:
					case RedisSqlParser.CLIENT:
					case RedisSqlParser.SHUTDOWN:
					case RedisSqlParser.SYNC:
					case RedisSqlParser.ROLE:
					case RedisSqlParser.MONITOR:
					case RedisSqlParser.SLAVEOF:
					case RedisSqlParser.FLUSHALL:
					case RedisSqlParser.SELECT:
					case RedisSqlParser.QUIT:
					case RedisSqlParser.AUTH:
					case RedisSqlParser.DBSIZE:
					case RedisSqlParser.BGREWRITEAOF:
					case RedisSqlParser.TIME:
					case RedisSqlParser.INFO:
					case RedisSqlParser.BGSAVE:
					case RedisSqlParser.COMMAND:
					case RedisSqlParser.DEBUG:
					case RedisSqlParser.RESETSTAT:
					case RedisSqlParser.REWRITE:
					case RedisSqlParser.SETNAME:
					case RedisSqlParser.GETNAME:
					case RedisSqlParser.LIST:
					case RedisSqlParser.GETKEYS:
					case RedisSqlParser.COUNT:
					case RedisSqlParser.KILL:
						{
						this.state = 397;
						this.sqlStatement();
						}
						break;
					case RedisSqlParser.SEMI:
						{
						this.state = 398;
						this.emptyStatement_();
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					}
				}
				this.state = 403;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input, 2, this._ctx);
			}
			this.state = 409;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RedisSqlParser.COPY:
			case RedisSqlParser.DEL:
			case RedisSqlParser.DUMP:
			case RedisSqlParser.EXISTS:
			case RedisSqlParser.EXPIRE:
			case RedisSqlParser.EXPIREAT:
			case RedisSqlParser.EXPIRETIME:
			case RedisSqlParser.KEYS:
			case RedisSqlParser.MOVE:
			case RedisSqlParser.OBJECT:
			case RedisSqlParser.PERSIST:
			case RedisSqlParser.PEXPIRE:
			case RedisSqlParser.PEXPIREAT:
			case RedisSqlParser.PEXPIRETIME:
			case RedisSqlParser.TTL:
			case RedisSqlParser.PTTL:
			case RedisSqlParser.RANDOMKEY:
			case RedisSqlParser.RENAME:
			case RedisSqlParser.RENAMENX:
			case RedisSqlParser.RESTORE:
			case RedisSqlParser.SCAN:
			case RedisSqlParser.SORT:
			case RedisSqlParser.SORT_RO:
			case RedisSqlParser.TOUCH:
			case RedisSqlParser.TYPE:
			case RedisSqlParser.UNLINK:
			case RedisSqlParser.WAIT:
			case RedisSqlParser.APPEND:
			case RedisSqlParser.DECR:
			case RedisSqlParser.DECRBY:
			case RedisSqlParser.GET:
			case RedisSqlParser.GETDEL:
			case RedisSqlParser.GETEX:
			case RedisSqlParser.GETRANGE:
			case RedisSqlParser.GETSET:
			case RedisSqlParser.GETBIT:
			case RedisSqlParser.INCR:
			case RedisSqlParser.INCRBY:
			case RedisSqlParser.INCRBYFLOAT:
			case RedisSqlParser.LCS:
			case RedisSqlParser.MGET:
			case RedisSqlParser.MSET:
			case RedisSqlParser.MSETNX:
			case RedisSqlParser.SETEX:
			case RedisSqlParser.PSETEX:
			case RedisSqlParser.SET:
			case RedisSqlParser.SETNX:
			case RedisSqlParser.SETRANGE:
			case RedisSqlParser.SETBIT:
			case RedisSqlParser.STRLEN:
			case RedisSqlParser.SUBSTR:
			case RedisSqlParser.HDEL:
			case RedisSqlParser.HEXISTS:
			case RedisSqlParser.HGET:
			case RedisSqlParser.HGETALL:
			case RedisSqlParser.HINCRBY:
			case RedisSqlParser.HINCRBYFLOAT:
			case RedisSqlParser.HKEYS:
			case RedisSqlParser.HLEN:
			case RedisSqlParser.HMGET:
			case RedisSqlParser.HMSET:
			case RedisSqlParser.HRANDFIELD:
			case RedisSqlParser.HSCAN:
			case RedisSqlParser.HSET:
			case RedisSqlParser.HSETNX:
			case RedisSqlParser.HSTRLEN:
			case RedisSqlParser.HVALS:
			case RedisSqlParser.BLMOVE:
			case RedisSqlParser.BLMPOP:
			case RedisSqlParser.BLPOP:
			case RedisSqlParser.BRPOP:
			case RedisSqlParser.BRPOPLPUSH:
			case RedisSqlParser.LINDEX:
			case RedisSqlParser.LINSERT:
			case RedisSqlParser.LLEN:
			case RedisSqlParser.LMOVE:
			case RedisSqlParser.LMPOP:
			case RedisSqlParser.LPOP:
			case RedisSqlParser.LPOS:
			case RedisSqlParser.LPUSH:
			case RedisSqlParser.LPUSHX:
			case RedisSqlParser.LRANGE:
			case RedisSqlParser.LREM:
			case RedisSqlParser.LSET:
			case RedisSqlParser.LTRIM:
			case RedisSqlParser.RPOP:
			case RedisSqlParser.RPOPLPUSH:
			case RedisSqlParser.RPUSH:
			case RedisSqlParser.RPUSHX:
			case RedisSqlParser.SADD:
			case RedisSqlParser.SCARD:
			case RedisSqlParser.SDIFF:
			case RedisSqlParser.SDIFFSTORE:
			case RedisSqlParser.SINTER:
			case RedisSqlParser.SINTERCARD:
			case RedisSqlParser.SINTERSTORE:
			case RedisSqlParser.SISMEMBER:
			case RedisSqlParser.SMEMBERS:
			case RedisSqlParser.SMISMEMBER:
			case RedisSqlParser.SMOVE:
			case RedisSqlParser.SPOP:
			case RedisSqlParser.SRANDMEMBER:
			case RedisSqlParser.SREM:
			case RedisSqlParser.SSCAN:
			case RedisSqlParser.SUNION:
			case RedisSqlParser.SUNIONSTORE:
			case RedisSqlParser.BZMPOP:
			case RedisSqlParser.BZPOPMAX:
			case RedisSqlParser.BZPOPMIN:
			case RedisSqlParser.ZADD:
			case RedisSqlParser.ZCARD:
			case RedisSqlParser.ZCOUNT:
			case RedisSqlParser.ZDIFF:
			case RedisSqlParser.ZDIFFSTORE:
			case RedisSqlParser.ZINCRBY:
			case RedisSqlParser.ZINTER:
			case RedisSqlParser.ZINTERCARD:
			case RedisSqlParser.ZINTERSTORE:
			case RedisSqlParser.ZLEXCOUNT:
			case RedisSqlParser.ZMPOP:
			case RedisSqlParser.ZMSCORE:
			case RedisSqlParser.ZPOPMAX:
			case RedisSqlParser.ZPOPMIN:
			case RedisSqlParser.ZRANDMEMBER:
			case RedisSqlParser.ZRANGE:
			case RedisSqlParser.ZRANGEBYLEX:
			case RedisSqlParser.ZRANGEBYSCORE:
			case RedisSqlParser.ZRANGESTORE:
			case RedisSqlParser.ZRANK:
			case RedisSqlParser.ZREM:
			case RedisSqlParser.ZREMRANGEBYLEX:
			case RedisSqlParser.ZREMRANGEBYRANK:
			case RedisSqlParser.ZREMRANGEBYSCORE:
			case RedisSqlParser.ZREVRANGE:
			case RedisSqlParser.ZREVRANGEBYLEX:
			case RedisSqlParser.ZREVRANGEBYSCORE:
			case RedisSqlParser.ZREVRANK:
			case RedisSqlParser.ZSCAN:
			case RedisSqlParser.ZSCORE:
			case RedisSqlParser.ZUNION:
			case RedisSqlParser.ZUNIONSTORE:
			case RedisSqlParser.PSUBSCRIBE:
			case RedisSqlParser.PUBSUB:
			case RedisSqlParser.PUBLISH:
			case RedisSqlParser.PUNSUBSCRIBE:
			case RedisSqlParser.SUBSCRIBE:
			case RedisSqlParser.UNSUBSCRIBE:
			case RedisSqlParser.SSUBSCRIBE:
			case RedisSqlParser.SUNSUBSCRIBE:
			case RedisSqlParser.ASKING:
			case RedisSqlParser.CLUSTER:
			case RedisSqlParser.READONLY:
			case RedisSqlParser.READWRITE:
			case RedisSqlParser.FLUSHDB:
			case RedisSqlParser.SCRIPT:
			case RedisSqlParser.EVAL:
			case RedisSqlParser.EVALSHA:
			case RedisSqlParser.EXEC:
			case RedisSqlParser.WATCH:
			case RedisSqlParser.DISCARD:
			case RedisSqlParser.UNWATCH:
			case RedisSqlParser.MULTI:
			case RedisSqlParser.PFMERGE:
			case RedisSqlParser.PFADD:
			case RedisSqlParser.PFCOUNT:
			case RedisSqlParser.ECHO:
			case RedisSqlParser.PING:
			case RedisSqlParser.SAVE:
			case RedisSqlParser.SLOWLOG:
			case RedisSqlParser.LASTSAVE:
			case RedisSqlParser.CONFIG:
			case RedisSqlParser.CLIENT:
			case RedisSqlParser.SHUTDOWN:
			case RedisSqlParser.SYNC:
			case RedisSqlParser.ROLE:
			case RedisSqlParser.MONITOR:
			case RedisSqlParser.SLAVEOF:
			case RedisSqlParser.FLUSHALL:
			case RedisSqlParser.SELECT:
			case RedisSqlParser.QUIT:
			case RedisSqlParser.AUTH:
			case RedisSqlParser.DBSIZE:
			case RedisSqlParser.BGREWRITEAOF:
			case RedisSqlParser.TIME:
			case RedisSqlParser.INFO:
			case RedisSqlParser.BGSAVE:
			case RedisSqlParser.COMMAND:
			case RedisSqlParser.DEBUG:
			case RedisSqlParser.RESETSTAT:
			case RedisSqlParser.REWRITE:
			case RedisSqlParser.SETNAME:
			case RedisSqlParser.GETNAME:
			case RedisSqlParser.LIST:
			case RedisSqlParser.GETKEYS:
			case RedisSqlParser.COUNT:
			case RedisSqlParser.KILL:
				{
				this.state = 404;
				this.sqlStatement();
				this.state = 406;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RedisSqlParser.SEMI) {
					{
					this.state = 405;
					this.match(RedisSqlParser.SEMI);
					}
				}

				}
				break;
			case RedisSqlParser.SEMI:
				{
				this.state = 408;
				this.emptyStatement_();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public emptyStatement_(): EmptyStatement_Context {
		let _localctx: EmptyStatement_Context = new EmptyStatement_Context(this._ctx, this.state);
		this.enterRule(_localctx, 4, RedisSqlParser.RULE_emptyStatement_);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 411;
			this.match(RedisSqlParser.SEMI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyName(): KeyNameContext {
		let _localctx: KeyNameContext = new KeyNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, RedisSqlParser.RULE_keyName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 413;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public fieldName(): FieldNameContext {
		let _localctx: FieldNameContext = new FieldNameContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, RedisSqlParser.RULE_fieldName);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 415;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public stringValue(): StringValueContext {
		let _localctx: StringValueContext = new StringValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, RedisSqlParser.RULE_stringValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 417;
			this.match(RedisSqlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intValue(): IntValueContext {
		let _localctx: IntValueContext = new IntValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, RedisSqlParser.RULE_intValue);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 419;
			this.match(RedisSqlParser.INTEGER_NUM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public floatValue(): FloatValueContext {
		let _localctx: FloatValueContext = new FloatValueContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, RedisSqlParser.RULE_floatValue);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 421;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.INTEGER_NUM || _la === RedisSqlParser.DECIMAL_NUM)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public pattern(): PatternContext {
		let _localctx: PatternContext = new PatternContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, RedisSqlParser.RULE_pattern);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 423;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cursor(): CursorContext {
		let _localctx: CursorContext = new CursorContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, RedisSqlParser.RULE_cursor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 425;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public min(): MinContext {
		let _localctx: MinContext = new MinContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, RedisSqlParser.RULE_min);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 427;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public max(): MaxContext {
		let _localctx: MaxContext = new MaxContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, RedisSqlParser.RULE_max);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 429;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public multiString(): MultiStringContext {
		let _localctx: MultiStringContext = new MultiStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, RedisSqlParser.RULE_multiString);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 431;
			this.match(RedisSqlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cout(): CoutContext {
		let _localctx: CoutContext = new CoutContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, RedisSqlParser.RULE_cout);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 433;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public start(): StartContext {
		let _localctx: StartContext = new StartContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, RedisSqlParser.RULE_start);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 435;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public end(): EndContext {
		let _localctx: EndContext = new EndContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, RedisSqlParser.RULE_end);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 437;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public port(): PortContext {
		let _localctx: PortContext = new PortContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, RedisSqlParser.RULE_port);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 439;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyAndString(): KeyAndStringContext {
		let _localctx: KeyAndStringContext = new KeyAndStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, RedisSqlParser.RULE_keyAndString);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 441;
			this.keyName();
			this.state = 442;
			this.stringValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public intAndString(): IntAndStringContext {
		let _localctx: IntAndStringContext = new IntAndStringContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, RedisSqlParser.RULE_intAndString);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 444;
			this.intValue();
			this.state = 445;
			this.stringValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public infoOpt(): InfoOptContext {
		let _localctx: InfoOptContext = new InfoOptContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, RedisSqlParser.RULE_infoOpt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 447;
			_la = this._input.LA(1);
			if (!(((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (RedisSqlParser.SERVER - 160)) | (1 << (RedisSqlParser.CLIENTS - 160)) | (1 << (RedisSqlParser.MEMORY - 160)) | (1 << (RedisSqlParser.PERSISTENCE - 160)) | (1 << (RedisSqlParser.STATS - 160)) | (1 << (RedisSqlParser.REPLICATION - 160)) | (1 << (RedisSqlParser.CPU - 160)) | (1 << (RedisSqlParser.COMMANDSTATS - 160)) | (1 << (RedisSqlParser.LATENCYSTATS - 160)) | (1 << (RedisSqlParser.SENTINEL - 160)) | (1 << (RedisSqlParser.MODULES - 160)) | (1 << (RedisSqlParser.KEYSPACE - 160)) | (1 << (RedisSqlParser.ERRORSTATS - 160)) | (1 << (RedisSqlParser.ALL - 160)) | (1 << (RedisSqlParser.DEFAULT - 160)) | (1 << (RedisSqlParser.EVERYTHING - 160)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public patternOpt(): PatternOptContext {
		let _localctx: PatternOptContext = new PatternOptContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, RedisSqlParser.RULE_patternOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 449;
			this.match(RedisSqlParser.GET);
			this.state = 450;
			this.pattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public keyOpt(): KeyOptContext {
		let _localctx: KeyOptContext = new KeyOptContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, RedisSqlParser.RULE_keyOpt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 452;
			_la = this._input.LA(1);
			if (!(((((_la - 247)) & ~0x1F) === 0 && ((1 << (_la - 247)) & ((1 << (RedisSqlParser.NX - 247)) | (1 << (RedisSqlParser.XX - 247)) | (1 << (RedisSqlParser.GT - 247)) | (1 << (RedisSqlParser.LT - 247)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public idletimeOpt(): IdletimeOptContext {
		let _localctx: IdletimeOptContext = new IdletimeOptContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, RedisSqlParser.RULE_idletimeOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 454;
			this.match(RedisSqlParser.IDLETIME);
			this.state = 455;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public freqOpt(): FreqOptContext {
		let _localctx: FreqOptContext = new FreqOptContext(this._ctx, this.state);
		this.enterRule(_localctx, 46, RedisSqlParser.RULE_freqOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 457;
			this.match(RedisSqlParser.FREQ);
			this.state = 458;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public limitOpt(): LimitOptContext {
		let _localctx: LimitOptContext = new LimitOptContext(this._ctx, this.state);
		this.enterRule(_localctx, 48, RedisSqlParser.RULE_limitOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 460;
			this.match(RedisSqlParser.LIMIT);
			this.state = 461;
			this.intValue();
			this.state = 462;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sortOpt(): SortOptContext {
		let _localctx: SortOptContext = new SortOptContext(this._ctx, this.state);
		this.enterRule(_localctx, 50, RedisSqlParser.RULE_sortOpt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 464;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.ASC || _la === RedisSqlParser.DESC)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public getsetOpt(): GetsetOptContext {
		let _localctx: GetsetOptContext = new GetsetOptContext(this._ctx, this.state);
		this.enterRule(_localctx, 52, RedisSqlParser.RULE_getsetOpt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 466;
			_la = this._input.LA(1);
			if (!(((((_la - 262)) & ~0x1F) === 0 && ((1 << (_la - 262)) & ((1 << (RedisSqlParser.EX - 262)) | (1 << (RedisSqlParser.PX - 262)) | (1 << (RedisSqlParser.EXAT - 262)) | (1 << (RedisSqlParser.PXAT - 262)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 467;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lrOpt(): LrOptContext {
		let _localctx: LrOptContext = new LrOptContext(this._ctx, this.state);
		this.enterRule(_localctx, 54, RedisSqlParser.RULE_lrOpt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 469;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.LEFT || _la === RedisSqlParser.RIGHT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public rankOpt(): RankOptContext {
		let _localctx: RankOptContext = new RankOptContext(this._ctx, this.state);
		this.enterRule(_localctx, 56, RedisSqlParser.RULE_rankOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 471;
			this.match(RedisSqlParser.RANK);
			this.state = 472;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public countOpt(): CountOptContext {
		let _localctx: CountOptContext = new CountOptContext(this._ctx, this.state);
		this.enterRule(_localctx, 58, RedisSqlParser.RULE_countOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 474;
			this.match(RedisSqlParser.COUNT);
			this.state = 475;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public maxlenOpt(): MaxlenOptContext {
		let _localctx: MaxlenOptContext = new MaxlenOptContext(this._ctx, this.state);
		this.enterRule(_localctx, 60, RedisSqlParser.RULE_maxlenOpt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 477;
			this.match(RedisSqlParser.MAXLEN);
			this.state = 478;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdCopy(): CmdCopyContext {
		let _localctx: CmdCopyContext = new CmdCopyContext(this._ctx, this.state);
		this.enterRule(_localctx, 62, RedisSqlParser.RULE_cmdCopy);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 480;
			this.match(RedisSqlParser.COPY);
			this.state = 481;
			this.keyName();
			this.state = 482;
			this.keyName();
			this.state = 485;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.DB) {
				{
				this.state = 483;
				this.match(RedisSqlParser.DB);
				this.state = 484;
				this.intValue();
				}
			}

			this.state = 488;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.REPLACE) {
				{
				this.state = 487;
				this.match(RedisSqlParser.REPLACE);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdDel(): CmdDelContext {
		let _localctx: CmdDelContext = new CmdDelContext(this._ctx, this.state);
		this.enterRule(_localctx, 64, RedisSqlParser.RULE_cmdDel);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 490;
			this.match(RedisSqlParser.DEL);
			this.state = 492;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 491;
				this.keyName();
				}
				}
				this.state = 494;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdDump(): CmdDumpContext {
		let _localctx: CmdDumpContext = new CmdDumpContext(this._ctx, this.state);
		this.enterRule(_localctx, 66, RedisSqlParser.RULE_cmdDump);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 496;
			this.match(RedisSqlParser.DUMP);
			this.state = 497;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdExists(): CmdExistsContext {
		let _localctx: CmdExistsContext = new CmdExistsContext(this._ctx, this.state);
		this.enterRule(_localctx, 68, RedisSqlParser.RULE_cmdExists);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 499;
			this.match(RedisSqlParser.EXISTS);
			this.state = 501;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 500;
				this.keyName();
				}
				}
				this.state = 503;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdExpire(): CmdExpireContext {
		let _localctx: CmdExpireContext = new CmdExpireContext(this._ctx, this.state);
		this.enterRule(_localctx, 70, RedisSqlParser.RULE_cmdExpire);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 505;
			this.match(RedisSqlParser.EXPIRE);
			this.state = 506;
			this.keyName();
			this.state = 507;
			this.intValue();
			this.state = 509;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 247)) & ~0x1F) === 0 && ((1 << (_la - 247)) & ((1 << (RedisSqlParser.NX - 247)) | (1 << (RedisSqlParser.XX - 247)) | (1 << (RedisSqlParser.GT - 247)) | (1 << (RedisSqlParser.LT - 247)))) !== 0)) {
				{
				this.state = 508;
				this.keyOpt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdExpireat(): CmdExpireatContext {
		let _localctx: CmdExpireatContext = new CmdExpireatContext(this._ctx, this.state);
		this.enterRule(_localctx, 72, RedisSqlParser.RULE_cmdExpireat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 511;
			this.match(RedisSqlParser.EXPIREAT);
			this.state = 512;
			this.keyName();
			this.state = 513;
			this.intValue();
			this.state = 515;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 247)) & ~0x1F) === 0 && ((1 << (_la - 247)) & ((1 << (RedisSqlParser.NX - 247)) | (1 << (RedisSqlParser.XX - 247)) | (1 << (RedisSqlParser.GT - 247)) | (1 << (RedisSqlParser.LT - 247)))) !== 0)) {
				{
				this.state = 514;
				this.keyOpt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdExpireTime(): CmdExpireTimeContext {
		let _localctx: CmdExpireTimeContext = new CmdExpireTimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 74, RedisSqlParser.RULE_cmdExpireTime);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 517;
			this.match(RedisSqlParser.EXPIRETIME);
			this.state = 518;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdKeys(): CmdKeysContext {
		let _localctx: CmdKeysContext = new CmdKeysContext(this._ctx, this.state);
		this.enterRule(_localctx, 76, RedisSqlParser.RULE_cmdKeys);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 520;
			this.match(RedisSqlParser.KEYS);
			this.state = 521;
			this.pattern();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdMove(): CmdMoveContext {
		let _localctx: CmdMoveContext = new CmdMoveContext(this._ctx, this.state);
		this.enterRule(_localctx, 78, RedisSqlParser.RULE_cmdMove);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 523;
			this.match(RedisSqlParser.MOVE);
			this.state = 524;
			this.keyName();
			this.state = 525;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdObject(): CmdObjectContext {
		let _localctx: CmdObjectContext = new CmdObjectContext(this._ctx, this.state);
		this.enterRule(_localctx, 80, RedisSqlParser.RULE_cmdObject);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 527;
			this.match(RedisSqlParser.OBJECT);
			this.state = 528;
			_la = this._input.LA(1);
			if (!(((((_la - 251)) & ~0x1F) === 0 && ((1 << (_la - 251)) & ((1 << (RedisSqlParser.ENCODING - 251)) | (1 << (RedisSqlParser.FREQ - 251)) | (1 << (RedisSqlParser.IDLETIME - 251)) | (1 << (RedisSqlParser.REFCOUNT - 251)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 529;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdPersist(): CmdPersistContext {
		let _localctx: CmdPersistContext = new CmdPersistContext(this._ctx, this.state);
		this.enterRule(_localctx, 82, RedisSqlParser.RULE_cmdPersist);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 531;
			this.match(RedisSqlParser.PERSIST);
			this.state = 532;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdPexpire(): CmdPexpireContext {
		let _localctx: CmdPexpireContext = new CmdPexpireContext(this._ctx, this.state);
		this.enterRule(_localctx, 84, RedisSqlParser.RULE_cmdPexpire);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 534;
			this.match(RedisSqlParser.PEXPIRE);
			this.state = 535;
			this.keyName();
			this.state = 536;
			this.intValue();
			this.state = 538;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 247)) & ~0x1F) === 0 && ((1 << (_la - 247)) & ((1 << (RedisSqlParser.NX - 247)) | (1 << (RedisSqlParser.XX - 247)) | (1 << (RedisSqlParser.GT - 247)) | (1 << (RedisSqlParser.LT - 247)))) !== 0)) {
				{
				this.state = 537;
				this.keyOpt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdPexpireat(): CmdPexpireatContext {
		let _localctx: CmdPexpireatContext = new CmdPexpireatContext(this._ctx, this.state);
		this.enterRule(_localctx, 86, RedisSqlParser.RULE_cmdPexpireat);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 540;
			this.match(RedisSqlParser.PEXPIREAT);
			this.state = 541;
			this.keyName();
			this.state = 542;
			this.intValue();
			this.state = 544;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 247)) & ~0x1F) === 0 && ((1 << (_la - 247)) & ((1 << (RedisSqlParser.NX - 247)) | (1 << (RedisSqlParser.XX - 247)) | (1 << (RedisSqlParser.GT - 247)) | (1 << (RedisSqlParser.LT - 247)))) !== 0)) {
				{
				this.state = 543;
				this.keyOpt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdPExpireTime(): CmdPExpireTimeContext {
		let _localctx: CmdPExpireTimeContext = new CmdPExpireTimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 88, RedisSqlParser.RULE_cmdPExpireTime);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 546;
			this.match(RedisSqlParser.PEXPIRETIME);
			this.state = 547;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdTtl(): CmdTtlContext {
		let _localctx: CmdTtlContext = new CmdTtlContext(this._ctx, this.state);
		this.enterRule(_localctx, 90, RedisSqlParser.RULE_cmdTtl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 549;
			this.match(RedisSqlParser.TTL);
			this.state = 550;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdPttl(): CmdPttlContext {
		let _localctx: CmdPttlContext = new CmdPttlContext(this._ctx, this.state);
		this.enterRule(_localctx, 92, RedisSqlParser.RULE_cmdPttl);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 552;
			this.match(RedisSqlParser.PTTL);
			this.state = 553;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdRandomkey(): CmdRandomkeyContext {
		let _localctx: CmdRandomkeyContext = new CmdRandomkeyContext(this._ctx, this.state);
		this.enterRule(_localctx, 94, RedisSqlParser.RULE_cmdRandomkey);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 555;
			this.match(RedisSqlParser.RANDOMKEY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdRename(): CmdRenameContext {
		let _localctx: CmdRenameContext = new CmdRenameContext(this._ctx, this.state);
		this.enterRule(_localctx, 96, RedisSqlParser.RULE_cmdRename);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 557;
			this.match(RedisSqlParser.RENAME);
			this.state = 558;
			this.keyName();
			this.state = 559;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdRenamenx(): CmdRenamenxContext {
		let _localctx: CmdRenamenxContext = new CmdRenamenxContext(this._ctx, this.state);
		this.enterRule(_localctx, 98, RedisSqlParser.RULE_cmdRenamenx);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 561;
			this.match(RedisSqlParser.RENAMENX);
			this.state = 562;
			this.keyName();
			this.state = 563;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdRestore(): CmdRestoreContext {
		let _localctx: CmdRestoreContext = new CmdRestoreContext(this._ctx, this.state);
		this.enterRule(_localctx, 100, RedisSqlParser.RULE_cmdRestore);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 565;
			this.match(RedisSqlParser.RESTORE);
			this.state = 566;
			this.keyName();
			this.state = 567;
			this.intValue();
			this.state = 568;
			this.stringValue();
			this.state = 570;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.REPLACE) {
				{
				this.state = 569;
				this.match(RedisSqlParser.REPLACE);
				}
			}

			this.state = 573;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.ABSTTL) {
				{
				this.state = 572;
				this.match(RedisSqlParser.ABSTTL);
				}
			}

			this.state = 576;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.IDLETIME) {
				{
				this.state = 575;
				this.idletimeOpt();
				}
			}

			this.state = 579;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.FREQ) {
				{
				this.state = 578;
				this.freqOpt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdScan(): CmdScanContext {
		let _localctx: CmdScanContext = new CmdScanContext(this._ctx, this.state);
		this.enterRule(_localctx, 102, RedisSqlParser.RULE_cmdScan);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 581;
			this.match(RedisSqlParser.SCAN);
			this.state = 582;
			this.cursor();
			this.state = 583;
			this.pattern();
			this.state = 585;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.INTEGER_NUM) {
				{
				this.state = 584;
				this.intValue();
				}
			}

			this.state = 589;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 18, this._ctx) ) {
			case 1:
				{
				this.state = 587;
				this.match(RedisSqlParser.TYPE);
				this.state = 588;
				this.stringValue();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSort(): CmdSortContext {
		let _localctx: CmdSortContext = new CmdSortContext(this._ctx, this.state);
		this.enterRule(_localctx, 104, RedisSqlParser.RULE_cmdSort);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 591;
			this.match(RedisSqlParser.SORT);
			this.state = 592;
			this.keyName();
			this.state = 595;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.BY) {
				{
				this.state = 593;
				this.match(RedisSqlParser.BY);
				this.state = 594;
				this.pattern();
				}
			}

			this.state = 598;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.LIMIT) {
				{
				this.state = 597;
				this.limitOpt();
				}
			}

			this.state = 605;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 22, this._ctx) ) {
			case 1:
				{
				this.state = 601;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 600;
						this.patternOpt();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 603;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 21, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
			this.state = 608;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.ASC || _la === RedisSqlParser.DESC) {
				{
				this.state = 607;
				this.sortOpt();
				}
			}

			this.state = 611;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.ALPHA) {
				{
				this.state = 610;
				this.match(RedisSqlParser.ALPHA);
				}
			}

			this.state = 615;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.STORE) {
				{
				this.state = 613;
				this.match(RedisSqlParser.STORE);
				this.state = 614;
				this.stringValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSortro(): CmdSortroContext {
		let _localctx: CmdSortroContext = new CmdSortroContext(this._ctx, this.state);
		this.enterRule(_localctx, 106, RedisSqlParser.RULE_cmdSortro);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 617;
			this.match(RedisSqlParser.SORT_RO);
			this.state = 618;
			this.keyName();
			this.state = 621;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.BY) {
				{
				this.state = 619;
				this.match(RedisSqlParser.BY);
				this.state = 620;
				this.pattern();
				}
			}

			this.state = 624;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.LIMIT) {
				{
				this.state = 623;
				this.limitOpt();
				}
			}

			this.state = 631;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 29, this._ctx) ) {
			case 1:
				{
				this.state = 627;
				this._errHandler.sync(this);
				_alt = 1;
				do {
					switch (_alt) {
					case 1:
						{
						{
						this.state = 626;
						this.patternOpt();
						}
						}
						break;
					default:
						throw new NoViableAltException(this);
					}
					this.state = 629;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input, 28, this._ctx);
				} while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
				}
				break;
			}
			this.state = 634;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.ASC || _la === RedisSqlParser.DESC) {
				{
				this.state = 633;
				this.sortOpt();
				}
			}

			this.state = 637;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.ALPHA) {
				{
				this.state = 636;
				this.match(RedisSqlParser.ALPHA);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdTouch(): CmdTouchContext {
		let _localctx: CmdTouchContext = new CmdTouchContext(this._ctx, this.state);
		this.enterRule(_localctx, 108, RedisSqlParser.RULE_cmdTouch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 639;
			this.match(RedisSqlParser.TOUCH);
			this.state = 641;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 640;
				this.keyName();
				}
				}
				this.state = 643;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdType(): CmdTypeContext {
		let _localctx: CmdTypeContext = new CmdTypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 110, RedisSqlParser.RULE_cmdType);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 645;
			this.match(RedisSqlParser.TYPE);
			this.state = 646;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdUnlink(): CmdUnlinkContext {
		let _localctx: CmdUnlinkContext = new CmdUnlinkContext(this._ctx, this.state);
		this.enterRule(_localctx, 112, RedisSqlParser.RULE_cmdUnlink);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 648;
			this.match(RedisSqlParser.UNLINK);
			this.state = 650;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 649;
				this.keyName();
				}
				}
				this.state = 652;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdWait(): CmdWaitContext {
		let _localctx: CmdWaitContext = new CmdWaitContext(this._ctx, this.state);
		this.enterRule(_localctx, 114, RedisSqlParser.RULE_cmdWait);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 654;
			this.match(RedisSqlParser.WAIT);
			this.state = 655;
			this.intValue();
			this.state = 656;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdAppend(): CmdAppendContext {
		let _localctx: CmdAppendContext = new CmdAppendContext(this._ctx, this.state);
		this.enterRule(_localctx, 116, RedisSqlParser.RULE_cmdAppend);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 658;
			this.match(RedisSqlParser.APPEND);
			this.state = 659;
			this.keyName();
			this.state = 660;
			this.stringValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdDecr(): CmdDecrContext {
		let _localctx: CmdDecrContext = new CmdDecrContext(this._ctx, this.state);
		this.enterRule(_localctx, 118, RedisSqlParser.RULE_cmdDecr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 662;
			this.match(RedisSqlParser.DECR);
			this.state = 663;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdDecrby(): CmdDecrbyContext {
		let _localctx: CmdDecrbyContext = new CmdDecrbyContext(this._ctx, this.state);
		this.enterRule(_localctx, 120, RedisSqlParser.RULE_cmdDecrby);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 665;
			this.match(RedisSqlParser.DECRBY);
			this.state = 666;
			this.keyName();
			this.state = 667;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdGet(): CmdGetContext {
		let _localctx: CmdGetContext = new CmdGetContext(this._ctx, this.state);
		this.enterRule(_localctx, 122, RedisSqlParser.RULE_cmdGet);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 669;
			this.match(RedisSqlParser.GET);
			this.state = 670;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdGetdel(): CmdGetdelContext {
		let _localctx: CmdGetdelContext = new CmdGetdelContext(this._ctx, this.state);
		this.enterRule(_localctx, 124, RedisSqlParser.RULE_cmdGetdel);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 672;
			this.match(RedisSqlParser.GETDEL);
			this.state = 673;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdGetex(): CmdGetexContext {
		let _localctx: CmdGetexContext = new CmdGetexContext(this._ctx, this.state);
		this.enterRule(_localctx, 126, RedisSqlParser.RULE_cmdGetex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 675;
			this.match(RedisSqlParser.GETEX);
			this.state = 676;
			this.keyName();
			this.state = 679;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 34, this._ctx) ) {
			case 1:
				{
				this.state = 677;
				this.getsetOpt();
				}
				break;

			case 2:
				{
				this.state = 678;
				this.match(RedisSqlParser.PERSIST);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdGetrange(): CmdGetrangeContext {
		let _localctx: CmdGetrangeContext = new CmdGetrangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 128, RedisSqlParser.RULE_cmdGetrange);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 681;
			this.match(RedisSqlParser.GETRANGE);
			this.state = 682;
			this.keyName();
			this.state = 683;
			this.intValue();
			this.state = 684;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdGetset(): CmdGetsetContext {
		let _localctx: CmdGetsetContext = new CmdGetsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 130, RedisSqlParser.RULE_cmdGetset);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 686;
			this.match(RedisSqlParser.GETSET);
			this.state = 687;
			this.keyName();
			this.state = 688;
			this.stringValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdGetbit(): CmdGetbitContext {
		let _localctx: CmdGetbitContext = new CmdGetbitContext(this._ctx, this.state);
		this.enterRule(_localctx, 132, RedisSqlParser.RULE_cmdGetbit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 690;
			this.match(RedisSqlParser.GETBIT);
			this.state = 691;
			this.keyName();
			this.state = 692;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdInc(): CmdIncContext {
		let _localctx: CmdIncContext = new CmdIncContext(this._ctx, this.state);
		this.enterRule(_localctx, 134, RedisSqlParser.RULE_cmdInc);
		try {
			this.state = 704;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RedisSqlParser.INCR:
				_localctx = new CmdIncrContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 694;
				this.match(RedisSqlParser.INCR);
				this.state = 695;
				this.keyName();
				}
				break;
			case RedisSqlParser.INCRBY:
				_localctx = new CmdIncrbyContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 696;
				this.match(RedisSqlParser.INCRBY);
				this.state = 697;
				this.keyName();
				this.state = 698;
				this.intValue();
				}
				break;
			case RedisSqlParser.INCRBYFLOAT:
				_localctx = new CmdIncrbyFloatContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 700;
				this.match(RedisSqlParser.INCRBYFLOAT);
				this.state = 701;
				this.keyName();
				this.state = 702;
				this.floatValue();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdLcs(): CmdLcsContext {
		let _localctx: CmdLcsContext = new CmdLcsContext(this._ctx, this.state);
		this.enterRule(_localctx, 136, RedisSqlParser.RULE_cmdLcs);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 706;
			this.match(RedisSqlParser.LCS);
			this.state = 707;
			this.keyName();
			this.state = 708;
			this.keyName();
			this.state = 710;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.LEN) {
				{
				this.state = 709;
				this.match(RedisSqlParser.LEN);
				}
			}

			this.state = 713;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.IDX) {
				{
				this.state = 712;
				this.match(RedisSqlParser.IDX);
				}
			}

			this.state = 717;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.MINMATCHLEN) {
				{
				this.state = 715;
				this.match(RedisSqlParser.MINMATCHLEN);
				this.state = 716;
				this.intValue();
				}
			}

			this.state = 720;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.WITHMATCHLEN) {
				{
				this.state = 719;
				this.match(RedisSqlParser.WITHMATCHLEN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdMget(): CmdMgetContext {
		let _localctx: CmdMgetContext = new CmdMgetContext(this._ctx, this.state);
		this.enterRule(_localctx, 138, RedisSqlParser.RULE_cmdMget);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 722;
			this.match(RedisSqlParser.MGET);
			this.state = 724;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 723;
				this.keyName();
				}
				}
				this.state = 726;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdMset(): CmdMsetContext {
		let _localctx: CmdMsetContext = new CmdMsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 140, RedisSqlParser.RULE_cmdMset);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 728;
			this.match(RedisSqlParser.MSET);
			this.state = 730;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 729;
				this.keyAndString();
				}
				}
				this.state = 732;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdMsetnx(): CmdMsetnxContext {
		let _localctx: CmdMsetnxContext = new CmdMsetnxContext(this._ctx, this.state);
		this.enterRule(_localctx, 142, RedisSqlParser.RULE_cmdMsetnx);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 734;
			this.match(RedisSqlParser.MSETNX);
			this.state = 736;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 735;
				this.keyAndString();
				}
				}
				this.state = 738;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSetex(): CmdSetexContext {
		let _localctx: CmdSetexContext = new CmdSetexContext(this._ctx, this.state);
		this.enterRule(_localctx, 144, RedisSqlParser.RULE_cmdSetex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 740;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.SETEX || _la === RedisSqlParser.PSETEX)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 741;
			this.keyName();
			this.state = 742;
			this.intValue();
			this.state = 743;
			this.stringValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSet(): CmdSetContext {
		let _localctx: CmdSetContext = new CmdSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 146, RedisSqlParser.RULE_cmdSet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 745;
			this.match(RedisSqlParser.SET);
			this.state = 746;
			this.keyName();
			this.state = 747;
			this.stringValue();
			this.state = 750;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RedisSqlParser.EX:
			case RedisSqlParser.PX:
			case RedisSqlParser.EXAT:
			case RedisSqlParser.PXAT:
				{
				this.state = 748;
				this.getsetOpt();
				}
				break;
			case RedisSqlParser.KEEPTTL:
				{
				this.state = 749;
				this.match(RedisSqlParser.KEEPTTL);
				}
				break;
			case RedisSqlParser.EOF:
			case RedisSqlParser.COPY:
			case RedisSqlParser.DEL:
			case RedisSqlParser.DUMP:
			case RedisSqlParser.EXISTS:
			case RedisSqlParser.EXPIRE:
			case RedisSqlParser.EXPIREAT:
			case RedisSqlParser.EXPIRETIME:
			case RedisSqlParser.KEYS:
			case RedisSqlParser.MOVE:
			case RedisSqlParser.OBJECT:
			case RedisSqlParser.PERSIST:
			case RedisSqlParser.PEXPIRE:
			case RedisSqlParser.PEXPIREAT:
			case RedisSqlParser.PEXPIRETIME:
			case RedisSqlParser.TTL:
			case RedisSqlParser.PTTL:
			case RedisSqlParser.RANDOMKEY:
			case RedisSqlParser.RENAME:
			case RedisSqlParser.RENAMENX:
			case RedisSqlParser.RESTORE:
			case RedisSqlParser.SCAN:
			case RedisSqlParser.SORT:
			case RedisSqlParser.SORT_RO:
			case RedisSqlParser.TOUCH:
			case RedisSqlParser.TYPE:
			case RedisSqlParser.UNLINK:
			case RedisSqlParser.WAIT:
			case RedisSqlParser.APPEND:
			case RedisSqlParser.DECR:
			case RedisSqlParser.DECRBY:
			case RedisSqlParser.GET:
			case RedisSqlParser.GETDEL:
			case RedisSqlParser.GETEX:
			case RedisSqlParser.GETRANGE:
			case RedisSqlParser.GETSET:
			case RedisSqlParser.GETBIT:
			case RedisSqlParser.INCR:
			case RedisSqlParser.INCRBY:
			case RedisSqlParser.INCRBYFLOAT:
			case RedisSqlParser.LCS:
			case RedisSqlParser.MGET:
			case RedisSqlParser.MSET:
			case RedisSqlParser.MSETNX:
			case RedisSqlParser.SETEX:
			case RedisSqlParser.PSETEX:
			case RedisSqlParser.SET:
			case RedisSqlParser.SETNX:
			case RedisSqlParser.SETRANGE:
			case RedisSqlParser.SETBIT:
			case RedisSqlParser.STRLEN:
			case RedisSqlParser.SUBSTR:
			case RedisSqlParser.HDEL:
			case RedisSqlParser.HEXISTS:
			case RedisSqlParser.HGET:
			case RedisSqlParser.HGETALL:
			case RedisSqlParser.HINCRBY:
			case RedisSqlParser.HINCRBYFLOAT:
			case RedisSqlParser.HKEYS:
			case RedisSqlParser.HLEN:
			case RedisSqlParser.HMGET:
			case RedisSqlParser.HMSET:
			case RedisSqlParser.HRANDFIELD:
			case RedisSqlParser.HSCAN:
			case RedisSqlParser.HSET:
			case RedisSqlParser.HSETNX:
			case RedisSqlParser.HSTRLEN:
			case RedisSqlParser.HVALS:
			case RedisSqlParser.BLMOVE:
			case RedisSqlParser.BLMPOP:
			case RedisSqlParser.BLPOP:
			case RedisSqlParser.BRPOP:
			case RedisSqlParser.BRPOPLPUSH:
			case RedisSqlParser.LINDEX:
			case RedisSqlParser.LINSERT:
			case RedisSqlParser.LLEN:
			case RedisSqlParser.LMOVE:
			case RedisSqlParser.LMPOP:
			case RedisSqlParser.LPOP:
			case RedisSqlParser.LPOS:
			case RedisSqlParser.LPUSH:
			case RedisSqlParser.LPUSHX:
			case RedisSqlParser.LRANGE:
			case RedisSqlParser.LREM:
			case RedisSqlParser.LSET:
			case RedisSqlParser.LTRIM:
			case RedisSqlParser.RPOP:
			case RedisSqlParser.RPOPLPUSH:
			case RedisSqlParser.RPUSH:
			case RedisSqlParser.RPUSHX:
			case RedisSqlParser.SADD:
			case RedisSqlParser.SCARD:
			case RedisSqlParser.SDIFF:
			case RedisSqlParser.SDIFFSTORE:
			case RedisSqlParser.SINTER:
			case RedisSqlParser.SINTERCARD:
			case RedisSqlParser.SINTERSTORE:
			case RedisSqlParser.SISMEMBER:
			case RedisSqlParser.SMEMBERS:
			case RedisSqlParser.SMISMEMBER:
			case RedisSqlParser.SMOVE:
			case RedisSqlParser.SPOP:
			case RedisSqlParser.SRANDMEMBER:
			case RedisSqlParser.SREM:
			case RedisSqlParser.SSCAN:
			case RedisSqlParser.SUNION:
			case RedisSqlParser.SUNIONSTORE:
			case RedisSqlParser.BZMPOP:
			case RedisSqlParser.BZPOPMAX:
			case RedisSqlParser.BZPOPMIN:
			case RedisSqlParser.ZADD:
			case RedisSqlParser.ZCARD:
			case RedisSqlParser.ZCOUNT:
			case RedisSqlParser.ZDIFF:
			case RedisSqlParser.ZDIFFSTORE:
			case RedisSqlParser.ZINCRBY:
			case RedisSqlParser.ZINTER:
			case RedisSqlParser.ZINTERCARD:
			case RedisSqlParser.ZINTERSTORE:
			case RedisSqlParser.ZLEXCOUNT:
			case RedisSqlParser.ZMPOP:
			case RedisSqlParser.ZMSCORE:
			case RedisSqlParser.ZPOPMAX:
			case RedisSqlParser.ZPOPMIN:
			case RedisSqlParser.ZRANDMEMBER:
			case RedisSqlParser.ZRANGE:
			case RedisSqlParser.ZRANGEBYLEX:
			case RedisSqlParser.ZRANGEBYSCORE:
			case RedisSqlParser.ZRANGESTORE:
			case RedisSqlParser.ZRANK:
			case RedisSqlParser.ZREM:
			case RedisSqlParser.ZREMRANGEBYLEX:
			case RedisSqlParser.ZREMRANGEBYRANK:
			case RedisSqlParser.ZREMRANGEBYSCORE:
			case RedisSqlParser.ZREVRANGE:
			case RedisSqlParser.ZREVRANGEBYLEX:
			case RedisSqlParser.ZREVRANGEBYSCORE:
			case RedisSqlParser.ZREVRANK:
			case RedisSqlParser.ZSCAN:
			case RedisSqlParser.ZSCORE:
			case RedisSqlParser.ZUNION:
			case RedisSqlParser.ZUNIONSTORE:
			case RedisSqlParser.PSUBSCRIBE:
			case RedisSqlParser.PUBSUB:
			case RedisSqlParser.PUBLISH:
			case RedisSqlParser.PUNSUBSCRIBE:
			case RedisSqlParser.SUBSCRIBE:
			case RedisSqlParser.UNSUBSCRIBE:
			case RedisSqlParser.SSUBSCRIBE:
			case RedisSqlParser.SUNSUBSCRIBE:
			case RedisSqlParser.ASKING:
			case RedisSqlParser.CLUSTER:
			case RedisSqlParser.READONLY:
			case RedisSqlParser.READWRITE:
			case RedisSqlParser.FLUSHDB:
			case RedisSqlParser.SCRIPT:
			case RedisSqlParser.EVAL:
			case RedisSqlParser.EVALSHA:
			case RedisSqlParser.EXEC:
			case RedisSqlParser.WATCH:
			case RedisSqlParser.DISCARD:
			case RedisSqlParser.UNWATCH:
			case RedisSqlParser.MULTI:
			case RedisSqlParser.PFMERGE:
			case RedisSqlParser.PFADD:
			case RedisSqlParser.PFCOUNT:
			case RedisSqlParser.ECHO:
			case RedisSqlParser.PING:
			case RedisSqlParser.SAVE:
			case RedisSqlParser.SLOWLOG:
			case RedisSqlParser.LASTSAVE:
			case RedisSqlParser.CONFIG:
			case RedisSqlParser.CLIENT:
			case RedisSqlParser.SHUTDOWN:
			case RedisSqlParser.SYNC:
			case RedisSqlParser.ROLE:
			case RedisSqlParser.MONITOR:
			case RedisSqlParser.SLAVEOF:
			case RedisSqlParser.FLUSHALL:
			case RedisSqlParser.SELECT:
			case RedisSqlParser.QUIT:
			case RedisSqlParser.AUTH:
			case RedisSqlParser.DBSIZE:
			case RedisSqlParser.BGREWRITEAOF:
			case RedisSqlParser.TIME:
			case RedisSqlParser.INFO:
			case RedisSqlParser.BGSAVE:
			case RedisSqlParser.COMMAND:
			case RedisSqlParser.DEBUG:
			case RedisSqlParser.NX:
			case RedisSqlParser.XX:
			case RedisSqlParser.RESETSTAT:
			case RedisSqlParser.REWRITE:
			case RedisSqlParser.SETNAME:
			case RedisSqlParser.GETNAME:
			case RedisSqlParser.LIST:
			case RedisSqlParser.GETKEYS:
			case RedisSqlParser.COUNT:
			case RedisSqlParser.KILL:
			case RedisSqlParser.SEMI:
				break;
			default:
				break;
			}
			this.state = 753;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.NX || _la === RedisSqlParser.XX) {
				{
				this.state = 752;
				_la = this._input.LA(1);
				if (!(_la === RedisSqlParser.NX || _la === RedisSqlParser.XX)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 756;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 45, this._ctx) ) {
			case 1:
				{
				this.state = 755;
				this.match(RedisSqlParser.GET);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSetnx(): CmdSetnxContext {
		let _localctx: CmdSetnxContext = new CmdSetnxContext(this._ctx, this.state);
		this.enterRule(_localctx, 148, RedisSqlParser.RULE_cmdSetnx);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 758;
			this.match(RedisSqlParser.SETNX);
			this.state = 759;
			this.keyName();
			this.state = 760;
			this.stringValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSetrange(): CmdSetrangeContext {
		let _localctx: CmdSetrangeContext = new CmdSetrangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 150, RedisSqlParser.RULE_cmdSetrange);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 762;
			this.match(RedisSqlParser.SETRANGE);
			this.state = 763;
			this.keyName();
			this.state = 764;
			this.intValue();
			this.state = 765;
			this.stringValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSetbit(): CmdSetbitContext {
		let _localctx: CmdSetbitContext = new CmdSetbitContext(this._ctx, this.state);
		this.enterRule(_localctx, 152, RedisSqlParser.RULE_cmdSetbit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 767;
			this.match(RedisSqlParser.SETBIT);
			this.state = 768;
			this.keyName();
			this.state = 769;
			this.intValue();
			this.state = 770;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdStrlen(): CmdStrlenContext {
		let _localctx: CmdStrlenContext = new CmdStrlenContext(this._ctx, this.state);
		this.enterRule(_localctx, 154, RedisSqlParser.RULE_cmdStrlen);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 772;
			this.match(RedisSqlParser.STRLEN);
			this.state = 773;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSubstr(): CmdSubstrContext {
		let _localctx: CmdSubstrContext = new CmdSubstrContext(this._ctx, this.state);
		this.enterRule(_localctx, 156, RedisSqlParser.RULE_cmdSubstr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 775;
			this.match(RedisSqlParser.SUBSTR);
			this.state = 776;
			this.keyName();
			this.state = 777;
			this.intValue();
			this.state = 778;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdHdelMget(): CmdHdelMgetContext {
		let _localctx: CmdHdelMgetContext = new CmdHdelMgetContext(this._ctx, this.state);
		this.enterRule(_localctx, 158, RedisSqlParser.RULE_cmdHdelMget);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 780;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.HDEL || _la === RedisSqlParser.HMGET)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 781;
			this.keyName();
			this.state = 783;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 782;
				this.fieldName();
				}
				}
				this.state = 785;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdHexistsGetKeysStrlen(): CmdHexistsGetKeysStrlenContext {
		let _localctx: CmdHexistsGetKeysStrlenContext = new CmdHexistsGetKeysStrlenContext(this._ctx, this.state);
		this.enterRule(_localctx, 160, RedisSqlParser.RULE_cmdHexistsGetKeysStrlen);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 787;
			_la = this._input.LA(1);
			if (!(((((_la - 57)) & ~0x1F) === 0 && ((1 << (_la - 57)) & ((1 << (RedisSqlParser.HEXISTS - 57)) | (1 << (RedisSqlParser.HGET - 57)) | (1 << (RedisSqlParser.HSTRLEN - 57)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 788;
			this.keyName();
			this.state = 789;
			this.fieldName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdHgetallLenVals(): CmdHgetallLenValsContext {
		let _localctx: CmdHgetallLenValsContext = new CmdHgetallLenValsContext(this._ctx, this.state);
		this.enterRule(_localctx, 162, RedisSqlParser.RULE_cmdHgetallLenVals);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 791;
			_la = this._input.LA(1);
			if (!(((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & ((1 << (RedisSqlParser.HGETALL - 59)) | (1 << (RedisSqlParser.HKEYS - 59)) | (1 << (RedisSqlParser.HLEN - 59)) | (1 << (RedisSqlParser.HVALS - 59)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 792;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdHmsetHset(): CmdHmsetHsetContext {
		let _localctx: CmdHmsetHsetContext = new CmdHmsetHsetContext(this._ctx, this.state);
		this.enterRule(_localctx, 164, RedisSqlParser.RULE_cmdHmsetHset);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 794;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.HMSET || _la === RedisSqlParser.HSET)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 795;
			this.keyName();
			this.state = 797;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 796;
				this.keyAndString();
				}
				}
				this.state = 799;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdHincrby(): CmdHincrbyContext {
		let _localctx: CmdHincrbyContext = new CmdHincrbyContext(this._ctx, this.state);
		this.enterRule(_localctx, 166, RedisSqlParser.RULE_cmdHincrby);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 801;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.HINCRBY || _la === RedisSqlParser.HINCRBYFLOAT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 802;
			this.keyName();
			this.state = 803;
			this.fieldName();
			this.state = 804;
			this.floatValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdHrandfield(): CmdHrandfieldContext {
		let _localctx: CmdHrandfieldContext = new CmdHrandfieldContext(this._ctx, this.state);
		this.enterRule(_localctx, 168, RedisSqlParser.RULE_cmdHrandfield);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 806;
			this.match(RedisSqlParser.HRANDFIELD);
			this.state = 807;
			this.keyName();
			this.state = 812;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.INTEGER_NUM) {
				{
				this.state = 808;
				this.intValue();
				this.state = 810;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RedisSqlParser.WITHVALUES) {
					{
					this.state = 809;
					this.match(RedisSqlParser.WITHVALUES);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdHscan(): CmdHscanContext {
		let _localctx: CmdHscanContext = new CmdHscanContext(this._ctx, this.state);
		this.enterRule(_localctx, 170, RedisSqlParser.RULE_cmdHscan);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 814;
			this.match(RedisSqlParser.HSCAN);
			this.state = 815;
			this.keyName();
			this.state = 816;
			this.intValue();
			this.state = 819;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.MATCH) {
				{
				this.state = 817;
				this.match(RedisSqlParser.MATCH);
				this.state = 818;
				this.pattern();
				}
			}

			this.state = 823;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 51, this._ctx) ) {
			case 1:
				{
				this.state = 821;
				this.match(RedisSqlParser.COUNT);
				this.state = 822;
				this.intValue();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdHsetnx(): CmdHsetnxContext {
		let _localctx: CmdHsetnxContext = new CmdHsetnxContext(this._ctx, this.state);
		this.enterRule(_localctx, 172, RedisSqlParser.RULE_cmdHsetnx);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 825;
			this.match(RedisSqlParser.HSETNX);
			this.state = 826;
			this.keyName();
			this.state = 827;
			this.keyAndString();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdBlmove(): CmdBlmoveContext {
		let _localctx: CmdBlmoveContext = new CmdBlmoveContext(this._ctx, this.state);
		this.enterRule(_localctx, 174, RedisSqlParser.RULE_cmdBlmove);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 829;
			this.match(RedisSqlParser.BLMOVE);
			this.state = 830;
			this.keyName();
			this.state = 831;
			this.keyName();
			this.state = 832;
			this.lrOpt();
			this.state = 833;
			this.lrOpt();
			this.state = 834;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdLmpop(): CmdLmpopContext {
		let _localctx: CmdLmpopContext = new CmdLmpopContext(this._ctx, this.state);
		this.enterRule(_localctx, 176, RedisSqlParser.RULE_cmdLmpop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 836;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.BLMPOP || _la === RedisSqlParser.LMPOP)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 837;
			this.intValue();
			this.state = 838;
			this.intValue();
			this.state = 840;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 839;
				this.keyName();
				}
				}
				this.state = 842;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			this.state = 844;
			this.lrOpt();
			this.state = 846;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.INTEGER_NUM) {
				{
				this.state = 845;
				this.intValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdBpop(): CmdBpopContext {
		let _localctx: CmdBpopContext = new CmdBpopContext(this._ctx, this.state);
		this.enterRule(_localctx, 178, RedisSqlParser.RULE_cmdBpop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 848;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.BLPOP || _la === RedisSqlParser.BRPOP)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 850;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 849;
				this.keyName();
				}
				}
				this.state = 852;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			this.state = 854;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdBrpoplpush(): CmdBrpoplpushContext {
		let _localctx: CmdBrpoplpushContext = new CmdBrpoplpushContext(this._ctx, this.state);
		this.enterRule(_localctx, 180, RedisSqlParser.RULE_cmdBrpoplpush);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 856;
			this.match(RedisSqlParser.BRPOPLPUSH);
			this.state = 857;
			this.keyName();
			this.state = 858;
			this.keyName();
			this.state = 859;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdLindex(): CmdLindexContext {
		let _localctx: CmdLindexContext = new CmdLindexContext(this._ctx, this.state);
		this.enterRule(_localctx, 182, RedisSqlParser.RULE_cmdLindex);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 861;
			this.match(RedisSqlParser.LINDEX);
			this.state = 862;
			this.keyName();
			this.state = 863;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdLinsert(): CmdLinsertContext {
		let _localctx: CmdLinsertContext = new CmdLinsertContext(this._ctx, this.state);
		this.enterRule(_localctx, 184, RedisSqlParser.RULE_cmdLinsert);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 865;
			this.match(RedisSqlParser.LINSERT);
			this.state = 866;
			this.keyName();
			this.state = 867;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.BEFORE || _la === RedisSqlParser.AFTER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 868;
			this.stringValue();
			this.state = 869;
			this.stringValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdLlen(): CmdLlenContext {
		let _localctx: CmdLlenContext = new CmdLlenContext(this._ctx, this.state);
		this.enterRule(_localctx, 186, RedisSqlParser.RULE_cmdLlen);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 871;
			this.match(RedisSqlParser.LLEN);
			this.state = 872;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdLmove(): CmdLmoveContext {
		let _localctx: CmdLmoveContext = new CmdLmoveContext(this._ctx, this.state);
		this.enterRule(_localctx, 188, RedisSqlParser.RULE_cmdLmove);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 874;
			this.match(RedisSqlParser.LMOVE);
			this.state = 875;
			this.keyName();
			this.state = 876;
			this.keyName();
			this.state = 877;
			this.lrOpt();
			this.state = 878;
			this.lrOpt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdPop(): CmdPopContext {
		let _localctx: CmdPopContext = new CmdPopContext(this._ctx, this.state);
		this.enterRule(_localctx, 190, RedisSqlParser.RULE_cmdPop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 880;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.LPOP || _la === RedisSqlParser.RPOP)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 881;
			this.keyName();
			this.state = 883;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.INTEGER_NUM) {
				{
				this.state = 882;
				this.intValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdLpos(): CmdLposContext {
		let _localctx: CmdLposContext = new CmdLposContext(this._ctx, this.state);
		this.enterRule(_localctx, 192, RedisSqlParser.RULE_cmdLpos);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 885;
			this.match(RedisSqlParser.LPOS);
			this.state = 886;
			this.keyName();
			this.state = 887;
			this.fieldName();
			this.state = 889;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.RANK) {
				{
				this.state = 888;
				this.rankOpt();
				}
			}

			this.state = 892;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 57, this._ctx) ) {
			case 1:
				{
				this.state = 891;
				this.countOpt();
				}
				break;
			}
			this.state = 895;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.MAXLEN) {
				{
				this.state = 894;
				this.maxlenOpt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdPush(): CmdPushContext {
		let _localctx: CmdPushContext = new CmdPushContext(this._ctx, this.state);
		this.enterRule(_localctx, 194, RedisSqlParser.RULE_cmdPush);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 897;
			_la = this._input.LA(1);
			if (!(((((_la - 84)) & ~0x1F) === 0 && ((1 << (_la - 84)) & ((1 << (RedisSqlParser.LPUSH - 84)) | (1 << (RedisSqlParser.LPUSHX - 84)) | (1 << (RedisSqlParser.RPUSH - 84)) | (1 << (RedisSqlParser.RPUSHX - 84)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 898;
			this.keyName();
			this.state = 900;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 899;
				this.stringValue();
				}
				}
				this.state = 902;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdLrangeTrim(): CmdLrangeTrimContext {
		let _localctx: CmdLrangeTrimContext = new CmdLrangeTrimContext(this._ctx, this.state);
		this.enterRule(_localctx, 196, RedisSqlParser.RULE_cmdLrangeTrim);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 904;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.LRANGE || _la === RedisSqlParser.LTRIM)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 905;
			this.keyName();
			this.state = 906;
			this.intValue();
			this.state = 907;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdLremSet(): CmdLremSetContext {
		let _localctx: CmdLremSetContext = new CmdLremSetContext(this._ctx, this.state);
		this.enterRule(_localctx, 198, RedisSqlParser.RULE_cmdLremSet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 909;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.LREM || _la === RedisSqlParser.LSET)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 910;
			this.keyName();
			this.state = 911;
			this.intValue();
			this.state = 912;
			this.stringValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdRpoplpush(): CmdRpoplpushContext {
		let _localctx: CmdRpoplpushContext = new CmdRpoplpushContext(this._ctx, this.state);
		this.enterRule(_localctx, 200, RedisSqlParser.RULE_cmdRpoplpush);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 914;
			this.match(RedisSqlParser.RPOPLPUSH);
			this.state = 915;
			this.keyName();
			this.state = 916;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSadd(): CmdSaddContext {
		let _localctx: CmdSaddContext = new CmdSaddContext(this._ctx, this.state);
		this.enterRule(_localctx, 202, RedisSqlParser.RULE_cmdSadd);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 918;
			_la = this._input.LA(1);
			if (!(((((_la - 94)) & ~0x1F) === 0 && ((1 << (_la - 94)) & ((1 << (RedisSqlParser.SADD - 94)) | (1 << (RedisSqlParser.SMISMEMBER - 94)) | (1 << (RedisSqlParser.SREM - 94)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 919;
			this.keyName();
			this.state = 921;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 920;
				this.fieldName();
				}
				}
				this.state = 923;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdScard(): CmdScardContext {
		let _localctx: CmdScardContext = new CmdScardContext(this._ctx, this.state);
		this.enterRule(_localctx, 204, RedisSqlParser.RULE_cmdScard);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 925;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.SCARD || _la === RedisSqlParser.SMEMBERS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 926;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSdiff(): CmdSdiffContext {
		let _localctx: CmdSdiffContext = new CmdSdiffContext(this._ctx, this.state);
		this.enterRule(_localctx, 206, RedisSqlParser.RULE_cmdSdiff);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 928;
			_la = this._input.LA(1);
			if (!(((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & ((1 << (RedisSqlParser.SDIFF - 96)) | (1 << (RedisSqlParser.SINTER - 96)) | (1 << (RedisSqlParser.SUNION - 96)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 930;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 929;
				this.keyName();
				}
				}
				this.state = 932;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSdiffstore(): CmdSdiffstoreContext {
		let _localctx: CmdSdiffstoreContext = new CmdSdiffstoreContext(this._ctx, this.state);
		this.enterRule(_localctx, 208, RedisSqlParser.RULE_cmdSdiffstore);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 934;
			_la = this._input.LA(1);
			if (!(((((_la - 97)) & ~0x1F) === 0 && ((1 << (_la - 97)) & ((1 << (RedisSqlParser.SDIFFSTORE - 97)) | (1 << (RedisSqlParser.SINTERSTORE - 97)) | (1 << (RedisSqlParser.SUNIONSTORE - 97)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 935;
			this.keyName();
			this.state = 937;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 936;
				this.keyName();
				}
				}
				this.state = 939;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSintercard(): CmdSintercardContext {
		let _localctx: CmdSintercardContext = new CmdSintercardContext(this._ctx, this.state);
		this.enterRule(_localctx, 210, RedisSqlParser.RULE_cmdSintercard);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 941;
			this.match(RedisSqlParser.SINTERCARD);
			this.state = 942;
			this.intValue();
			this.state = 944;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 943;
				this.keyName();
				}
				}
				this.state = 946;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			this.state = 950;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.LIMIT) {
				{
				this.state = 948;
				this.match(RedisSqlParser.LIMIT);
				this.state = 949;
				this.intValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSismember(): CmdSismemberContext {
		let _localctx: CmdSismemberContext = new CmdSismemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 212, RedisSqlParser.RULE_cmdSismember);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 952;
			this.match(RedisSqlParser.SISMEMBER);
			this.state = 953;
			this.keyName();
			this.state = 954;
			this.fieldName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSmove(): CmdSmoveContext {
		let _localctx: CmdSmoveContext = new CmdSmoveContext(this._ctx, this.state);
		this.enterRule(_localctx, 214, RedisSqlParser.RULE_cmdSmove);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 956;
			this.match(RedisSqlParser.SMOVE);
			this.state = 957;
			this.keyName();
			this.state = 958;
			this.keyName();
			this.state = 959;
			this.fieldName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSpop(): CmdSpopContext {
		let _localctx: CmdSpopContext = new CmdSpopContext(this._ctx, this.state);
		this.enterRule(_localctx, 216, RedisSqlParser.RULE_cmdSpop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 961;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.SPOP || _la === RedisSqlParser.SRANDMEMBER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 962;
			this.keyName();
			this.state = 964;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.INTEGER_NUM) {
				{
				this.state = 963;
				this.intValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSscan(): CmdSscanContext {
		let _localctx: CmdSscanContext = new CmdSscanContext(this._ctx, this.state);
		this.enterRule(_localctx, 218, RedisSqlParser.RULE_cmdSscan);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 966;
			this.match(RedisSqlParser.SSCAN);
			this.state = 967;
			this.keyName();
			this.state = 968;
			this.intValue();
			this.state = 971;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.MATCH) {
				{
				this.state = 969;
				this.match(RedisSqlParser.MATCH);
				this.state = 970;
				this.pattern();
				}
			}

			this.state = 974;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 67, this._ctx) ) {
			case 1:
				{
				this.state = 973;
				this.countOpt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdBzmpop(): CmdBzmpopContext {
		let _localctx: CmdBzmpopContext = new CmdBzmpopContext(this._ctx, this.state);
		this.enterRule(_localctx, 220, RedisSqlParser.RULE_cmdBzmpop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 976;
			this.match(RedisSqlParser.BZMPOP);
			this.state = 977;
			this.intValue();
			this.state = 978;
			this.intValue();
			this.state = 980;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 979;
				this.keyName();
				}
				}
				this.state = 982;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			this.state = 984;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.MIN || _la === RedisSqlParser.MAX)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 986;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 69, this._ctx) ) {
			case 1:
				{
				this.state = 985;
				this.countOpt();
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdBzpopmax(): CmdBzpopmaxContext {
		let _localctx: CmdBzpopmaxContext = new CmdBzpopmaxContext(this._ctx, this.state);
		this.enterRule(_localctx, 222, RedisSqlParser.RULE_cmdBzpopmax);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 988;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.BZPOPMAX || _la === RedisSqlParser.BZPOPMIN)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 990;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 989;
				this.keyName();
				}
				}
				this.state = 992;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			this.state = 994;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZadd(): CmdZaddContext {
		let _localctx: CmdZaddContext = new CmdZaddContext(this._ctx, this.state);
		this.enterRule(_localctx, 224, RedisSqlParser.RULE_cmdZadd);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 996;
			this.match(RedisSqlParser.ZADD);
			this.state = 997;
			this.keyName();
			this.state = 999;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.NX || _la === RedisSqlParser.XX) {
				{
				this.state = 998;
				_la = this._input.LA(1);
				if (!(_la === RedisSqlParser.NX || _la === RedisSqlParser.XX)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 1002;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.GT || _la === RedisSqlParser.LT) {
				{
				this.state = 1001;
				_la = this._input.LA(1);
				if (!(_la === RedisSqlParser.GT || _la === RedisSqlParser.LT)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 1005;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.CH) {
				{
				this.state = 1004;
				this.match(RedisSqlParser.CH);
				}
			}

			this.state = 1008;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.INCR) {
				{
				this.state = 1007;
				this.match(RedisSqlParser.INCR);
				}
			}

			this.state = 1011;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1010;
				this.intAndString();
				}
				}
				this.state = 1013;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.INTEGER_NUM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZcard(): CmdZcardContext {
		let _localctx: CmdZcardContext = new CmdZcardContext(this._ctx, this.state);
		this.enterRule(_localctx, 226, RedisSqlParser.RULE_cmdZcard);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1015;
			this.match(RedisSqlParser.ZCARD);
			this.state = 1016;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZcount(): CmdZcountContext {
		let _localctx: CmdZcountContext = new CmdZcountContext(this._ctx, this.state);
		this.enterRule(_localctx, 228, RedisSqlParser.RULE_cmdZcount);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1018;
			_la = this._input.LA(1);
			if (!(((((_la - 116)) & ~0x1F) === 0 && ((1 << (_la - 116)) & ((1 << (RedisSqlParser.ZCOUNT - 116)) | (1 << (RedisSqlParser.ZLEXCOUNT - 116)) | (1 << (RedisSqlParser.ZREMRANGEBYLEX - 116)) | (1 << (RedisSqlParser.ZREMRANGEBYSCORE - 116)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1019;
			this.keyName();
			this.state = 1020;
			this.min();
			this.state = 1021;
			this.max();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZdiff(): CmdZdiffContext {
		let _localctx: CmdZdiffContext = new CmdZdiffContext(this._ctx, this.state);
		this.enterRule(_localctx, 230, RedisSqlParser.RULE_cmdZdiff);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1023;
			this.match(RedisSqlParser.ZDIFF);
			this.state = 1024;
			this.intValue();
			this.state = 1026;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1025;
				this.keyName();
				}
				}
				this.state = 1028;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			this.state = 1031;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.WITHSCORES) {
				{
				this.state = 1030;
				this.match(RedisSqlParser.WITHSCORES);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZdiffstore(): CmdZdiffstoreContext {
		let _localctx: CmdZdiffstoreContext = new CmdZdiffstoreContext(this._ctx, this.state);
		this.enterRule(_localctx, 232, RedisSqlParser.RULE_cmdZdiffstore);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1033;
			this.match(RedisSqlParser.ZDIFFSTORE);
			this.state = 1034;
			this.keyName();
			this.state = 1035;
			this.intValue();
			this.state = 1037;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1036;
				this.keyName();
				}
				}
				this.state = 1039;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZincrby(): CmdZincrbyContext {
		let _localctx: CmdZincrbyContext = new CmdZincrbyContext(this._ctx, this.state);
		this.enterRule(_localctx, 234, RedisSqlParser.RULE_cmdZincrby);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1041;
			this.match(RedisSqlParser.ZINCRBY);
			this.state = 1042;
			this.keyName();
			this.state = 1043;
			this.intValue();
			this.state = 1044;
			this.fieldName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZinter(): CmdZinterContext {
		let _localctx: CmdZinterContext = new CmdZinterContext(this._ctx, this.state);
		this.enterRule(_localctx, 236, RedisSqlParser.RULE_cmdZinter);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1046;
			this.match(RedisSqlParser.ZINTER);
			this.state = 1047;
			this.intValue();
			this.state = 1049;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1048;
				this.keyName();
				}
				}
				this.state = 1051;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			this.state = 1059;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.WEIGHTS) {
				{
				this.state = 1053;
				this.match(RedisSqlParser.WEIGHTS);
				this.state = 1055;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1054;
					this.intValue();
					}
					}
					this.state = 1057;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === RedisSqlParser.INTEGER_NUM);
				}
			}

			this.state = 1063;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.AGGREGATE) {
				{
				this.state = 1061;
				this.match(RedisSqlParser.AGGREGATE);
				this.state = 1062;
				_la = this._input.LA(1);
				if (!(((((_la - 291)) & ~0x1F) === 0 && ((1 << (_la - 291)) & ((1 << (RedisSqlParser.MIN - 291)) | (1 << (RedisSqlParser.MAX - 291)) | (1 << (RedisSqlParser.SUM - 291)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 1066;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.WITHSCORES) {
				{
				this.state = 1065;
				this.match(RedisSqlParser.WITHSCORES);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZintercard(): CmdZintercardContext {
		let _localctx: CmdZintercardContext = new CmdZintercardContext(this._ctx, this.state);
		this.enterRule(_localctx, 238, RedisSqlParser.RULE_cmdZintercard);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1068;
			this.match(RedisSqlParser.ZINTERCARD);
			this.state = 1069;
			this.intValue();
			this.state = 1071;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1070;
				this.keyName();
				}
				}
				this.state = 1073;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			this.state = 1077;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.LIMIT) {
				{
				this.state = 1075;
				this.match(RedisSqlParser.LIMIT);
				this.state = 1076;
				this.intValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZinterstore(): CmdZinterstoreContext {
		let _localctx: CmdZinterstoreContext = new CmdZinterstoreContext(this._ctx, this.state);
		this.enterRule(_localctx, 240, RedisSqlParser.RULE_cmdZinterstore);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1079;
			this.match(RedisSqlParser.ZINTERSTORE);
			this.state = 1080;
			this.keyName();
			this.state = 1081;
			this.intValue();
			this.state = 1083;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1082;
				this.keyName();
				}
				}
				this.state = 1085;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			this.state = 1093;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.WEIGHTS) {
				{
				this.state = 1087;
				this.match(RedisSqlParser.WEIGHTS);
				this.state = 1089;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1088;
					this.intValue();
					}
					}
					this.state = 1091;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === RedisSqlParser.INTEGER_NUM);
				}
			}

			this.state = 1097;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.AGGREGATE) {
				{
				this.state = 1095;
				this.match(RedisSqlParser.AGGREGATE);
				this.state = 1096;
				_la = this._input.LA(1);
				if (!(((((_la - 291)) & ~0x1F) === 0 && ((1 << (_la - 291)) & ((1 << (RedisSqlParser.MIN - 291)) | (1 << (RedisSqlParser.MAX - 291)) | (1 << (RedisSqlParser.SUM - 291)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZmpop(): CmdZmpopContext {
		let _localctx: CmdZmpopContext = new CmdZmpopContext(this._ctx, this.state);
		this.enterRule(_localctx, 242, RedisSqlParser.RULE_cmdZmpop);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1099;
			this.match(RedisSqlParser.ZMPOP);
			this.state = 1100;
			this.intValue();
			this.state = 1102;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1101;
				this.keyName();
				}
				}
				this.state = 1104;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			this.state = 1106;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.MIN || _la === RedisSqlParser.MAX)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1107;
			this.countOpt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZmscore(): CmdZmscoreContext {
		let _localctx: CmdZmscoreContext = new CmdZmscoreContext(this._ctx, this.state);
		this.enterRule(_localctx, 244, RedisSqlParser.RULE_cmdZmscore);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1109;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.ZMSCORE || _la === RedisSqlParser.ZREM)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1110;
			this.keyName();
			this.state = 1112;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1111;
				this.fieldName();
				}
				}
				this.state = 1114;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZpopmax(): CmdZpopmaxContext {
		let _localctx: CmdZpopmaxContext = new CmdZpopmaxContext(this._ctx, this.state);
		this.enterRule(_localctx, 246, RedisSqlParser.RULE_cmdZpopmax);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1116;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.ZPOPMAX || _la === RedisSqlParser.ZPOPMIN)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1117;
			this.keyName();
			this.state = 1119;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.INTEGER_NUM) {
				{
				this.state = 1118;
				this.intValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZrandmember(): CmdZrandmemberContext {
		let _localctx: CmdZrandmemberContext = new CmdZrandmemberContext(this._ctx, this.state);
		this.enterRule(_localctx, 248, RedisSqlParser.RULE_cmdZrandmember);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1121;
			this.match(RedisSqlParser.ZRANDMEMBER);
			this.state = 1122;
			this.keyName();
			this.state = 1127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.INTEGER_NUM) {
				{
				this.state = 1123;
				this.intValue();
				this.state = 1125;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la === RedisSqlParser.WITHSCORES) {
					{
					this.state = 1124;
					this.match(RedisSqlParser.WITHSCORES);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZrange(): CmdZrangeContext {
		let _localctx: CmdZrangeContext = new CmdZrangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 250, RedisSqlParser.RULE_cmdZrange);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1129;
			this.match(RedisSqlParser.ZRANGE);
			this.state = 1130;
			this.keyName();
			this.state = 1131;
			this.min();
			this.state = 1132;
			this.max();
			this.state = 1134;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.BYSCORE || _la === RedisSqlParser.BYLEX) {
				{
				this.state = 1133;
				_la = this._input.LA(1);
				if (!(_la === RedisSqlParser.BYSCORE || _la === RedisSqlParser.BYLEX)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 1137;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.REV) {
				{
				this.state = 1136;
				this.match(RedisSqlParser.REV);
				}
			}

			this.state = 1140;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.LIMIT) {
				{
				this.state = 1139;
				this.limitOpt();
				}
			}

			this.state = 1143;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.WITHSCORES) {
				{
				this.state = 1142;
				this.match(RedisSqlParser.WITHSCORES);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZrangebylex(): CmdZrangebylexContext {
		let _localctx: CmdZrangebylexContext = new CmdZrangebylexContext(this._ctx, this.state);
		this.enterRule(_localctx, 252, RedisSqlParser.RULE_cmdZrangebylex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1145;
			this.match(RedisSqlParser.ZRANGEBYLEX);
			this.state = 1146;
			this.keyName();
			this.state = 1147;
			this.min();
			this.state = 1148;
			this.max();
			this.state = 1150;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.LIMIT) {
				{
				this.state = 1149;
				this.limitOpt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZrangebyscore(): CmdZrangebyscoreContext {
		let _localctx: CmdZrangebyscoreContext = new CmdZrangebyscoreContext(this._ctx, this.state);
		this.enterRule(_localctx, 254, RedisSqlParser.RULE_cmdZrangebyscore);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1152;
			this.match(RedisSqlParser.ZRANGEBYSCORE);
			this.state = 1153;
			this.keyName();
			this.state = 1154;
			this.min();
			this.state = 1155;
			this.max();
			this.state = 1157;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.WITHSCORES) {
				{
				this.state = 1156;
				this.match(RedisSqlParser.WITHSCORES);
				}
			}

			this.state = 1160;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.LIMIT) {
				{
				this.state = 1159;
				this.limitOpt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZrangestore(): CmdZrangestoreContext {
		let _localctx: CmdZrangestoreContext = new CmdZrangestoreContext(this._ctx, this.state);
		this.enterRule(_localctx, 256, RedisSqlParser.RULE_cmdZrangestore);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1162;
			this.match(RedisSqlParser.ZRANGESTORE);
			this.state = 1163;
			this.keyName();
			this.state = 1164;
			this.keyName();
			this.state = 1165;
			this.min();
			this.state = 1166;
			this.max();
			this.state = 1168;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.BYSCORE || _la === RedisSqlParser.BYLEX) {
				{
				this.state = 1167;
				_la = this._input.LA(1);
				if (!(_la === RedisSqlParser.BYSCORE || _la === RedisSqlParser.BYLEX)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 1171;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.LIMIT) {
				{
				this.state = 1170;
				this.limitOpt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZrank(): CmdZrankContext {
		let _localctx: CmdZrankContext = new CmdZrankContext(this._ctx, this.state);
		this.enterRule(_localctx, 258, RedisSqlParser.RULE_cmdZrank);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1173;
			_la = this._input.LA(1);
			if (!(((((_la - 133)) & ~0x1F) === 0 && ((1 << (_la - 133)) & ((1 << (RedisSqlParser.ZRANK - 133)) | (1 << (RedisSqlParser.ZREVRANK - 133)) | (1 << (RedisSqlParser.ZSCORE - 133)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1174;
			this.keyName();
			this.state = 1175;
			this.fieldName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZremrangebyrank(): CmdZremrangebyrankContext {
		let _localctx: CmdZremrangebyrankContext = new CmdZremrangebyrankContext(this._ctx, this.state);
		this.enterRule(_localctx, 260, RedisSqlParser.RULE_cmdZremrangebyrank);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1177;
			this.match(RedisSqlParser.ZREMRANGEBYRANK);
			this.state = 1178;
			this.keyName();
			this.state = 1179;
			this.intValue();
			this.state = 1180;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZrevrange(): CmdZrevrangeContext {
		let _localctx: CmdZrevrangeContext = new CmdZrevrangeContext(this._ctx, this.state);
		this.enterRule(_localctx, 262, RedisSqlParser.RULE_cmdZrevrange);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1182;
			this.match(RedisSqlParser.ZREVRANGE);
			this.state = 1183;
			this.keyName();
			this.state = 1184;
			this.intValue();
			this.state = 1185;
			this.intValue();
			this.state = 1187;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.WITHSCORES) {
				{
				this.state = 1186;
				this.match(RedisSqlParser.WITHSCORES);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZrevrangebylex(): CmdZrevrangebylexContext {
		let _localctx: CmdZrevrangebylexContext = new CmdZrevrangebylexContext(this._ctx, this.state);
		this.enterRule(_localctx, 264, RedisSqlParser.RULE_cmdZrevrangebylex);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1189;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.ZREVRANGEBYLEX || _la === RedisSqlParser.ZREVRANGEBYSCORE)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1190;
			this.keyName();
			this.state = 1191;
			this.max();
			this.state = 1192;
			this.min();
			this.state = 1194;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.WITHSCORES) {
				{
				this.state = 1193;
				this.match(RedisSqlParser.WITHSCORES);
				}
			}

			this.state = 1197;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.LIMIT) {
				{
				this.state = 1196;
				this.limitOpt();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZscan(): CmdZscanContext {
		let _localctx: CmdZscanContext = new CmdZscanContext(this._ctx, this.state);
		this.enterRule(_localctx, 266, RedisSqlParser.RULE_cmdZscan);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1199;
			this.match(RedisSqlParser.ZSCAN);
			this.state = 1200;
			this.keyName();
			this.state = 1201;
			this.intValue();
			this.state = 1204;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.MATCH) {
				{
				this.state = 1202;
				this.match(RedisSqlParser.MATCH);
				this.state = 1203;
				this.pattern();
				}
			}

			this.state = 1206;
			this.countOpt();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZunion(): CmdZunionContext {
		let _localctx: CmdZunionContext = new CmdZunionContext(this._ctx, this.state);
		this.enterRule(_localctx, 268, RedisSqlParser.RULE_cmdZunion);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1208;
			this.match(RedisSqlParser.ZUNION);
			this.state = 1209;
			this.intValue();
			this.state = 1211;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1210;
				this.keyName();
				}
				}
				this.state = 1213;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			this.state = 1221;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.WEIGHTS) {
				{
				this.state = 1215;
				this.match(RedisSqlParser.WEIGHTS);
				this.state = 1217;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1216;
					this.intValue();
					}
					}
					this.state = 1219;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === RedisSqlParser.INTEGER_NUM);
				}
			}

			this.state = 1225;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.AGGREGATE) {
				{
				this.state = 1223;
				this.match(RedisSqlParser.AGGREGATE);
				this.state = 1224;
				_la = this._input.LA(1);
				if (!(((((_la - 291)) & ~0x1F) === 0 && ((1 << (_la - 291)) & ((1 << (RedisSqlParser.MIN - 291)) | (1 << (RedisSqlParser.MAX - 291)) | (1 << (RedisSqlParser.SUM - 291)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 1228;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.WITHSCORES) {
				{
				this.state = 1227;
				this.match(RedisSqlParser.WITHSCORES);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdZunionstore(): CmdZunionstoreContext {
		let _localctx: CmdZunionstoreContext = new CmdZunionstoreContext(this._ctx, this.state);
		this.enterRule(_localctx, 270, RedisSqlParser.RULE_cmdZunionstore);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1230;
			this.match(RedisSqlParser.ZUNIONSTORE);
			this.state = 1231;
			this.keyName();
			this.state = 1232;
			this.intValue();
			this.state = 1234;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1233;
				this.keyName();
				}
				}
				this.state = 1236;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			this.state = 1244;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.WEIGHTS) {
				{
				this.state = 1238;
				this.match(RedisSqlParser.WEIGHTS);
				this.state = 1240;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1239;
					this.intValue();
					}
					}
					this.state = 1242;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === RedisSqlParser.INTEGER_NUM);
				}
			}

			this.state = 1248;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.AGGREGATE) {
				{
				this.state = 1246;
				this.match(RedisSqlParser.AGGREGATE);
				this.state = 1247;
				_la = this._input.LA(1);
				if (!(((((_la - 291)) & ~0x1F) === 0 && ((1 << (_la - 291)) & ((1 << (RedisSqlParser.MIN - 291)) | (1 << (RedisSqlParser.MAX - 291)) | (1 << (RedisSqlParser.SUM - 291)))) !== 0))) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdScriptKill(): CmdScriptKillContext {
		let _localctx: CmdScriptKillContext = new CmdScriptKillContext(this._ctx, this.state);
		this.enterRule(_localctx, 272, RedisSqlParser.RULE_cmdScriptKill);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1250;
			this.match(RedisSqlParser.SCRIPT);
			this.state = 1251;
			this.match(RedisSqlParser.KILL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdScriptLoad(): CmdScriptLoadContext {
		let _localctx: CmdScriptLoadContext = new CmdScriptLoadContext(this._ctx, this.state);
		this.enterRule(_localctx, 274, RedisSqlParser.RULE_cmdScriptLoad);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1253;
			this.match(RedisSqlParser.SCRIPT);
			this.state = 1254;
			this.match(RedisSqlParser.LOAD);
			this.state = 1255;
			this.multiString();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdEval(): CmdEvalContext {
		let _localctx: CmdEvalContext = new CmdEvalContext(this._ctx, this.state);
		this.enterRule(_localctx, 276, RedisSqlParser.RULE_cmdEval);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1257;
			this.match(RedisSqlParser.EVAL);
			this.state = 1258;
			this.multiString();
			this.state = 1259;
			this.intValue();
			this.state = 1263;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN) {
				{
				{
				this.state = 1260;
				this.keyName();
				}
				}
				this.state = 1265;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdEvalsha(): CmdEvalshaContext {
		let _localctx: CmdEvalshaContext = new CmdEvalshaContext(this._ctx, this.state);
		this.enterRule(_localctx, 278, RedisSqlParser.RULE_cmdEvalsha);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1266;
			this.match(RedisSqlParser.EVALSHA);
			this.state = 1267;
			this.stringValue();
			this.state = 1268;
			this.intValue();
			this.state = 1272;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN) {
				{
				{
				this.state = 1269;
				this.keyName();
				}
				}
				this.state = 1274;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdScriptExists(): CmdScriptExistsContext {
		let _localctx: CmdScriptExistsContext = new CmdScriptExistsContext(this._ctx, this.state);
		this.enterRule(_localctx, 280, RedisSqlParser.RULE_cmdScriptExists);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1275;
			this.match(RedisSqlParser.SCRIPT);
			this.state = 1276;
			this.match(RedisSqlParser.EXISTS);
			this.state = 1277;
			this.stringValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdScriptFlush(): CmdScriptFlushContext {
		let _localctx: CmdScriptFlushContext = new CmdScriptFlushContext(this._ctx, this.state);
		this.enterRule(_localctx, 282, RedisSqlParser.RULE_cmdScriptFlush);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1279;
			this.match(RedisSqlParser.SCRIPT);
			this.state = 1280;
			this.match(RedisSqlParser.FLUSH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdExec(): CmdExecContext {
		let _localctx: CmdExecContext = new CmdExecContext(this._ctx, this.state);
		this.enterRule(_localctx, 284, RedisSqlParser.RULE_cmdExec);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1282;
			this.match(RedisSqlParser.EXEC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdWatch(): CmdWatchContext {
		let _localctx: CmdWatchContext = new CmdWatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 286, RedisSqlParser.RULE_cmdWatch);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1284;
			this.match(RedisSqlParser.WATCH);
			this.state = 1286;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1285;
				this.keyName();
				}
				}
				this.state = 1288;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdDiscard(): CmdDiscardContext {
		let _localctx: CmdDiscardContext = new CmdDiscardContext(this._ctx, this.state);
		this.enterRule(_localctx, 288, RedisSqlParser.RULE_cmdDiscard);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1290;
			this.match(RedisSqlParser.DISCARD);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdUnwatch(): CmdUnwatchContext {
		let _localctx: CmdUnwatchContext = new CmdUnwatchContext(this._ctx, this.state);
		this.enterRule(_localctx, 290, RedisSqlParser.RULE_cmdUnwatch);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1292;
			this.match(RedisSqlParser.UNWATCH);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdMulti(): CmdMultiContext {
		let _localctx: CmdMultiContext = new CmdMultiContext(this._ctx, this.state);
		this.enterRule(_localctx, 292, RedisSqlParser.RULE_cmdMulti);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1294;
			this.match(RedisSqlParser.MULTI);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdPfmerge(): CmdPfmergeContext {
		let _localctx: CmdPfmergeContext = new CmdPfmergeContext(this._ctx, this.state);
		this.enterRule(_localctx, 294, RedisSqlParser.RULE_cmdPfmerge);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1296;
			this.match(RedisSqlParser.PFMERGE);
			this.state = 1297;
			this.keyName();
			this.state = 1299;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1298;
				this.keyName();
				}
				}
				this.state = 1301;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdPfadd(): CmdPfaddContext {
		let _localctx: CmdPfaddContext = new CmdPfaddContext(this._ctx, this.state);
		this.enterRule(_localctx, 296, RedisSqlParser.RULE_cmdPfadd);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1303;
			this.match(RedisSqlParser.PFADD);
			this.state = 1304;
			this.keyName();
			this.state = 1306;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1305;
				this.fieldName();
				}
				}
				this.state = 1308;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdPfcount(): CmdPfcountContext {
		let _localctx: CmdPfcountContext = new CmdPfcountContext(this._ctx, this.state);
		this.enterRule(_localctx, 298, RedisSqlParser.RULE_cmdPfcount);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1310;
			this.match(RedisSqlParser.PFCOUNT);
			this.state = 1311;
			this.keyName();
			this.state = 1313;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1312;
				this.keyName();
				}
				}
				this.state = 1315;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSsubscribe(): CmdSsubscribeContext {
		let _localctx: CmdSsubscribeContext = new CmdSsubscribeContext(this._ctx, this.state);
		this.enterRule(_localctx, 300, RedisSqlParser.RULE_cmdSsubscribe);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1317;
			_la = this._input.LA(1);
			if (!(((((_la - 146)) & ~0x1F) === 0 && ((1 << (_la - 146)) & ((1 << (RedisSqlParser.PSUBSCRIBE - 146)) | (1 << (RedisSqlParser.SUBSCRIBE - 146)) | (1 << (RedisSqlParser.SSUBSCRIBE - 146)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1319;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1318;
				this.keyName();
				}
				}
				this.state = 1321;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdUnsubscribe(): CmdUnsubscribeContext {
		let _localctx: CmdUnsubscribeContext = new CmdUnsubscribeContext(this._ctx, this.state);
		this.enterRule(_localctx, 302, RedisSqlParser.RULE_cmdUnsubscribe);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1323;
			_la = this._input.LA(1);
			if (!(((((_la - 154)) & ~0x1F) === 0 && ((1 << (_la - 154)) & ((1 << (RedisSqlParser.PUNSUBSCRIBE - 154)) | (1 << (RedisSqlParser.UNSUBSCRIBE - 154)) | (1 << (RedisSqlParser.SUNSUBSCRIBE - 154)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1329;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN) {
				{
				this.state = 1325;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1324;
					this.keyName();
					}
					}
					this.state = 1327;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdPusubnumpat(): CmdPusubnumpatContext {
		let _localctx: CmdPusubnumpatContext = new CmdPusubnumpatContext(this._ctx, this.state);
		this.enterRule(_localctx, 304, RedisSqlParser.RULE_cmdPusubnumpat);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1331;
			this.match(RedisSqlParser.PUBSUB);
			this.state = 1332;
			this.match(RedisSqlParser.NUMPAT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdPusubnumsub(): CmdPusubnumsubContext {
		let _localctx: CmdPusubnumsubContext = new CmdPusubnumsubContext(this._ctx, this.state);
		this.enterRule(_localctx, 306, RedisSqlParser.RULE_cmdPusubnumsub);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1334;
			this.match(RedisSqlParser.PUBSUB);
			this.state = 1335;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.NUMSUB || _la === RedisSqlParser.SHARDNUMSUB)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1341;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN) {
				{
				this.state = 1337;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1336;
					this.keyName();
					}
					}
					this.state = 1339;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdPusubchannels(): CmdPusubchannelsContext {
		let _localctx: CmdPusubchannelsContext = new CmdPusubchannelsContext(this._ctx, this.state);
		this.enterRule(_localctx, 308, RedisSqlParser.RULE_cmdPusubchannels);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1343;
			this.match(RedisSqlParser.PUBSUB);
			this.state = 1344;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.CHANNELS || _la === RedisSqlParser.SHARDCHANNELS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1346;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN) {
				{
				this.state = 1345;
				this.keyName();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdPublish(): CmdPublishContext {
		let _localctx: CmdPublishContext = new CmdPublishContext(this._ctx, this.state);
		this.enterRule(_localctx, 310, RedisSqlParser.RULE_cmdPublish);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1348;
			this.match(RedisSqlParser.PUBLISH);
			this.state = 1349;
			this.keyName();
			this.state = 1350;
			this.fieldName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdAsking(): CmdAskingContext {
		let _localctx: CmdAskingContext = new CmdAskingContext(this._ctx, this.state);
		this.enterRule(_localctx, 312, RedisSqlParser.RULE_cmdAsking);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1352;
			this.match(RedisSqlParser.ASKING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdReadonly(): CmdReadonlyContext {
		let _localctx: CmdReadonlyContext = new CmdReadonlyContext(this._ctx, this.state);
		this.enterRule(_localctx, 314, RedisSqlParser.RULE_cmdReadonly);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1354;
			this.match(RedisSqlParser.READONLY);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdReadwrite(): CmdReadwriteContext {
		let _localctx: CmdReadwriteContext = new CmdReadwriteContext(this._ctx, this.state);
		this.enterRule(_localctx, 316, RedisSqlParser.RULE_cmdReadwrite);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1356;
			this.match(RedisSqlParser.READWRITE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdAddDelSlots(): CmdAddDelSlotsContext {
		let _localctx: CmdAddDelSlotsContext = new CmdAddDelSlotsContext(this._ctx, this.state);
		this.enterRule(_localctx, 318, RedisSqlParser.RULE_cmdAddDelSlots);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1358;
			this.match(RedisSqlParser.CLUSTER);
			this.state = 1359;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.ADDSLOTS || _la === RedisSqlParser.DELSLOTS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1361;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 1360;
				this.intValue();
				}
				}
				this.state = 1363;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === RedisSqlParser.INTEGER_NUM);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdCountKeysInSlot(): CmdCountKeysInSlotContext {
		let _localctx: CmdCountKeysInSlotContext = new CmdCountKeysInSlotContext(this._ctx, this.state);
		this.enterRule(_localctx, 320, RedisSqlParser.RULE_cmdCountKeysInSlot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1365;
			this.match(RedisSqlParser.CLUSTER);
			this.state = 1366;
			this.match(RedisSqlParser.COUNTKEYSINSLOT);
			this.state = 1367;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdFailOver(): CmdFailOverContext {
		let _localctx: CmdFailOverContext = new CmdFailOverContext(this._ctx, this.state);
		this.enterRule(_localctx, 322, RedisSqlParser.RULE_cmdFailOver);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1369;
			this.match(RedisSqlParser.CLUSTER);
			this.state = 1370;
			this.match(RedisSqlParser.FAILOVER);
			this.state = 1372;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.FORCE || _la === RedisSqlParser.TAKEOVER) {
				{
				this.state = 1371;
				_la = this._input.LA(1);
				if (!(_la === RedisSqlParser.FORCE || _la === RedisSqlParser.TAKEOVER)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdForget(): CmdForgetContext {
		let _localctx: CmdForgetContext = new CmdForgetContext(this._ctx, this.state);
		this.enterRule(_localctx, 324, RedisSqlParser.RULE_cmdForget);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1374;
			this.match(RedisSqlParser.CLUSTER);
			this.state = 1375;
			this.match(RedisSqlParser.FORGET);
			this.state = 1376;
			this.stringValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdGetKeysInSlot(): CmdGetKeysInSlotContext {
		let _localctx: CmdGetKeysInSlotContext = new CmdGetKeysInSlotContext(this._ctx, this.state);
		this.enterRule(_localctx, 326, RedisSqlParser.RULE_cmdGetKeysInSlot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1378;
			this.match(RedisSqlParser.CLUSTER);
			this.state = 1379;
			this.match(RedisSqlParser.GETKEYSINSLOT);
			this.state = 1380;
			this.intValue();
			this.state = 1381;
			this.cout();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdClusterOrder(): CmdClusterOrderContext {
		let _localctx: CmdClusterOrderContext = new CmdClusterOrderContext(this._ctx, this.state);
		this.enterRule(_localctx, 328, RedisSqlParser.RULE_cmdClusterOrder);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1383;
			this.match(RedisSqlParser.CLUSTER);
			this.state = 1384;
			_la = this._input.LA(1);
			if (!(((((_la - 181)) & ~0x1F) === 0 && ((1 << (_la - 181)) & ((1 << (RedisSqlParser.BUMPEPOCH - 181)) | (1 << (RedisSqlParser.FLUSHSLOTS - 181)) | (1 << (RedisSqlParser.LINKS - 181)) | (1 << (RedisSqlParser.MYID - 181)) | (1 << (RedisSqlParser.MYSHARDID - 181)) | (1 << (RedisSqlParser.NODES - 181)) | (1 << (RedisSqlParser.SAVECONFIG - 181)) | (1 << (RedisSqlParser.SHARDS - 181)))) !== 0) || _la === RedisSqlParser.INFO || _la === RedisSqlParser.SLOTS)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdKeySlot(): CmdKeySlotContext {
		let _localctx: CmdKeySlotContext = new CmdKeySlotContext(this._ctx, this.state);
		this.enterRule(_localctx, 330, RedisSqlParser.RULE_cmdKeySlot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1386;
			this.match(RedisSqlParser.CLUSTER);
			this.state = 1387;
			this.match(RedisSqlParser.KEYSLOT);
			this.state = 1388;
			this.keyName();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdMeet(): CmdMeetContext {
		let _localctx: CmdMeetContext = new CmdMeetContext(this._ctx, this.state);
		this.enterRule(_localctx, 332, RedisSqlParser.RULE_cmdMeet);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1390;
			this.match(RedisSqlParser.CLUSTER);
			this.state = 1391;
			this.match(RedisSqlParser.MEET);
			this.state = 1392;
			this.match(RedisSqlParser.HOST);
			this.state = 1393;
			this.port();
			this.state = 1395;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.INTEGER_NUM) {
				{
				this.state = 1394;
				this.intValue();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdReplicaesSlave(): CmdReplicaesSlaveContext {
		let _localctx: CmdReplicaesSlaveContext = new CmdReplicaesSlaveContext(this._ctx, this.state);
		this.enterRule(_localctx, 334, RedisSqlParser.RULE_cmdReplicaesSlave);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1397;
			this.match(RedisSqlParser.CLUSTER);
			this.state = 1398;
			_la = this._input.LA(1);
			if (!(((((_la - 197)) & ~0x1F) === 0 && ((1 << (_la - 197)) & ((1 << (RedisSqlParser.REPLICAS - 197)) | (1 << (RedisSqlParser.REPLICATE - 197)) | (1 << (RedisSqlParser.SLAVES - 197)))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 1399;
			this.stringValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdReset(): CmdResetContext {
		let _localctx: CmdResetContext = new CmdResetContext(this._ctx, this.state);
		this.enterRule(_localctx, 336, RedisSqlParser.RULE_cmdReset);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1401;
			this.match(RedisSqlParser.CLUSTER);
			this.state = 1402;
			this.match(RedisSqlParser.RESET);
			this.state = 1403;
			_la = this._input.LA(1);
			if (!(_la === RedisSqlParser.HARD || _la === RedisSqlParser.SOFT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSetSlot(): CmdSetSlotContext {
		let _localctx: CmdSetSlotContext = new CmdSetSlotContext(this._ctx, this.state);
		this.enterRule(_localctx, 338, RedisSqlParser.RULE_cmdSetSlot);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1405;
			this.match(RedisSqlParser.CLUSTER);
			this.state = 1406;
			this.match(RedisSqlParser.SETSLOT);
			this.state = 1407;
			this.intValue();
			this.state = 1418;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RedisSqlParser.MIGRATING:
				{
				{
				this.state = 1408;
				this.match(RedisSqlParser.MIGRATING);
				this.state = 1409;
				this.stringValue();
				}
				}
				break;
			case RedisSqlParser.EOF:
			case RedisSqlParser.COPY:
			case RedisSqlParser.DEL:
			case RedisSqlParser.DUMP:
			case RedisSqlParser.EXISTS:
			case RedisSqlParser.EXPIRE:
			case RedisSqlParser.EXPIREAT:
			case RedisSqlParser.EXPIRETIME:
			case RedisSqlParser.KEYS:
			case RedisSqlParser.MOVE:
			case RedisSqlParser.OBJECT:
			case RedisSqlParser.PERSIST:
			case RedisSqlParser.PEXPIRE:
			case RedisSqlParser.PEXPIREAT:
			case RedisSqlParser.PEXPIRETIME:
			case RedisSqlParser.TTL:
			case RedisSqlParser.PTTL:
			case RedisSqlParser.RANDOMKEY:
			case RedisSqlParser.RENAME:
			case RedisSqlParser.RENAMENX:
			case RedisSqlParser.RESTORE:
			case RedisSqlParser.SCAN:
			case RedisSqlParser.SORT:
			case RedisSqlParser.SORT_RO:
			case RedisSqlParser.TOUCH:
			case RedisSqlParser.TYPE:
			case RedisSqlParser.UNLINK:
			case RedisSqlParser.WAIT:
			case RedisSqlParser.APPEND:
			case RedisSqlParser.DECR:
			case RedisSqlParser.DECRBY:
			case RedisSqlParser.GET:
			case RedisSqlParser.GETDEL:
			case RedisSqlParser.GETEX:
			case RedisSqlParser.GETRANGE:
			case RedisSqlParser.GETSET:
			case RedisSqlParser.GETBIT:
			case RedisSqlParser.INCR:
			case RedisSqlParser.INCRBY:
			case RedisSqlParser.INCRBYFLOAT:
			case RedisSqlParser.LCS:
			case RedisSqlParser.MGET:
			case RedisSqlParser.MSET:
			case RedisSqlParser.MSETNX:
			case RedisSqlParser.SETEX:
			case RedisSqlParser.PSETEX:
			case RedisSqlParser.SET:
			case RedisSqlParser.SETNX:
			case RedisSqlParser.SETRANGE:
			case RedisSqlParser.SETBIT:
			case RedisSqlParser.STRLEN:
			case RedisSqlParser.SUBSTR:
			case RedisSqlParser.HDEL:
			case RedisSqlParser.HEXISTS:
			case RedisSqlParser.HGET:
			case RedisSqlParser.HGETALL:
			case RedisSqlParser.HINCRBY:
			case RedisSqlParser.HINCRBYFLOAT:
			case RedisSqlParser.HKEYS:
			case RedisSqlParser.HLEN:
			case RedisSqlParser.HMGET:
			case RedisSqlParser.HMSET:
			case RedisSqlParser.HRANDFIELD:
			case RedisSqlParser.HSCAN:
			case RedisSqlParser.HSET:
			case RedisSqlParser.HSETNX:
			case RedisSqlParser.HSTRLEN:
			case RedisSqlParser.HVALS:
			case RedisSqlParser.BLMOVE:
			case RedisSqlParser.BLMPOP:
			case RedisSqlParser.BLPOP:
			case RedisSqlParser.BRPOP:
			case RedisSqlParser.BRPOPLPUSH:
			case RedisSqlParser.LINDEX:
			case RedisSqlParser.LINSERT:
			case RedisSqlParser.LLEN:
			case RedisSqlParser.LMOVE:
			case RedisSqlParser.LMPOP:
			case RedisSqlParser.LPOP:
			case RedisSqlParser.LPOS:
			case RedisSqlParser.LPUSH:
			case RedisSqlParser.LPUSHX:
			case RedisSqlParser.LRANGE:
			case RedisSqlParser.LREM:
			case RedisSqlParser.LSET:
			case RedisSqlParser.LTRIM:
			case RedisSqlParser.RPOP:
			case RedisSqlParser.RPOPLPUSH:
			case RedisSqlParser.RPUSH:
			case RedisSqlParser.RPUSHX:
			case RedisSqlParser.SADD:
			case RedisSqlParser.SCARD:
			case RedisSqlParser.SDIFF:
			case RedisSqlParser.SDIFFSTORE:
			case RedisSqlParser.SINTER:
			case RedisSqlParser.SINTERCARD:
			case RedisSqlParser.SINTERSTORE:
			case RedisSqlParser.SISMEMBER:
			case RedisSqlParser.SMEMBERS:
			case RedisSqlParser.SMISMEMBER:
			case RedisSqlParser.SMOVE:
			case RedisSqlParser.SPOP:
			case RedisSqlParser.SRANDMEMBER:
			case RedisSqlParser.SREM:
			case RedisSqlParser.SSCAN:
			case RedisSqlParser.SUNION:
			case RedisSqlParser.SUNIONSTORE:
			case RedisSqlParser.BZMPOP:
			case RedisSqlParser.BZPOPMAX:
			case RedisSqlParser.BZPOPMIN:
			case RedisSqlParser.ZADD:
			case RedisSqlParser.ZCARD:
			case RedisSqlParser.ZCOUNT:
			case RedisSqlParser.ZDIFF:
			case RedisSqlParser.ZDIFFSTORE:
			case RedisSqlParser.ZINCRBY:
			case RedisSqlParser.ZINTER:
			case RedisSqlParser.ZINTERCARD:
			case RedisSqlParser.ZINTERSTORE:
			case RedisSqlParser.ZLEXCOUNT:
			case RedisSqlParser.ZMPOP:
			case RedisSqlParser.ZMSCORE:
			case RedisSqlParser.ZPOPMAX:
			case RedisSqlParser.ZPOPMIN:
			case RedisSqlParser.ZRANDMEMBER:
			case RedisSqlParser.ZRANGE:
			case RedisSqlParser.ZRANGEBYLEX:
			case RedisSqlParser.ZRANGEBYSCORE:
			case RedisSqlParser.ZRANGESTORE:
			case RedisSqlParser.ZRANK:
			case RedisSqlParser.ZREM:
			case RedisSqlParser.ZREMRANGEBYLEX:
			case RedisSqlParser.ZREMRANGEBYRANK:
			case RedisSqlParser.ZREMRANGEBYSCORE:
			case RedisSqlParser.ZREVRANGE:
			case RedisSqlParser.ZREVRANGEBYLEX:
			case RedisSqlParser.ZREVRANGEBYSCORE:
			case RedisSqlParser.ZREVRANK:
			case RedisSqlParser.ZSCAN:
			case RedisSqlParser.ZSCORE:
			case RedisSqlParser.ZUNION:
			case RedisSqlParser.ZUNIONSTORE:
			case RedisSqlParser.PSUBSCRIBE:
			case RedisSqlParser.PUBSUB:
			case RedisSqlParser.PUBLISH:
			case RedisSqlParser.PUNSUBSCRIBE:
			case RedisSqlParser.SUBSCRIBE:
			case RedisSqlParser.UNSUBSCRIBE:
			case RedisSqlParser.SSUBSCRIBE:
			case RedisSqlParser.SUNSUBSCRIBE:
			case RedisSqlParser.ASKING:
			case RedisSqlParser.CLUSTER:
			case RedisSqlParser.IMPORTING:
			case RedisSqlParser.READONLY:
			case RedisSqlParser.READWRITE:
			case RedisSqlParser.FLUSHDB:
			case RedisSqlParser.SCRIPT:
			case RedisSqlParser.EVAL:
			case RedisSqlParser.EVALSHA:
			case RedisSqlParser.EXEC:
			case RedisSqlParser.WATCH:
			case RedisSqlParser.DISCARD:
			case RedisSqlParser.UNWATCH:
			case RedisSqlParser.MULTI:
			case RedisSqlParser.PFMERGE:
			case RedisSqlParser.PFADD:
			case RedisSqlParser.PFCOUNT:
			case RedisSqlParser.ECHO:
			case RedisSqlParser.PING:
			case RedisSqlParser.SAVE:
			case RedisSqlParser.SLOWLOG:
			case RedisSqlParser.LASTSAVE:
			case RedisSqlParser.CONFIG:
			case RedisSqlParser.CLIENT:
			case RedisSqlParser.SHUTDOWN:
			case RedisSqlParser.SYNC:
			case RedisSqlParser.ROLE:
			case RedisSqlParser.MONITOR:
			case RedisSqlParser.SLAVEOF:
			case RedisSqlParser.FLUSHALL:
			case RedisSqlParser.SELECT:
			case RedisSqlParser.QUIT:
			case RedisSqlParser.AUTH:
			case RedisSqlParser.DBSIZE:
			case RedisSqlParser.BGREWRITEAOF:
			case RedisSqlParser.TIME:
			case RedisSqlParser.INFO:
			case RedisSqlParser.BGSAVE:
			case RedisSqlParser.COMMAND:
			case RedisSqlParser.DEBUG:
			case RedisSqlParser.RESETSTAT:
			case RedisSqlParser.REWRITE:
			case RedisSqlParser.SETNAME:
			case RedisSqlParser.GETNAME:
			case RedisSqlParser.LIST:
			case RedisSqlParser.GETKEYS:
			case RedisSqlParser.COUNT:
			case RedisSqlParser.KILL:
			case RedisSqlParser.SEMI:
				{
				this.state = 1413;
				this._errHandler.sync(this);
				switch (this._input.LA(1)) {
				case RedisSqlParser.IMPORTING:
					{
					this.state = 1410;
					this.match(RedisSqlParser.IMPORTING);
					this.state = 1411;
					this.stringValue();
					}
					break;
				case RedisSqlParser.EOF:
				case RedisSqlParser.COPY:
				case RedisSqlParser.DEL:
				case RedisSqlParser.DUMP:
				case RedisSqlParser.EXISTS:
				case RedisSqlParser.EXPIRE:
				case RedisSqlParser.EXPIREAT:
				case RedisSqlParser.EXPIRETIME:
				case RedisSqlParser.KEYS:
				case RedisSqlParser.MOVE:
				case RedisSqlParser.OBJECT:
				case RedisSqlParser.PERSIST:
				case RedisSqlParser.PEXPIRE:
				case RedisSqlParser.PEXPIREAT:
				case RedisSqlParser.PEXPIRETIME:
				case RedisSqlParser.TTL:
				case RedisSqlParser.PTTL:
				case RedisSqlParser.RANDOMKEY:
				case RedisSqlParser.RENAME:
				case RedisSqlParser.RENAMENX:
				case RedisSqlParser.RESTORE:
				case RedisSqlParser.SCAN:
				case RedisSqlParser.SORT:
				case RedisSqlParser.SORT_RO:
				case RedisSqlParser.TOUCH:
				case RedisSqlParser.TYPE:
				case RedisSqlParser.UNLINK:
				case RedisSqlParser.WAIT:
				case RedisSqlParser.APPEND:
				case RedisSqlParser.DECR:
				case RedisSqlParser.DECRBY:
				case RedisSqlParser.GET:
				case RedisSqlParser.GETDEL:
				case RedisSqlParser.GETEX:
				case RedisSqlParser.GETRANGE:
				case RedisSqlParser.GETSET:
				case RedisSqlParser.GETBIT:
				case RedisSqlParser.INCR:
				case RedisSqlParser.INCRBY:
				case RedisSqlParser.INCRBYFLOAT:
				case RedisSqlParser.LCS:
				case RedisSqlParser.MGET:
				case RedisSqlParser.MSET:
				case RedisSqlParser.MSETNX:
				case RedisSqlParser.SETEX:
				case RedisSqlParser.PSETEX:
				case RedisSqlParser.SET:
				case RedisSqlParser.SETNX:
				case RedisSqlParser.SETRANGE:
				case RedisSqlParser.SETBIT:
				case RedisSqlParser.STRLEN:
				case RedisSqlParser.SUBSTR:
				case RedisSqlParser.HDEL:
				case RedisSqlParser.HEXISTS:
				case RedisSqlParser.HGET:
				case RedisSqlParser.HGETALL:
				case RedisSqlParser.HINCRBY:
				case RedisSqlParser.HINCRBYFLOAT:
				case RedisSqlParser.HKEYS:
				case RedisSqlParser.HLEN:
				case RedisSqlParser.HMGET:
				case RedisSqlParser.HMSET:
				case RedisSqlParser.HRANDFIELD:
				case RedisSqlParser.HSCAN:
				case RedisSqlParser.HSET:
				case RedisSqlParser.HSETNX:
				case RedisSqlParser.HSTRLEN:
				case RedisSqlParser.HVALS:
				case RedisSqlParser.BLMOVE:
				case RedisSqlParser.BLMPOP:
				case RedisSqlParser.BLPOP:
				case RedisSqlParser.BRPOP:
				case RedisSqlParser.BRPOPLPUSH:
				case RedisSqlParser.LINDEX:
				case RedisSqlParser.LINSERT:
				case RedisSqlParser.LLEN:
				case RedisSqlParser.LMOVE:
				case RedisSqlParser.LMPOP:
				case RedisSqlParser.LPOP:
				case RedisSqlParser.LPOS:
				case RedisSqlParser.LPUSH:
				case RedisSqlParser.LPUSHX:
				case RedisSqlParser.LRANGE:
				case RedisSqlParser.LREM:
				case RedisSqlParser.LSET:
				case RedisSqlParser.LTRIM:
				case RedisSqlParser.RPOP:
				case RedisSqlParser.RPOPLPUSH:
				case RedisSqlParser.RPUSH:
				case RedisSqlParser.RPUSHX:
				case RedisSqlParser.SADD:
				case RedisSqlParser.SCARD:
				case RedisSqlParser.SDIFF:
				case RedisSqlParser.SDIFFSTORE:
				case RedisSqlParser.SINTER:
				case RedisSqlParser.SINTERCARD:
				case RedisSqlParser.SINTERSTORE:
				case RedisSqlParser.SISMEMBER:
				case RedisSqlParser.SMEMBERS:
				case RedisSqlParser.SMISMEMBER:
				case RedisSqlParser.SMOVE:
				case RedisSqlParser.SPOP:
				case RedisSqlParser.SRANDMEMBER:
				case RedisSqlParser.SREM:
				case RedisSqlParser.SSCAN:
				case RedisSqlParser.SUNION:
				case RedisSqlParser.SUNIONSTORE:
				case RedisSqlParser.BZMPOP:
				case RedisSqlParser.BZPOPMAX:
				case RedisSqlParser.BZPOPMIN:
				case RedisSqlParser.ZADD:
				case RedisSqlParser.ZCARD:
				case RedisSqlParser.ZCOUNT:
				case RedisSqlParser.ZDIFF:
				case RedisSqlParser.ZDIFFSTORE:
				case RedisSqlParser.ZINCRBY:
				case RedisSqlParser.ZINTER:
				case RedisSqlParser.ZINTERCARD:
				case RedisSqlParser.ZINTERSTORE:
				case RedisSqlParser.ZLEXCOUNT:
				case RedisSqlParser.ZMPOP:
				case RedisSqlParser.ZMSCORE:
				case RedisSqlParser.ZPOPMAX:
				case RedisSqlParser.ZPOPMIN:
				case RedisSqlParser.ZRANDMEMBER:
				case RedisSqlParser.ZRANGE:
				case RedisSqlParser.ZRANGEBYLEX:
				case RedisSqlParser.ZRANGEBYSCORE:
				case RedisSqlParser.ZRANGESTORE:
				case RedisSqlParser.ZRANK:
				case RedisSqlParser.ZREM:
				case RedisSqlParser.ZREMRANGEBYLEX:
				case RedisSqlParser.ZREMRANGEBYRANK:
				case RedisSqlParser.ZREMRANGEBYSCORE:
				case RedisSqlParser.ZREVRANGE:
				case RedisSqlParser.ZREVRANGEBYLEX:
				case RedisSqlParser.ZREVRANGEBYSCORE:
				case RedisSqlParser.ZREVRANK:
				case RedisSqlParser.ZSCAN:
				case RedisSqlParser.ZSCORE:
				case RedisSqlParser.ZUNION:
				case RedisSqlParser.ZUNIONSTORE:
				case RedisSqlParser.PSUBSCRIBE:
				case RedisSqlParser.PUBSUB:
				case RedisSqlParser.PUBLISH:
				case RedisSqlParser.PUNSUBSCRIBE:
				case RedisSqlParser.SUBSCRIBE:
				case RedisSqlParser.UNSUBSCRIBE:
				case RedisSqlParser.SSUBSCRIBE:
				case RedisSqlParser.SUNSUBSCRIBE:
				case RedisSqlParser.ASKING:
				case RedisSqlParser.CLUSTER:
				case RedisSqlParser.READONLY:
				case RedisSqlParser.READWRITE:
				case RedisSqlParser.FLUSHDB:
				case RedisSqlParser.SCRIPT:
				case RedisSqlParser.EVAL:
				case RedisSqlParser.EVALSHA:
				case RedisSqlParser.EXEC:
				case RedisSqlParser.WATCH:
				case RedisSqlParser.DISCARD:
				case RedisSqlParser.UNWATCH:
				case RedisSqlParser.MULTI:
				case RedisSqlParser.PFMERGE:
				case RedisSqlParser.PFADD:
				case RedisSqlParser.PFCOUNT:
				case RedisSqlParser.ECHO:
				case RedisSqlParser.PING:
				case RedisSqlParser.SAVE:
				case RedisSqlParser.SLOWLOG:
				case RedisSqlParser.LASTSAVE:
				case RedisSqlParser.CONFIG:
				case RedisSqlParser.CLIENT:
				case RedisSqlParser.SHUTDOWN:
				case RedisSqlParser.SYNC:
				case RedisSqlParser.ROLE:
				case RedisSqlParser.MONITOR:
				case RedisSqlParser.SLAVEOF:
				case RedisSqlParser.FLUSHALL:
				case RedisSqlParser.SELECT:
				case RedisSqlParser.QUIT:
				case RedisSqlParser.AUTH:
				case RedisSqlParser.DBSIZE:
				case RedisSqlParser.BGREWRITEAOF:
				case RedisSqlParser.TIME:
				case RedisSqlParser.INFO:
				case RedisSqlParser.BGSAVE:
				case RedisSqlParser.COMMAND:
				case RedisSqlParser.DEBUG:
				case RedisSqlParser.RESETSTAT:
				case RedisSqlParser.REWRITE:
				case RedisSqlParser.SETNAME:
				case RedisSqlParser.GETNAME:
				case RedisSqlParser.LIST:
				case RedisSqlParser.GETKEYS:
				case RedisSqlParser.COUNT:
				case RedisSqlParser.KILL:
				case RedisSqlParser.SEMI:
					// tslint:disable-next-line:no-empty
					{
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case RedisSqlParser.NODE:
				{
				{
				this.state = 1415;
				this.match(RedisSqlParser.NODE);
				this.state = 1416;
				this.stringValue();
				}
				}
				break;
			case RedisSqlParser.STABLE:
				{
				this.state = 1417;
				this.match(RedisSqlParser.STABLE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdFlushdb(): CmdFlushdbContext {
		let _localctx: CmdFlushdbContext = new CmdFlushdbContext(this._ctx, this.state);
		this.enterRule(_localctx, 340, RedisSqlParser.RULE_cmdFlushdb);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1420;
			this.match(RedisSqlParser.FLUSHDB);
			this.state = 1422;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 134, this._ctx) ) {
			case 1:
				{
				this.state = 1421;
				_la = this._input.LA(1);
				if (!(_la === RedisSqlParser.SYNC || _la === RedisSqlParser.ASYNC)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdEcho(): CmdEchoContext {
		let _localctx: CmdEchoContext = new CmdEchoContext(this._ctx, this.state);
		this.enterRule(_localctx, 342, RedisSqlParser.RULE_cmdEcho);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1424;
			this.match(RedisSqlParser.ECHO);
			this.state = 1425;
			this.stringValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSave(): CmdSaveContext {
		let _localctx: CmdSaveContext = new CmdSaveContext(this._ctx, this.state);
		this.enterRule(_localctx, 344, RedisSqlParser.RULE_cmdSave);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1427;
			this.match(RedisSqlParser.SAVE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSlowlog(): CmdSlowlogContext {
		let _localctx: CmdSlowlogContext = new CmdSlowlogContext(this._ctx, this.state);
		this.enterRule(_localctx, 346, RedisSqlParser.RULE_cmdSlowlog);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1429;
			this.match(RedisSqlParser.SLOWLOG);
			this.state = 1430;
			this.sqlStatement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdLastsave(): CmdLastsaveContext {
		let _localctx: CmdLastsaveContext = new CmdLastsaveContext(this._ctx, this.state);
		this.enterRule(_localctx, 348, RedisSqlParser.RULE_cmdLastsave);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1432;
			this.match(RedisSqlParser.LASTSAVE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdConfig(): CmdConfigContext {
		let _localctx: CmdConfigContext = new CmdConfigContext(this._ctx, this.state);
		this.enterRule(_localctx, 350, RedisSqlParser.RULE_cmdConfig);
		try {
			this.state = 1443;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RedisSqlParser.CONFIG:
				_localctx = new CmdConfigGetContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1434;
				this.match(RedisSqlParser.CONFIG);
				{
				this.state = 1435;
				this.match(RedisSqlParser.GET);
				this.state = 1436;
				this.pattern();
				}
				}
				break;
			case RedisSqlParser.SET:
				_localctx = new CmdConfigSetContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1437;
				this.match(RedisSqlParser.SET);
				this.state = 1438;
				this.stringValue();
				this.state = 1439;
				this.stringValue();
				}
				}
				break;
			case RedisSqlParser.RESETSTAT:
				_localctx = new CmdConfigResetContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1441;
				this.match(RedisSqlParser.RESETSTAT);
				}
				break;
			case RedisSqlParser.REWRITE:
				_localctx = new CmdConfigRewriteContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1442;
				this.match(RedisSqlParser.REWRITE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdClient(): CmdClientContext {
		let _localctx: CmdClientContext = new CmdClientContext(this._ctx, this.state);
		this.enterRule(_localctx, 352, RedisSqlParser.RULE_cmdClient);
		try {
			this.state = 1454;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RedisSqlParser.CLIENT:
				_localctx = new CmdClientPauseContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1445;
				this.match(RedisSqlParser.CLIENT);
				{
				this.state = 1446;
				this.match(RedisSqlParser.PAUSE);
				this.state = 1447;
				this.intValue();
				}
				}
				break;
			case RedisSqlParser.KILL:
				_localctx = new CmdClientKillContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1448;
				this.match(RedisSqlParser.KILL);
				this.state = 1449;
				this.match(RedisSqlParser.HOST_PORT);
				}
				}
				break;
			case RedisSqlParser.GETNAME:
				_localctx = new CmdClientGetnameContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1450;
				this.match(RedisSqlParser.GETNAME);
				}
				break;
			case RedisSqlParser.SETNAME:
				_localctx = new CmdClientSetnameContext(_localctx);
				this.enterOuterAlt(_localctx, 4);
				{
				{
				this.state = 1451;
				this.match(RedisSqlParser.SETNAME);
				this.state = 1452;
				this.stringValue();
				}
				}
				break;
			case RedisSqlParser.LIST:
				_localctx = new CmdClientListContext(_localctx);
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1453;
				this.match(RedisSqlParser.LIST);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdShutdown(): CmdShutdownContext {
		let _localctx: CmdShutdownContext = new CmdShutdownContext(this._ctx, this.state);
		this.enterRule(_localctx, 354, RedisSqlParser.RULE_cmdShutdown);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1456;
			this.match(RedisSqlParser.SHUTDOWN);
			this.state = 1458;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === RedisSqlParser.NOSAVE) {
				{
				this.state = 1457;
				this.match(RedisSqlParser.NOSAVE);
				}
			}

			this.state = 1461;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 138, this._ctx) ) {
			case 1:
				{
				this.state = 1460;
				this.match(RedisSqlParser.SAVE);
				}
				break;
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSync(): CmdSyncContext {
		let _localctx: CmdSyncContext = new CmdSyncContext(this._ctx, this.state);
		this.enterRule(_localctx, 356, RedisSqlParser.RULE_cmdSync);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1463;
			this.match(RedisSqlParser.SYNC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdRole(): CmdRoleContext {
		let _localctx: CmdRoleContext = new CmdRoleContext(this._ctx, this.state);
		this.enterRule(_localctx, 358, RedisSqlParser.RULE_cmdRole);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1465;
			this.match(RedisSqlParser.ROLE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdMonitor(): CmdMonitorContext {
		let _localctx: CmdMonitorContext = new CmdMonitorContext(this._ctx, this.state);
		this.enterRule(_localctx, 360, RedisSqlParser.RULE_cmdMonitor);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1467;
			this.match(RedisSqlParser.MONITOR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSlaveof(): CmdSlaveofContext {
		let _localctx: CmdSlaveofContext = new CmdSlaveofContext(this._ctx, this.state);
		this.enterRule(_localctx, 362, RedisSqlParser.RULE_cmdSlaveof);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1469;
			this.match(RedisSqlParser.SLAVEOF);
			this.state = 1470;
			this.match(RedisSqlParser.HOST);
			this.state = 1471;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdFlushall(): CmdFlushallContext {
		let _localctx: CmdFlushallContext = new CmdFlushallContext(this._ctx, this.state);
		this.enterRule(_localctx, 364, RedisSqlParser.RULE_cmdFlushall);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1473;
			this.match(RedisSqlParser.FLUSHALL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdSelect(): CmdSelectContext {
		let _localctx: CmdSelectContext = new CmdSelectContext(this._ctx, this.state);
		this.enterRule(_localctx, 366, RedisSqlParser.RULE_cmdSelect);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1475;
			this.match(RedisSqlParser.SELECT);
			this.state = 1476;
			this.intValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdPing(): CmdPingContext {
		let _localctx: CmdPingContext = new CmdPingContext(this._ctx, this.state);
		this.enterRule(_localctx, 368, RedisSqlParser.RULE_cmdPing);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1478;
			this.match(RedisSqlParser.PING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdQuit(): CmdQuitContext {
		let _localctx: CmdQuitContext = new CmdQuitContext(this._ctx, this.state);
		this.enterRule(_localctx, 370, RedisSqlParser.RULE_cmdQuit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1480;
			this.match(RedisSqlParser.QUIT);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdAuth(): CmdAuthContext {
		let _localctx: CmdAuthContext = new CmdAuthContext(this._ctx, this.state);
		this.enterRule(_localctx, 372, RedisSqlParser.RULE_cmdAuth);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1482;
			this.match(RedisSqlParser.AUTH);
			this.state = 1483;
			this.stringValue();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdDbsize(): CmdDbsizeContext {
		let _localctx: CmdDbsizeContext = new CmdDbsizeContext(this._ctx, this.state);
		this.enterRule(_localctx, 374, RedisSqlParser.RULE_cmdDbsize);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1485;
			this.match(RedisSqlParser.DBSIZE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdBgrewriteaof(): CmdBgrewriteaofContext {
		let _localctx: CmdBgrewriteaofContext = new CmdBgrewriteaofContext(this._ctx, this.state);
		this.enterRule(_localctx, 376, RedisSqlParser.RULE_cmdBgrewriteaof);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1487;
			this.match(RedisSqlParser.BGREWRITEAOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdTime(): CmdTimeContext {
		let _localctx: CmdTimeContext = new CmdTimeContext(this._ctx, this.state);
		this.enterRule(_localctx, 378, RedisSqlParser.RULE_cmdTime);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1489;
			this.match(RedisSqlParser.TIME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdInfo(): CmdInfoContext {
		let _localctx: CmdInfoContext = new CmdInfoContext(this._ctx, this.state);
		this.enterRule(_localctx, 380, RedisSqlParser.RULE_cmdInfo);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1491;
			this.match(RedisSqlParser.INFO);
			this.state = 1497;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (RedisSqlParser.SERVER - 160)) | (1 << (RedisSqlParser.CLIENTS - 160)) | (1 << (RedisSqlParser.MEMORY - 160)) | (1 << (RedisSqlParser.PERSISTENCE - 160)) | (1 << (RedisSqlParser.STATS - 160)) | (1 << (RedisSqlParser.REPLICATION - 160)) | (1 << (RedisSqlParser.CPU - 160)) | (1 << (RedisSqlParser.COMMANDSTATS - 160)) | (1 << (RedisSqlParser.LATENCYSTATS - 160)) | (1 << (RedisSqlParser.SENTINEL - 160)) | (1 << (RedisSqlParser.MODULES - 160)) | (1 << (RedisSqlParser.KEYSPACE - 160)) | (1 << (RedisSqlParser.ERRORSTATS - 160)) | (1 << (RedisSqlParser.ALL - 160)) | (1 << (RedisSqlParser.DEFAULT - 160)) | (1 << (RedisSqlParser.EVERYTHING - 160)))) !== 0)) {
				{
				this.state = 1493;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1492;
					this.infoOpt();
					}
					}
					this.state = 1495;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (((((_la - 160)) & ~0x1F) === 0 && ((1 << (_la - 160)) & ((1 << (RedisSqlParser.SERVER - 160)) | (1 << (RedisSqlParser.CLIENTS - 160)) | (1 << (RedisSqlParser.MEMORY - 160)) | (1 << (RedisSqlParser.PERSISTENCE - 160)) | (1 << (RedisSqlParser.STATS - 160)) | (1 << (RedisSqlParser.REPLICATION - 160)) | (1 << (RedisSqlParser.CPU - 160)) | (1 << (RedisSqlParser.COMMANDSTATS - 160)) | (1 << (RedisSqlParser.LATENCYSTATS - 160)) | (1 << (RedisSqlParser.SENTINEL - 160)) | (1 << (RedisSqlParser.MODULES - 160)) | (1 << (RedisSqlParser.KEYSPACE - 160)) | (1 << (RedisSqlParser.ERRORSTATS - 160)) | (1 << (RedisSqlParser.ALL - 160)) | (1 << (RedisSqlParser.DEFAULT - 160)) | (1 << (RedisSqlParser.EVERYTHING - 160)))) !== 0));
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdBgsave(): CmdBgsaveContext {
		let _localctx: CmdBgsaveContext = new CmdBgsaveContext(this._ctx, this.state);
		this.enterRule(_localctx, 382, RedisSqlParser.RULE_cmdBgsave);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1499;
			this.match(RedisSqlParser.BGSAVE);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdCmd(): CmdCmdContext {
		let _localctx: CmdCmdContext = new CmdCmdContext(this._ctx, this.state);
		this.enterRule(_localctx, 384, RedisSqlParser.RULE_cmdCmd);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1501;
			this.match(RedisSqlParser.COMMAND);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdCmdx(): CmdCmdxContext {
		let _localctx: CmdCmdxContext = new CmdCmdxContext(this._ctx, this.state);
		this.enterRule(_localctx, 386, RedisSqlParser.RULE_cmdCmdx);
		let _la: number;
		try {
			this.state = 1517;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RedisSqlParser.COMMAND:
				_localctx = new CmdCmdInfoContext(_localctx);
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1503;
				this.match(RedisSqlParser.COMMAND);
				{
				this.state = 1504;
				this.match(RedisSqlParser.INFO);
				this.state = 1506;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1505;
					this.keyName();
					}
					}
					this.state = 1508;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
				}
				}
				break;
			case RedisSqlParser.GETKEYS:
				_localctx = new CmdCmdGetkeysContext(_localctx);
				this.enterOuterAlt(_localctx, 2);
				{
				{
				this.state = 1510;
				this.match(RedisSqlParser.GETKEYS);
				this.state = 1512;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 1511;
					this.keyName();
					}
					}
					this.state = 1514;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while (_la === RedisSqlParser.STRING || _la === RedisSqlParser.NAME_TOKEN);
				}
				}
				break;
			case RedisSqlParser.COUNT:
				_localctx = new CmdCmdCountContext(_localctx);
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1516;
				this.match(RedisSqlParser.COUNT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public cmdDebug(): CmdDebugContext {
		let _localctx: CmdDebugContext = new CmdDebugContext(this._ctx, this.state);
		this.enterRule(_localctx, 388, RedisSqlParser.RULE_cmdDebug);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 1519;
			this.match(RedisSqlParser.DEBUG);
			this.state = 1523;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case RedisSqlParser.SEGFAULT:
				{
				this.state = 1520;
				this.match(RedisSqlParser.SEGFAULT);
				}
				break;
			case RedisSqlParser.OBJECT:
				{
				this.state = 1521;
				this.match(RedisSqlParser.OBJECT);
				this.state = 1522;
				this.keyName();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public sqlStatement(): SqlStatementContext {
		let _localctx: SqlStatementContext = new SqlStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 390, RedisSqlParser.RULE_sqlStatement);
		try {
			this.state = 1690;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 145, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 1525;
				this.cmdCopy();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 1526;
				this.cmdDel();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 1527;
				this.cmdDump();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 1528;
				this.cmdExists();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 1529;
				this.cmdExpire();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 1530;
				this.cmdExpireat();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 1531;
				this.cmdExpireTime();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 1532;
				this.cmdKeys();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 1533;
				this.cmdMove();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 1534;
				this.cmdObject();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 1535;
				this.cmdPersist();
				}
				break;

			case 12:
				this.enterOuterAlt(_localctx, 12);
				{
				this.state = 1536;
				this.cmdPexpire();
				}
				break;

			case 13:
				this.enterOuterAlt(_localctx, 13);
				{
				this.state = 1537;
				this.cmdPexpireat();
				}
				break;

			case 14:
				this.enterOuterAlt(_localctx, 14);
				{
				this.state = 1538;
				this.cmdPExpireTime();
				}
				break;

			case 15:
				this.enterOuterAlt(_localctx, 15);
				{
				this.state = 1539;
				this.cmdTtl();
				}
				break;

			case 16:
				this.enterOuterAlt(_localctx, 16);
				{
				this.state = 1540;
				this.cmdPttl();
				}
				break;

			case 17:
				this.enterOuterAlt(_localctx, 17);
				{
				this.state = 1541;
				this.cmdRandomkey();
				}
				break;

			case 18:
				this.enterOuterAlt(_localctx, 18);
				{
				this.state = 1542;
				this.cmdRename();
				}
				break;

			case 19:
				this.enterOuterAlt(_localctx, 19);
				{
				this.state = 1543;
				this.cmdRenamenx();
				}
				break;

			case 20:
				this.enterOuterAlt(_localctx, 20);
				{
				this.state = 1544;
				this.cmdRestore();
				}
				break;

			case 21:
				this.enterOuterAlt(_localctx, 21);
				{
				this.state = 1545;
				this.cmdScan();
				}
				break;

			case 22:
				this.enterOuterAlt(_localctx, 22);
				{
				this.state = 1546;
				this.cmdSort();
				}
				break;

			case 23:
				this.enterOuterAlt(_localctx, 23);
				{
				this.state = 1547;
				this.cmdSortro();
				}
				break;

			case 24:
				this.enterOuterAlt(_localctx, 24);
				{
				this.state = 1548;
				this.cmdTouch();
				}
				break;

			case 25:
				this.enterOuterAlt(_localctx, 25);
				{
				this.state = 1549;
				this.cmdType();
				}
				break;

			case 26:
				this.enterOuterAlt(_localctx, 26);
				{
				this.state = 1550;
				this.cmdUnlink();
				}
				break;

			case 27:
				this.enterOuterAlt(_localctx, 27);
				{
				this.state = 1551;
				this.cmdWait();
				}
				break;

			case 28:
				this.enterOuterAlt(_localctx, 28);
				{
				this.state = 1552;
				this.cmdAppend();
				}
				break;

			case 29:
				this.enterOuterAlt(_localctx, 29);
				{
				this.state = 1553;
				this.cmdDecr();
				}
				break;

			case 30:
				this.enterOuterAlt(_localctx, 30);
				{
				this.state = 1554;
				this.cmdDecrby();
				}
				break;

			case 31:
				this.enterOuterAlt(_localctx, 31);
				{
				this.state = 1555;
				this.cmdGet();
				}
				break;

			case 32:
				this.enterOuterAlt(_localctx, 32);
				{
				this.state = 1556;
				this.cmdGetdel();
				}
				break;

			case 33:
				this.enterOuterAlt(_localctx, 33);
				{
				this.state = 1557;
				this.cmdGetex();
				}
				break;

			case 34:
				this.enterOuterAlt(_localctx, 34);
				{
				this.state = 1558;
				this.cmdGetrange();
				}
				break;

			case 35:
				this.enterOuterAlt(_localctx, 35);
				{
				this.state = 1559;
				this.cmdGetset();
				}
				break;

			case 36:
				this.enterOuterAlt(_localctx, 36);
				{
				this.state = 1560;
				this.cmdGetbit();
				}
				break;

			case 37:
				this.enterOuterAlt(_localctx, 37);
				{
				this.state = 1561;
				this.cmdInc();
				}
				break;

			case 38:
				this.enterOuterAlt(_localctx, 38);
				{
				this.state = 1562;
				this.cmdLcs();
				}
				break;

			case 39:
				this.enterOuterAlt(_localctx, 39);
				{
				this.state = 1563;
				this.cmdMget();
				}
				break;

			case 40:
				this.enterOuterAlt(_localctx, 40);
				{
				this.state = 1564;
				this.cmdMset();
				}
				break;

			case 41:
				this.enterOuterAlt(_localctx, 41);
				{
				this.state = 1565;
				this.cmdMsetnx();
				}
				break;

			case 42:
				this.enterOuterAlt(_localctx, 42);
				{
				this.state = 1566;
				this.cmdSetex();
				}
				break;

			case 43:
				this.enterOuterAlt(_localctx, 43);
				{
				this.state = 1567;
				this.cmdSet();
				}
				break;

			case 44:
				this.enterOuterAlt(_localctx, 44);
				{
				this.state = 1568;
				this.cmdSetnx();
				}
				break;

			case 45:
				this.enterOuterAlt(_localctx, 45);
				{
				this.state = 1569;
				this.cmdSetrange();
				}
				break;

			case 46:
				this.enterOuterAlt(_localctx, 46);
				{
				this.state = 1570;
				this.cmdSetbit();
				}
				break;

			case 47:
				this.enterOuterAlt(_localctx, 47);
				{
				this.state = 1571;
				this.cmdStrlen();
				}
				break;

			case 48:
				this.enterOuterAlt(_localctx, 48);
				{
				this.state = 1572;
				this.cmdSubstr();
				}
				break;

			case 49:
				this.enterOuterAlt(_localctx, 49);
				{
				this.state = 1573;
				this.cmdHdelMget();
				}
				break;

			case 50:
				this.enterOuterAlt(_localctx, 50);
				{
				this.state = 1574;
				this.cmdHexistsGetKeysStrlen();
				}
				break;

			case 51:
				this.enterOuterAlt(_localctx, 51);
				{
				this.state = 1575;
				this.cmdHgetallLenVals();
				}
				break;

			case 52:
				this.enterOuterAlt(_localctx, 52);
				{
				this.state = 1576;
				this.cmdHincrby();
				}
				break;

			case 53:
				this.enterOuterAlt(_localctx, 53);
				{
				this.state = 1577;
				this.cmdHmsetHset();
				}
				break;

			case 54:
				this.enterOuterAlt(_localctx, 54);
				{
				this.state = 1578;
				this.cmdHrandfield();
				}
				break;

			case 55:
				this.enterOuterAlt(_localctx, 55);
				{
				this.state = 1579;
				this.cmdHscan();
				}
				break;

			case 56:
				this.enterOuterAlt(_localctx, 56);
				{
				this.state = 1580;
				this.cmdHsetnx();
				}
				break;

			case 57:
				this.enterOuterAlt(_localctx, 57);
				{
				this.state = 1581;
				this.cmdBlmove();
				}
				break;

			case 58:
				this.enterOuterAlt(_localctx, 58);
				{
				this.state = 1582;
				this.cmdLmpop();
				}
				break;

			case 59:
				this.enterOuterAlt(_localctx, 59);
				{
				this.state = 1583;
				this.cmdBpop();
				}
				break;

			case 60:
				this.enterOuterAlt(_localctx, 60);
				{
				this.state = 1584;
				this.cmdBrpoplpush();
				}
				break;

			case 61:
				this.enterOuterAlt(_localctx, 61);
				{
				this.state = 1585;
				this.cmdLindex();
				}
				break;

			case 62:
				this.enterOuterAlt(_localctx, 62);
				{
				this.state = 1586;
				this.cmdLinsert();
				}
				break;

			case 63:
				this.enterOuterAlt(_localctx, 63);
				{
				this.state = 1587;
				this.cmdLlen();
				}
				break;

			case 64:
				this.enterOuterAlt(_localctx, 64);
				{
				this.state = 1588;
				this.cmdLmove();
				}
				break;

			case 65:
				this.enterOuterAlt(_localctx, 65);
				{
				this.state = 1589;
				this.cmdPop();
				}
				break;

			case 66:
				this.enterOuterAlt(_localctx, 66);
				{
				this.state = 1590;
				this.cmdLpos();
				}
				break;

			case 67:
				this.enterOuterAlt(_localctx, 67);
				{
				this.state = 1591;
				this.cmdPush();
				}
				break;

			case 68:
				this.enterOuterAlt(_localctx, 68);
				{
				this.state = 1592;
				this.cmdLrangeTrim();
				}
				break;

			case 69:
				this.enterOuterAlt(_localctx, 69);
				{
				this.state = 1593;
				this.cmdLremSet();
				}
				break;

			case 70:
				this.enterOuterAlt(_localctx, 70);
				{
				this.state = 1594;
				this.cmdRpoplpush();
				}
				break;

			case 71:
				this.enterOuterAlt(_localctx, 71);
				{
				this.state = 1595;
				this.cmdSadd();
				}
				break;

			case 72:
				this.enterOuterAlt(_localctx, 72);
				{
				this.state = 1596;
				this.cmdScard();
				}
				break;

			case 73:
				this.enterOuterAlt(_localctx, 73);
				{
				this.state = 1597;
				this.cmdSdiff();
				}
				break;

			case 74:
				this.enterOuterAlt(_localctx, 74);
				{
				this.state = 1598;
				this.cmdSdiffstore();
				}
				break;

			case 75:
				this.enterOuterAlt(_localctx, 75);
				{
				this.state = 1599;
				this.cmdSintercard();
				}
				break;

			case 76:
				this.enterOuterAlt(_localctx, 76);
				{
				this.state = 1600;
				this.cmdSismember();
				}
				break;

			case 77:
				this.enterOuterAlt(_localctx, 77);
				{
				this.state = 1601;
				this.cmdSmove();
				}
				break;

			case 78:
				this.enterOuterAlt(_localctx, 78);
				{
				this.state = 1602;
				this.cmdSpop();
				}
				break;

			case 79:
				this.enterOuterAlt(_localctx, 79);
				{
				this.state = 1603;
				this.cmdSscan();
				}
				break;

			case 80:
				this.enterOuterAlt(_localctx, 80);
				{
				this.state = 1604;
				this.cmdBzmpop();
				}
				break;

			case 81:
				this.enterOuterAlt(_localctx, 81);
				{
				this.state = 1605;
				this.cmdBzpopmax();
				}
				break;

			case 82:
				this.enterOuterAlt(_localctx, 82);
				{
				this.state = 1606;
				this.cmdZadd();
				}
				break;

			case 83:
				this.enterOuterAlt(_localctx, 83);
				{
				this.state = 1607;
				this.cmdZcard();
				}
				break;

			case 84:
				this.enterOuterAlt(_localctx, 84);
				{
				this.state = 1608;
				this.cmdZcount();
				}
				break;

			case 85:
				this.enterOuterAlt(_localctx, 85);
				{
				this.state = 1609;
				this.cmdZdiff();
				}
				break;

			case 86:
				this.enterOuterAlt(_localctx, 86);
				{
				this.state = 1610;
				this.cmdZdiffstore();
				}
				break;

			case 87:
				this.enterOuterAlt(_localctx, 87);
				{
				this.state = 1611;
				this.cmdZincrby();
				}
				break;

			case 88:
				this.enterOuterAlt(_localctx, 88);
				{
				this.state = 1612;
				this.cmdZinter();
				}
				break;

			case 89:
				this.enterOuterAlt(_localctx, 89);
				{
				this.state = 1613;
				this.cmdZintercard();
				}
				break;

			case 90:
				this.enterOuterAlt(_localctx, 90);
				{
				this.state = 1614;
				this.cmdZinterstore();
				}
				break;

			case 91:
				this.enterOuterAlt(_localctx, 91);
				{
				this.state = 1615;
				this.cmdZmpop();
				}
				break;

			case 92:
				this.enterOuterAlt(_localctx, 92);
				{
				this.state = 1616;
				this.cmdZmscore();
				}
				break;

			case 93:
				this.enterOuterAlt(_localctx, 93);
				{
				this.state = 1617;
				this.cmdZpopmax();
				}
				break;

			case 94:
				this.enterOuterAlt(_localctx, 94);
				{
				this.state = 1618;
				this.cmdZrandmember();
				}
				break;

			case 95:
				this.enterOuterAlt(_localctx, 95);
				{
				this.state = 1619;
				this.cmdZrange();
				}
				break;

			case 96:
				this.enterOuterAlt(_localctx, 96);
				{
				this.state = 1620;
				this.cmdZrangebylex();
				}
				break;

			case 97:
				this.enterOuterAlt(_localctx, 97);
				{
				this.state = 1621;
				this.cmdZrangebyscore();
				}
				break;

			case 98:
				this.enterOuterAlt(_localctx, 98);
				{
				this.state = 1622;
				this.cmdZrangestore();
				}
				break;

			case 99:
				this.enterOuterAlt(_localctx, 99);
				{
				this.state = 1623;
				this.cmdZrank();
				}
				break;

			case 100:
				this.enterOuterAlt(_localctx, 100);
				{
				this.state = 1624;
				this.cmdZremrangebyrank();
				}
				break;

			case 101:
				this.enterOuterAlt(_localctx, 101);
				{
				this.state = 1625;
				this.cmdZrevrange();
				}
				break;

			case 102:
				this.enterOuterAlt(_localctx, 102);
				{
				this.state = 1626;
				this.cmdZrevrangebylex();
				}
				break;

			case 103:
				this.enterOuterAlt(_localctx, 103);
				{
				this.state = 1627;
				this.cmdZscan();
				}
				break;

			case 104:
				this.enterOuterAlt(_localctx, 104);
				{
				this.state = 1628;
				this.cmdZunion();
				}
				break;

			case 105:
				this.enterOuterAlt(_localctx, 105);
				{
				this.state = 1629;
				this.cmdZunionstore();
				}
				break;

			case 106:
				this.enterOuterAlt(_localctx, 106);
				{
				this.state = 1630;
				this.cmdScriptKill();
				}
				break;

			case 107:
				this.enterOuterAlt(_localctx, 107);
				{
				this.state = 1631;
				this.cmdScriptLoad();
				}
				break;

			case 108:
				this.enterOuterAlt(_localctx, 108);
				{
				this.state = 1632;
				this.cmdEval();
				}
				break;

			case 109:
				this.enterOuterAlt(_localctx, 109);
				{
				this.state = 1633;
				this.cmdEvalsha();
				}
				break;

			case 110:
				this.enterOuterAlt(_localctx, 110);
				{
				this.state = 1634;
				this.cmdScriptExists();
				}
				break;

			case 111:
				this.enterOuterAlt(_localctx, 111);
				{
				this.state = 1635;
				this.cmdScriptFlush();
				}
				break;

			case 112:
				this.enterOuterAlt(_localctx, 112);
				{
				this.state = 1636;
				this.cmdExec();
				}
				break;

			case 113:
				this.enterOuterAlt(_localctx, 113);
				{
				this.state = 1637;
				this.cmdWatch();
				}
				break;

			case 114:
				this.enterOuterAlt(_localctx, 114);
				{
				this.state = 1638;
				this.cmdDiscard();
				}
				break;

			case 115:
				this.enterOuterAlt(_localctx, 115);
				{
				this.state = 1639;
				this.cmdUnwatch();
				}
				break;

			case 116:
				this.enterOuterAlt(_localctx, 116);
				{
				this.state = 1640;
				this.cmdMulti();
				}
				break;

			case 117:
				this.enterOuterAlt(_localctx, 117);
				{
				this.state = 1641;
				this.cmdPfmerge();
				}
				break;

			case 118:
				this.enterOuterAlt(_localctx, 118);
				{
				this.state = 1642;
				this.cmdPfadd();
				}
				break;

			case 119:
				this.enterOuterAlt(_localctx, 119);
				{
				this.state = 1643;
				this.cmdPfcount();
				}
				break;

			case 120:
				this.enterOuterAlt(_localctx, 120);
				{
				this.state = 1644;
				this.cmdEcho();
				}
				break;

			case 121:
				this.enterOuterAlt(_localctx, 121);
				{
				this.state = 1645;
				this.cmdSelect();
				}
				break;

			case 122:
				this.enterOuterAlt(_localctx, 122);
				{
				this.state = 1646;
				this.cmdPing();
				}
				break;

			case 123:
				this.enterOuterAlt(_localctx, 123);
				{
				this.state = 1647;
				this.cmdSave();
				}
				break;

			case 124:
				this.enterOuterAlt(_localctx, 124);
				{
				this.state = 1648;
				this.cmdSlowlog();
				}
				break;

			case 125:
				this.enterOuterAlt(_localctx, 125);
				{
				this.state = 1649;
				this.cmdLastsave();
				}
				break;

			case 126:
				this.enterOuterAlt(_localctx, 126);
				{
				this.state = 1650;
				this.cmdConfig();
				}
				break;

			case 127:
				this.enterOuterAlt(_localctx, 127);
				{
				this.state = 1651;
				this.cmdClient();
				}
				break;

			case 128:
				this.enterOuterAlt(_localctx, 128);
				{
				this.state = 1652;
				this.cmdShutdown();
				}
				break;

			case 129:
				this.enterOuterAlt(_localctx, 129);
				{
				this.state = 1653;
				this.cmdSync();
				}
				break;

			case 130:
				this.enterOuterAlt(_localctx, 130);
				{
				this.state = 1654;
				this.cmdRole();
				}
				break;

			case 131:
				this.enterOuterAlt(_localctx, 131);
				{
				this.state = 1655;
				this.cmdMonitor();
				}
				break;

			case 132:
				this.enterOuterAlt(_localctx, 132);
				{
				this.state = 1656;
				this.cmdSlaveof();
				}
				break;

			case 133:
				this.enterOuterAlt(_localctx, 133);
				{
				this.state = 1657;
				this.cmdFlushall();
				}
				break;

			case 134:
				this.enterOuterAlt(_localctx, 134);
				{
				this.state = 1658;
				this.cmdQuit();
				}
				break;

			case 135:
				this.enterOuterAlt(_localctx, 135);
				{
				this.state = 1659;
				this.cmdAuth();
				}
				break;

			case 136:
				this.enterOuterAlt(_localctx, 136);
				{
				this.state = 1660;
				this.cmdDbsize();
				}
				break;

			case 137:
				this.enterOuterAlt(_localctx, 137);
				{
				this.state = 1661;
				this.cmdBgrewriteaof();
				}
				break;

			case 138:
				this.enterOuterAlt(_localctx, 138);
				{
				this.state = 1662;
				this.cmdTime();
				}
				break;

			case 139:
				this.enterOuterAlt(_localctx, 139);
				{
				this.state = 1663;
				this.cmdInfo();
				}
				break;

			case 140:
				this.enterOuterAlt(_localctx, 140);
				{
				this.state = 1664;
				this.cmdBgsave();
				}
				break;

			case 141:
				this.enterOuterAlt(_localctx, 141);
				{
				this.state = 1665;
				this.cmdCmd();
				}
				break;

			case 142:
				this.enterOuterAlt(_localctx, 142);
				{
				this.state = 1666;
				this.cmdCmdx();
				}
				break;

			case 143:
				this.enterOuterAlt(_localctx, 143);
				{
				this.state = 1667;
				this.cmdDebug();
				}
				break;

			case 144:
				this.enterOuterAlt(_localctx, 144);
				{
				this.state = 1668;
				this.cmdFlushdb();
				}
				break;

			case 145:
				this.enterOuterAlt(_localctx, 145);
				{
				this.state = 1669;
				this.cmdSsubscribe();
				}
				break;

			case 146:
				this.enterOuterAlt(_localctx, 146);
				{
				this.state = 1670;
				this.cmdUnsubscribe();
				}
				break;

			case 147:
				this.enterOuterAlt(_localctx, 147);
				{
				this.state = 1671;
				this.cmdPusubnumsub();
				}
				break;

			case 148:
				this.enterOuterAlt(_localctx, 148);
				{
				this.state = 1672;
				this.cmdPusubnumpat();
				}
				break;

			case 149:
				this.enterOuterAlt(_localctx, 149);
				{
				this.state = 1673;
				this.cmdPusubchannels();
				}
				break;

			case 150:
				this.enterOuterAlt(_localctx, 150);
				{
				this.state = 1674;
				this.cmdPublish();
				}
				break;

			case 151:
				this.enterOuterAlt(_localctx, 151);
				{
				this.state = 1675;
				this.cmdInfo();
				}
				break;

			case 152:
				this.enterOuterAlt(_localctx, 152);
				{
				this.state = 1676;
				this.cmdAsking();
				}
				break;

			case 153:
				this.enterOuterAlt(_localctx, 153);
				{
				this.state = 1677;
				this.cmdAddDelSlots();
				}
				break;

			case 154:
				this.enterOuterAlt(_localctx, 154);
				{
				this.state = 1678;
				this.cmdCountKeysInSlot();
				}
				break;

			case 155:
				this.enterOuterAlt(_localctx, 155);
				{
				this.state = 1679;
				this.cmdFailOver();
				}
				break;

			case 156:
				this.enterOuterAlt(_localctx, 156);
				{
				this.state = 1680;
				this.cmdForget();
				}
				break;

			case 157:
				this.enterOuterAlt(_localctx, 157);
				{
				this.state = 1681;
				this.cmdGetKeysInSlot();
				}
				break;

			case 158:
				this.enterOuterAlt(_localctx, 158);
				{
				this.state = 1682;
				this.cmdClusterOrder();
				}
				break;

			case 159:
				this.enterOuterAlt(_localctx, 159);
				{
				this.state = 1683;
				this.cmdKeySlot();
				}
				break;

			case 160:
				this.enterOuterAlt(_localctx, 160);
				{
				this.state = 1684;
				this.cmdMeet();
				}
				break;

			case 161:
				this.enterOuterAlt(_localctx, 161);
				{
				this.state = 1685;
				this.cmdReadonly();
				}
				break;

			case 162:
				this.enterOuterAlt(_localctx, 162);
				{
				this.state = 1686;
				this.cmdReadwrite();
				}
				break;

			case 163:
				this.enterOuterAlt(_localctx, 163);
				{
				this.state = 1687;
				this.cmdReplicaesSlave();
				}
				break;

			case 164:
				this.enterOuterAlt(_localctx, 164);
				{
				this.state = 1688;
				this.cmdReset();
				}
				break;

			case 165:
				this.enterOuterAlt(_localctx, 165);
				{
				this.state = 1689;
				this.cmdSetSlot();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	private static readonly _serializedATNSegments: number = 4;
	private static readonly _serializedATNSegment0: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\u013C\u069F\x04" +
		"\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04" +
		"\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r" +
		"\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12" +
		"\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17" +
		"\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C" +
		"\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04\"\t\"\x04" +
		"#\t#\x04$\t$\x04%\t%\x04&\t&\x04\'\t\'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
		"+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04" +
		"4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04" +
		"=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04" +
		"F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04" +
		"O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04" +
		"X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x04]\t]\x04^\t^\x04_\t_\x04`\t" +
		"`\x04a\ta\x04b\tb\x04c\tc\x04d\td\x04e\te\x04f\tf\x04g\tg\x04h\th\x04" +
		"i\ti\x04j\tj\x04k\tk\x04l\tl\x04m\tm\x04n\tn\x04o\to\x04p\tp\x04q\tq\x04" +
		"r\tr\x04s\ts\x04t\tt\x04u\tu\x04v\tv\x04w\tw\x04x\tx\x04y\ty\x04z\tz\x04" +
		"{\t{\x04|\t|\x04}\t}\x04~\t~\x04\x7F\t\x7F\x04\x80\t\x80\x04\x81\t\x81" +
		"\x04\x82\t\x82\x04\x83\t\x83\x04\x84\t\x84\x04\x85\t\x85\x04\x86\t\x86" +
		"\x04\x87\t\x87\x04\x88\t\x88\x04\x89\t\x89\x04\x8A\t\x8A\x04\x8B\t\x8B" +
		"\x04\x8C\t\x8C\x04\x8D\t\x8D\x04\x8E\t\x8E\x04\x8F\t\x8F\x04\x90\t\x90" +
		"\x04\x91\t\x91\x04\x92\t\x92\x04\x93\t\x93\x04\x94\t\x94\x04\x95\t\x95" +
		"\x04\x96\t\x96\x04\x97\t\x97\x04\x98\t\x98\x04\x99\t\x99\x04\x9A\t\x9A" +
		"\x04\x9B\t\x9B\x04\x9C\t\x9C\x04\x9D\t\x9D\x04\x9E\t\x9E\x04\x9F\t\x9F" +
		"\x04\xA0\t\xA0\x04\xA1\t\xA1\x04\xA2\t\xA2\x04\xA3\t\xA3\x04\xA4\t\xA4" +
		"\x04\xA5\t\xA5\x04\xA6\t\xA6\x04\xA7\t\xA7\x04\xA8\t\xA8\x04\xA9\t\xA9" +
		"\x04\xAA\t\xAA\x04\xAB\t\xAB\x04\xAC\t\xAC\x04\xAD\t\xAD\x04\xAE\t\xAE" +
		"\x04\xAF\t\xAF\x04\xB0\t\xB0\x04\xB1\t\xB1\x04\xB2\t\xB2\x04\xB3\t\xB3" +
		"\x04\xB4\t\xB4\x04\xB5\t\xB5\x04\xB6\t\xB6\x04\xB7\t\xB7\x04\xB8\t\xB8" +
		"\x04\xB9\t\xB9\x04\xBA\t\xBA\x04\xBB\t\xBB\x04\xBC\t\xBC\x04\xBD\t\xBD" +
		"\x04\xBE\t\xBE\x04\xBF\t\xBF\x04\xC0\t\xC0\x04\xC1\t\xC1\x04\xC2\t\xC2" +
		"\x04\xC3\t\xC3\x04\xC4\t\xC4\x04\xC5\t\xC5\x03\x02\x05\x02\u018C\n\x02" +
		"\x03\x02\x03\x02\x03\x03\x03\x03\x07\x03\u0192\n\x03\f\x03\x0E\x03\u0195" +
		"\v\x03\x03\x03\x03\x03\x05\x03\u0199\n\x03\x03\x03\x05\x03\u019C\n\x03" +
		"\x03\x04\x03\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b" +
		"\x03\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03" +
		"\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03" +
		"\x12\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x15\x03\x15\x03" +
		"\x16\x03\x16\x03\x16\x03\x17\x03\x17\x03\x18\x03\x18\x03\x18\x03\x19\x03" +
		"\x19\x03\x19\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1B\x03\x1B\x03\x1C\x03" +
		"\x1C\x03\x1C\x03\x1D\x03\x1D\x03\x1E\x03\x1E\x03\x1E\x03\x1F\x03\x1F\x03" +
		"\x1F\x03 \x03 \x03 \x03!\x03!\x03!\x03!\x03!\x05!\u01E8\n!\x03!\x05!\u01EB" +
		"\n!\x03\"\x03\"\x06\"\u01EF\n\"\r\"\x0E\"\u01F0\x03#\x03#\x03#\x03$\x03" +
		"$\x06$\u01F8\n$\r$\x0E$\u01F9\x03%\x03%\x03%\x03%\x05%\u0200\n%\x03&\x03" +
		"&\x03&\x03&\x05&\u0206\n&\x03\'\x03\'\x03\'\x03(\x03(\x03(\x03)\x03)\x03" +
		")\x03)\x03*\x03*\x03*\x03*\x03+\x03+\x03+\x03,\x03,\x03,\x03,\x05,\u021D" +
		"\n,\x03-\x03-\x03-\x03-\x05-\u0223\n-\x03.\x03.\x03.\x03/\x03/\x03/\x03" +
		"0\x030\x030\x031\x031\x032\x032\x032\x032\x033\x033\x033\x033\x034\x03" +
		"4\x034\x034\x034\x054\u023D\n4\x034\x054\u0240\n4\x034\x054\u0243\n4\x03" +
		"4\x054\u0246\n4\x035\x035\x035\x035\x055\u024C\n5\x035\x035\x055\u0250" +
		"\n5\x036\x036\x036\x036\x056\u0256\n6\x036\x056\u0259\n6\x036\x066\u025C" +
		"\n6\r6\x0E6\u025D\x056\u0260\n6\x036\x056\u0263\n6\x036\x056\u0266\n6" +
		"\x036\x036\x056\u026A\n6\x037\x037\x037\x037\x057\u0270\n7\x037\x057\u0273" +
		"\n7\x037\x067\u0276\n7\r7\x0E7\u0277\x057\u027A\n7\x037\x057\u027D\n7" +
		"\x037\x057\u0280\n7\x038\x038\x068\u0284\n8\r8\x0E8\u0285\x039\x039\x03" +
		"9\x03:\x03:\x06:\u028D\n:\r:\x0E:\u028E\x03;\x03;\x03;\x03;\x03<\x03<" +
		"\x03<\x03<\x03=\x03=\x03=\x03>\x03>\x03>\x03>\x03?\x03?\x03?\x03@\x03" +
		"@\x03@\x03A\x03A\x03A\x03A\x05A\u02AA\nA\x03B\x03B\x03B\x03B\x03B\x03" +
		"C\x03C\x03C\x03C\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03E\x03" +
		"E\x03E\x03E\x03E\x05E\u02C3\nE\x03F\x03F\x03F\x03F\x05F\u02C9\nF\x03F" +
		"\x05F\u02CC\nF\x03F\x03F\x05F\u02D0\nF\x03F\x05F\u02D3\nF\x03G\x03G\x06" +
		"G\u02D7\nG\rG\x0EG\u02D8\x03H\x03H\x06H\u02DD\nH\rH\x0EH\u02DE\x03I\x03" +
		"I\x06I\u02E3\nI\rI\x0EI\u02E4\x03J\x03J\x03J\x03J\x03J\x03K\x03K\x03K" +
		"\x03K\x03K\x05K\u02F1\nK\x03K\x05K\u02F4\nK\x03K\x05K\u02F7\nK\x03L\x03" +
		"L\x03L\x03L\x03M\x03M\x03M\x03M\x03M\x03N\x03N\x03N\x03N\x03N\x03O\x03" +
		"O\x03O\x03P\x03P\x03P\x03P\x03P\x03Q\x03Q\x03Q\x06Q\u0312\nQ\rQ\x0EQ\u0313" +
		"\x03R\x03R\x03R\x03R\x03S\x03S\x03S\x03T\x03T\x03T\x06T\u0320\nT\rT\x0E" +
		"T\u0321\x03U\x03U\x03U\x03U\x03U\x03V\x03V\x03V\x03V\x05V\u032D\nV\x05" +
		"V\u032F\nV\x03W\x03W\x03W\x03W\x03W\x05W\u0336\nW\x03W\x03W\x05W\u033A" +
		"\nW\x03X\x03X\x03X\x03X\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Y\x03Z\x03Z\x03" +
		"Z\x03Z\x06Z\u034B\nZ\rZ\x0EZ\u034C\x03Z\x03Z\x05Z\u0351\nZ\x03[\x03[\x06" +
		"[\u0355\n[\r[\x0E[\u0356\x03[\x03[\x03\\\x03\\\x03\\\x03\\\x03\\\x03]" +
		"\x03]\x03]\x03]\x03^\x03^\x03^\x03^\x03^\x03^\x03_\x03_\x03_\x03`\x03" +
		"`\x03`\x03`\x03`\x03`\x03a\x03a\x03a\x05a\u0376\na\x03b\x03b\x03b\x03" +
		"b\x05b\u037C\nb\x03b\x05b\u037F\nb\x03b\x05b\u0382\nb\x03c\x03c\x03c\x06" +
		"c\u0387\nc\rc\x0Ec\u0388\x03d\x03d\x03d\x03d\x03d\x03e\x03e\x03e\x03e" +
		"\x03e\x03f\x03f\x03f\x03f\x03g\x03g\x03g\x06g\u039C\ng\rg\x0Eg\u039D\x03" +
		"h\x03h\x03h\x03i\x03i\x06i\u03A5\ni\ri\x0Ei\u03A6\x03j\x03j\x03j\x06j" +
		"\u03AC\nj\rj\x0Ej\u03AD\x03k\x03k\x03k\x06k\u03B3\nk\rk\x0Ek\u03B4\x03" +
		"k\x03k\x05k\u03B9\nk\x03l\x03l\x03l\x03l\x03m\x03m\x03m\x03m\x03m\x03" +
		"n\x03n\x03n\x05n\u03C7\nn\x03o\x03o\x03o\x03o\x03o\x05o\u03CE\no\x03o" +
		"\x05o\u03D1\no\x03p\x03p\x03p\x03p\x06p\u03D7\np\rp\x0Ep\u03D8\x03p\x03" +
		"p\x05p\u03DD\np\x03q\x03q\x06q\u03E1\nq\rq\x0Eq\u03E2\x03q\x03q\x03r\x03" +
		"r\x03r\x05r\u03EA\nr\x03r\x05r\u03ED\nr\x03r\x05r\u03F0\nr\x03r\x05r\u03F3" +
		"\nr\x03r\x06r\u03F6\nr\rr\x0Er\u03F7\x03s\x03s\x03s\x03t\x03t\x03t\x03" +
		"t\x03t\x03u\x03u\x03u\x06u\u0405\nu\ru\x0Eu\u0406\x03u\x05u\u040A\nu\x03" +
		"v\x03v\x03v\x03v\x06v\u0410\nv\rv\x0Ev\u0411\x03w\x03w\x03w\x03w\x03w" +
		"\x03x\x03x\x03x\x06x\u041C\nx\rx\x0Ex\u041D\x03x\x03x\x06x\u0422\nx\r" +
		"x\x0Ex\u0423\x05x\u0426\nx\x03x\x03x\x05x\u042A\nx\x03x\x05x\u042D\nx" +
		"\x03y\x03y\x03y\x06y\u0432\ny\ry\x0Ey\u0433\x03y\x03y\x05y\u0438\ny\x03" +
		"z\x03z\x03z\x03z\x06z\u043E\nz\rz\x0Ez\u043F\x03z\x03z\x06z\u0444\nz\r" +
		"z\x0Ez\u0445\x05z\u0448\nz\x03z\x03z\x05z\u044C\nz\x03{\x03{\x03{\x06" +
		"{\u0451\n{\r{\x0E{\u0452\x03{\x03{\x03{\x03|\x03|\x03|\x06|\u045B\n|\r" +
		"|\x0E|\u045C\x03}\x03}\x03}\x05}\u0462\n}\x03~\x03~\x03~\x03~\x05~\u0468" +
		"\n~\x05~\u046A\n~\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x03\x7F\x05\x7F\u0471" +
		"\n\x7F\x03\x7F\x05\x7F\u0474\n\x7F\x03\x7F\x05\x7F\u0477\n\x7F\x03\x7F" +
		"\x05\x7F\u047A\n\x7F\x03\x80\x03\x80\x03\x80\x03\x80\x03\x80\x05\x80\u0481" +
		"\n\x80\x03\x81\x03\x81\x03\x81\x03\x81\x03\x81\x05\x81\u0488\n\x81\x03" +
		"\x81\x05\x81\u048B\n\x81\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82\x03\x82" +
		"\x05\x82\u0493\n\x82\x03\x82\x05\x82\u0496\n\x82\x03\x83\x03\x83\x03\x83" +
		"\x03\x83\x03\x84\x03\x84\x03\x84\x03\x84\x03\x84\x03\x85\x03\x85\x03\x85" +
		"\x03\x85\x03\x85\x05\x85\u04A6\n\x85\x03\x86\x03\x86\x03\x86\x03\x86\x03" +
		"\x86\x05\x86\u04AD\n\x86\x03\x86\x05\x86\u04B0\n\x86\x03\x87\x03\x87\x03" +
		"\x87\x03\x87\x03\x87\x05\x87\u04B7\n\x87\x03\x87\x03\x87\x03\x88\x03\x88" +
		"\x03\x88\x06\x88\u04BE\n\x88\r\x88\x0E\x88\u04BF\x03\x88\x03\x88\x06\x88" +
		"\u04C4\n\x88\r\x88\x0E\x88\u04C5\x05\x88\u04C8\n\x88\x03\x88\x03\x88\x05" +
		"\x88\u04CC\n\x88\x03\x88\x05\x88\u04CF\n\x88\x03\x89\x03\x89\x03\x89\x03" +
		"\x89\x06\x89\u04D5\n\x89\r\x89\x0E\x89\u04D6\x03\x89\x03\x89\x06\x89\u04DB" +
		"\n\x89\r\x89\x0E\x89\u04DC\x05\x89\u04DF\n\x89\x03\x89\x03\x89\x05\x89" +
		"\u04E3\n\x89\x03\x8A\x03\x8A\x03\x8A\x03\x8B\x03\x8B\x03\x8B\x03\x8B\x03" +
		"\x8C\x03\x8C\x03\x8C\x03\x8C\x07\x8C\u04F0\n\x8C\f\x8C\x0E\x8C\u04F3\v" +
		"\x8C\x03\x8D\x03\x8D\x03\x8D\x03\x8D\x07\x8D\u04F9\n\x8D\f\x8D\x0E\x8D" +
		"\u04FC\v\x8D\x03\x8E\x03\x8E\x03\x8E\x03\x8E\x03\x8F\x03\x8F\x03\x8F\x03" +
		"\x90\x03\x90\x03\x91\x03\x91\x06\x91\u0509\n\x91\r\x91\x0E\x91\u050A\x03" +
		"\x92\x03\x92\x03\x93\x03\x93\x03\x94\x03\x94\x03\x95\x03\x95\x03\x95\x06" +
		"\x95\u0516\n\x95\r\x95\x0E\x95\u0517\x03\x96\x03\x96\x03\x96\x06\x96\u051D" +
		"\n\x96\r\x96\x0E\x96\u051E\x03\x97\x03\x97\x03\x97\x06\x97\u0524\n\x97" +
		"\r\x97\x0E\x97\u0525\x03\x98\x03\x98\x06\x98\u052A\n\x98\r\x98\x0E\x98" +
		"\u052B\x03\x99\x03\x99\x06\x99\u0530\n\x99\r\x99\x0E\x99\u0531\x05\x99" +
		"\u0534\n\x99\x03\x9A\x03\x9A\x03\x9A\x03\x9B\x03\x9B\x03\x9B\x06\x9B\u053C" +
		"\n\x9B\r\x9B\x0E\x9B\u053D\x05\x9B\u0540\n\x9B\x03\x9C\x03\x9C\x03\x9C" +
		"\x05\x9C\u0545\n\x9C\x03\x9D\x03\x9D\x03\x9D\x03\x9D\x03\x9E\x03\x9E\x03" +
		"\x9F\x03\x9F\x03\xA0\x03\xA0\x03\xA1\x03\xA1\x03\xA1\x06\xA1\u0554\n\xA1" +
		"\r\xA1\x0E\xA1\u0555\x03\xA2\x03\xA2\x03\xA2\x03\xA2\x03\xA3\x03\xA3\x03" +
		"\xA3\x05\xA3\u055F\n\xA3\x03\xA4\x03\xA4\x03\xA4\x03\xA4\x03\xA5\x03\xA5" +
		"\x03\xA5\x03\xA5\x03\xA5\x03\xA6\x03\xA6\x03\xA6\x03\xA7\x03\xA7\x03\xA7" +
		"\x03\xA7\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x03\xA8\x05\xA8\u0576\n\xA8\x03" +
		"\xA9\x03\xA9\x03\xA9\x03\xA9\x03\xAA\x03\xAA\x03\xAA\x03\xAA\x03\xAB\x03" +
		"\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x03\xAB\x05\xAB\u0588\n\xAB" +
		"\x03\xAB\x03\xAB\x03\xAB\x05\xAB\u058D\n\xAB\x03\xAC\x03\xAC\x05\xAC\u0591" +
		"\n\xAC\x03\xAD\x03\xAD\x03\xAD\x03\xAE\x03\xAE\x03\xAF\x03\xAF\x03\xAF" +
		"\x03\xB0\x03\xB0\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1\x03\xB1" +
		"\x03\xB1\x03\xB1\x05\xB1\u05A6\n\xB1\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x03" +
		"\xB2\x03\xB2\x03\xB2\x03\xB2\x03\xB2\x05\xB2\u05B1\n\xB2\x03\xB3\x03\xB3" +
		"\x05\xB3\u05B5\n\xB3\x03\xB3\x05\xB3\u05B8\n\xB3\x03\xB4\x03\xB4\x03\xB5" +
		"\x03\xB5\x03\xB6\x03\xB6\x03\xB7\x03\xB7\x03\xB7\x03\xB7\x03\xB8\x03\xB8" +
		"\x03\xB9\x03\xB9\x03\xB9\x03\xBA\x03\xBA\x03\xBB\x03\xBB\x03\xBC\x03\xBC" +
		"\x03\xBC\x03\xBD\x03\xBD\x03\xBE\x03\xBE\x03\xBF\x03\xBF\x03\xC0\x03\xC0" +
		"\x06\xC0\u05D8\n\xC0\r\xC0\x0E\xC0\u05D9\x05\xC0\u05DC\n\xC0\x03\xC1\x03" +
		"\xC1\x03\xC2\x03\xC2\x03\xC3\x03\xC3\x03\xC3\x06\xC3\u05E5\n\xC3\r\xC3" +
		"\x0E\xC3\u05E6\x03\xC3\x03\xC3\x06\xC3\u05EB\n\xC3\r\xC3\x0E\xC3\u05EC" +
		"\x03\xC3\x05\xC3\u05F0\n\xC3\x03\xC4\x03\xC4\x03\xC4\x03\xC4\x05\xC4\u05F6" +
		"\n\xC4\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x03\xC5" +
		"\x03\xC5\x03\xC5\x03\xC5\x03\xC5\x05\xC5\u069D\n\xC5\x03\xC5\x02\x02\x02" +
		"\xC6\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02" +
		"\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02" +
		"(\x02*\x02,\x02.\x020\x022\x024\x026\x028\x02:\x02<\x02>\x02@\x02B\x02" +
		"D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02T\x02V\x02X\x02Z\x02\\\x02^\x02" +
		"`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02p\x02r\x02t\x02v\x02x\x02z\x02" +
		"|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02\x88\x02\x8A\x02\x8C\x02\x8E" +
		"\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02\x9A\x02\x9C\x02\x9E\x02\xA0" +
		"\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02\xAC\x02\xAE\x02\xB0\x02\xB2" +
		"\x02\xB4\x02\xB6\x02\xB8\x02\xBA\x02\xBC\x02\xBE\x02\xC0\x02\xC2\x02\xC4" +
		"\x02\xC6\x02\xC8\x02\xCA\x02\xCC\x02\xCE\x02\xD0\x02\xD2\x02\xD4\x02\xD6" +
		"\x02\xD8\x02\xDA\x02\xDC\x02\xDE\x02\xE0\x02\xE2\x02\xE4\x02\xE6\x02\xE8" +
		"\x02\xEA\x02\xEC\x02\xEE\x02\xF0\x02\xF2\x02\xF4\x02\xF6\x02\xF8\x02\xFA" +
		"\x02\xFC\x02\xFE\x02\u0100\x02\u0102\x02\u0104\x02\u0106\x02\u0108\x02" +
		"\u010A\x02\u010C\x02\u010E\x02\u0110\x02\u0112\x02\u0114\x02\u0116\x02" +
		"\u0118\x02\u011A\x02\u011C\x02\u011E\x02\u0120\x02\u0122\x02\u0124\x02" +
		"\u0126\x02\u0128\x02\u012A\x02\u012C\x02\u012E\x02\u0130\x02\u0132\x02" +
		"\u0134\x02\u0136\x02\u0138\x02\u013A\x02\u013C\x02\u013E\x02\u0140\x02" +
		"\u0142\x02\u0144\x02\u0146\x02\u0148\x02\u014A\x02\u014C\x02\u014E\x02" +
		"\u0150\x02\u0152\x02\u0154\x02\u0156\x02\u0158\x02\u015A\x02\u015C\x02" +
		"\u015E\x02\u0160\x02\u0162\x02\u0164\x02\u0166\x02\u0168\x02\u016A\x02" +
		"\u016C\x02\u016E\x02\u0170\x02\u0172\x02\u0174\x02\u0176\x02\u0178\x02" +
		"\u017A\x02\u017C\x02\u017E\x02\u0180\x02\u0182\x02\u0184\x02\u0186\x02" +
		"\u0188\x02\x021\x04\x02\u0138\u0138\u013B\u013B\x03\x02\u0136\u0137\x03" +
		"\x02\xA2\xB1\x03\x02\xF9\xFC\x03\x02\u0103\u0104\x03\x02\u0108\u010B\x03" +
		"\x02\u012E\u012F\x03\x02\xFD\u0100\x03\x0223\x03\x02\xF9\xFA\x04\x02:" +
		":BB\x04\x02;<HH\x05\x02==@AII\x04\x02CCFF\x03\x02>?\x04\x02KKSS\x03\x02" +
		"LM\x03\x02\u0113\u0114\x04\x02TT\\\\\x04\x02VW^_\x04\x02XX[[\x03\x02Y" +
		"Z\x05\x02``iimm\x04\x02aahh\x05\x02bbddoo\x05\x02ccffpp\x03\x02kl\x03" +
		"\x02\u0125\u0126\x03\x02rs\x03\x02\xFB\xFC\x06\x02vv}}\x89\x89\x8B\x8B" +
		"\x04\x02\u0125\u0126\u012A\u012A\x04\x02\x7F\x7F\x88\x88\x03\x02\x80\x81" +
		"\x03\x02\u012B\u012C\x05\x02\x87\x87\x8F\x8F\x91\x91\x03\x02\x8D\x8E\x05" +
		"\x02\x94\x94\x9E\x9E\xA0\xA0\x05\x02\x9C\x9C\x9F\x9F\xA1\xA1\x04\x02\x98" +
		"\x98\x9B\x9B\x04\x02\x97\x97\x9A\x9A\x03\x02\xB4\xB5\x03\x02\xC3\xC4\v" +
		"\x02\xB7\xB7\xBB\xBB\xBF\xBF\xC1\xC2\xC6\xC6\xCC\xCC\xD1\xD1\xF4\xF4\u011D" +
		"\u011D\x04\x02\xC7\xC8\xD2\xD2\x03\x02\xCA\xCB\x04\x02\xE9\xE9\u0132\u0132" +
		"\x02\u071A\x02\u018B\x03\x02\x02\x02\x04\u0193\x03\x02\x02\x02\x06\u019D" +
		"\x03\x02\x02\x02\b\u019F\x03\x02\x02\x02\n\u01A1\x03\x02\x02\x02\f\u01A3" +
		"\x03\x02\x02\x02\x0E\u01A5\x03\x02\x02\x02\x10\u01A7\x03\x02\x02\x02\x12" +
		"\u01A9\x03\x02\x02\x02\x14\u01AB\x03\x02\x02\x02\x16\u01AD\x03\x02\x02" +
		"\x02\x18\u01AF\x03\x02\x02\x02\x1A\u01B1\x03\x02\x02\x02\x1C\u01B3\x03" +
		"\x02\x02\x02\x1E\u01B5\x03\x02\x02\x02 \u01B7\x03\x02\x02\x02\"\u01B9" +
		"\x03\x02\x02\x02$\u01BB\x03\x02\x02\x02&\u01BE\x03\x02\x02\x02(\u01C1" +
		"\x03\x02\x02\x02*\u01C3\x03\x02\x02\x02,\u01C6\x03\x02\x02\x02.\u01C8" +
		"\x03\x02\x02\x020\u01CB\x03\x02\x02\x022\u01CE\x03\x02\x02\x024\u01D2" +
		"\x03\x02\x02\x026\u01D4\x03\x02\x02\x028\u01D7\x03\x02\x02\x02:\u01D9" +
		"\x03\x02\x02\x02<\u01DC\x03\x02\x02\x02>\u01DF\x03\x02\x02\x02@\u01E2" +
		"\x03\x02\x02\x02B\u01EC\x03\x02\x02\x02D\u01F2\x03\x02\x02\x02F\u01F5" +
		"\x03\x02\x02\x02H\u01FB\x03\x02\x02\x02J\u0201\x03\x02\x02\x02L\u0207" +
		"\x03\x02\x02\x02N\u020A\x03\x02\x02\x02P\u020D\x03\x02\x02\x02R\u0211" +
		"\x03\x02\x02\x02T\u0215\x03\x02\x02\x02V\u0218\x03\x02\x02\x02X\u021E" +
		"\x03\x02\x02\x02Z\u0224\x03\x02\x02\x02\\\u0227\x03\x02\x02\x02^\u022A" +
		"\x03\x02\x02\x02`\u022D\x03\x02\x02\x02b\u022F\x03\x02\x02\x02d\u0233" +
		"\x03\x02\x02\x02f\u0237\x03\x02\x02\x02h\u0247\x03\x02\x02\x02j\u0251" +
		"\x03\x02\x02\x02l\u026B\x03\x02\x02\x02n\u0281\x03\x02\x02\x02p\u0287" +
		"\x03\x02\x02\x02r\u028A\x03\x02\x02\x02t\u0290\x03\x02\x02\x02v\u0294" +
		"\x03\x02\x02\x02x\u0298\x03\x02\x02\x02z\u029B\x03\x02\x02\x02|\u029F" +
		"\x03\x02\x02\x02~\u02A2\x03\x02\x02\x02\x80\u02A5\x03\x02\x02\x02\x82" +
		"\u02AB\x03\x02\x02\x02\x84\u02B0\x03\x02\x02\x02\x86\u02B4\x03\x02\x02" +
		"\x02\x88\u02C2\x03\x02\x02\x02\x8A\u02C4\x03\x02\x02\x02\x8C\u02D4\x03" +
		"\x02\x02\x02\x8E\u02DA\x03\x02\x02\x02\x90\u02E0\x03\x02\x02\x02\x92\u02E6" +
		"\x03\x02\x02\x02\x94\u02EB\x03\x02\x02\x02\x96\u02F8\x03\x02\x02\x02\x98" +
		"\u02FC\x03\x02\x02\x02\x9A\u0301\x03\x02\x02\x02\x9C\u0306\x03\x02\x02" +
		"\x02\x9E\u0309\x03\x02\x02\x02\xA0\u030E\x03\x02\x02\x02\xA2\u0315\x03" +
		"\x02\x02\x02\xA4\u0319\x03\x02\x02\x02\xA6\u031C\x03\x02\x02\x02\xA8\u0323" +
		"\x03\x02\x02\x02\xAA\u0328\x03\x02\x02\x02\xAC\u0330\x03\x02\x02\x02\xAE" +
		"\u033B\x03\x02\x02\x02\xB0\u033F\x03\x02\x02\x02\xB2\u0346\x03\x02\x02" +
		"\x02\xB4\u0352\x03\x02\x02\x02\xB6\u035A\x03\x02\x02\x02\xB8\u035F\x03" +
		"\x02\x02\x02\xBA\u0363\x03\x02\x02\x02\xBC\u0369\x03\x02\x02\x02\xBE\u036C" +
		"\x03\x02\x02\x02\xC0\u0372\x03\x02\x02\x02\xC2\u0377\x03\x02\x02\x02\xC4" +
		"\u0383\x03\x02\x02\x02\xC6\u038A\x03\x02\x02\x02\xC8\u038F\x03\x02\x02" +
		"\x02\xCA\u0394\x03\x02\x02\x02\xCC\u0398\x03\x02\x02\x02\xCE\u039F\x03" +
		"\x02\x02\x02\xD0\u03A2\x03\x02\x02\x02\xD2\u03A8\x03\x02\x02\x02\xD4\u03AF" +
		"\x03\x02\x02\x02\xD6\u03BA\x03\x02\x02\x02\xD8\u03BE\x03\x02\x02\x02\xDA" +
		"\u03C3\x03\x02\x02\x02\xDC\u03C8\x03\x02\x02\x02\xDE\u03D2\x03\x02\x02" +
		"\x02\xE0\u03DE\x03\x02\x02\x02\xE2\u03E6\x03\x02\x02\x02\xE4\u03F9\x03" +
		"\x02\x02\x02\xE6\u03FC\x03\x02\x02\x02\xE8\u0401\x03\x02\x02\x02\xEA\u040B" +
		"\x03\x02\x02\x02\xEC\u0413\x03\x02\x02\x02\xEE\u0418\x03\x02\x02\x02\xF0" +
		"\u042E\x03\x02\x02\x02\xF2\u0439\x03\x02\x02\x02\xF4\u044D\x03\x02\x02" +
		"\x02\xF6\u0457\x03\x02\x02\x02\xF8\u045E\x03";
	private static readonly _serializedATNSegment1: string =
		"\x02\x02\x02\xFA\u0463\x03\x02\x02\x02\xFC\u046B\x03\x02\x02\x02\xFE\u047B" +
		"\x03\x02\x02\x02\u0100\u0482\x03\x02\x02\x02\u0102\u048C\x03\x02\x02\x02" +
		"\u0104\u0497\x03\x02\x02\x02\u0106\u049B\x03\x02\x02\x02\u0108\u04A0\x03" +
		"\x02\x02\x02\u010A\u04A7\x03\x02\x02\x02\u010C\u04B1\x03\x02\x02\x02\u010E" +
		"\u04BA\x03\x02\x02\x02\u0110\u04D0\x03\x02\x02\x02\u0112\u04E4\x03\x02" +
		"\x02\x02\u0114\u04E7\x03\x02\x02\x02\u0116\u04EB\x03\x02\x02\x02\u0118" +
		"\u04F4\x03\x02\x02\x02\u011A\u04FD\x03\x02\x02\x02\u011C\u0501\x03\x02" +
		"\x02\x02\u011E\u0504\x03\x02\x02\x02\u0120\u0506\x03\x02\x02\x02\u0122" +
		"\u050C\x03\x02\x02\x02\u0124\u050E\x03\x02\x02\x02\u0126\u0510\x03\x02" +
		"\x02\x02\u0128\u0512\x03\x02\x02\x02\u012A\u0519\x03\x02\x02\x02\u012C" +
		"\u0520\x03\x02\x02\x02\u012E\u0527\x03\x02\x02\x02\u0130\u052D\x03\x02" +
		"\x02\x02\u0132\u0535\x03\x02\x02\x02\u0134\u0538\x03\x02\x02\x02\u0136" +
		"\u0541\x03\x02\x02\x02\u0138\u0546\x03\x02\x02\x02\u013A\u054A\x03\x02" +
		"\x02\x02\u013C\u054C\x03\x02\x02\x02\u013E\u054E\x03\x02\x02\x02\u0140" +
		"\u0550\x03\x02\x02\x02\u0142\u0557\x03\x02\x02\x02\u0144\u055B\x03\x02" +
		"\x02\x02\u0146\u0560\x03\x02\x02\x02\u0148\u0564\x03\x02\x02\x02\u014A" +
		"\u0569\x03\x02\x02\x02\u014C\u056C\x03\x02\x02\x02\u014E\u0570\x03\x02" +
		"\x02\x02\u0150\u0577\x03\x02\x02\x02\u0152\u057B\x03\x02\x02\x02\u0154" +
		"\u057F\x03\x02\x02\x02\u0156\u058E\x03\x02\x02\x02\u0158\u0592\x03\x02" +
		"\x02\x02\u015A\u0595\x03\x02\x02\x02\u015C\u0597\x03\x02\x02\x02\u015E" +
		"\u059A\x03\x02\x02\x02\u0160\u05A5\x03\x02\x02\x02\u0162\u05B0\x03\x02" +
		"\x02\x02\u0164\u05B2\x03\x02\x02\x02\u0166\u05B9\x03\x02\x02\x02\u0168" +
		"\u05BB\x03\x02\x02\x02\u016A\u05BD\x03\x02\x02\x02\u016C\u05BF\x03\x02" +
		"\x02\x02\u016E\u05C3\x03\x02\x02\x02\u0170\u05C5\x03\x02\x02\x02\u0172" +
		"\u05C8\x03\x02\x02\x02\u0174\u05CA\x03\x02\x02\x02\u0176\u05CC\x03\x02" +
		"\x02\x02\u0178\u05CF\x03\x02\x02\x02\u017A\u05D1\x03\x02\x02\x02\u017C" +
		"\u05D3\x03\x02\x02\x02\u017E\u05D5\x03\x02\x02\x02\u0180\u05DD\x03\x02" +
		"\x02\x02\u0182\u05DF\x03\x02\x02\x02\u0184\u05EF\x03\x02\x02\x02\u0186" +
		"\u05F1\x03\x02\x02\x02\u0188\u069C\x03\x02\x02\x02\u018A\u018C\x05\x04" +
		"\x03\x02\u018B\u018A\x03\x02\x02\x02\u018B\u018C\x03\x02\x02\x02\u018C" +
		"\u018D\x03\x02\x02\x02\u018D\u018E\x07\x02\x02\x03\u018E\x03\x03\x02\x02" +
		"\x02\u018F\u0192\x05\u0188\xC5\x02\u0190\u0192\x05\x06\x04\x02\u0191\u018F" +
		"\x03\x02\x02\x02\u0191\u0190\x03\x02\x02\x02\u0192\u0195\x03\x02\x02\x02" +
		"\u0193\u0191\x03\x02\x02\x02\u0193\u0194\x03\x02\x02\x02\u0194\u019B\x03" +
		"\x02\x02\x02\u0195\u0193\x03\x02\x02\x02\u0196\u0198\x05\u0188\xC5\x02" +
		"\u0197\u0199\x07\u013C\x02\x02\u0198\u0197\x03\x02\x02\x02\u0198\u0199" +
		"\x03\x02\x02\x02\u0199\u019C\x03\x02\x02\x02\u019A\u019C\x05\x06\x04\x02" +
		"\u019B\u0196\x03\x02\x02\x02\u019B\u019A\x03\x02\x02\x02\u019C\x05\x03" +
		"\x02\x02\x02\u019D\u019E\x07\u013C\x02\x02\u019E\x07\x03\x02\x02\x02\u019F" +
		"\u01A0\t\x02\x02\x02\u01A0\t\x03\x02\x02\x02\u01A1\u01A2\t\x02\x02\x02" +
		"\u01A2\v\x03\x02\x02\x02\u01A3\u01A4\x07\u0138\x02\x02\u01A4\r\x03\x02" +
		"\x02\x02\u01A5\u01A6\x07\u0136\x02\x02\u01A6\x0F\x03\x02\x02\x02\u01A7" +
		"\u01A8\t\x03\x02\x02\u01A8\x11\x03\x02\x02\x02\u01A9\u01AA\t\x02\x02\x02" +
		"\u01AA\x13\x03\x02\x02\x02\u01AB\u01AC\x05\x0E\b\x02\u01AC\x15\x03\x02" +
		"\x02\x02\u01AD\u01AE\x05\x0E\b\x02\u01AE\x17\x03\x02\x02\x02\u01AF\u01B0" +
		"\x05\x0E\b\x02\u01B0\x19\x03\x02\x02\x02\u01B1\u01B2\x07\u0138\x02\x02" +
		"\u01B2\x1B\x03\x02\x02\x02\u01B3\u01B4\x05\x0E\b\x02\u01B4\x1D\x03\x02" +
		"\x02\x02\u01B5\u01B6\x05\x0E\b\x02\u01B6\x1F\x03\x02\x02\x02\u01B7\u01B8" +
		"\x05\x0E\b\x02\u01B8!\x03\x02\x02\x02\u01B9\u01BA\x05\x0E\b\x02\u01BA" +
		"#\x03\x02\x02\x02\u01BB\u01BC\x05\b\x05\x02\u01BC\u01BD\x05\f\x07\x02" +
		"\u01BD%\x03\x02\x02\x02\u01BE\u01BF\x05\x0E\b\x02\u01BF\u01C0\x05\f\x07" +
		"\x02\u01C0\'\x03\x02\x02\x02\u01C1\u01C2\t\x04\x02\x02\u01C2)\x03\x02" +
		"\x02\x02\u01C3\u01C4\x07%\x02\x02\u01C4\u01C5\x05\x12\n\x02\u01C5+\x03" +
		"\x02\x02\x02\u01C6\u01C7\t\x05\x02\x02\u01C7-\x03\x02\x02\x02\u01C8\u01C9" +
		"\x07\xFF\x02\x02\u01C9\u01CA\x05\x0E\b\x02\u01CA/\x03\x02\x02\x02\u01CB" +
		"\u01CC\x07\xFE\x02\x02\u01CC\u01CD\x05\x0E\b\x02\u01CD1\x03\x02\x02\x02" +
		"\u01CE\u01CF\x07\u0112\x02\x02\u01CF\u01D0\x05\x0E\b\x02\u01D0\u01D1\x05" +
		"\x0E\b\x02\u01D13\x03\x02\x02\x02\u01D2\u01D3\t\x06\x02\x02\u01D35\x03" +
		"\x02\x02\x02\u01D4\u01D5\t\x07\x02\x02\u01D5\u01D6\x05\x0E\b\x02\u01D6" +
		"7\x03\x02\x02\x02\u01D7\u01D8\t\b\x02\x02\u01D89\x03\x02\x02\x02\u01D9" +
		"\u01DA\x07\u0130\x02\x02\u01DA\u01DB\x05\x0E\b\x02\u01DB;\x03\x02\x02" +
		"\x02\u01DC\u01DD\x07\u011F\x02\x02\u01DD\u01DE\x05\x0E\b\x02\u01DE=\x03" +
		"\x02\x02\x02\u01DF\u01E0\x07\u0131\x02\x02\u01E0\u01E1\x05\x0E\b\x02\u01E1" +
		"?\x03\x02\x02\x02\u01E2\u01E3\x07\x07\x02\x02\u01E3\u01E4\x05\b\x05\x02" +
		"\u01E4\u01E7\x05\b\x05\x02\u01E5\u01E6\x07\xF8\x02\x02\u01E6\u01E8\x05" +
		"\x0E\b\x02\u01E7\u01E5\x03\x02\x02\x02\u01E7\u01E8\x03\x02\x02\x02\u01E8" +
		"\u01EA\x03\x02\x02\x02\u01E9\u01EB\x07\u0107\x02\x02\u01EA\u01E9\x03\x02" +
		"\x02\x02\u01EA\u01EB\x03\x02\x02\x02\u01EBA\x03\x02\x02\x02\u01EC\u01EE" +
		"\x07\b\x02\x02\u01ED\u01EF\x05\b\x05\x02\u01EE\u01ED\x03\x02\x02\x02\u01EF" +
		"\u01F0\x03\x02\x02\x02\u01F0\u01EE\x03\x02\x02\x02\u01F0\u01F1\x03\x02" +
		"\x02\x02\u01F1C\x03\x02\x02\x02\u01F2\u01F3\x07\t\x02\x02\u01F3\u01F4" +
		"\x05\b\x05\x02\u01F4E\x03\x02\x02\x02\u01F5\u01F7\x07\n\x02\x02\u01F6" +
		"\u01F8\x05\b\x05\x02\u01F7\u01F6\x03\x02\x02\x02\u01F8\u01F9\x03\x02\x02" +
		"\x02\u01F9\u01F7\x03\x02\x02\x02\u01F9\u01FA\x03\x02\x02\x02\u01FAG\x03" +
		"\x02\x02\x02\u01FB\u01FC\x07\v\x02\x02\u01FC\u01FD\x05\b\x05\x02\u01FD" +
		"\u01FF\x05\x0E\b\x02\u01FE\u0200\x05,\x17\x02\u01FF\u01FE\x03\x02\x02" +
		"\x02\u01FF\u0200\x03\x02\x02\x02\u0200I\x03\x02\x02\x02\u0201\u0202\x07" +
		"\f\x02\x02\u0202\u0203\x05\b\x05\x02\u0203\u0205\x05\x0E\b\x02\u0204\u0206" +
		"\x05,\x17\x02\u0205\u0204\x03\x02\x02\x02\u0205\u0206\x03\x02\x02\x02" +
		"\u0206K\x03\x02\x02\x02\u0207\u0208\x07\r\x02\x02\u0208\u0209\x05\b\x05" +
		"\x02\u0209M\x03\x02\x02\x02\u020A\u020B\x07\x0E\x02\x02\u020B\u020C\x05" +
		"\x12\n\x02\u020CO\x03\x02\x02\x02\u020D\u020E\x07\x0F\x02\x02\u020E\u020F" +
		"\x05\b\x05\x02\u020F\u0210\x05\x0E\b\x02\u0210Q\x03\x02\x02\x02\u0211" +
		"\u0212\x07\x10\x02\x02\u0212\u0213\t\t\x02\x02\u0213\u0214\x05\b\x05\x02" +
		"\u0214S\x03\x02\x02\x02\u0215\u0216\x07\x11\x02\x02\u0216\u0217\x05\b" +
		"\x05\x02\u0217U\x03\x02\x02\x02\u0218\u0219\x07\x12\x02\x02\u0219\u021A" +
		"\x05\b\x05\x02\u021A\u021C\x05\x0E\b\x02\u021B\u021D\x05,\x17\x02\u021C" +
		"\u021B\x03\x02\x02\x02\u021C\u021D\x03\x02\x02\x02\u021DW\x03\x02\x02" +
		"\x02\u021E\u021F\x07\x13\x02\x02\u021F\u0220\x05\b\x05\x02\u0220\u0222" +
		"\x05\x0E\b\x02\u0221\u0223\x05,\x17\x02\u0222\u0221\x03\x02\x02\x02\u0222" +
		"\u0223\x03\x02\x02\x02\u0223Y\x03\x02\x02\x02\u0224\u0225\x07\x14\x02" +
		"\x02\u0225\u0226\x05\b\x05\x02\u0226[\x03\x02\x02\x02\u0227\u0228\x07" +
		"\x15\x02\x02\u0228\u0229\x05\b\x05\x02\u0229]\x03\x02\x02\x02\u022A\u022B" +
		"\x07\x16\x02\x02\u022B\u022C\x05\b\x05\x02\u022C_\x03\x02\x02\x02\u022D" +
		"\u022E\x07\x17\x02\x02\u022Ea\x03\x02\x02\x02\u022F\u0230\x07\x18\x02" +
		"\x02\u0230\u0231\x05\b\x05\x02\u0231\u0232\x05\b\x05\x02\u0232c\x03\x02" +
		"\x02\x02\u0233\u0234\x07\x19\x02\x02\u0234\u0235\x05\b\x05\x02\u0235\u0236" +
		"\x05\b\x05\x02\u0236e\x03\x02\x02\x02\u0237\u0238\x07\x1A\x02\x02\u0238" +
		"\u0239\x05\b\x05\x02\u0239\u023A\x05\x0E\b\x02\u023A\u023C\x05\f\x07\x02" +
		"\u023B\u023D\x07\u0107\x02\x02\u023C\u023B\x03\x02\x02\x02\u023C\u023D" +
		"\x03\x02\x02\x02\u023D\u023F\x03\x02\x02\x02\u023E\u0240\x07\u0101\x02" +
		"\x02\u023F\u023E\x03\x02\x02\x02\u023F\u0240\x03\x02\x02\x02\u0240\u0242" +
		"\x03\x02\x02\x02\u0241\u0243\x05.\x18\x02\u0242\u0241\x03\x02\x02\x02" +
		"\u0242\u0243\x03\x02\x02\x02\u0243\u0245\x03\x02\x02\x02\u0244\u0246\x05" +
		"0\x19\x02\u0245\u0244\x03\x02\x02\x02\u0245\u0246\x03\x02\x02\x02\u0246" +
		"g\x03\x02\x02\x02\u0247\u0248\x07\x1B\x02\x02\u0248\u0249\x05\x14\v\x02" +
		"\u0249\u024B\x05\x12\n\x02\u024A\u024C\x05\x0E\b\x02\u024B\u024A\x03\x02" +
		"\x02\x02\u024B\u024C\x03\x02\x02\x02\u024C\u024F\x03\x02\x02\x02\u024D" +
		"\u024E\x07\x1F\x02\x02\u024E\u0250\x05\f\x07\x02\u024F\u024D\x03\x02\x02" +
		"\x02\u024F\u0250\x03\x02\x02\x02\u0250i\x03\x02\x02\x02\u0251\u0252\x07" +
		"\x1C\x02\x02\u0252\u0255\x05\b\x05\x02\u0253\u0254\x07\u0102\x02\x02\u0254" +
		"\u0256\x05\x12\n\x02\u0255\u0253\x03\x02\x02\x02\u0255\u0256\x03\x02\x02" +
		"\x02\u0256\u0258\x03\x02\x02\x02\u0257\u0259\x052\x1A\x02\u0258\u0257" +
		"\x03\x02\x02\x02\u0258\u0259\x03\x02\x02\x02\u0259\u025F\x03\x02\x02\x02" +
		"\u025A\u025C\x05*\x16\x02\u025B\u025A\x03\x02\x02\x02\u025C\u025D\x03" +
		"\x02\x02\x02\u025D\u025B\x03\x02\x02\x02\u025D\u025E\x03\x02\x02\x02\u025E" +
		"\u0260\x03\x02\x02\x02\u025F\u025B\x03\x02\x02\x02\u025F\u0260\x03\x02" +
		"\x02\x02\u0260\u0262\x03\x02\x02\x02\u0261\u0263\x054\x1B\x02\u0262\u0261" +
		"\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263\u0265\x03\x02\x02\x02" +
		"\u0264\u0266\x07\u0105\x02\x02\u0265\u0264\x03\x02\x02\x02\u0265\u0266" +
		"\x03\x02\x02\x02\u0266\u0269\x03\x02\x02\x02\u0267\u0268\x07\u0106\x02" +
		"\x02\u0268\u026A\x05\f\x07\x02\u0269\u0267\x03\x02\x02\x02\u0269\u026A" +
		"\x03\x02\x02\x02\u026Ak\x03\x02\x02\x02\u026B\u026C\x07\x1D\x02\x02\u026C" +
		"\u026F\x05\b\x05\x02\u026D\u026E\x07\u0102\x02\x02\u026E\u0270\x05\x12" +
		"\n\x02\u026F\u026D\x03\x02\x02\x02\u026F\u0270\x03\x02\x02\x02\u0270\u0272" +
		"\x03\x02\x02\x02\u0271\u0273\x052\x1A\x02\u0272\u0271\x03\x02\x02\x02" +
		"\u0272\u0273\x03\x02\x02\x02\u0273\u0279\x03\x02\x02\x02\u0274\u0276\x05" +
		"*\x16\x02\u0275\u0274\x03\x02\x02\x02\u0276\u0277\x03\x02\x02\x02\u0277" +
		"\u0275\x03\x02\x02\x02\u0277\u0278\x03\x02\x02\x02\u0278\u027A\x03\x02" +
		"\x02\x02\u0279\u0275\x03\x02\x02\x02\u0279\u027A\x03\x02\x02\x02\u027A" +
		"\u027C\x03\x02\x02\x02\u027B\u027D\x054\x1B\x02\u027C\u027B\x03\x02\x02" +
		"\x02\u027C\u027D\x03\x02\x02\x02\u027D\u027F\x03\x02\x02\x02\u027E\u0280" +
		"\x07\u0105\x02\x02\u027F\u027E\x03\x02\x02\x02\u027F\u0280\x03\x02\x02" +
		"\x02\u0280m\x03\x02\x02\x02\u0281\u0283\x07\x1E\x02\x02\u0282\u0284\x05" +
		"\b\x05\x02\u0283\u0282\x03\x02\x02\x02\u0284\u0285\x03\x02\x02\x02\u0285" +
		"\u0283\x03\x02\x02\x02\u0285\u0286\x03\x02\x02\x02\u0286o\x03\x02\x02" +
		"\x02\u0287\u0288\x07\x1F\x02\x02\u0288\u0289\x05\b\x05\x02\u0289q\x03" +
		"\x02\x02\x02\u028A\u028C\x07 \x02\x02\u028B\u028D\x05\b\x05\x02\u028C" +
		"\u028B\x03\x02\x02\x02\u028D\u028E\x03\x02\x02\x02\u028E\u028C\x03\x02" +
		"\x02\x02\u028E\u028F\x03\x02\x02\x02\u028Fs\x03\x02\x02\x02\u0290\u0291" +
		"\x07!\x02\x02\u0291\u0292\x05\x0E\b\x02\u0292\u0293\x05\x0E\b\x02\u0293" +
		"u\x03\x02\x02\x02\u0294\u0295\x07\"\x02\x02\u0295\u0296\x05\b\x05\x02" +
		"\u0296\u0297\x05\f\x07\x02\u0297w\x03\x02\x02\x02\u0298\u0299\x07#\x02" +
		"\x02\u0299\u029A\x05\b\x05\x02\u029Ay\x03\x02\x02\x02\u029B\u029C\x07" +
		"$\x02\x02\u029C\u029D\x05\b\x05\x02\u029D\u029E\x05\x0E\b\x02\u029E{\x03" +
		"\x02\x02\x02\u029F\u02A0\x07%\x02\x02\u02A0\u02A1\x05\b\x05\x02\u02A1" +
		"}\x03\x02\x02\x02\u02A2\u02A3\x07&\x02\x02\u02A3\u02A4\x05\b\x05\x02\u02A4" +
		"\x7F\x03\x02\x02\x02\u02A5\u02A6\x07\'\x02\x02\u02A6\u02A9\x05\b\x05\x02" +
		"\u02A7\u02AA\x056\x1C\x02\u02A8\u02AA\x07\x11\x02\x02\u02A9\u02A7\x03" +
		"\x02\x02\x02\u02A9\u02A8\x03\x02\x02\x02\u02A9\u02AA\x03\x02\x02\x02\u02AA" +
		"\x81\x03\x02\x02\x02\u02AB\u02AC\x07(\x02\x02\u02AC\u02AD\x05\b\x05\x02" +
		"\u02AD\u02AE\x05\x0E\b\x02\u02AE\u02AF\x05\x0E\b\x02\u02AF\x83\x03\x02" +
		"\x02\x02\u02B0\u02B1\x07)\x02\x02\u02B1\u02B2\x05\b\x05\x02\u02B2\u02B3" +
		"\x05\f\x07\x02\u02B3\x85\x03\x02\x02\x02\u02B4\u02B5\x07*\x02\x02\u02B5" +
		"\u02B6\x05\b\x05\x02\u02B6\u02B7\x05\x0E\b\x02\u02B7\x87\x03\x02\x02\x02" +
		"\u02B8\u02B9\x07+\x02\x02\u02B9\u02C3\x05\b\x05\x02\u02BA\u02BB\x07,\x02" +
		"\x02\u02BB\u02BC\x05\b\x05\x02\u02BC\u02BD\x05\x0E\b\x02\u02BD\u02C3\x03" +
		"\x02\x02\x02\u02BE\u02BF\x07-\x02\x02\u02BF\u02C0\x05\b\x05\x02\u02C0" +
		"\u02C1\x05\x10\t\x02\u02C1\u02C3\x03\x02\x02\x02\u02C2\u02B8\x03\x02\x02" +
		"\x02\u02C2\u02BA\x03\x02\x02\x02\u02C2\u02BE\x03\x02\x02\x02\u02C3\x89" +
		"\x03\x02\x02\x02\u02C4\u02C5\x07.\x02\x02\u02C5\u02C6\x05\b\x05\x02\u02C6" +
		"\u02C8\x05\b\x05\x02\u02C7\u02C9\x07\u010C\x02\x02\u02C8\u02C7\x03\x02" +
		"\x02\x02\u02C8\u02C9\x03\x02\x02\x02\u02C9\u02CB\x03\x02\x02\x02\u02CA" +
		"\u02CC\x07\u010D\x02\x02\u02CB\u02CA\x03\x02\x02\x02\u02CB\u02CC\x03\x02" +
		"\x02\x02\u02CC\u02CF\x03\x02\x02\x02\u02CD\u02CE\x07\u010E\x02\x02\u02CE" +
		"\u02D0\x05\x0E\b\x02\u02CF\u02CD\x03\x02\x02\x02\u02CF\u02D0\x03\x02\x02" +
		"\x02\u02D0\u02D2\x03\x02\x02\x02\u02D1\u02D3\x07\u010F\x02\x02\u02D2\u02D1" +
		"\x03\x02\x02\x02\u02D2\u02D3\x03\x02\x02\x02\u02D3\x8B\x03\x02\x02\x02" +
		"\u02D4\u02D6\x07/\x02\x02\u02D5\u02D7\x05\b\x05\x02\u02D6\u02D5\x03\x02" +
		"\x02\x02\u02D7\u02D8\x03\x02\x02\x02\u02D8\u02D6\x03\x02\x02\x02\u02D8" +
		"\u02D9\x03\x02\x02\x02\u02D9\x8D\x03\x02\x02\x02\u02DA\u02DC\x070\x02" +
		"\x02\u02DB\u02DD\x05$\x13\x02\u02DC\u02DB\x03\x02\x02\x02\u02DD\u02DE" +
		"\x03\x02\x02\x02\u02DE\u02DC\x03\x02\x02\x02\u02DE\u02DF\x03\x02\x02\x02" +
		"\u02DF\x8F\x03\x02\x02\x02\u02E0\u02E2\x071\x02\x02\u02E1\u02E3\x05$\x13" +
		"\x02\u02E2\u02E1\x03\x02\x02\x02\u02E3\u02E4\x03\x02\x02\x02\u02E4\u02E2" +
		"\x03\x02\x02\x02\u02E4\u02E5\x03\x02\x02\x02\u02E5\x91\x03\x02\x02\x02" +
		"\u02E6\u02E7\t\n\x02\x02\u02E7\u02E8\x05\b\x05\x02\u02E8\u02E9\x05\x0E" +
		"\b\x02\u02E9\u02EA\x05\f\x07\x02\u02EA\x93\x03\x02\x02\x02\u02EB\u02EC" +
		"\x074\x02\x02\u02EC\u02ED\x05\b\x05\x02\u02ED\u02F0\x05\f\x07\x02\u02EE" +
		"\u02F1\x056\x1C\x02\u02EF\u02F1\x07\u0110\x02\x02\u02F0\u02EE\x03\x02" +
		"\x02\x02\u02F0\u02EF\x03\x02\x02\x02\u02F0\u02F1\x03\x02\x02\x02\u02F1" +
		"\u02F3\x03\x02\x02\x02\u02F2\u02F4\t\v\x02\x02\u02F3\u02F2\x03\x02\x02" +
		"\x02\u02F3\u02F4\x03\x02\x02\x02\u02F4\u02F6\x03\x02\x02\x02\u02F5\u02F7" +
		"\x07%\x02\x02\u02F6\u02F5\x03\x02\x02\x02\u02F6\u02F7\x03\x02\x02\x02" +
		"\u02F7\x95\x03\x02\x02\x02\u02F8\u02F9\x075\x02\x02\u02F9\u02FA\x05\b" +
		"\x05\x02\u02FA\u02FB\x05\f\x07\x02\u02FB\x97\x03\x02\x02\x02\u02FC\u02FD" +
		"\x076\x02\x02\u02FD\u02FE\x05\b\x05\x02\u02FE\u02FF\x05\x0E\b\x02\u02FF" +
		"\u0300\x05\f\x07\x02\u0300\x99\x03\x02\x02\x02\u0301\u0302\x077\x02\x02" +
		"\u0302\u0303\x05\b\x05\x02\u0303\u0304\x05\x0E\b\x02\u0304\u0305\x05\x0E" +
		"\b\x02\u0305\x9B\x03\x02\x02\x02\u0306\u0307\x078\x02\x02\u0307\u0308" +
		"\x05\b\x05\x02\u0308\x9D\x03\x02\x02\x02\u0309\u030A\x079\x02\x02\u030A" +
		"\u030B\x05\b\x05\x02\u030B\u030C\x05\x0E\b\x02\u030C\u030D\x05\x0E\b\x02" +
		"\u030D\x9F\x03\x02\x02\x02\u030E\u030F\t\f\x02\x02\u030F\u0311\x05\b\x05" +
		"\x02\u0310\u0312\x05\n\x06\x02\u0311\u0310\x03\x02\x02\x02\u0312\u0313" +
		"\x03\x02\x02\x02\u0313\u0311\x03\x02\x02\x02\u0313\u0314\x03\x02\x02\x02" +
		"\u0314\xA1\x03\x02\x02\x02\u0315\u0316\t\r\x02\x02\u0316\u0317\x05\b\x05" +
		"\x02\u0317\u0318\x05\n\x06\x02\u0318\xA3\x03\x02\x02\x02\u0319\u031A\t" +
		"\x0E\x02\x02\u031A\u031B\x05\b\x05\x02\u031B\xA5\x03\x02\x02\x02\u031C" +
		"\u031D\t\x0F\x02\x02\u031D\u031F\x05\b\x05\x02\u031E\u0320\x05$\x13\x02" +
		"\u031F\u031E\x03\x02\x02\x02\u0320\u0321\x03\x02\x02\x02\u0321\u031F\x03" +
		"\x02\x02\x02\u0321\u0322\x03\x02\x02\x02\u0322\xA7\x03\x02\x02\x02\u0323" +
		"\u0324\t\x10\x02\x02\u0324\u0325\x05\b\x05\x02\u0325\u0326\x05\n\x06\x02" +
		"\u0326\u0327\x05\x10\t\x02\u0327\xA9\x03\x02\x02\x02\u0328\u0329\x07D" +
		"\x02\x02\u0329\u032E\x05\b\x05\x02\u032A\u032C\x05\x0E\b\x02\u032B\u032D" +
		"\x07\u0123\x02\x02\u032C\u032B\x03\x02\x02\x02\u032C\u032D\x03\x02\x02" +
		"\x02\u032D\u032F\x03\x02\x02\x02\u032E\u032A\x03\x02\x02\x02\u032E\u032F" +
		"\x03\x02\x02\x02\u032F\xAB\x03\x02\x02\x02\u0330\u0331\x07E\x02\x02\u0331" +
		"\u0332\x05\b\x05\x02\u0332\u0335\x05\x0E\b\x02\u0333\u0334\x07\u0124\x02" +
		"\x02\u0334\u0336\x05\x12\n\x02\u0335\u0333\x03\x02\x02\x02\u0335\u0336" +
		"\x03\x02\x02\x02\u0336\u0339\x03\x02\x02\x02\u0337\u0338\x07\u011F\x02" +
		"\x02\u0338\u033A\x05\x0E\b\x02\u0339\u0337\x03\x02\x02\x02\u0339\u033A" +
		"\x03\x02\x02\x02\u033A\xAD\x03\x02\x02\x02\u033B\u033C\x07G\x02\x02\u033C" +
		"\u033D\x05\b\x05\x02\u033D\u033E\x05$\x13\x02\u033E\xAF\x03\x02\x02\x02" +
		"\u033F\u0340\x07J\x02\x02\u0340\u0341\x05\b\x05\x02\u0341\u0342\x05\b" +
		"\x05\x02\u0342\u0343\x058\x1D\x02\u0343\u0344\x058\x1D\x02\u0344\u0345" +
		"\x05\x0E\b\x02\u0345\xB1\x03\x02\x02\x02\u0346\u0347\t\x11\x02\x02\u0347" +
		"\u0348\x05\x0E\b\x02\u0348\u034A\x05\x0E\b\x02\u0349\u034B\x05\b\x05\x02" +
		"\u034A\u0349\x03\x02\x02\x02\u034B\u034C\x03\x02\x02\x02\u034C\u034A\x03" +
		"\x02\x02\x02\u034C\u034D\x03\x02\x02\x02\u034D\u034E\x03\x02\x02\x02\u034E" +
		"\u0350\x058\x1D\x02\u034F\u0351\x05\x0E\b\x02\u0350\u034F\x03\x02\x02" +
		"\x02\u0350\u0351\x03\x02\x02\x02\u0351\xB3\x03\x02\x02\x02\u0352\u0354" +
		"\t\x12\x02\x02\u0353\u0355\x05\b\x05\x02\u0354\u0353\x03\x02\x02\x02\u0355" +
		"\u0356\x03\x02\x02\x02\u0356\u0354\x03\x02\x02\x02\u0356\u0357\x03\x02" +
		"\x02\x02\u0357\u0358\x03\x02\x02\x02\u0358\u0359\x05\x0E\b\x02\u0359\xB5" +
		"\x03\x02\x02\x02\u035A\u035B\x07N\x02\x02\u035B\u035C\x05\b\x05\x02\u035C" +
		"\u035D\x05\b\x05\x02\u035D\u035E\x05\x0E\b\x02\u035E\xB7\x03\x02\x02\x02" +
		"\u035F\u0360\x07O\x02\x02\u0360\u0361\x05\b\x05\x02\u0361\u0362\x05\x0E" +
		"\b\x02\u0362\xB9\x03\x02\x02\x02\u0363\u0364\x07P\x02\x02\u0364\u0365" +
		"\x05\b\x05\x02\u0365\u0366\t\x13\x02\x02\u0366\u0367\x05\f\x07\x02\u0367" +
		"\u0368\x05\f\x07\x02\u0368\xBB\x03\x02\x02\x02\u0369\u036A\x07Q\x02\x02" +
		"\u036A\u036B\x05\b\x05\x02\u036B\xBD\x03\x02\x02\x02\u036C\u036D\x07R" +
		"\x02\x02\u036D\u036E\x05\b\x05\x02\u036E\u036F\x05\b\x05\x02\u036F\u0370" +
		"\x058\x1D\x02\u0370\u0371\x058\x1D\x02\u0371\xBF\x03\x02\x02\x02\u0372" +
		"\u0373\t\x14\x02\x02\u0373\u0375\x05\b\x05\x02\u0374\u0376\x05\x0E\b\x02" +
		"\u0375\u0374\x03\x02\x02\x02\u0375\u0376\x03\x02\x02\x02\u0376\xC1\x03" +
		"\x02\x02\x02\u0377\u0378\x07U\x02\x02\u0378\u0379\x05\b\x05\x02\u0379" +
		"\u037B\x05\n\x06\x02\u037A\u037C\x05:\x1E\x02\u037B\u037A\x03\x02\x02" +
		"\x02\u037B\u037C\x03\x02\x02\x02\u037C\u037E\x03\x02\x02\x02\u037D\u037F" +
		"\x05<\x1F\x02\u037E\u037D\x03\x02\x02\x02\u037E\u037F\x03\x02\x02\x02" +
		"\u037F\u0381\x03\x02\x02\x02\u0380\u0382\x05> \x02\u0381\u0380\x03\x02" +
		"\x02\x02\u0381\u0382\x03\x02\x02\x02\u0382\xC3\x03\x02\x02\x02\u0383\u0384" +
		"\t\x15\x02\x02\u0384\u0386\x05\b\x05\x02\u0385\u0387\x05\f\x07\x02\u0386" +
		"\u0385\x03\x02\x02\x02\u0387\u0388\x03\x02\x02\x02\u0388\u0386\x03\x02" +
		"\x02\x02\u0388\u0389\x03\x02\x02\x02\u0389\xC5\x03\x02\x02\x02\u038A\u038B" +
		"\t\x16\x02\x02\u038B\u038C\x05\b\x05\x02\u038C\u038D\x05\x0E\b\x02\u038D" +
		"\u038E\x05\x0E\b\x02\u038E\xC7\x03\x02\x02\x02\u038F\u0390\t\x17\x02\x02" +
		"\u0390\u0391\x05\b\x05\x02\u0391\u0392\x05\x0E\b\x02\u0392\u0393\x05\f" +
		"\x07\x02\u0393\xC9\x03\x02\x02\x02\u0394\u0395\x07]\x02\x02\u0395\u0396" +
		"\x05\b\x05\x02\u0396\u0397\x05\b\x05\x02\u0397\xCB\x03\x02\x02\x02\u0398" +
		"\u0399\t\x18\x02\x02\u0399\u039B\x05\b\x05\x02\u039A\u039C\x05\n\x06\x02" +
		"\u039B\u039A\x03\x02\x02\x02\u039C\u039D\x03\x02\x02\x02\u039D\u039B\x03" +
		"\x02\x02\x02\u039D\u039E\x03\x02\x02\x02\u039E\xCD\x03\x02\x02\x02\u039F" +
		"\u03A0\t\x19\x02\x02\u03A0\u03A1\x05\b\x05\x02\u03A1\xCF\x03\x02\x02\x02" +
		"\u03A2\u03A4\t\x1A\x02\x02\u03A3\u03A5\x05\b\x05\x02\u03A4\u03A3\x03\x02" +
		"\x02\x02\u03A5\u03A6\x03\x02\x02\x02\u03A6\u03A4\x03\x02\x02\x02\u03A6" +
		"\u03A7\x03\x02\x02\x02\u03A7\xD1\x03\x02\x02\x02\u03A8\u03A9\t\x1B\x02" +
		"\x02\u03A9\u03AB\x05\b\x05\x02\u03AA\u03AC\x05\b\x05\x02\u03AB\u03AA\x03" +
		"\x02\x02\x02\u03AC\u03AD\x03\x02\x02\x02\u03AD\u03AB\x03\x02\x02\x02\u03AD" +
		"\u03AE\x03\x02\x02\x02\u03AE\xD3\x03\x02\x02\x02\u03AF\u03B0\x07e\x02" +
		"\x02\u03B0\u03B2\x05\x0E\b\x02\u03B1\u03B3\x05\b\x05\x02\u03B2\u03B1\x03" +
		"\x02\x02\x02\u03B3\u03B4\x03\x02\x02\x02\u03B4\u03B2\x03\x02\x02\x02\u03B4" +
		"\u03B5\x03\x02\x02\x02\u03B5\u03B8\x03\x02\x02\x02\u03B6\u03B7\x07\u0112" +
		"\x02\x02\u03B7\u03B9\x05\x0E\b\x02\u03B8\u03B6\x03\x02\x02\x02\u03B8\u03B9" +
		"\x03\x02\x02\x02\u03B9\xD5\x03\x02\x02\x02\u03BA\u03BB\x07g\x02\x02\u03BB" +
		"\u03BC\x05\b\x05\x02\u03BC\u03BD\x05\n\x06\x02\u03BD\xD7\x03\x02\x02\x02" +
		"\u03BE\u03BF\x07j\x02\x02\u03BF\u03C0\x05\b\x05\x02\u03C0\u03C1\x05\b" +
		"\x05\x02\u03C1\u03C2\x05\n\x06\x02\u03C2\xD9\x03\x02\x02\x02\u03C3\u03C4" +
		"\t\x1C\x02\x02\u03C4\u03C6\x05\b\x05\x02\u03C5\u03C7\x05\x0E\b\x02\u03C6" +
		"\u03C5\x03\x02\x02\x02\u03C6\u03C7\x03\x02\x02\x02\u03C7\xDB\x03\x02\x02" +
		"\x02\u03C8\u03C9\x07n\x02\x02\u03C9\u03CA\x05\b\x05\x02\u03CA\u03CD\x05" +
		"\x0E\b\x02\u03CB\u03CC\x07\u0124\x02\x02\u03CC\u03CE\x05\x12\n\x02\u03CD" +
		"\u03CB\x03\x02\x02\x02\u03CD\u03CE\x03\x02\x02\x02\u03CE\u03D0\x03\x02" +
		"\x02\x02\u03CF\u03D1\x05<\x1F\x02\u03D0\u03CF\x03\x02\x02\x02\u03D0\u03D1" +
		"\x03\x02\x02\x02\u03D1\xDD\x03\x02\x02\x02\u03D2\u03D3\x07q\x02\x02\u03D3" +
		"\u03D4\x05\x0E\b\x02\u03D4\u03D6\x05\x0E\b\x02\u03D5\u03D7\x05\b\x05\x02" +
		"\u03D6\u03D5\x03\x02\x02\x02\u03D7\u03D8\x03\x02\x02\x02\u03D8\u03D6\x03" +
		"\x02\x02\x02\u03D8\u03D9\x03\x02\x02\x02\u03D9\u03DA\x03\x02\x02\x02\u03DA" +
		"\u03DC\t\x1D\x02\x02\u03DB\u03DD\x05<\x1F\x02\u03DC\u03DB\x03\x02\x02" +
		"\x02\u03DC\u03DD\x03\x02\x02\x02\u03DD\xDF\x03\x02\x02\x02\u03DE\u03E0" +
		"\t\x1E\x02\x02\u03DF\u03E1\x05\b\x05\x02\u03E0\u03DF\x03\x02\x02\x02\u03E1" +
		"\u03E2\x03\x02\x02\x02\u03E2\u03E0\x03\x02\x02\x02\u03E2\u03E3\x03\x02" +
		"\x02\x02\u03E3\u03E4\x03\x02\x02\x02\u03E4\u03E5\x05\x0E\b\x02\u03E5\xE1" +
		"\x03\x02\x02\x02\u03E6\u03E7\x07t\x02\x02\u03E7\u03E9\x05\b\x05\x02\u03E8" +
		"\u03EA\t\v\x02\x02\u03E9\u03E8\x03\x02\x02\x02\u03E9\u03EA\x03\x02\x02" +
		"\x02\u03EA\u03EC\x03\x02\x02\x02\u03EB\u03ED\t\x1F\x02\x02\u03EC\u03EB" +
		"\x03\x02\x02\x02\u03EC\u03ED\x03\x02\x02\x02\u03ED\u03EF\x03\x02\x02\x02" +
		"\u03EE\u03F0\x07\u0127\x02\x02\u03EF\u03EE\x03\x02\x02\x02\u03EF\u03F0" +
		"\x03\x02\x02\x02\u03F0\u03F2\x03\x02\x02\x02\u03F1\u03F3\x07+\x02\x02" +
		"\u03F2\u03F1\x03\x02\x02\x02\u03F2\u03F3\x03\x02\x02\x02\u03F3\u03F5\x03" +
		"\x02\x02\x02\u03F4\u03F6\x05&\x14\x02\u03F5\u03F4\x03\x02\x02\x02\u03F6" +
		"\u03F7\x03\x02\x02\x02\u03F7\u03F5\x03\x02\x02\x02\u03F7\u03F8\x03\x02" +
		"\x02\x02\u03F8\xE3\x03\x02\x02\x02\u03F9\u03FA\x07u\x02\x02\u03FA\u03FB" +
		"\x05\b\x05\x02\u03FB\xE5\x03\x02\x02\x02\u03FC\u03FD\t \x02\x02\u03FD" +
		"\u03FE\x05\b\x05\x02\u03FE\u03FF\x05\x16\f\x02\u03FF\u0400\x05\x18\r\x02" +
		"\u0400\xE7\x03\x02\x02\x02\u0401\u0402\x07w\x02\x02\u0402\u0404\x05\x0E" +
		"\b\x02\u0403\u0405\x05\b\x05\x02\u0404\u0403\x03\x02\x02\x02\u0405\u0406" +
		"\x03\x02\x02\x02\u0406\u0404\x03\x02\x02\x02\u0406\u0407\x03\x02\x02\x02" +
		"\u0407\u0409\x03\x02\x02\x02\u0408\u040A\x07\u0111\x02\x02\u0409\u0408" +
		"\x03\x02\x02\x02\u0409\u040A\x03\x02\x02\x02\u040A\xE9\x03\x02\x02\x02" +
		"\u040B\u040C\x07x\x02\x02\u040C\u040D\x05\b\x05\x02\u040D\u040F\x05\x0E" +
		"\b\x02\u040E\u0410\x05\b\x05\x02\u040F\u040E\x03\x02\x02\x02\u0410\u0411" +
		"\x03\x02\x02\x02\u0411\u040F\x03\x02\x02\x02\u0411\u0412\x03\x02\x02\x02" +
		"\u0412\xEB\x03\x02\x02\x02\u0413\u0414\x07y\x02\x02\u0414\u0415\x05\b" +
		"\x05\x02\u0415\u0416\x05\x0E\b\x02\u0416\u0417\x05\n\x06\x02\u0417\xED" +
		"\x03\x02\x02\x02\u0418\u0419\x07z\x02\x02\u0419\u041B\x05\x0E\b\x02\u041A" +
		"\u041C\x05\b\x05\x02\u041B\u041A\x03\x02\x02\x02\u041C\u041D\x03\x02\x02" +
		"\x02\u041D\u041B\x03\x02\x02\x02\u041D\u041E\x03\x02\x02\x02\u041E\u0425" +
		"\x03\x02\x02\x02\u041F\u0421\x07\u0128\x02\x02\u0420\u0422\x05\x0E\b\x02" +
		"\u0421\u0420\x03\x02\x02\x02\u0422\u0423\x03\x02\x02\x02\u0423\u0421\x03" +
		"\x02\x02\x02\u0423\u0424\x03\x02\x02\x02\u0424\u0426\x03\x02\x02\x02\u0425" +
		"\u041F\x03\x02\x02\x02\u0425\u0426\x03\x02\x02\x02\u0426\u0429\x03\x02" +
		"\x02\x02\u0427\u0428\x07\u0129\x02\x02\u0428\u042A\t!\x02\x02\u0429\u0427" +
		"\x03\x02\x02\x02\u0429\u042A\x03\x02\x02\x02\u042A\u042C\x03\x02\x02\x02" +
		"\u042B\u042D\x07\u0111\x02\x02\u042C\u042B\x03\x02\x02";
	private static readonly _serializedATNSegment2: string =
		"\x02\u042C\u042D\x03\x02\x02\x02\u042D\xEF\x03\x02\x02\x02\u042E\u042F" +
		"\x07{\x02\x02\u042F\u0431\x05\x0E\b\x02\u0430\u0432\x05\b\x05\x02\u0431" +
		"\u0430\x03\x02\x02\x02\u0432\u0433\x03\x02\x02\x02\u0433\u0431\x03\x02" +
		"\x02\x02\u0433\u0434\x03\x02\x02\x02\u0434\u0437\x03\x02\x02\x02\u0435" +
		"\u0436\x07\u0112\x02\x02\u0436\u0438\x05\x0E\b\x02\u0437\u0435\x03\x02" +
		"\x02\x02\u0437\u0438\x03\x02\x02\x02\u0438\xF1\x03\x02\x02\x02\u0439\u043A" +
		"\x07|\x02\x02\u043A\u043B\x05\b\x05\x02\u043B\u043D\x05\x0E\b\x02\u043C" +
		"\u043E\x05\b\x05\x02\u043D\u043C\x03\x02\x02\x02\u043E\u043F\x03\x02\x02" +
		"\x02\u043F\u043D\x03\x02\x02\x02\u043F\u0440\x03\x02\x02\x02\u0440\u0447" +
		"\x03\x02\x02\x02\u0441\u0443\x07\u0128\x02\x02\u0442\u0444\x05\x0E\b\x02" +
		"\u0443\u0442\x03\x02\x02\x02\u0444\u0445\x03\x02\x02\x02\u0445\u0443\x03" +
		"\x02\x02\x02\u0445\u0446\x03\x02\x02\x02\u0446\u0448\x03\x02\x02\x02\u0447" +
		"\u0441\x03\x02\x02\x02\u0447\u0448\x03\x02\x02\x02\u0448\u044B\x03\x02" +
		"\x02\x02\u0449\u044A\x07\u0129\x02\x02\u044A\u044C\t!\x02\x02\u044B\u0449" +
		"\x03\x02\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C\xF3\x03\x02\x02\x02" +
		"\u044D\u044E\x07~\x02\x02\u044E\u0450\x05\x0E\b\x02\u044F\u0451\x05\b" +
		"\x05\x02\u0450\u044F\x03\x02\x02\x02\u0451\u0452\x03\x02\x02\x02\u0452" +
		"\u0450\x03\x02\x02\x02\u0452\u0453\x03\x02\x02\x02\u0453\u0454\x03\x02" +
		"\x02\x02\u0454\u0455\t\x1D\x02\x02\u0455\u0456\x05<\x1F\x02\u0456\xF5" +
		"\x03\x02\x02\x02\u0457\u0458\t\"\x02\x02\u0458\u045A\x05\b\x05\x02\u0459" +
		"\u045B\x05\n\x06\x02\u045A\u0459\x03\x02\x02\x02\u045B\u045C\x03\x02\x02" +
		"\x02\u045C\u045A\x03\x02\x02\x02\u045C\u045D\x03\x02\x02\x02\u045D\xF7" +
		"\x03\x02\x02\x02\u045E\u045F\t#\x02\x02\u045F\u0461\x05\b\x05\x02\u0460" +
		"\u0462\x05\x0E\b\x02\u0461\u0460\x03\x02\x02\x02\u0461\u0462\x03\x02\x02" +
		"\x02\u0462\xF9\x03\x02\x02\x02\u0463\u0464\x07\x82\x02\x02\u0464\u0469" +
		"\x05\b\x05\x02\u0465\u0467\x05\x0E\b\x02\u0466\u0468\x07\u0111\x02\x02" +
		"\u0467\u0466\x03\x02\x02\x02\u0467\u0468\x03\x02\x02\x02\u0468\u046A\x03" +
		"\x02\x02\x02\u0469\u0465\x03\x02\x02\x02\u0469\u046A\x03\x02\x02\x02\u046A" +
		"\xFB\x03\x02\x02\x02\u046B\u046C\x07\x83\x02\x02\u046C\u046D\x05\b\x05" +
		"\x02\u046D\u046E\x05\x16\f\x02\u046E\u0470\x05\x18\r\x02\u046F\u0471\t" +
		"$\x02\x02\u0470\u046F\x03\x02\x02\x02\u0470\u0471\x03\x02\x02\x02\u0471" +
		"\u0473\x03\x02\x02\x02\u0472\u0474\x07\u012D\x02\x02\u0473\u0472\x03\x02" +
		"\x02\x02\u0473\u0474\x03\x02\x02\x02\u0474\u0476\x03\x02\x02\x02\u0475" +
		"\u0477\x052\x1A\x02\u0476\u0475\x03\x02\x02\x02\u0476\u0477\x03\x02\x02" +
		"\x02\u0477\u0479\x03\x02\x02\x02\u0478\u047A\x07\u0111\x02\x02\u0479\u0478" +
		"\x03\x02\x02\x02\u0479\u047A\x03\x02\x02\x02\u047A\xFD\x03\x02\x02\x02" +
		"\u047B\u047C\x07\x84\x02\x02\u047C\u047D\x05\b\x05\x02\u047D\u047E\x05" +
		"\x16\f\x02\u047E\u0480\x05\x18\r\x02\u047F\u0481\x052\x1A\x02\u0480\u047F" +
		"\x03\x02\x02\x02\u0480\u0481\x03\x02\x02\x02\u0481\xFF\x03\x02\x02\x02" +
		"\u0482\u0483\x07\x85\x02\x02\u0483\u0484\x05\b\x05\x02\u0484\u0485\x05" +
		"\x16\f\x02\u0485\u0487\x05\x18\r\x02\u0486\u0488\x07\u0111\x02\x02\u0487" +
		"\u0486\x03\x02\x02\x02\u0487\u0488\x03\x02\x02\x02\u0488\u048A\x03\x02" +
		"\x02\x02\u0489\u048B\x052\x1A\x02\u048A\u0489\x03\x02\x02\x02\u048A\u048B" +
		"\x03\x02\x02\x02\u048B\u0101\x03\x02\x02\x02\u048C\u048D\x07\x86\x02\x02" +
		"\u048D\u048E\x05\b\x05\x02\u048E\u048F\x05\b\x05\x02\u048F\u0490\x05\x16" +
		"\f\x02\u0490\u0492\x05\x18\r\x02\u0491\u0493\t$\x02\x02\u0492\u0491\x03" +
		"\x02\x02\x02\u0492\u0493\x03\x02\x02\x02\u0493\u0495\x03\x02\x02\x02\u0494" +
		"\u0496\x052\x1A\x02\u0495\u0494\x03\x02\x02\x02\u0495\u0496\x03\x02\x02" +
		"\x02\u0496\u0103\x03\x02\x02\x02\u0497\u0498\t%\x02\x02\u0498\u0499\x05" +
		"\b\x05\x02\u0499\u049A\x05\n\x06\x02\u049A\u0105\x03\x02\x02\x02\u049B" +
		"\u049C\x07\x8A\x02\x02\u049C\u049D\x05\b\x05\x02\u049D\u049E\x05\x0E\b" +
		"\x02\u049E\u049F\x05\x0E\b\x02\u049F\u0107\x03\x02\x02\x02\u04A0\u04A1" +
		"\x07\x8C\x02\x02\u04A1\u04A2\x05\b\x05\x02\u04A2\u04A3\x05\x0E\b\x02\u04A3" +
		"\u04A5\x05\x0E\b\x02\u04A4\u04A6\x07\u0111\x02\x02\u04A5\u04A4\x03\x02" +
		"\x02\x02\u04A5\u04A6\x03\x02\x02\x02\u04A6\u0109\x03\x02\x02\x02\u04A7" +
		"\u04A8\t&\x02\x02\u04A8\u04A9\x05\b\x05\x02\u04A9\u04AA\x05\x18\r\x02" +
		"\u04AA\u04AC\x05\x16\f\x02\u04AB\u04AD\x07\u0111\x02\x02\u04AC\u04AB\x03" +
		"\x02\x02\x02\u04AC\u04AD\x03\x02\x02\x02\u04AD\u04AF\x03\x02\x02\x02\u04AE" +
		"\u04B0\x052\x1A\x02\u04AF\u04AE\x03\x02\x02\x02\u04AF\u04B0\x03\x02\x02" +
		"\x02\u04B0\u010B\x03\x02\x02\x02\u04B1\u04B2\x07\x90\x02\x02\u04B2\u04B3" +
		"\x05\b\x05\x02\u04B3\u04B6\x05\x0E\b\x02\u04B4\u04B5\x07\u0124\x02\x02" +
		"\u04B5\u04B7\x05\x12\n\x02\u04B6\u04B4\x03\x02\x02\x02\u04B6\u04B7\x03" +
		"\x02\x02\x02\u04B7\u04B8\x03\x02\x02\x02\u04B8\u04B9\x05<\x1F\x02\u04B9" +
		"\u010D\x03\x02\x02\x02\u04BA\u04BB\x07\x92\x02\x02\u04BB\u04BD\x05\x0E" +
		"\b\x02\u04BC\u04BE\x05\b\x05\x02\u04BD\u04BC\x03\x02\x02\x02\u04BE\u04BF" +
		"\x03\x02\x02\x02\u04BF\u04BD\x03\x02\x02\x02\u04BF\u04C0\x03\x02\x02\x02" +
		"\u04C0\u04C7\x03\x02\x02\x02\u04C1\u04C3\x07\u0128\x02\x02\u04C2\u04C4" +
		"\x05\x0E\b\x02\u04C3\u04C2\x03\x02\x02\x02\u04C4\u04C5\x03\x02\x02\x02" +
		"\u04C5\u04C3\x03\x02\x02\x02\u04C5\u04C6\x03\x02\x02\x02\u04C6\u04C8\x03" +
		"\x02\x02\x02\u04C7\u04C1\x03\x02\x02\x02\u04C7\u04C8\x03\x02\x02\x02\u04C8" +
		"\u04CB\x03\x02\x02\x02\u04C9\u04CA\x07\u0129\x02\x02\u04CA\u04CC\t!\x02" +
		"\x02\u04CB\u04C9\x03\x02\x02\x02\u04CB\u04CC\x03\x02\x02\x02\u04CC\u04CE" +
		"\x03\x02\x02\x02\u04CD\u04CF\x07\u0111\x02\x02\u04CE\u04CD\x03\x02\x02" +
		"\x02\u04CE\u04CF\x03\x02\x02\x02\u04CF\u010F\x03\x02\x02\x02\u04D0\u04D1" +
		"\x07\x93\x02\x02\u04D1\u04D2\x05\b\x05\x02\u04D2\u04D4\x05\x0E\b\x02\u04D3" +
		"\u04D5\x05\b\x05\x02\u04D4\u04D3\x03\x02\x02\x02\u04D5\u04D6\x03\x02\x02" +
		"\x02\u04D6\u04D4\x03\x02\x02\x02\u04D6\u04D7\x03\x02\x02\x02\u04D7\u04DE" +
		"\x03\x02\x02\x02\u04D8\u04DA\x07\u0128\x02\x02\u04D9\u04DB\x05\x0E\b\x02" +
		"\u04DA\u04D9\x03\x02\x02\x02\u04DB\u04DC\x03\x02\x02\x02\u04DC\u04DA\x03" +
		"\x02\x02\x02\u04DC\u04DD\x03\x02\x02\x02\u04DD\u04DF\x03\x02\x02\x02\u04DE" +
		"\u04D8\x03\x02\x02\x02\u04DE\u04DF\x03\x02\x02\x02\u04DF\u04E2\x03\x02" +
		"\x02\x02\u04E0\u04E1\x07\u0129\x02\x02\u04E1\u04E3\t!\x02\x02\u04E2\u04E0" +
		"\x03\x02\x02\x02\u04E2\u04E3\x03\x02\x02\x02\u04E3\u0111\x03\x02\x02\x02" +
		"\u04E4\u04E5\x07\xD6\x02\x02\u04E5\u04E6\x07\u0121\x02\x02\u04E6\u0113" +
		"\x03\x02\x02\x02\u04E7\u04E8\x07\xD6\x02\x02\u04E8\u04E9\x07\u0122\x02" +
		"\x02\u04E9\u04EA\x05\x1A\x0E\x02\u04EA\u0115\x03\x02\x02\x02\u04EB\u04EC" +
		"\x07\xD7\x02\x02\u04EC\u04ED\x05\x1A\x0E\x02\u04ED\u04F1\x05\x0E\b\x02" +
		"\u04EE\u04F0\x05\b\x05\x02\u04EF\u04EE\x03\x02\x02\x02\u04F0\u04F3\x03" +
		"\x02\x02\x02\u04F1\u04EF\x03\x02\x02\x02\u04F1\u04F2\x03\x02\x02\x02\u04F2" +
		"\u0117\x03\x02\x02\x02\u04F3\u04F1\x03\x02\x02\x02\u04F4\u04F5\x07\xD8" +
		"\x02\x02\u04F5\u04F6\x05\f\x07\x02\u04F6\u04FA\x05\x0E\b\x02\u04F7\u04F9" +
		"\x05\b\x05\x02\u04F8\u04F7\x03\x02\x02\x02\u04F9\u04FC\x03\x02\x02\x02" +
		"\u04FA\u04F8\x03\x02\x02\x02\u04FA\u04FB\x03\x02\x02\x02\u04FB\u0119\x03" +
		"\x02\x02\x02\u04FC\u04FA\x03\x02\x02\x02\u04FD\u04FE\x07\xD6\x02\x02\u04FE" +
		"\u04FF\x07\n\x02\x02\u04FF\u0500\x05\f\x07\x02\u0500\u011B\x03\x02\x02" +
		"\x02\u0501\u0502\x07\xD6\x02\x02\u0502\u0503\x07\u0115\x02\x02\u0503\u011D" +
		"\x03\x02\x02\x02\u0504\u0505\x07\xD9\x02\x02\u0505\u011F\x03\x02\x02\x02" +
		"\u0506\u0508\x07\xDA\x02\x02\u0507\u0509\x05\b\x05\x02\u0508\u0507\x03" +
		"\x02\x02\x02\u0509\u050A\x03\x02\x02\x02\u050A\u0508\x03\x02\x02\x02\u050A" +
		"\u050B\x03\x02\x02\x02\u050B\u0121\x03\x02\x02\x02\u050C\u050D\x07\xDB" +
		"\x02\x02\u050D\u0123\x03\x02\x02\x02\u050E\u050F\x07\xDC\x02\x02\u050F" +
		"\u0125\x03\x02\x02\x02\u0510\u0511\x07\xDD\x02\x02\u0511\u0127\x03\x02" +
		"\x02\x02\u0512\u0513\x07\xDE\x02\x02\u0513\u0515\x05\b\x05\x02\u0514\u0516" +
		"\x05\b\x05\x02\u0515\u0514\x03\x02\x02\x02\u0516\u0517\x03\x02\x02\x02" +
		"\u0517\u0515\x03\x02\x02\x02\u0517\u0518\x03\x02\x02\x02\u0518\u0129\x03" +
		"\x02\x02\x02\u0519\u051A\x07\xDF\x02\x02\u051A\u051C\x05\b\x05\x02\u051B" +
		"\u051D\x05\n\x06\x02\u051C\u051B\x03\x02\x02\x02\u051D\u051E\x03\x02\x02" +
		"\x02\u051E\u051C\x03\x02\x02\x02\u051E\u051F\x03\x02\x02\x02\u051F\u012B" +
		"\x03\x02\x02\x02\u0520\u0521\x07\xE0\x02\x02\u0521\u0523\x05\b\x05\x02" +
		"\u0522\u0524\x05\b\x05\x02\u0523\u0522\x03\x02\x02\x02\u0524\u0525\x03" +
		"\x02\x02\x02\u0525\u0523\x03\x02\x02\x02\u0525\u0526\x03\x02\x02\x02\u0526" +
		"\u012D\x03\x02\x02\x02\u0527\u0529\t\'\x02\x02\u0528\u052A\x05\b\x05\x02" +
		"\u0529\u0528\x03\x02\x02\x02\u052A\u052B\x03\x02\x02\x02\u052B\u0529\x03" +
		"\x02\x02\x02\u052B\u052C\x03\x02\x02\x02\u052C\u012F\x03\x02\x02\x02\u052D" +
		"\u0533\t(\x02\x02\u052E\u0530\x05\b\x05\x02\u052F\u052E\x03\x02\x02\x02" +
		"\u0530\u0531\x03\x02\x02\x02\u0531\u052F\x03\x02\x02\x02\u0531\u0532\x03" +
		"\x02\x02\x02\u0532\u0534\x03\x02\x02\x02\u0533\u052F\x03\x02\x02\x02\u0533" +
		"\u0534\x03\x02\x02\x02\u0534\u0131\x03\x02\x02\x02\u0535\u0536\x07\x95" +
		"\x02\x02\u0536\u0537\x07\x99\x02\x02\u0537\u0133\x03\x02\x02\x02\u0538" +
		"\u0539\x07\x95\x02\x02\u0539\u053F\t)\x02\x02\u053A\u053C\x05\b\x05\x02" +
		"\u053B\u053A\x03\x02\x02\x02\u053C\u053D\x03\x02\x02\x02\u053D\u053B\x03" +
		"\x02\x02\x02\u053D\u053E\x03\x02\x02\x02\u053E\u0540\x03\x02\x02\x02\u053F" +
		"\u053B\x03\x02\x02\x02\u053F\u0540\x03\x02\x02\x02\u0540\u0135\x03\x02" +
		"\x02\x02\u0541\u0542\x07\x95\x02\x02\u0542\u0544\t*\x02\x02\u0543\u0545" +
		"\x05\b\x05\x02\u0544\u0543\x03\x02\x02\x02\u0544\u0545\x03\x02\x02\x02" +
		"\u0545\u0137\x03\x02\x02\x02\u0546\u0547\x07\x96\x02\x02\u0547\u0548\x05" +
		"\b\x05\x02\u0548\u0549\x05\n\x06\x02\u0549\u0139\x03\x02\x02\x02\u054A" +
		"\u054B\x07\xB2\x02\x02\u054B\u013B\x03\x02\x02\x02\u054C\u054D\x07\xD3" +
		"\x02\x02\u054D\u013D\x03\x02\x02\x02\u054E\u054F\x07\xD4\x02\x02\u054F" +
		"\u013F\x03\x02\x02\x02\u0550\u0551\x07\xB3\x02\x02\u0551\u0553\t+\x02" +
		"\x02\u0552\u0554\x05\x0E\b\x02\u0553\u0552\x03\x02\x02\x02\u0554\u0555" +
		"\x03\x02\x02\x02\u0555\u0553\x03\x02\x02\x02\u0555\u0556\x03\x02\x02\x02" +
		"\u0556\u0141\x03\x02\x02\x02\u0557\u0558\x07\xB3\x02\x02\u0558\u0559\x07" +
		"\xB8\x02\x02\u0559\u055A\x05\x0E\b\x02\u055A\u0143\x03\x02\x02\x02\u055B" +
		"\u055C\x07\xB3\x02\x02\u055C\u055E\x07\xBA\x02\x02\u055D\u055F\t,\x02" +
		"\x02\u055E\u055D\x03\x02\x02\x02\u055E\u055F\x03\x02\x02\x02\u055F\u0145" +
		"\x03\x02\x02\x02\u0560\u0561\x07\xB3\x02\x02\u0561\u0562\x07\xBC\x02\x02" +
		"\u0562\u0563\x05\f\x07\x02\u0563\u0147\x03\x02\x02\x02\u0564\u0565\x07" +
		"\xB3\x02\x02\u0565\u0566\x07\xBD\x02\x02\u0566\u0567\x05\x0E\b\x02\u0567" +
		"\u0568\x05\x1C\x0F\x02\u0568\u0149\x03\x02\x02\x02\u0569\u056A\x07\xB3" +
		"\x02\x02\u056A\u056B\t-\x02\x02\u056B\u014B\x03\x02\x02\x02\u056C\u056D" +
		"\x07\xB3\x02\x02\u056D\u056E\x07\xBE\x02\x02\u056E\u056F\x05\b\x05\x02" +
		"\u056F\u014D\x03\x02\x02\x02\u0570\u0571\x07\xB3\x02\x02\u0571\u0572\x07" +
		"\xC0\x02\x02\u0572\u0573\x07\u0139\x02\x02\u0573\u0575\x05\"\x12\x02\u0574" +
		"\u0576\x05\x0E\b\x02\u0575\u0574\x03\x02\x02\x02\u0575\u0576\x03\x02\x02" +
		"\x02\u0576\u014F\x03\x02\x02\x02\u0577\u0578\x07\xB3\x02\x02\u0578\u0579" +
		"\t.\x02\x02\u0579\u057A\x05\f\x07\x02\u057A\u0151\x03\x02\x02\x02\u057B" +
		"\u057C\x07\xB3\x02\x02\u057C\u057D\x07\xC9\x02\x02\u057D\u057E\t/\x02" +
		"\x02\u057E\u0153\x03\x02\x02\x02\u057F\u0580\x07\xB3\x02\x02\u0580\u0581" +
		"\x07\xCD\x02\x02\u0581\u058C\x05\x0E\b\x02\u0582\u0583\x07\xCF\x02\x02" +
		"\u0583\u058D\x05\f\x07\x02\u0584\u0585\x07\xCE\x02\x02\u0585\u0588\x05" +
		"\f\x07\x02\u0586\u0588\x03\x02\x02\x02\u0587\u0584\x03\x02\x02\x02\u0587" +
		"\u0586\x03\x02\x02\x02\u0588\u058D\x03\x02\x02\x02\u0589\u058A\x07\xC5" +
		"\x02\x02\u058A\u058D\x05\f\x07\x02\u058B\u058D\x07\xD0\x02\x02\u058C\u0582" +
		"\x03\x02\x02\x02\u058C\u0587\x03\x02\x02\x02\u058C\u0589\x03\x02\x02\x02" +
		"\u058C\u058B\x03\x02\x02\x02\u058D\u0155\x03\x02\x02\x02\u058E\u0590\x07" +
		"\xD5\x02\x02\u058F\u0591\t0\x02\x02\u0590\u058F\x03\x02\x02\x02\u0590" +
		"\u0591\x03\x02\x02\x02\u0591\u0157\x03\x02\x02\x02\u0592\u0593\x07\xE1" +
		"\x02\x02\u0593\u0594\x05\f\x07\x02\u0594\u0159\x03\x02\x02\x02\u0595\u0596" +
		"\x07\xE3\x02\x02\u0596\u015B\x03\x02\x02\x02\u0597\u0598\x07\xE4\x02\x02" +
		"\u0598\u0599\x05\u0188\xC5\x02\u0599\u015D\x03\x02\x02\x02\u059A\u059B" +
		"\x07\xE5\x02\x02\u059B\u015F\x03\x02\x02\x02\u059C\u059D\x07\xE6\x02\x02" +
		"\u059D\u059E\x07%\x02\x02\u059E\u05A6\x05\x12\n\x02\u059F\u05A0\x074\x02" +
		"\x02\u05A0\u05A1\x05\f\x07\x02\u05A1\u05A2\x05\f\x07\x02\u05A2\u05A6\x03" +
		"\x02\x02\x02\u05A3\u05A6\x07\u0116\x02\x02\u05A4\u05A6\x07\u0117\x02\x02" +
		"\u05A5\u059C\x03\x02\x02\x02\u05A5\u059F\x03\x02\x02\x02\u05A5\u05A3\x03" +
		"\x02\x02\x02\u05A5\u05A4\x03\x02\x02\x02\u05A6\u0161\x03\x02\x02\x02\u05A7" +
		"\u05A8\x07\xE7\x02\x02\u05A8\u05A9\x07\u0118\x02\x02\u05A9\u05B1\x05\x0E" +
		"\b\x02\u05AA\u05AB\x07\u0121\x02\x02\u05AB\u05B1\x07\u013A\x02\x02\u05AC" +
		"\u05B1\x07\u011A\x02\x02\u05AD\u05AE\x07\u0119\x02\x02\u05AE\u05B1\x05" +
		"\f\x07\x02\u05AF\u05B1\x07\u011B\x02\x02\u05B0\u05A7\x03\x02\x02\x02\u05B0" +
		"\u05AA\x03\x02\x02\x02\u05B0\u05AC\x03\x02\x02\x02\u05B0\u05AD\x03\x02" +
		"\x02\x02\u05B0\u05AF\x03\x02\x02\x02\u05B1\u0163\x03\x02\x02\x02\u05B2" +
		"\u05B4\x07\xE8\x02\x02\u05B3\u05B5\x07\u011C\x02\x02\u05B4\u05B3\x03\x02" +
		"\x02\x02\u05B4\u05B5\x03\x02\x02\x02\u05B5\u05B7\x03\x02\x02\x02\u05B6" +
		"\u05B8\x07\xE3\x02\x02\u05B7\u05B6\x03\x02\x02\x02\u05B7\u05B8\x03\x02" +
		"\x02\x02\u05B8\u0165\x03\x02\x02\x02\u05B9\u05BA\x07\xE9\x02\x02\u05BA" +
		"\u0167\x03\x02\x02\x02\u05BB\u05BC\x07\xEA\x02\x02\u05BC\u0169\x03\x02" +
		"\x02\x02\u05BD\u05BE\x07\xEB\x02\x02\u05BE\u016B\x03\x02\x02\x02\u05BF" +
		"\u05C0\x07\xEC\x02\x02\u05C0\u05C1\x07\u0139\x02\x02\u05C1\u05C2\x05\x0E" +
		"\b\x02\u05C2\u016D\x03\x02\x02\x02\u05C3\u05C4\x07\xED\x02\x02\u05C4\u016F" +
		"\x03\x02\x02\x02\u05C5\u05C6\x07\xEE\x02\x02\u05C6\u05C7\x05\x0E\b\x02" +
		"\u05C7\u0171\x03\x02\x02\x02\u05C8\u05C9\x07\xE2\x02\x02\u05C9\u0173\x03" +
		"\x02\x02\x02\u05CA\u05CB\x07\xEF\x02\x02\u05CB\u0175\x03\x02\x02\x02\u05CC" +
		"\u05CD\x07\xF0\x02\x02\u05CD\u05CE\x05\f\x07\x02\u05CE\u0177\x03\x02\x02" +
		"\x02\u05CF\u05D0\x07\xF1\x02\x02\u05D0\u0179\x03\x02\x02\x02\u05D1\u05D2" +
		"\x07\xF2\x02\x02\u05D2\u017B\x03\x02\x02\x02\u05D3\u05D4\x07\xF3\x02\x02" +
		"\u05D4\u017D\x03\x02\x02\x02\u05D5\u05DB\x07\xF4\x02\x02\u05D6\u05D8\x05" +
		"(\x15\x02\u05D7\u05D6\x03\x02\x02\x02\u05D8\u05D9\x03\x02\x02\x02\u05D9" +
		"\u05D7\x03\x02\x02\x02\u05D9\u05DA\x03\x02\x02\x02\u05DA\u05DC\x03\x02" +
		"\x02\x02\u05DB\u05D7\x03\x02\x02\x02\u05DB\u05DC\x03\x02\x02\x02\u05DC" +
		"\u017F\x03\x02\x02\x02\u05DD\u05DE\x07\xF5\x02\x02\u05DE\u0181\x03\x02" +
		"\x02\x02\u05DF\u05E0\x07\xF6\x02\x02\u05E0\u0183\x03\x02\x02\x02\u05E1" +
		"\u05E2\x07\xF6\x02\x02\u05E2\u05E4\x07\xF4\x02\x02\u05E3\u05E5\x05\b\x05" +
		"\x02\u05E4\u05E3\x03\x02\x02\x02\u05E5\u05E6\x03\x02\x02\x02\u05E6\u05E4" +
		"\x03\x02\x02\x02\u05E6\u05E7\x03\x02\x02\x02\u05E7\u05F0\x03\x02\x02\x02" +
		"\u05E8\u05EA\x07\u011E\x02\x02\u05E9\u05EB\x05\b\x05\x02\u05EA\u05E9\x03" +
		"\x02\x02\x02\u05EB\u05EC\x03\x02\x02\x02\u05EC\u05EA\x03\x02\x02\x02\u05EC" +
		"\u05ED\x03\x02\x02\x02\u05ED\u05F0\x03\x02\x02\x02\u05EE\u05F0\x07\u011F" +
		"\x02\x02\u05EF\u05E1\x03\x02\x02\x02\u05EF\u05E8\x03\x02\x02\x02\u05EF" +
		"\u05EE\x03\x02\x02\x02\u05F0\u0185\x03\x02\x02\x02\u05F1\u05F5\x07\xF7" +
		"\x02\x02\u05F2\u05F6\x07\u0120\x02\x02\u05F3\u05F4\x07\x10\x02\x02\u05F4" +
		"\u05F6\x05\b\x05\x02\u05F5\u05F2\x03\x02\x02\x02\u05F5\u05F3\x03\x02\x02" +
		"\x02\u05F6\u0187\x03\x02\x02\x02\u05F7\u069D\x05@!\x02\u05F8\u069D\x05" +
		"B\"\x02\u05F9\u069D\x05D#\x02\u05FA\u069D\x05F$\x02\u05FB\u069D\x05H%" +
		"\x02\u05FC\u069D\x05J&\x02\u05FD\u069D\x05L\'\x02\u05FE\u069D\x05N(\x02" +
		"\u05FF\u069D\x05P)\x02\u0600\u069D\x05R*\x02\u0601\u069D\x05T+\x02\u0602" +
		"\u069D\x05V,\x02\u0603\u069D\x05X-\x02\u0604\u069D\x05Z.\x02\u0605\u069D" +
		"\x05\\/\x02\u0606\u069D\x05^0\x02\u0607\u069D\x05`1\x02\u0608\u069D\x05" +
		"b2\x02\u0609\u069D\x05d3\x02\u060A\u069D\x05f4\x02\u060B\u069D\x05h5\x02" +
		"\u060C\u069D\x05j6\x02\u060D\u069D\x05l7\x02\u060E\u069D\x05n8\x02\u060F" +
		"\u069D\x05p9\x02\u0610\u069D\x05r:\x02\u0611\u069D\x05t;\x02\u0612\u069D" +
		"\x05v<\x02\u0613\u069D\x05x=\x02\u0614\u069D\x05z>\x02\u0615\u069D\x05" +
		"|?\x02\u0616\u069D\x05~@\x02\u0617\u069D\x05\x80A\x02\u0618\u069D\x05" +
		"\x82B\x02\u0619\u069D\x05\x84C\x02\u061A\u069D\x05\x86D\x02\u061B\u069D" +
		"\x05\x88E\x02\u061C\u069D\x05\x8AF\x02\u061D\u069D\x05\x8CG\x02\u061E" +
		"\u069D\x05\x8EH\x02\u061F\u069D\x05\x90I\x02\u0620\u069D\x05\x92J\x02" +
		"\u0621\u069D\x05\x94K\x02\u0622\u069D\x05\x96L\x02\u0623\u069D\x05\x98" +
		"M\x02\u0624\u069D\x05\x9AN\x02\u0625\u069D\x05\x9CO\x02\u0626\u069D\x05" +
		"\x9EP\x02\u0627\u069D\x05\xA0Q\x02\u0628\u069D\x05\xA2R\x02\u0629\u069D" +
		"\x05\xA4S\x02\u062A\u069D\x05\xA8U\x02\u062B\u069D\x05\xA6T\x02\u062C" +
		"\u069D\x05\xAAV\x02\u062D\u069D\x05\xACW\x02\u062E\u069D\x05\xAEX\x02" +
		"\u062F\u069D\x05\xB0Y\x02\u0630\u069D\x05\xB2Z\x02\u0631\u069D\x05\xB4" +
		"[\x02\u0632\u069D\x05\xB6\\\x02\u0633\u069D\x05\xB8]\x02\u0634\u069D\x05" +
		"\xBA^\x02\u0635\u069D\x05\xBC_\x02\u0636\u069D\x05\xBE`\x02\u0637\u069D" +
		"\x05\xC0a\x02\u0638\u069D\x05\xC2b\x02\u0639\u069D\x05\xC4c\x02\u063A" +
		"\u069D\x05\xC6d\x02\u063B\u069D\x05\xC8e\x02\u063C\u069D\x05\xCAf\x02" +
		"\u063D\u069D\x05\xCCg\x02\u063E\u069D\x05\xCEh\x02\u063F\u069D\x05\xD0" +
		"i\x02\u0640\u069D\x05\xD2j\x02\u0641\u069D\x05\xD4k\x02\u0642\u069D\x05" +
		"\xD6l\x02\u0643\u069D\x05\xD8m\x02\u0644\u069D\x05\xDAn\x02\u0645\u069D" +
		"\x05\xDCo\x02\u0646\u069D\x05\xDEp\x02\u0647\u069D\x05\xE0q\x02\u0648" +
		"\u069D\x05\xE2r\x02\u0649\u069D\x05\xE4s\x02\u064A\u069D\x05\xE6t\x02" +
		"\u064B\u069D\x05\xE8u\x02\u064C\u069D\x05\xEAv\x02\u064D\u069D\x05\xEC" +
		"w\x02\u064E\u069D\x05\xEEx\x02\u064F\u069D\x05\xF0y\x02\u0650\u069D\x05" +
		"\xF2z\x02\u0651\u069D\x05\xF4{\x02\u0652\u069D\x05\xF6|\x02\u0653\u069D" +
		"\x05\xF8}\x02\u0654\u069D\x05\xFA~\x02\u0655\u069D\x05\xFC\x7F\x02\u0656" +
		"\u069D\x05\xFE\x80\x02\u0657\u069D\x05\u0100\x81\x02\u0658\u069D\x05\u0102" +
		"\x82\x02\u0659\u069D\x05\u0104\x83\x02\u065A\u069D\x05\u0106\x84\x02\u065B" +
		"\u069D\x05\u0108\x85\x02\u065C\u069D\x05\u010A\x86\x02\u065D\u069D\x05" +
		"\u010C\x87\x02\u065E\u069D\x05\u010E\x88\x02\u065F\u069D\x05\u0110\x89" +
		"\x02\u0660\u069D\x05\u0112\x8A\x02\u0661\u069D\x05\u0114\x8B\x02\u0662" +
		"\u069D\x05\u0116\x8C\x02\u0663\u069D\x05\u0118\x8D\x02\u0664\u069D\x05" +
		"\u011A\x8E\x02\u0665\u069D\x05\u011C\x8F\x02\u0666\u069D\x05\u011E\x90" +
		"\x02\u0667\u069D\x05\u0120\x91\x02\u0668\u069D\x05\u0122\x92\x02\u0669" +
		"\u069D\x05\u0124\x93\x02\u066A\u069D\x05\u0126\x94\x02\u066B\u069D\x05" +
		"\u0128\x95\x02\u066C\u069D\x05\u012A\x96\x02\u066D\u069D\x05\u012C\x97" +
		"\x02\u066E\u069D\x05\u0158\xAD\x02\u066F\u069D\x05\u0170\xB9\x02\u0670" +
		"\u069D\x05\u0172\xBA\x02\u0671\u069D\x05\u015A\xAE\x02\u0672\u069D\x05" +
		"\u015C\xAF\x02\u0673\u069D\x05\u015E\xB0\x02\u0674\u069D\x05\u0160\xB1" +
		"\x02\u0675\u069D\x05\u0162\xB2\x02\u0676\u069D\x05\u0164\xB3\x02\u0677" +
		"\u069D\x05\u0166\xB4\x02\u0678\u069D\x05\u0168\xB5\x02\u0679\u069D\x05" +
		"\u016A\xB6\x02\u067A\u069D\x05\u016C\xB7\x02\u067B\u069D\x05\u016E\xB8" +
		"\x02\u067C\u069D\x05\u0174\xBB\x02\u067D\u069D\x05\u0176\xBC\x02\u067E" +
		"\u069D\x05\u0178\xBD\x02\u067F\u069D\x05\u017A\xBE\x02\u0680\u069D\x05" +
		"\u017C\xBF\x02\u0681\u069D\x05\u017E\xC0\x02\u0682\u069D\x05\u0180\xC1" +
		"\x02\u0683\u069D\x05\u0182\xC2\x02\u0684\u069D\x05\u0184\xC3\x02\u0685" +
		"\u069D\x05\u0186\xC4\x02\u0686\u069D\x05\u0156\xAC\x02\u0687\u069D\x05" +
		"\u012E\x98\x02\u0688\u069D\x05\u0130\x99\x02\u0689\u069D\x05\u0134\x9B" +
		"\x02\u068A\u069D\x05\u0132\x9A\x02\u068B\u069D\x05\u0136\x9C\x02\u068C" +
		"\u069D\x05\u0138\x9D\x02\u068D\u069D\x05\u017E\xC0\x02\u068E\u069D\x05" +
		"\u013A\x9E\x02\u068F\u069D\x05\u0140\xA1\x02\u0690\u069D\x05\u0142\xA2" +
		"\x02\u0691\u069D\x05\u0144\xA3\x02\u0692\u069D\x05\u0146\xA4\x02\u0693" +
		"\u069D\x05\u0148\xA5\x02\u0694\u069D\x05\u014A\xA6\x02\u0695\u069D\x05" +
		"\u014C\xA7\x02\u0696\u069D\x05\u014E\xA8\x02\u0697\u069D\x05\u013C\x9F" +
		"\x02\u0698\u069D\x05\u013E\xA0\x02\u0699\u069D\x05\u0150\xA9\x02\u069A" +
		"\u069D\x05\u0152\xAA\x02\u069B\u069D\x05\u0154\xAB\x02\u069C\u05F7\x03" +
		"\x02\x02\x02\u069C\u05F8\x03\x02\x02\x02\u069C\u05F9\x03\x02\x02\x02\u069C" +
		"\u05FA\x03\x02\x02\x02\u069C\u05FB\x03\x02\x02\x02\u069C\u05FC\x03\x02" +
		"\x02\x02\u069C\u05FD\x03\x02\x02\x02\u069C\u05FE\x03\x02\x02\x02\u069C" +
		"\u05FF\x03\x02\x02\x02\u069C\u0600\x03\x02\x02\x02\u069C\u0601\x03\x02" +
		"\x02\x02\u069C\u0602\x03\x02\x02\x02\u069C\u0603\x03\x02\x02\x02\u069C" +
		"\u0604\x03\x02\x02\x02\u069C\u0605\x03\x02\x02\x02\u069C\u0606\x03\x02" +
		"\x02\x02\u069C\u0607\x03\x02\x02\x02\u069C\u0608\x03\x02\x02\x02\u069C" +
		"\u0609\x03\x02\x02\x02\u069C\u060A\x03\x02\x02\x02\u069C\u060B\x03\x02" +
		"\x02\x02\u069C\u060C\x03\x02\x02\x02\u069C\u060D\x03\x02\x02\x02\u069C" +
		"\u060E\x03\x02\x02\x02\u069C\u060F\x03\x02\x02\x02\u069C\u0610\x03\x02" +
		"\x02\x02\u069C\u0611\x03\x02\x02\x02\u069C\u0612\x03\x02\x02\x02\u069C" +
		"\u0613\x03\x02\x02\x02\u069C\u0614\x03\x02\x02\x02\u069C\u0615\x03\x02" +
		"\x02\x02\u069C\u0616\x03\x02\x02\x02\u069C\u0617\x03\x02\x02\x02\u069C" +
		"\u0618\x03\x02\x02\x02\u069C\u0619\x03\x02\x02\x02\u069C\u061A\x03\x02" +
		"\x02\x02\u069C\u061B\x03\x02\x02\x02\u069C\u061C\x03\x02\x02\x02\u069C" +
		"\u061D\x03\x02\x02\x02\u069C\u061E\x03\x02\x02\x02\u069C\u061F\x03\x02" +
		"\x02\x02\u069C\u0620\x03\x02\x02\x02\u069C\u0621\x03\x02\x02\x02\u069C" +
		"\u0622\x03\x02\x02\x02\u069C\u0623\x03\x02\x02\x02\u069C\u0624\x03\x02" +
		"\x02\x02\u069C\u0625\x03\x02\x02\x02\u069C\u0626\x03\x02\x02\x02\u069C" +
		"\u0627\x03\x02\x02\x02\u069C\u0628\x03\x02\x02\x02\u069C\u0629\x03\x02" +
		"\x02\x02\u069C\u062A\x03\x02\x02\x02\u069C\u062B\x03\x02\x02\x02\u069C" +
		"\u062C\x03\x02\x02\x02\u069C\u062D\x03\x02\x02\x02\u069C\u062E\x03\x02" +
		"\x02\x02\u069C\u062F\x03\x02\x02\x02\u069C\u0630\x03\x02\x02\x02\u069C" +
		"\u0631\x03\x02\x02\x02\u069C\u0632\x03\x02\x02\x02\u069C\u0633\x03\x02" +
		"\x02\x02\u069C\u0634\x03\x02\x02\x02\u069C\u0635\x03\x02\x02\x02\u069C" +
		"\u0636\x03\x02\x02\x02\u069C\u0637\x03\x02\x02\x02\u069C\u0638\x03\x02" +
		"\x02\x02\u069C\u0639\x03\x02\x02\x02\u069C\u063A\x03\x02\x02\x02\u069C" +
		"\u063B\x03\x02\x02\x02\u069C\u063C\x03\x02\x02\x02\u069C\u063D\x03\x02" +
		"\x02\x02\u069C\u063E\x03\x02\x02\x02\u069C\u063F\x03\x02\x02\x02\u069C" +
		"\u0640\x03\x02\x02\x02\u069C\u0641\x03\x02\x02\x02\u069C\u0642\x03\x02" +
		"\x02\x02\u069C\u0643\x03\x02\x02\x02\u069C\u0644\x03\x02\x02\x02\u069C" +
		"\u0645\x03\x02\x02\x02\u069C\u0646\x03\x02\x02\x02\u069C\u0647\x03\x02" +
		"\x02\x02\u069C\u0648\x03\x02\x02\x02\u069C\u0649\x03\x02\x02\x02\u069C" +
		"\u064A\x03\x02\x02\x02\u069C\u064B\x03\x02\x02\x02\u069C\u064C\x03\x02" +
		"\x02\x02\u069C\u064D\x03\x02\x02\x02\u069C\u064E\x03\x02\x02\x02\u069C" +
		"\u064F\x03\x02\x02\x02\u069C\u0650\x03\x02\x02\x02\u069C\u0651\x03\x02" +
		"\x02\x02\u069C\u0652\x03\x02\x02\x02\u069C\u0653\x03\x02\x02\x02\u069C" +
		"\u0654\x03\x02\x02\x02\u069C\u0655\x03\x02\x02\x02\u069C\u0656\x03\x02" +
		"\x02\x02\u069C\u0657\x03\x02\x02\x02\u069C\u0658\x03\x02\x02\x02\u069C" +
		"\u0659\x03\x02\x02\x02\u069C\u065A\x03\x02\x02\x02\u069C\u065B\x03\x02" +
		"\x02\x02\u069C\u065C\x03\x02\x02\x02\u069C\u065D\x03\x02\x02\x02\u069C" +
		"\u065E\x03\x02\x02\x02\u069C\u065F\x03\x02\x02\x02\u069C\u0660\x03\x02" +
		"\x02\x02\u069C\u0661\x03\x02\x02\x02\u069C\u0662\x03\x02\x02\x02\u069C" +
		"\u0663\x03\x02\x02\x02\u069C\u0664\x03\x02\x02\x02\u069C\u0665\x03\x02" +
		"\x02\x02\u069C\u0666\x03\x02\x02\x02\u069C\u0667\x03\x02\x02\x02\u069C" +
		"\u0668\x03\x02\x02\x02\u069C\u0669\x03\x02\x02\x02\u069C\u066A\x03\x02" +
		"\x02\x02\u069C\u066B\x03\x02\x02\x02\u069C\u066C\x03\x02\x02\x02\u069C" +
		"\u066D\x03\x02\x02\x02\u069C\u066E\x03\x02\x02\x02\u069C\u066F\x03\x02" +
		"\x02\x02\u069C\u0670\x03\x02\x02\x02\u069C\u0671\x03\x02\x02\x02\u069C" +
		"\u0672\x03\x02\x02\x02\u069C\u0673\x03\x02\x02\x02\u069C\u0674\x03\x02" +
		"\x02\x02\u069C\u0675\x03\x02\x02\x02\u069C\u0676\x03\x02\x02\x02\u069C" +
		"\u0677\x03\x02\x02\x02\u069C\u0678\x03\x02\x02\x02\u069C\u0679\x03\x02" +
		"\x02\x02\u069C\u067A\x03\x02\x02\x02\u069C\u067B\x03\x02\x02\x02\u069C" +
		"\u067C\x03\x02\x02\x02\u069C\u067D\x03\x02\x02\x02\u069C\u067E\x03\x02" +
		"\x02\x02\u069C\u067F\x03\x02\x02\x02\u069C\u0680\x03\x02\x02\x02\u069C" +
		"\u0681\x03\x02\x02\x02\u069C\u0682\x03\x02\x02\x02\u069C";
	private static readonly _serializedATNSegment3: string =
		"\u0683\x03\x02\x02\x02\u069C\u0684\x03\x02\x02\x02\u069C\u0685\x03\x02" +
		"\x02\x02\u069C\u0686\x03\x02\x02\x02\u069C\u0687\x03\x02\x02\x02\u069C" +
		"\u0688\x03\x02\x02\x02\u069C\u0689\x03\x02\x02\x02\u069C\u068A\x03\x02" +
		"\x02\x02\u069C\u068B\x03\x02\x02\x02\u069C\u068C\x03\x02\x02\x02\u069C" +
		"\u068D\x03\x02\x02\x02\u069C\u068E\x03\x02\x02\x02\u069C\u068F\x03\x02" +
		"\x02\x02\u069C\u0690\x03\x02\x02\x02\u069C\u0691\x03\x02\x02\x02\u069C" +
		"\u0692\x03\x02\x02\x02\u069C\u0693\x03\x02\x02\x02\u069C\u0694\x03\x02" +
		"\x02\x02\u069C\u0695\x03\x02\x02\x02\u069C\u0696\x03\x02\x02\x02\u069C" +
		"\u0697\x03\x02\x02\x02\u069C\u0698\x03\x02\x02\x02\u069C\u0699\x03\x02" +
		"\x02\x02\u069C\u069A\x03\x02\x02\x02\u069C\u069B\x03\x02\x02\x02\u069D" +
		"\u0189\x03\x02\x02\x02\x94\u018B\u0191\u0193\u0198\u019B\u01E7\u01EA\u01F0" +
		"\u01F9\u01FF\u0205\u021C\u0222\u023C\u023F\u0242\u0245\u024B\u024F\u0255" +
		"\u0258\u025D\u025F\u0262\u0265\u0269\u026F\u0272\u0277\u0279\u027C\u027F" +
		"\u0285\u028E\u02A9\u02C2\u02C8\u02CB\u02CF\u02D2\u02D8\u02DE\u02E4\u02F0" +
		"\u02F3\u02F6\u0313\u0321\u032C\u032E\u0335\u0339\u034C\u0350\u0356\u0375" +
		"\u037B\u037E\u0381\u0388\u039D\u03A6\u03AD\u03B4\u03B8\u03C6\u03CD\u03D0" +
		"\u03D8\u03DC\u03E2\u03E9\u03EC\u03EF\u03F2\u03F7\u0406\u0409\u0411\u041D" +
		"\u0423\u0425\u0429\u042C\u0433\u0437\u043F\u0445\u0447\u044B\u0452\u045C" +
		"\u0461\u0467\u0469\u0470\u0473\u0476\u0479\u0480\u0487\u048A\u0492\u0495" +
		"\u04A5\u04AC\u04AF\u04B6\u04BF\u04C5\u04C7\u04CB\u04CE\u04D6\u04DC\u04DE" +
		"\u04E2\u04F1\u04FA\u050A\u0517\u051E\u0525\u052B\u0531\u0533\u053D\u053F" +
		"\u0544\u0555\u055E\u0575\u0587\u058C\u0590\u05A5\u05B0\u05B4\u05B7\u05D9" +
		"\u05DB\u05E6\u05EC\u05EF\u05F5\u069C";
	public static readonly _serializedATN: string = Utils.join(
		[
			RedisSqlParser._serializedATNSegment0,
			RedisSqlParser._serializedATNSegment1,
			RedisSqlParser._serializedATNSegment2,
			RedisSqlParser._serializedATNSegment3,
		],
		"",
	);
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!RedisSqlParser.__ATN) {
			RedisSqlParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(RedisSqlParser._serializedATN));
		}

		return RedisSqlParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(RedisSqlParser.EOF, 0); }
	public sqlStatements(): SqlStatementsContext | undefined {
		return this.tryGetRuleContext(0, SqlStatementsContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_program; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlStatementsContext extends ParserRuleContext {
	public sqlStatement(): SqlStatementContext[];
	public sqlStatement(i: number): SqlStatementContext;
	public sqlStatement(i?: number): SqlStatementContext | SqlStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(SqlStatementContext);
		} else {
			return this.getRuleContext(i, SqlStatementContext);
		}
	}
	public emptyStatement_(): EmptyStatement_Context[];
	public emptyStatement_(i: number): EmptyStatement_Context;
	public emptyStatement_(i?: number): EmptyStatement_Context | EmptyStatement_Context[] {
		if (i === undefined) {
			return this.getRuleContexts(EmptyStatement_Context);
		} else {
			return this.getRuleContext(i, EmptyStatement_Context);
		}
	}
	public SEMI(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_sqlStatements; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterSqlStatements) {
			listener.enterSqlStatements(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitSqlStatements) {
			listener.exitSqlStatements(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitSqlStatements) {
			return visitor.visitSqlStatements(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EmptyStatement_Context extends ParserRuleContext {
	public SEMI(): TerminalNode { return this.getToken(RedisSqlParser.SEMI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_emptyStatement_; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterEmptyStatement_) {
			listener.enterEmptyStatement_(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitEmptyStatement_) {
			listener.exitEmptyStatement_(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitEmptyStatement_) {
			return visitor.visitEmptyStatement_(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyNameContext extends ParserRuleContext {
	public NAME_TOKEN(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.NAME_TOKEN, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_keyName; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterKeyName) {
			listener.enterKeyName(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitKeyName) {
			listener.exitKeyName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitKeyName) {
			return visitor.visitKeyName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FieldNameContext extends ParserRuleContext {
	public NAME_TOKEN(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.NAME_TOKEN, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_fieldName; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterFieldName) {
			listener.enterFieldName(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitFieldName) {
			listener.exitFieldName(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitFieldName) {
			return visitor.visitFieldName(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringValueContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(RedisSqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_stringValue; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterStringValue) {
			listener.enterStringValue(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitStringValue) {
			listener.exitStringValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitStringValue) {
			return visitor.visitStringValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntValueContext extends ParserRuleContext {
	public INTEGER_NUM(): TerminalNode { return this.getToken(RedisSqlParser.INTEGER_NUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_intValue; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterIntValue) {
			listener.enterIntValue(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitIntValue) {
			listener.exitIntValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitIntValue) {
			return visitor.visitIntValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FloatValueContext extends ParserRuleContext {
	public DECIMAL_NUM(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.DECIMAL_NUM, 0); }
	public INTEGER_NUM(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.INTEGER_NUM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_floatValue; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterFloatValue) {
			listener.enterFloatValue(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitFloatValue) {
			listener.exitFloatValue(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitFloatValue) {
			return visitor.visitFloatValue(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternContext extends ParserRuleContext {
	public NAME_TOKEN(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.NAME_TOKEN, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_pattern; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterPattern) {
			listener.enterPattern(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitPattern) {
			listener.exitPattern(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitPattern) {
			return visitor.visitPattern(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CursorContext extends ParserRuleContext {
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cursor; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCursor) {
			listener.enterCursor(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCursor) {
			listener.exitCursor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCursor) {
			return visitor.visitCursor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MinContext extends ParserRuleContext {
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_min; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterMin) {
			listener.enterMin(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitMin) {
			listener.exitMin(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitMin) {
			return visitor.visitMin(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MaxContext extends ParserRuleContext {
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_max; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterMax) {
			listener.enterMax(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitMax) {
			listener.exitMax(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitMax) {
			return visitor.visitMax(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MultiStringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(RedisSqlParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_multiString; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterMultiString) {
			listener.enterMultiString(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitMultiString) {
			listener.exitMultiString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitMultiString) {
			return visitor.visitMultiString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CoutContext extends ParserRuleContext {
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cout; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCout) {
			listener.enterCout(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCout) {
			listener.exitCout(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCout) {
			return visitor.visitCout(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StartContext extends ParserRuleContext {
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_start; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterStart) {
			listener.enterStart(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitStart) {
			listener.exitStart(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitStart) {
			return visitor.visitStart(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class EndContext extends ParserRuleContext {
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_end; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterEnd) {
			listener.enterEnd(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitEnd) {
			listener.exitEnd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitEnd) {
			return visitor.visitEnd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PortContext extends ParserRuleContext {
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_port; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterPort) {
			listener.enterPort(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitPort) {
			listener.exitPort(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitPort) {
			return visitor.visitPort(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyAndStringContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public stringValue(): StringValueContext {
		return this.getRuleContext(0, StringValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_keyAndString; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterKeyAndString) {
			listener.enterKeyAndString(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitKeyAndString) {
			listener.exitKeyAndString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitKeyAndString) {
			return visitor.visitKeyAndString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IntAndStringContext extends ParserRuleContext {
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public stringValue(): StringValueContext {
		return this.getRuleContext(0, StringValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_intAndString; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterIntAndString) {
			listener.enterIntAndString(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitIntAndString) {
			listener.exitIntAndString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitIntAndString) {
			return visitor.visitIntAndString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class InfoOptContext extends ParserRuleContext {
	public SERVER(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SERVER, 0); }
	public CLIENTS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.CLIENTS, 0); }
	public MEMORY(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MEMORY, 0); }
	public PERSISTENCE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.PERSISTENCE, 0); }
	public STATS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.STATS, 0); }
	public REPLICATION(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.REPLICATION, 0); }
	public CPU(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.CPU, 0); }
	public COMMANDSTATS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.COMMANDSTATS, 0); }
	public LATENCYSTATS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.LATENCYSTATS, 0); }
	public SENTINEL(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SENTINEL, 0); }
	public MODULES(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MODULES, 0); }
	public KEYSPACE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.KEYSPACE, 0); }
	public ERRORSTATS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ERRORSTATS, 0); }
	public ALL(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ALL, 0); }
	public DEFAULT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.DEFAULT, 0); }
	public EVERYTHING(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.EVERYTHING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_infoOpt; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterInfoOpt) {
			listener.enterInfoOpt(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitInfoOpt) {
			listener.exitInfoOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitInfoOpt) {
			return visitor.visitInfoOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class PatternOptContext extends ParserRuleContext {
	public GET(): TerminalNode { return this.getToken(RedisSqlParser.GET, 0); }
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_patternOpt; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterPatternOpt) {
			listener.enterPatternOpt(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitPatternOpt) {
			listener.exitPatternOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitPatternOpt) {
			return visitor.visitPatternOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class KeyOptContext extends ParserRuleContext {
	public NX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.NX, 0); }
	public XX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.XX, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.LT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_keyOpt; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterKeyOpt) {
			listener.enterKeyOpt(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitKeyOpt) {
			listener.exitKeyOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitKeyOpt) {
			return visitor.visitKeyOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdletimeOptContext extends ParserRuleContext {
	public IDLETIME(): TerminalNode { return this.getToken(RedisSqlParser.IDLETIME, 0); }
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_idletimeOpt; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterIdletimeOpt) {
			listener.enterIdletimeOpt(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitIdletimeOpt) {
			listener.exitIdletimeOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitIdletimeOpt) {
			return visitor.visitIdletimeOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class FreqOptContext extends ParserRuleContext {
	public FREQ(): TerminalNode { return this.getToken(RedisSqlParser.FREQ, 0); }
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_freqOpt; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterFreqOpt) {
			listener.enterFreqOpt(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitFreqOpt) {
			listener.exitFreqOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitFreqOpt) {
			return visitor.visitFreqOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LimitOptContext extends ParserRuleContext {
	public LIMIT(): TerminalNode { return this.getToken(RedisSqlParser.LIMIT, 0); }
	public intValue(): IntValueContext[];
	public intValue(i: number): IntValueContext;
	public intValue(i?: number): IntValueContext | IntValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntValueContext);
		} else {
			return this.getRuleContext(i, IntValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_limitOpt; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterLimitOpt) {
			listener.enterLimitOpt(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitLimitOpt) {
			listener.exitLimitOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitLimitOpt) {
			return visitor.visitLimitOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SortOptContext extends ParserRuleContext {
	public ASC(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ASC, 0); }
	public DESC(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.DESC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_sortOpt; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterSortOpt) {
			listener.enterSortOpt(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitSortOpt) {
			listener.exitSortOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitSortOpt) {
			return visitor.visitSortOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class GetsetOptContext extends ParserRuleContext {
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public EX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.EX, 0); }
	public PX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.PX, 0); }
	public EXAT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.EXAT, 0); }
	public PXAT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.PXAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_getsetOpt; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterGetsetOpt) {
			listener.enterGetsetOpt(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitGetsetOpt) {
			listener.exitGetsetOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitGetsetOpt) {
			return visitor.visitGetsetOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LrOptContext extends ParserRuleContext {
	public LEFT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.LEFT, 0); }
	public RIGHT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.RIGHT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_lrOpt; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterLrOpt) {
			listener.enterLrOpt(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitLrOpt) {
			listener.exitLrOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitLrOpt) {
			return visitor.visitLrOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class RankOptContext extends ParserRuleContext {
	public RANK(): TerminalNode { return this.getToken(RedisSqlParser.RANK, 0); }
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_rankOpt; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterRankOpt) {
			listener.enterRankOpt(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitRankOpt) {
			listener.exitRankOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitRankOpt) {
			return visitor.visitRankOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CountOptContext extends ParserRuleContext {
	public COUNT(): TerminalNode { return this.getToken(RedisSqlParser.COUNT, 0); }
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_countOpt; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCountOpt) {
			listener.enterCountOpt(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCountOpt) {
			listener.exitCountOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCountOpt) {
			return visitor.visitCountOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class MaxlenOptContext extends ParserRuleContext {
	public MAXLEN(): TerminalNode { return this.getToken(RedisSqlParser.MAXLEN, 0); }
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_maxlenOpt; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterMaxlenOpt) {
			listener.enterMaxlenOpt(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitMaxlenOpt) {
			listener.exitMaxlenOpt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitMaxlenOpt) {
			return visitor.visitMaxlenOpt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdCopyContext extends ParserRuleContext {
	public COPY(): TerminalNode { return this.getToken(RedisSqlParser.COPY, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	public DB(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.DB, 0); }
	public intValue(): IntValueContext | undefined {
		return this.tryGetRuleContext(0, IntValueContext);
	}
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.REPLACE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdCopy; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdCopy) {
			listener.enterCmdCopy(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdCopy) {
			listener.exitCmdCopy(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdCopy) {
			return visitor.visitCmdCopy(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdDelContext extends ParserRuleContext {
	public DEL(): TerminalNode { return this.getToken(RedisSqlParser.DEL, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdDel; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdDel) {
			listener.enterCmdDel(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdDel) {
			listener.exitCmdDel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdDel) {
			return visitor.visitCmdDel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdDumpContext extends ParserRuleContext {
	public DUMP(): TerminalNode { return this.getToken(RedisSqlParser.DUMP, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdDump; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdDump) {
			listener.enterCmdDump(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdDump) {
			listener.exitCmdDump(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdDump) {
			return visitor.visitCmdDump(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdExistsContext extends ParserRuleContext {
	public EXISTS(): TerminalNode { return this.getToken(RedisSqlParser.EXISTS, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdExists; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdExists) {
			listener.enterCmdExists(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdExists) {
			listener.exitCmdExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdExists) {
			return visitor.visitCmdExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdExpireContext extends ParserRuleContext {
	public EXPIRE(): TerminalNode { return this.getToken(RedisSqlParser.EXPIRE, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public keyOpt(): KeyOptContext | undefined {
		return this.tryGetRuleContext(0, KeyOptContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdExpire; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdExpire) {
			listener.enterCmdExpire(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdExpire) {
			listener.exitCmdExpire(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdExpire) {
			return visitor.visitCmdExpire(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdExpireatContext extends ParserRuleContext {
	public EXPIREAT(): TerminalNode { return this.getToken(RedisSqlParser.EXPIREAT, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public keyOpt(): KeyOptContext | undefined {
		return this.tryGetRuleContext(0, KeyOptContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdExpireat; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdExpireat) {
			listener.enterCmdExpireat(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdExpireat) {
			listener.exitCmdExpireat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdExpireat) {
			return visitor.visitCmdExpireat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdExpireTimeContext extends ParserRuleContext {
	public EXPIRETIME(): TerminalNode { return this.getToken(RedisSqlParser.EXPIRETIME, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdExpireTime; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdExpireTime) {
			listener.enterCmdExpireTime(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdExpireTime) {
			listener.exitCmdExpireTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdExpireTime) {
			return visitor.visitCmdExpireTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdKeysContext extends ParserRuleContext {
	public KEYS(): TerminalNode { return this.getToken(RedisSqlParser.KEYS, 0); }
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdKeys; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdKeys) {
			listener.enterCmdKeys(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdKeys) {
			listener.exitCmdKeys(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdKeys) {
			return visitor.visitCmdKeys(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdMoveContext extends ParserRuleContext {
	public MOVE(): TerminalNode { return this.getToken(RedisSqlParser.MOVE, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdMove; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdMove) {
			listener.enterCmdMove(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdMove) {
			listener.exitCmdMove(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdMove) {
			return visitor.visitCmdMove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdObjectContext extends ParserRuleContext {
	public OBJECT(): TerminalNode { return this.getToken(RedisSqlParser.OBJECT, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public ENCODING(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ENCODING, 0); }
	public FREQ(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.FREQ, 0); }
	public IDLETIME(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.IDLETIME, 0); }
	public REFCOUNT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.REFCOUNT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdObject; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdObject) {
			listener.enterCmdObject(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdObject) {
			listener.exitCmdObject(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdObject) {
			return visitor.visitCmdObject(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdPersistContext extends ParserRuleContext {
	public PERSIST(): TerminalNode { return this.getToken(RedisSqlParser.PERSIST, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdPersist; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdPersist) {
			listener.enterCmdPersist(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdPersist) {
			listener.exitCmdPersist(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdPersist) {
			return visitor.visitCmdPersist(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdPexpireContext extends ParserRuleContext {
	public PEXPIRE(): TerminalNode { return this.getToken(RedisSqlParser.PEXPIRE, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public keyOpt(): KeyOptContext | undefined {
		return this.tryGetRuleContext(0, KeyOptContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdPexpire; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdPexpire) {
			listener.enterCmdPexpire(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdPexpire) {
			listener.exitCmdPexpire(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdPexpire) {
			return visitor.visitCmdPexpire(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdPexpireatContext extends ParserRuleContext {
	public PEXPIREAT(): TerminalNode { return this.getToken(RedisSqlParser.PEXPIREAT, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public keyOpt(): KeyOptContext | undefined {
		return this.tryGetRuleContext(0, KeyOptContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdPexpireat; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdPexpireat) {
			listener.enterCmdPexpireat(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdPexpireat) {
			listener.exitCmdPexpireat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdPexpireat) {
			return visitor.visitCmdPexpireat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdPExpireTimeContext extends ParserRuleContext {
	public PEXPIRETIME(): TerminalNode { return this.getToken(RedisSqlParser.PEXPIRETIME, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdPExpireTime; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdPExpireTime) {
			listener.enterCmdPExpireTime(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdPExpireTime) {
			listener.exitCmdPExpireTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdPExpireTime) {
			return visitor.visitCmdPExpireTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdTtlContext extends ParserRuleContext {
	public TTL(): TerminalNode { return this.getToken(RedisSqlParser.TTL, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdTtl; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdTtl) {
			listener.enterCmdTtl(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdTtl) {
			listener.exitCmdTtl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdTtl) {
			return visitor.visitCmdTtl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdPttlContext extends ParserRuleContext {
	public PTTL(): TerminalNode { return this.getToken(RedisSqlParser.PTTL, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdPttl; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdPttl) {
			listener.enterCmdPttl(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdPttl) {
			listener.exitCmdPttl(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdPttl) {
			return visitor.visitCmdPttl(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdRandomkeyContext extends ParserRuleContext {
	public RANDOMKEY(): TerminalNode { return this.getToken(RedisSqlParser.RANDOMKEY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdRandomkey; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdRandomkey) {
			listener.enterCmdRandomkey(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdRandomkey) {
			listener.exitCmdRandomkey(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdRandomkey) {
			return visitor.visitCmdRandomkey(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdRenameContext extends ParserRuleContext {
	public RENAME(): TerminalNode { return this.getToken(RedisSqlParser.RENAME, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdRename; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdRename) {
			listener.enterCmdRename(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdRename) {
			listener.exitCmdRename(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdRename) {
			return visitor.visitCmdRename(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdRenamenxContext extends ParserRuleContext {
	public RENAMENX(): TerminalNode { return this.getToken(RedisSqlParser.RENAMENX, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdRenamenx; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdRenamenx) {
			listener.enterCmdRenamenx(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdRenamenx) {
			listener.exitCmdRenamenx(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdRenamenx) {
			return visitor.visitCmdRenamenx(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdRestoreContext extends ParserRuleContext {
	public RESTORE(): TerminalNode { return this.getToken(RedisSqlParser.RESTORE, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public stringValue(): StringValueContext {
		return this.getRuleContext(0, StringValueContext);
	}
	public REPLACE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.REPLACE, 0); }
	public ABSTTL(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ABSTTL, 0); }
	public idletimeOpt(): IdletimeOptContext | undefined {
		return this.tryGetRuleContext(0, IdletimeOptContext);
	}
	public freqOpt(): FreqOptContext | undefined {
		return this.tryGetRuleContext(0, FreqOptContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdRestore; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdRestore) {
			listener.enterCmdRestore(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdRestore) {
			listener.exitCmdRestore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdRestore) {
			return visitor.visitCmdRestore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdScanContext extends ParserRuleContext {
	public SCAN(): TerminalNode { return this.getToken(RedisSqlParser.SCAN, 0); }
	public cursor(): CursorContext {
		return this.getRuleContext(0, CursorContext);
	}
	public pattern(): PatternContext {
		return this.getRuleContext(0, PatternContext);
	}
	public intValue(): IntValueContext | undefined {
		return this.tryGetRuleContext(0, IntValueContext);
	}
	public TYPE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.TYPE, 0); }
	public stringValue(): StringValueContext | undefined {
		return this.tryGetRuleContext(0, StringValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdScan; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdScan) {
			listener.enterCmdScan(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdScan) {
			listener.exitCmdScan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdScan) {
			return visitor.visitCmdScan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSortContext extends ParserRuleContext {
	public SORT(): TerminalNode { return this.getToken(RedisSqlParser.SORT, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public BY(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.BY, 0); }
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	public limitOpt(): LimitOptContext | undefined {
		return this.tryGetRuleContext(0, LimitOptContext);
	}
	public sortOpt(): SortOptContext | undefined {
		return this.tryGetRuleContext(0, SortOptContext);
	}
	public ALPHA(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ALPHA, 0); }
	public STORE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.STORE, 0); }
	public stringValue(): StringValueContext | undefined {
		return this.tryGetRuleContext(0, StringValueContext);
	}
	public patternOpt(): PatternOptContext[];
	public patternOpt(i: number): PatternOptContext;
	public patternOpt(i?: number): PatternOptContext | PatternOptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatternOptContext);
		} else {
			return this.getRuleContext(i, PatternOptContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSort; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSort) {
			listener.enterCmdSort(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSort) {
			listener.exitCmdSort(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSort) {
			return visitor.visitCmdSort(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSortroContext extends ParserRuleContext {
	public SORT_RO(): TerminalNode { return this.getToken(RedisSqlParser.SORT_RO, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public BY(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.BY, 0); }
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	public limitOpt(): LimitOptContext | undefined {
		return this.tryGetRuleContext(0, LimitOptContext);
	}
	public sortOpt(): SortOptContext | undefined {
		return this.tryGetRuleContext(0, SortOptContext);
	}
	public ALPHA(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ALPHA, 0); }
	public patternOpt(): PatternOptContext[];
	public patternOpt(i: number): PatternOptContext;
	public patternOpt(i?: number): PatternOptContext | PatternOptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(PatternOptContext);
		} else {
			return this.getRuleContext(i, PatternOptContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSortro; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSortro) {
			listener.enterCmdSortro(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSortro) {
			listener.exitCmdSortro(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSortro) {
			return visitor.visitCmdSortro(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdTouchContext extends ParserRuleContext {
	public TOUCH(): TerminalNode { return this.getToken(RedisSqlParser.TOUCH, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdTouch; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdTouch) {
			listener.enterCmdTouch(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdTouch) {
			listener.exitCmdTouch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdTouch) {
			return visitor.visitCmdTouch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdTypeContext extends ParserRuleContext {
	public TYPE(): TerminalNode { return this.getToken(RedisSqlParser.TYPE, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdType; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdType) {
			listener.enterCmdType(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdType) {
			listener.exitCmdType(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdType) {
			return visitor.visitCmdType(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdUnlinkContext extends ParserRuleContext {
	public UNLINK(): TerminalNode { return this.getToken(RedisSqlParser.UNLINK, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdUnlink; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdUnlink) {
			listener.enterCmdUnlink(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdUnlink) {
			listener.exitCmdUnlink(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdUnlink) {
			return visitor.visitCmdUnlink(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdWaitContext extends ParserRuleContext {
	public WAIT(): TerminalNode { return this.getToken(RedisSqlParser.WAIT, 0); }
	public intValue(): IntValueContext[];
	public intValue(i: number): IntValueContext;
	public intValue(i?: number): IntValueContext | IntValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntValueContext);
		} else {
			return this.getRuleContext(i, IntValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdWait; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdWait) {
			listener.enterCmdWait(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdWait) {
			listener.exitCmdWait(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdWait) {
			return visitor.visitCmdWait(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdAppendContext extends ParserRuleContext {
	public APPEND(): TerminalNode { return this.getToken(RedisSqlParser.APPEND, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public stringValue(): StringValueContext {
		return this.getRuleContext(0, StringValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdAppend; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdAppend) {
			listener.enterCmdAppend(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdAppend) {
			listener.exitCmdAppend(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdAppend) {
			return visitor.visitCmdAppend(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdDecrContext extends ParserRuleContext {
	public DECR(): TerminalNode { return this.getToken(RedisSqlParser.DECR, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdDecr; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdDecr) {
			listener.enterCmdDecr(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdDecr) {
			listener.exitCmdDecr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdDecr) {
			return visitor.visitCmdDecr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdDecrbyContext extends ParserRuleContext {
	public DECRBY(): TerminalNode { return this.getToken(RedisSqlParser.DECRBY, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdDecrby; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdDecrby) {
			listener.enterCmdDecrby(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdDecrby) {
			listener.exitCmdDecrby(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdDecrby) {
			return visitor.visitCmdDecrby(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdGetContext extends ParserRuleContext {
	public GET(): TerminalNode { return this.getToken(RedisSqlParser.GET, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdGet; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdGet) {
			listener.enterCmdGet(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdGet) {
			listener.exitCmdGet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdGet) {
			return visitor.visitCmdGet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdGetdelContext extends ParserRuleContext {
	public GETDEL(): TerminalNode { return this.getToken(RedisSqlParser.GETDEL, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdGetdel; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdGetdel) {
			listener.enterCmdGetdel(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdGetdel) {
			listener.exitCmdGetdel(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdGetdel) {
			return visitor.visitCmdGetdel(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdGetexContext extends ParserRuleContext {
	public GETEX(): TerminalNode { return this.getToken(RedisSqlParser.GETEX, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public getsetOpt(): GetsetOptContext | undefined {
		return this.tryGetRuleContext(0, GetsetOptContext);
	}
	public PERSIST(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.PERSIST, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdGetex; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdGetex) {
			listener.enterCmdGetex(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdGetex) {
			listener.exitCmdGetex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdGetex) {
			return visitor.visitCmdGetex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdGetrangeContext extends ParserRuleContext {
	public GETRANGE(): TerminalNode { return this.getToken(RedisSqlParser.GETRANGE, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext[];
	public intValue(i: number): IntValueContext;
	public intValue(i?: number): IntValueContext | IntValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntValueContext);
		} else {
			return this.getRuleContext(i, IntValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdGetrange; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdGetrange) {
			listener.enterCmdGetrange(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdGetrange) {
			listener.exitCmdGetrange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdGetrange) {
			return visitor.visitCmdGetrange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdGetsetContext extends ParserRuleContext {
	public GETSET(): TerminalNode { return this.getToken(RedisSqlParser.GETSET, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public stringValue(): StringValueContext {
		return this.getRuleContext(0, StringValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdGetset; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdGetset) {
			listener.enterCmdGetset(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdGetset) {
			listener.exitCmdGetset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdGetset) {
			return visitor.visitCmdGetset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdGetbitContext extends ParserRuleContext {
	public GETBIT(): TerminalNode { return this.getToken(RedisSqlParser.GETBIT, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdGetbit; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdGetbit) {
			listener.enterCmdGetbit(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdGetbit) {
			listener.exitCmdGetbit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdGetbit) {
			return visitor.visitCmdGetbit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdIncContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdInc; }
	public copyFrom(ctx: CmdIncContext): void {
		super.copyFrom(ctx);
	}
}
export class CmdIncrContext extends CmdIncContext {
	public INCR(): TerminalNode { return this.getToken(RedisSqlParser.INCR, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	constructor(ctx: CmdIncContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdIncr) {
			listener.enterCmdIncr(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdIncr) {
			listener.exitCmdIncr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdIncr) {
			return visitor.visitCmdIncr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CmdIncrbyContext extends CmdIncContext {
	public INCRBY(): TerminalNode { return this.getToken(RedisSqlParser.INCRBY, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(ctx: CmdIncContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdIncrby) {
			listener.enterCmdIncrby(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdIncrby) {
			listener.exitCmdIncrby(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdIncrby) {
			return visitor.visitCmdIncrby(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CmdIncrbyFloatContext extends CmdIncContext {
	public INCRBYFLOAT(): TerminalNode { return this.getToken(RedisSqlParser.INCRBYFLOAT, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public floatValue(): FloatValueContext {
		return this.getRuleContext(0, FloatValueContext);
	}
	constructor(ctx: CmdIncContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdIncrbyFloat) {
			listener.enterCmdIncrbyFloat(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdIncrbyFloat) {
			listener.exitCmdIncrbyFloat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdIncrbyFloat) {
			return visitor.visitCmdIncrbyFloat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdLcsContext extends ParserRuleContext {
	public LCS(): TerminalNode { return this.getToken(RedisSqlParser.LCS, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	public LEN(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.LEN, 0); }
	public IDX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.IDX, 0); }
	public MINMATCHLEN(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MINMATCHLEN, 0); }
	public intValue(): IntValueContext | undefined {
		return this.tryGetRuleContext(0, IntValueContext);
	}
	public WITHMATCHLEN(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.WITHMATCHLEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdLcs; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdLcs) {
			listener.enterCmdLcs(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdLcs) {
			listener.exitCmdLcs(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdLcs) {
			return visitor.visitCmdLcs(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdMgetContext extends ParserRuleContext {
	public MGET(): TerminalNode { return this.getToken(RedisSqlParser.MGET, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdMget; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdMget) {
			listener.enterCmdMget(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdMget) {
			listener.exitCmdMget(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdMget) {
			return visitor.visitCmdMget(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdMsetContext extends ParserRuleContext {
	public MSET(): TerminalNode { return this.getToken(RedisSqlParser.MSET, 0); }
	public keyAndString(): KeyAndStringContext[];
	public keyAndString(i: number): KeyAndStringContext;
	public keyAndString(i?: number): KeyAndStringContext | KeyAndStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyAndStringContext);
		} else {
			return this.getRuleContext(i, KeyAndStringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdMset; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdMset) {
			listener.enterCmdMset(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdMset) {
			listener.exitCmdMset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdMset) {
			return visitor.visitCmdMset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdMsetnxContext extends ParserRuleContext {
	public MSETNX(): TerminalNode { return this.getToken(RedisSqlParser.MSETNX, 0); }
	public keyAndString(): KeyAndStringContext[];
	public keyAndString(i: number): KeyAndStringContext;
	public keyAndString(i?: number): KeyAndStringContext | KeyAndStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyAndStringContext);
		} else {
			return this.getRuleContext(i, KeyAndStringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdMsetnx; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdMsetnx) {
			listener.enterCmdMsetnx(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdMsetnx) {
			listener.exitCmdMsetnx(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdMsetnx) {
			return visitor.visitCmdMsetnx(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSetexContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public stringValue(): StringValueContext {
		return this.getRuleContext(0, StringValueContext);
	}
	public SETEX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SETEX, 0); }
	public PSETEX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.PSETEX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSetex; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSetex) {
			listener.enterCmdSetex(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSetex) {
			listener.exitCmdSetex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSetex) {
			return visitor.visitCmdSetex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSetContext extends ParserRuleContext {
	public SET(): TerminalNode { return this.getToken(RedisSqlParser.SET, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public stringValue(): StringValueContext {
		return this.getRuleContext(0, StringValueContext);
	}
	public getsetOpt(): GetsetOptContext | undefined {
		return this.tryGetRuleContext(0, GetsetOptContext);
	}
	public KEEPTTL(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.KEEPTTL, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.GET, 0); }
	public NX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.NX, 0); }
	public XX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.XX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSet; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSet) {
			listener.enterCmdSet(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSet) {
			listener.exitCmdSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSet) {
			return visitor.visitCmdSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSetnxContext extends ParserRuleContext {
	public SETNX(): TerminalNode { return this.getToken(RedisSqlParser.SETNX, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public stringValue(): StringValueContext {
		return this.getRuleContext(0, StringValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSetnx; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSetnx) {
			listener.enterCmdSetnx(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSetnx) {
			listener.exitCmdSetnx(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSetnx) {
			return visitor.visitCmdSetnx(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSetrangeContext extends ParserRuleContext {
	public SETRANGE(): TerminalNode { return this.getToken(RedisSqlParser.SETRANGE, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public stringValue(): StringValueContext {
		return this.getRuleContext(0, StringValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSetrange; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSetrange) {
			listener.enterCmdSetrange(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSetrange) {
			listener.exitCmdSetrange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSetrange) {
			return visitor.visitCmdSetrange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSetbitContext extends ParserRuleContext {
	public SETBIT(): TerminalNode { return this.getToken(RedisSqlParser.SETBIT, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext[];
	public intValue(i: number): IntValueContext;
	public intValue(i?: number): IntValueContext | IntValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntValueContext);
		} else {
			return this.getRuleContext(i, IntValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSetbit; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSetbit) {
			listener.enterCmdSetbit(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSetbit) {
			listener.exitCmdSetbit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSetbit) {
			return visitor.visitCmdSetbit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdStrlenContext extends ParserRuleContext {
	public STRLEN(): TerminalNode { return this.getToken(RedisSqlParser.STRLEN, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdStrlen; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdStrlen) {
			listener.enterCmdStrlen(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdStrlen) {
			listener.exitCmdStrlen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdStrlen) {
			return visitor.visitCmdStrlen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSubstrContext extends ParserRuleContext {
	public SUBSTR(): TerminalNode { return this.getToken(RedisSqlParser.SUBSTR, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext[];
	public intValue(i: number): IntValueContext;
	public intValue(i?: number): IntValueContext | IntValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntValueContext);
		} else {
			return this.getRuleContext(i, IntValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSubstr; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSubstr) {
			listener.enterCmdSubstr(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSubstr) {
			listener.exitCmdSubstr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSubstr) {
			return visitor.visitCmdSubstr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdHdelMgetContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public HDEL(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.HDEL, 0); }
	public HMGET(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.HMGET, 0); }
	public fieldName(): FieldNameContext[];
	public fieldName(i: number): FieldNameContext;
	public fieldName(i?: number): FieldNameContext | FieldNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldNameContext);
		} else {
			return this.getRuleContext(i, FieldNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdHdelMget; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdHdelMget) {
			listener.enterCmdHdelMget(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdHdelMget) {
			listener.exitCmdHdelMget(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdHdelMget) {
			return visitor.visitCmdHdelMget(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdHexistsGetKeysStrlenContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public HEXISTS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.HEXISTS, 0); }
	public HGET(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.HGET, 0); }
	public HSTRLEN(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.HSTRLEN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdHexistsGetKeysStrlen; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdHexistsGetKeysStrlen) {
			listener.enterCmdHexistsGetKeysStrlen(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdHexistsGetKeysStrlen) {
			listener.exitCmdHexistsGetKeysStrlen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdHexistsGetKeysStrlen) {
			return visitor.visitCmdHexistsGetKeysStrlen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdHgetallLenValsContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public HGETALL(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.HGETALL, 0); }
	public HLEN(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.HLEN, 0); }
	public HVALS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.HVALS, 0); }
	public HKEYS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.HKEYS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdHgetallLenVals; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdHgetallLenVals) {
			listener.enterCmdHgetallLenVals(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdHgetallLenVals) {
			listener.exitCmdHgetallLenVals(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdHgetallLenVals) {
			return visitor.visitCmdHgetallLenVals(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdHmsetHsetContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public HMSET(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.HMSET, 0); }
	public HSET(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.HSET, 0); }
	public keyAndString(): KeyAndStringContext[];
	public keyAndString(i: number): KeyAndStringContext;
	public keyAndString(i?: number): KeyAndStringContext | KeyAndStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyAndStringContext);
		} else {
			return this.getRuleContext(i, KeyAndStringContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdHmsetHset; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdHmsetHset) {
			listener.enterCmdHmsetHset(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdHmsetHset) {
			listener.exitCmdHmsetHset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdHmsetHset) {
			return visitor.visitCmdHmsetHset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdHincrbyContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public floatValue(): FloatValueContext {
		return this.getRuleContext(0, FloatValueContext);
	}
	public HINCRBY(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.HINCRBY, 0); }
	public HINCRBYFLOAT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.HINCRBYFLOAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdHincrby; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdHincrby) {
			listener.enterCmdHincrby(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdHincrby) {
			listener.exitCmdHincrby(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdHincrby) {
			return visitor.visitCmdHincrby(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdHrandfieldContext extends ParserRuleContext {
	public HRANDFIELD(): TerminalNode { return this.getToken(RedisSqlParser.HRANDFIELD, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext | undefined {
		return this.tryGetRuleContext(0, IntValueContext);
	}
	public WITHVALUES(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.WITHVALUES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdHrandfield; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdHrandfield) {
			listener.enterCmdHrandfield(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdHrandfield) {
			listener.exitCmdHrandfield(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdHrandfield) {
			return visitor.visitCmdHrandfield(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdHscanContext extends ParserRuleContext {
	public HSCAN(): TerminalNode { return this.getToken(RedisSqlParser.HSCAN, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext[];
	public intValue(i: number): IntValueContext;
	public intValue(i?: number): IntValueContext | IntValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntValueContext);
		} else {
			return this.getRuleContext(i, IntValueContext);
		}
	}
	public MATCH(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MATCH, 0); }
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	public COUNT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.COUNT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdHscan; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdHscan) {
			listener.enterCmdHscan(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdHscan) {
			listener.exitCmdHscan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdHscan) {
			return visitor.visitCmdHscan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdHsetnxContext extends ParserRuleContext {
	public HSETNX(): TerminalNode { return this.getToken(RedisSqlParser.HSETNX, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public keyAndString(): KeyAndStringContext {
		return this.getRuleContext(0, KeyAndStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdHsetnx; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdHsetnx) {
			listener.enterCmdHsetnx(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdHsetnx) {
			listener.exitCmdHsetnx(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdHsetnx) {
			return visitor.visitCmdHsetnx(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdBlmoveContext extends ParserRuleContext {
	public BLMOVE(): TerminalNode { return this.getToken(RedisSqlParser.BLMOVE, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	public lrOpt(): LrOptContext[];
	public lrOpt(i: number): LrOptContext;
	public lrOpt(i?: number): LrOptContext | LrOptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LrOptContext);
		} else {
			return this.getRuleContext(i, LrOptContext);
		}
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdBlmove; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdBlmove) {
			listener.enterCmdBlmove(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdBlmove) {
			listener.exitCmdBlmove(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdBlmove) {
			return visitor.visitCmdBlmove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdLmpopContext extends ParserRuleContext {
	public intValue(): IntValueContext[];
	public intValue(i: number): IntValueContext;
	public intValue(i?: number): IntValueContext | IntValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntValueContext);
		} else {
			return this.getRuleContext(i, IntValueContext);
		}
	}
	public lrOpt(): LrOptContext {
		return this.getRuleContext(0, LrOptContext);
	}
	public LMPOP(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.LMPOP, 0); }
	public BLMPOP(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.BLMPOP, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdLmpop; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdLmpop) {
			listener.enterCmdLmpop(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdLmpop) {
			listener.exitCmdLmpop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdLmpop) {
			return visitor.visitCmdLmpop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdBpopContext extends ParserRuleContext {
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public BLPOP(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.BLPOP, 0); }
	public BRPOP(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.BRPOP, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdBpop; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdBpop) {
			listener.enterCmdBpop(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdBpop) {
			listener.exitCmdBpop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdBpop) {
			return visitor.visitCmdBpop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdBrpoplpushContext extends ParserRuleContext {
	public BRPOPLPUSH(): TerminalNode { return this.getToken(RedisSqlParser.BRPOPLPUSH, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdBrpoplpush; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdBrpoplpush) {
			listener.enterCmdBrpoplpush(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdBrpoplpush) {
			listener.exitCmdBrpoplpush(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdBrpoplpush) {
			return visitor.visitCmdBrpoplpush(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdLindexContext extends ParserRuleContext {
	public LINDEX(): TerminalNode { return this.getToken(RedisSqlParser.LINDEX, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdLindex; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdLindex) {
			listener.enterCmdLindex(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdLindex) {
			listener.exitCmdLindex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdLindex) {
			return visitor.visitCmdLindex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdLinsertContext extends ParserRuleContext {
	public LINSERT(): TerminalNode { return this.getToken(RedisSqlParser.LINSERT, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public stringValue(): StringValueContext[];
	public stringValue(i: number): StringValueContext;
	public stringValue(i?: number): StringValueContext | StringValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringValueContext);
		} else {
			return this.getRuleContext(i, StringValueContext);
		}
	}
	public BEFORE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.BEFORE, 0); }
	public AFTER(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.AFTER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdLinsert; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdLinsert) {
			listener.enterCmdLinsert(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdLinsert) {
			listener.exitCmdLinsert(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdLinsert) {
			return visitor.visitCmdLinsert(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdLlenContext extends ParserRuleContext {
	public LLEN(): TerminalNode { return this.getToken(RedisSqlParser.LLEN, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdLlen; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdLlen) {
			listener.enterCmdLlen(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdLlen) {
			listener.exitCmdLlen(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdLlen) {
			return visitor.visitCmdLlen(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdLmoveContext extends ParserRuleContext {
	public LMOVE(): TerminalNode { return this.getToken(RedisSqlParser.LMOVE, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	public lrOpt(): LrOptContext[];
	public lrOpt(i: number): LrOptContext;
	public lrOpt(i?: number): LrOptContext | LrOptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(LrOptContext);
		} else {
			return this.getRuleContext(i, LrOptContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdLmove; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdLmove) {
			listener.enterCmdLmove(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdLmove) {
			listener.exitCmdLmove(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdLmove) {
			return visitor.visitCmdLmove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdPopContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public LPOP(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.LPOP, 0); }
	public RPOP(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.RPOP, 0); }
	public intValue(): IntValueContext | undefined {
		return this.tryGetRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdPop; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdPop) {
			listener.enterCmdPop(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdPop) {
			listener.exitCmdPop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdPop) {
			return visitor.visitCmdPop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdLposContext extends ParserRuleContext {
	public LPOS(): TerminalNode { return this.getToken(RedisSqlParser.LPOS, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public rankOpt(): RankOptContext | undefined {
		return this.tryGetRuleContext(0, RankOptContext);
	}
	public countOpt(): CountOptContext | undefined {
		return this.tryGetRuleContext(0, CountOptContext);
	}
	public maxlenOpt(): MaxlenOptContext | undefined {
		return this.tryGetRuleContext(0, MaxlenOptContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdLpos; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdLpos) {
			listener.enterCmdLpos(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdLpos) {
			listener.exitCmdLpos(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdLpos) {
			return visitor.visitCmdLpos(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdPushContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public LPUSH(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.LPUSH, 0); }
	public LPUSHX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.LPUSHX, 0); }
	public RPUSH(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.RPUSH, 0); }
	public RPUSHX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.RPUSHX, 0); }
	public stringValue(): StringValueContext[];
	public stringValue(i: number): StringValueContext;
	public stringValue(i?: number): StringValueContext | StringValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringValueContext);
		} else {
			return this.getRuleContext(i, StringValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdPush; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdPush) {
			listener.enterCmdPush(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdPush) {
			listener.exitCmdPush(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdPush) {
			return visitor.visitCmdPush(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdLrangeTrimContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext[];
	public intValue(i: number): IntValueContext;
	public intValue(i?: number): IntValueContext | IntValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntValueContext);
		} else {
			return this.getRuleContext(i, IntValueContext);
		}
	}
	public LRANGE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.LRANGE, 0); }
	public LTRIM(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.LTRIM, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdLrangeTrim; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdLrangeTrim) {
			listener.enterCmdLrangeTrim(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdLrangeTrim) {
			listener.exitCmdLrangeTrim(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdLrangeTrim) {
			return visitor.visitCmdLrangeTrim(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdLremSetContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public stringValue(): StringValueContext {
		return this.getRuleContext(0, StringValueContext);
	}
	public LREM(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.LREM, 0); }
	public LSET(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.LSET, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdLremSet; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdLremSet) {
			listener.enterCmdLremSet(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdLremSet) {
			listener.exitCmdLremSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdLremSet) {
			return visitor.visitCmdLremSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdRpoplpushContext extends ParserRuleContext {
	public RPOPLPUSH(): TerminalNode { return this.getToken(RedisSqlParser.RPOPLPUSH, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdRpoplpush; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdRpoplpush) {
			listener.enterCmdRpoplpush(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdRpoplpush) {
			listener.exitCmdRpoplpush(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdRpoplpush) {
			return visitor.visitCmdRpoplpush(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSaddContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public SADD(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SADD, 0); }
	public SREM(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SREM, 0); }
	public SMISMEMBER(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SMISMEMBER, 0); }
	public fieldName(): FieldNameContext[];
	public fieldName(i: number): FieldNameContext;
	public fieldName(i?: number): FieldNameContext | FieldNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldNameContext);
		} else {
			return this.getRuleContext(i, FieldNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSadd; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSadd) {
			listener.enterCmdSadd(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSadd) {
			listener.exitCmdSadd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSadd) {
			return visitor.visitCmdSadd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdScardContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public SCARD(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SCARD, 0); }
	public SMEMBERS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SMEMBERS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdScard; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdScard) {
			listener.enterCmdScard(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdScard) {
			listener.exitCmdScard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdScard) {
			return visitor.visitCmdScard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSdiffContext extends ParserRuleContext {
	public SDIFF(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SDIFF, 0); }
	public SINTER(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SINTER, 0); }
	public SUNION(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SUNION, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSdiff; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSdiff) {
			listener.enterCmdSdiff(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSdiff) {
			listener.exitCmdSdiff(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSdiff) {
			return visitor.visitCmdSdiff(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSdiffstoreContext extends ParserRuleContext {
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	public SDIFFSTORE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SDIFFSTORE, 0); }
	public SINTERSTORE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SINTERSTORE, 0); }
	public SUNIONSTORE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SUNIONSTORE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSdiffstore; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSdiffstore) {
			listener.enterCmdSdiffstore(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSdiffstore) {
			listener.exitCmdSdiffstore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSdiffstore) {
			return visitor.visitCmdSdiffstore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSintercardContext extends ParserRuleContext {
	public SINTERCARD(): TerminalNode { return this.getToken(RedisSqlParser.SINTERCARD, 0); }
	public intValue(): IntValueContext[];
	public intValue(i: number): IntValueContext;
	public intValue(i?: number): IntValueContext | IntValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntValueContext);
		} else {
			return this.getRuleContext(i, IntValueContext);
		}
	}
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.LIMIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSintercard; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSintercard) {
			listener.enterCmdSintercard(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSintercard) {
			listener.exitCmdSintercard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSintercard) {
			return visitor.visitCmdSintercard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSismemberContext extends ParserRuleContext {
	public SISMEMBER(): TerminalNode { return this.getToken(RedisSqlParser.SISMEMBER, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSismember; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSismember) {
			listener.enterCmdSismember(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSismember) {
			listener.exitCmdSismember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSismember) {
			return visitor.visitCmdSismember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSmoveContext extends ParserRuleContext {
	public SMOVE(): TerminalNode { return this.getToken(RedisSqlParser.SMOVE, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSmove; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSmove) {
			listener.enterCmdSmove(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSmove) {
			listener.exitCmdSmove(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSmove) {
			return visitor.visitCmdSmove(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSpopContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public SPOP(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SPOP, 0); }
	public SRANDMEMBER(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SRANDMEMBER, 0); }
	public intValue(): IntValueContext | undefined {
		return this.tryGetRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSpop; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSpop) {
			listener.enterCmdSpop(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSpop) {
			listener.exitCmdSpop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSpop) {
			return visitor.visitCmdSpop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSscanContext extends ParserRuleContext {
	public SSCAN(): TerminalNode { return this.getToken(RedisSqlParser.SSCAN, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public MATCH(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MATCH, 0); }
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	public countOpt(): CountOptContext | undefined {
		return this.tryGetRuleContext(0, CountOptContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSscan; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSscan) {
			listener.enterCmdSscan(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSscan) {
			listener.exitCmdSscan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSscan) {
			return visitor.visitCmdSscan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdBzmpopContext extends ParserRuleContext {
	public BZMPOP(): TerminalNode { return this.getToken(RedisSqlParser.BZMPOP, 0); }
	public intValue(): IntValueContext[];
	public intValue(i: number): IntValueContext;
	public intValue(i?: number): IntValueContext | IntValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntValueContext);
		} else {
			return this.getRuleContext(i, IntValueContext);
		}
	}
	public MIN(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MAX, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	public countOpt(): CountOptContext | undefined {
		return this.tryGetRuleContext(0, CountOptContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdBzmpop; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdBzmpop) {
			listener.enterCmdBzmpop(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdBzmpop) {
			listener.exitCmdBzmpop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdBzmpop) {
			return visitor.visitCmdBzmpop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdBzpopmaxContext extends ParserRuleContext {
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public BZPOPMAX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.BZPOPMAX, 0); }
	public BZPOPMIN(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.BZPOPMIN, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdBzpopmax; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdBzpopmax) {
			listener.enterCmdBzpopmax(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdBzpopmax) {
			listener.exitCmdBzpopmax(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdBzpopmax) {
			return visitor.visitCmdBzpopmax(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZaddContext extends ParserRuleContext {
	public ZADD(): TerminalNode { return this.getToken(RedisSqlParser.ZADD, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public CH(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.CH, 0); }
	public INCR(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.INCR, 0); }
	public intAndString(): IntAndStringContext[];
	public intAndString(i: number): IntAndStringContext;
	public intAndString(i?: number): IntAndStringContext | IntAndStringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntAndStringContext);
		} else {
			return this.getRuleContext(i, IntAndStringContext);
		}
	}
	public NX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.NX, 0); }
	public XX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.XX, 0); }
	public GT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.LT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZadd; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZadd) {
			listener.enterCmdZadd(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZadd) {
			listener.exitCmdZadd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZadd) {
			return visitor.visitCmdZadd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZcardContext extends ParserRuleContext {
	public ZCARD(): TerminalNode { return this.getToken(RedisSqlParser.ZCARD, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZcard; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZcard) {
			listener.enterCmdZcard(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZcard) {
			listener.exitCmdZcard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZcard) {
			return visitor.visitCmdZcard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZcountContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public min(): MinContext {
		return this.getRuleContext(0, MinContext);
	}
	public max(): MaxContext {
		return this.getRuleContext(0, MaxContext);
	}
	public ZCOUNT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ZCOUNT, 0); }
	public ZLEXCOUNT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ZLEXCOUNT, 0); }
	public ZREMRANGEBYLEX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ZREMRANGEBYLEX, 0); }
	public ZREMRANGEBYSCORE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ZREMRANGEBYSCORE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZcount; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZcount) {
			listener.enterCmdZcount(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZcount) {
			listener.exitCmdZcount(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZcount) {
			return visitor.visitCmdZcount(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZdiffContext extends ParserRuleContext {
	public ZDIFF(): TerminalNode { return this.getToken(RedisSqlParser.ZDIFF, 0); }
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	public WITHSCORES(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.WITHSCORES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZdiff; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZdiff) {
			listener.enterCmdZdiff(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZdiff) {
			listener.exitCmdZdiff(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZdiff) {
			return visitor.visitCmdZdiff(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZdiffstoreContext extends ParserRuleContext {
	public ZDIFFSTORE(): TerminalNode { return this.getToken(RedisSqlParser.ZDIFFSTORE, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZdiffstore; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZdiffstore) {
			listener.enterCmdZdiffstore(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZdiffstore) {
			listener.exitCmdZdiffstore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZdiffstore) {
			return visitor.visitCmdZdiffstore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZincrbyContext extends ParserRuleContext {
	public ZINCRBY(): TerminalNode { return this.getToken(RedisSqlParser.ZINCRBY, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZincrby; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZincrby) {
			listener.enterCmdZincrby(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZincrby) {
			listener.exitCmdZincrby(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZincrby) {
			return visitor.visitCmdZincrby(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZinterContext extends ParserRuleContext {
	public ZINTER(): TerminalNode { return this.getToken(RedisSqlParser.ZINTER, 0); }
	public intValue(): IntValueContext[];
	public intValue(i: number): IntValueContext;
	public intValue(i?: number): IntValueContext | IntValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntValueContext);
		} else {
			return this.getRuleContext(i, IntValueContext);
		}
	}
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	public WEIGHTS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.WEIGHTS, 0); }
	public AGGREGATE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.AGGREGATE, 0); }
	public WITHSCORES(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.WITHSCORES, 0); }
	public SUM(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SUM, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MAX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZinter; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZinter) {
			listener.enterCmdZinter(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZinter) {
			listener.exitCmdZinter(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZinter) {
			return visitor.visitCmdZinter(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZintercardContext extends ParserRuleContext {
	public ZINTERCARD(): TerminalNode { return this.getToken(RedisSqlParser.ZINTERCARD, 0); }
	public intValue(): IntValueContext[];
	public intValue(i: number): IntValueContext;
	public intValue(i?: number): IntValueContext | IntValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntValueContext);
		} else {
			return this.getRuleContext(i, IntValueContext);
		}
	}
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	public LIMIT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.LIMIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZintercard; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZintercard) {
			listener.enterCmdZintercard(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZintercard) {
			listener.exitCmdZintercard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZintercard) {
			return visitor.visitCmdZintercard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZinterstoreContext extends ParserRuleContext {
	public ZINTERSTORE(): TerminalNode { return this.getToken(RedisSqlParser.ZINTERSTORE, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	public intValue(): IntValueContext[];
	public intValue(i: number): IntValueContext;
	public intValue(i?: number): IntValueContext | IntValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntValueContext);
		} else {
			return this.getRuleContext(i, IntValueContext);
		}
	}
	public WEIGHTS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.WEIGHTS, 0); }
	public AGGREGATE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.AGGREGATE, 0); }
	public SUM(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SUM, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MAX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZinterstore; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZinterstore) {
			listener.enterCmdZinterstore(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZinterstore) {
			listener.exitCmdZinterstore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZinterstore) {
			return visitor.visitCmdZinterstore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZmpopContext extends ParserRuleContext {
	public ZMPOP(): TerminalNode { return this.getToken(RedisSqlParser.ZMPOP, 0); }
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public countOpt(): CountOptContext {
		return this.getRuleContext(0, CountOptContext);
	}
	public MIN(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MAX, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZmpop; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZmpop) {
			listener.enterCmdZmpop(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZmpop) {
			listener.exitCmdZmpop(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZmpop) {
			return visitor.visitCmdZmpop(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZmscoreContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public ZMSCORE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ZMSCORE, 0); }
	public ZREM(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ZREM, 0); }
	public fieldName(): FieldNameContext[];
	public fieldName(i: number): FieldNameContext;
	public fieldName(i?: number): FieldNameContext | FieldNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldNameContext);
		} else {
			return this.getRuleContext(i, FieldNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZmscore; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZmscore) {
			listener.enterCmdZmscore(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZmscore) {
			listener.exitCmdZmscore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZmscore) {
			return visitor.visitCmdZmscore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZpopmaxContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public ZPOPMAX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ZPOPMAX, 0); }
	public ZPOPMIN(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ZPOPMIN, 0); }
	public intValue(): IntValueContext | undefined {
		return this.tryGetRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZpopmax; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZpopmax) {
			listener.enterCmdZpopmax(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZpopmax) {
			listener.exitCmdZpopmax(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZpopmax) {
			return visitor.visitCmdZpopmax(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZrandmemberContext extends ParserRuleContext {
	public ZRANDMEMBER(): TerminalNode { return this.getToken(RedisSqlParser.ZRANDMEMBER, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext | undefined {
		return this.tryGetRuleContext(0, IntValueContext);
	}
	public WITHSCORES(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.WITHSCORES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZrandmember; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZrandmember) {
			listener.enterCmdZrandmember(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZrandmember) {
			listener.exitCmdZrandmember(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZrandmember) {
			return visitor.visitCmdZrandmember(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZrangeContext extends ParserRuleContext {
	public ZRANGE(): TerminalNode { return this.getToken(RedisSqlParser.ZRANGE, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public min(): MinContext {
		return this.getRuleContext(0, MinContext);
	}
	public max(): MaxContext {
		return this.getRuleContext(0, MaxContext);
	}
	public REV(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.REV, 0); }
	public limitOpt(): LimitOptContext | undefined {
		return this.tryGetRuleContext(0, LimitOptContext);
	}
	public WITHSCORES(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.WITHSCORES, 0); }
	public BYSCORE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.BYSCORE, 0); }
	public BYLEX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.BYLEX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZrange; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZrange) {
			listener.enterCmdZrange(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZrange) {
			listener.exitCmdZrange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZrange) {
			return visitor.visitCmdZrange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZrangebylexContext extends ParserRuleContext {
	public ZRANGEBYLEX(): TerminalNode { return this.getToken(RedisSqlParser.ZRANGEBYLEX, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public min(): MinContext {
		return this.getRuleContext(0, MinContext);
	}
	public max(): MaxContext {
		return this.getRuleContext(0, MaxContext);
	}
	public limitOpt(): LimitOptContext | undefined {
		return this.tryGetRuleContext(0, LimitOptContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZrangebylex; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZrangebylex) {
			listener.enterCmdZrangebylex(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZrangebylex) {
			listener.exitCmdZrangebylex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZrangebylex) {
			return visitor.visitCmdZrangebylex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZrangebyscoreContext extends ParserRuleContext {
	public ZRANGEBYSCORE(): TerminalNode { return this.getToken(RedisSqlParser.ZRANGEBYSCORE, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public min(): MinContext {
		return this.getRuleContext(0, MinContext);
	}
	public max(): MaxContext {
		return this.getRuleContext(0, MaxContext);
	}
	public WITHSCORES(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.WITHSCORES, 0); }
	public limitOpt(): LimitOptContext | undefined {
		return this.tryGetRuleContext(0, LimitOptContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZrangebyscore; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZrangebyscore) {
			listener.enterCmdZrangebyscore(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZrangebyscore) {
			listener.exitCmdZrangebyscore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZrangebyscore) {
			return visitor.visitCmdZrangebyscore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZrangestoreContext extends ParserRuleContext {
	public ZRANGESTORE(): TerminalNode { return this.getToken(RedisSqlParser.ZRANGESTORE, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	public min(): MinContext {
		return this.getRuleContext(0, MinContext);
	}
	public max(): MaxContext {
		return this.getRuleContext(0, MaxContext);
	}
	public limitOpt(): LimitOptContext | undefined {
		return this.tryGetRuleContext(0, LimitOptContext);
	}
	public BYSCORE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.BYSCORE, 0); }
	public BYLEX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.BYLEX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZrangestore; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZrangestore) {
			listener.enterCmdZrangestore(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZrangestore) {
			listener.exitCmdZrangestore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZrangestore) {
			return visitor.visitCmdZrangestore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZrankContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	public ZRANK(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ZRANK, 0); }
	public ZREVRANK(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ZREVRANK, 0); }
	public ZSCORE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ZSCORE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZrank; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZrank) {
			listener.enterCmdZrank(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZrank) {
			listener.exitCmdZrank(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZrank) {
			return visitor.visitCmdZrank(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZremrangebyrankContext extends ParserRuleContext {
	public ZREMRANGEBYRANK(): TerminalNode { return this.getToken(RedisSqlParser.ZREMRANGEBYRANK, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext[];
	public intValue(i: number): IntValueContext;
	public intValue(i?: number): IntValueContext | IntValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntValueContext);
		} else {
			return this.getRuleContext(i, IntValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZremrangebyrank; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZremrangebyrank) {
			listener.enterCmdZremrangebyrank(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZremrangebyrank) {
			listener.exitCmdZremrangebyrank(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZremrangebyrank) {
			return visitor.visitCmdZremrangebyrank(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZrevrangeContext extends ParserRuleContext {
	public ZREVRANGE(): TerminalNode { return this.getToken(RedisSqlParser.ZREVRANGE, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext[];
	public intValue(i: number): IntValueContext;
	public intValue(i?: number): IntValueContext | IntValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntValueContext);
		} else {
			return this.getRuleContext(i, IntValueContext);
		}
	}
	public WITHSCORES(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.WITHSCORES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZrevrange; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZrevrange) {
			listener.enterCmdZrevrange(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZrevrange) {
			listener.exitCmdZrevrange(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZrevrange) {
			return visitor.visitCmdZrevrange(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZrevrangebylexContext extends ParserRuleContext {
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public max(): MaxContext {
		return this.getRuleContext(0, MaxContext);
	}
	public min(): MinContext {
		return this.getRuleContext(0, MinContext);
	}
	public ZREVRANGEBYLEX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ZREVRANGEBYLEX, 0); }
	public ZREVRANGEBYSCORE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ZREVRANGEBYSCORE, 0); }
	public WITHSCORES(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.WITHSCORES, 0); }
	public limitOpt(): LimitOptContext | undefined {
		return this.tryGetRuleContext(0, LimitOptContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZrevrangebylex; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZrevrangebylex) {
			listener.enterCmdZrevrangebylex(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZrevrangebylex) {
			listener.exitCmdZrevrangebylex(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZrevrangebylex) {
			return visitor.visitCmdZrevrangebylex(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZscanContext extends ParserRuleContext {
	public ZSCAN(): TerminalNode { return this.getToken(RedisSqlParser.ZSCAN, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public countOpt(): CountOptContext {
		return this.getRuleContext(0, CountOptContext);
	}
	public MATCH(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MATCH, 0); }
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZscan; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZscan) {
			listener.enterCmdZscan(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZscan) {
			listener.exitCmdZscan(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZscan) {
			return visitor.visitCmdZscan(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZunionContext extends ParserRuleContext {
	public ZUNION(): TerminalNode { return this.getToken(RedisSqlParser.ZUNION, 0); }
	public intValue(): IntValueContext[];
	public intValue(i: number): IntValueContext;
	public intValue(i?: number): IntValueContext | IntValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntValueContext);
		} else {
			return this.getRuleContext(i, IntValueContext);
		}
	}
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	public WEIGHTS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.WEIGHTS, 0); }
	public AGGREGATE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.AGGREGATE, 0); }
	public WITHSCORES(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.WITHSCORES, 0); }
	public SUM(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SUM, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MAX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZunion; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZunion) {
			listener.enterCmdZunion(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZunion) {
			listener.exitCmdZunion(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZunion) {
			return visitor.visitCmdZunion(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdZunionstoreContext extends ParserRuleContext {
	public ZUNIONSTORE(): TerminalNode { return this.getToken(RedisSqlParser.ZUNIONSTORE, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	public intValue(): IntValueContext[];
	public intValue(i: number): IntValueContext;
	public intValue(i?: number): IntValueContext | IntValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntValueContext);
		} else {
			return this.getRuleContext(i, IntValueContext);
		}
	}
	public WEIGHTS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.WEIGHTS, 0); }
	public AGGREGATE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.AGGREGATE, 0); }
	public SUM(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SUM, 0); }
	public MIN(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MIN, 0); }
	public MAX(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MAX, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdZunionstore; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdZunionstore) {
			listener.enterCmdZunionstore(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdZunionstore) {
			listener.exitCmdZunionstore(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdZunionstore) {
			return visitor.visitCmdZunionstore(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdScriptKillContext extends ParserRuleContext {
	public SCRIPT(): TerminalNode { return this.getToken(RedisSqlParser.SCRIPT, 0); }
	public KILL(): TerminalNode { return this.getToken(RedisSqlParser.KILL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdScriptKill; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdScriptKill) {
			listener.enterCmdScriptKill(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdScriptKill) {
			listener.exitCmdScriptKill(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdScriptKill) {
			return visitor.visitCmdScriptKill(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdScriptLoadContext extends ParserRuleContext {
	public SCRIPT(): TerminalNode { return this.getToken(RedisSqlParser.SCRIPT, 0); }
	public LOAD(): TerminalNode { return this.getToken(RedisSqlParser.LOAD, 0); }
	public multiString(): MultiStringContext {
		return this.getRuleContext(0, MultiStringContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdScriptLoad; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdScriptLoad) {
			listener.enterCmdScriptLoad(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdScriptLoad) {
			listener.exitCmdScriptLoad(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdScriptLoad) {
			return visitor.visitCmdScriptLoad(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdEvalContext extends ParserRuleContext {
	public EVAL(): TerminalNode { return this.getToken(RedisSqlParser.EVAL, 0); }
	public multiString(): MultiStringContext {
		return this.getRuleContext(0, MultiStringContext);
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdEval; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdEval) {
			listener.enterCmdEval(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdEval) {
			listener.exitCmdEval(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdEval) {
			return visitor.visitCmdEval(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdEvalshaContext extends ParserRuleContext {
	public EVALSHA(): TerminalNode { return this.getToken(RedisSqlParser.EVALSHA, 0); }
	public stringValue(): StringValueContext {
		return this.getRuleContext(0, StringValueContext);
	}
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdEvalsha; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdEvalsha) {
			listener.enterCmdEvalsha(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdEvalsha) {
			listener.exitCmdEvalsha(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdEvalsha) {
			return visitor.visitCmdEvalsha(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdScriptExistsContext extends ParserRuleContext {
	public SCRIPT(): TerminalNode { return this.getToken(RedisSqlParser.SCRIPT, 0); }
	public EXISTS(): TerminalNode { return this.getToken(RedisSqlParser.EXISTS, 0); }
	public stringValue(): StringValueContext {
		return this.getRuleContext(0, StringValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdScriptExists; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdScriptExists) {
			listener.enterCmdScriptExists(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdScriptExists) {
			listener.exitCmdScriptExists(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdScriptExists) {
			return visitor.visitCmdScriptExists(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdScriptFlushContext extends ParserRuleContext {
	public SCRIPT(): TerminalNode { return this.getToken(RedisSqlParser.SCRIPT, 0); }
	public FLUSH(): TerminalNode { return this.getToken(RedisSqlParser.FLUSH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdScriptFlush; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdScriptFlush) {
			listener.enterCmdScriptFlush(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdScriptFlush) {
			listener.exitCmdScriptFlush(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdScriptFlush) {
			return visitor.visitCmdScriptFlush(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdExecContext extends ParserRuleContext {
	public EXEC(): TerminalNode { return this.getToken(RedisSqlParser.EXEC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdExec; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdExec) {
			listener.enterCmdExec(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdExec) {
			listener.exitCmdExec(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdExec) {
			return visitor.visitCmdExec(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdWatchContext extends ParserRuleContext {
	public WATCH(): TerminalNode { return this.getToken(RedisSqlParser.WATCH, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdWatch; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdWatch) {
			listener.enterCmdWatch(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdWatch) {
			listener.exitCmdWatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdWatch) {
			return visitor.visitCmdWatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdDiscardContext extends ParserRuleContext {
	public DISCARD(): TerminalNode { return this.getToken(RedisSqlParser.DISCARD, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdDiscard; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdDiscard) {
			listener.enterCmdDiscard(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdDiscard) {
			listener.exitCmdDiscard(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdDiscard) {
			return visitor.visitCmdDiscard(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdUnwatchContext extends ParserRuleContext {
	public UNWATCH(): TerminalNode { return this.getToken(RedisSqlParser.UNWATCH, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdUnwatch; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdUnwatch) {
			listener.enterCmdUnwatch(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdUnwatch) {
			listener.exitCmdUnwatch(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdUnwatch) {
			return visitor.visitCmdUnwatch(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdMultiContext extends ParserRuleContext {
	public MULTI(): TerminalNode { return this.getToken(RedisSqlParser.MULTI, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdMulti; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdMulti) {
			listener.enterCmdMulti(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdMulti) {
			listener.exitCmdMulti(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdMulti) {
			return visitor.visitCmdMulti(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdPfmergeContext extends ParserRuleContext {
	public PFMERGE(): TerminalNode { return this.getToken(RedisSqlParser.PFMERGE, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdPfmerge; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdPfmerge) {
			listener.enterCmdPfmerge(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdPfmerge) {
			listener.exitCmdPfmerge(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdPfmerge) {
			return visitor.visitCmdPfmerge(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdPfaddContext extends ParserRuleContext {
	public PFADD(): TerminalNode { return this.getToken(RedisSqlParser.PFADD, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public fieldName(): FieldNameContext[];
	public fieldName(i: number): FieldNameContext;
	public fieldName(i?: number): FieldNameContext | FieldNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(FieldNameContext);
		} else {
			return this.getRuleContext(i, FieldNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdPfadd; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdPfadd) {
			listener.enterCmdPfadd(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdPfadd) {
			listener.exitCmdPfadd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdPfadd) {
			return visitor.visitCmdPfadd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdPfcountContext extends ParserRuleContext {
	public PFCOUNT(): TerminalNode { return this.getToken(RedisSqlParser.PFCOUNT, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdPfcount; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdPfcount) {
			listener.enterCmdPfcount(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdPfcount) {
			listener.exitCmdPfcount(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdPfcount) {
			return visitor.visitCmdPfcount(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSsubscribeContext extends ParserRuleContext {
	public SSUBSCRIBE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SSUBSCRIBE, 0); }
	public SUBSCRIBE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SUBSCRIBE, 0); }
	public PSUBSCRIBE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.PSUBSCRIBE, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSsubscribe; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSsubscribe) {
			listener.enterCmdSsubscribe(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSsubscribe) {
			listener.exitCmdSsubscribe(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSsubscribe) {
			return visitor.visitCmdSsubscribe(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdUnsubscribeContext extends ParserRuleContext {
	public UNSUBSCRIBE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.UNSUBSCRIBE, 0); }
	public PUNSUBSCRIBE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.PUNSUBSCRIBE, 0); }
	public SUNSUBSCRIBE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SUNSUBSCRIBE, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdUnsubscribe; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdUnsubscribe) {
			listener.enterCmdUnsubscribe(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdUnsubscribe) {
			listener.exitCmdUnsubscribe(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdUnsubscribe) {
			return visitor.visitCmdUnsubscribe(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdPusubnumpatContext extends ParserRuleContext {
	public PUBSUB(): TerminalNode { return this.getToken(RedisSqlParser.PUBSUB, 0); }
	public NUMPAT(): TerminalNode { return this.getToken(RedisSqlParser.NUMPAT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdPusubnumpat; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdPusubnumpat) {
			listener.enterCmdPusubnumpat(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdPusubnumpat) {
			listener.exitCmdPusubnumpat(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdPusubnumpat) {
			return visitor.visitCmdPusubnumpat(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdPusubnumsubContext extends ParserRuleContext {
	public PUBSUB(): TerminalNode { return this.getToken(RedisSqlParser.PUBSUB, 0); }
	public NUMSUB(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.NUMSUB, 0); }
	public SHARDNUMSUB(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SHARDNUMSUB, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdPusubnumsub; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdPusubnumsub) {
			listener.enterCmdPusubnumsub(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdPusubnumsub) {
			listener.exitCmdPusubnumsub(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdPusubnumsub) {
			return visitor.visitCmdPusubnumsub(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdPusubchannelsContext extends ParserRuleContext {
	public PUBSUB(): TerminalNode { return this.getToken(RedisSqlParser.PUBSUB, 0); }
	public CHANNELS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.CHANNELS, 0); }
	public SHARDCHANNELS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SHARDCHANNELS, 0); }
	public keyName(): KeyNameContext | undefined {
		return this.tryGetRuleContext(0, KeyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdPusubchannels; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdPusubchannels) {
			listener.enterCmdPusubchannels(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdPusubchannels) {
			listener.exitCmdPusubchannels(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdPusubchannels) {
			return visitor.visitCmdPusubchannels(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdPublishContext extends ParserRuleContext {
	public PUBLISH(): TerminalNode { return this.getToken(RedisSqlParser.PUBLISH, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	public fieldName(): FieldNameContext {
		return this.getRuleContext(0, FieldNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdPublish; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdPublish) {
			listener.enterCmdPublish(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdPublish) {
			listener.exitCmdPublish(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdPublish) {
			return visitor.visitCmdPublish(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdAskingContext extends ParserRuleContext {
	public ASKING(): TerminalNode { return this.getToken(RedisSqlParser.ASKING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdAsking; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdAsking) {
			listener.enterCmdAsking(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdAsking) {
			listener.exitCmdAsking(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdAsking) {
			return visitor.visitCmdAsking(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdReadonlyContext extends ParserRuleContext {
	public READONLY(): TerminalNode { return this.getToken(RedisSqlParser.READONLY, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdReadonly; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdReadonly) {
			listener.enterCmdReadonly(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdReadonly) {
			listener.exitCmdReadonly(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdReadonly) {
			return visitor.visitCmdReadonly(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdReadwriteContext extends ParserRuleContext {
	public READWRITE(): TerminalNode { return this.getToken(RedisSqlParser.READWRITE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdReadwrite; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdReadwrite) {
			listener.enterCmdReadwrite(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdReadwrite) {
			listener.exitCmdReadwrite(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdReadwrite) {
			return visitor.visitCmdReadwrite(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdAddDelSlotsContext extends ParserRuleContext {
	public CLUSTER(): TerminalNode { return this.getToken(RedisSqlParser.CLUSTER, 0); }
	public ADDSLOTS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ADDSLOTS, 0); }
	public DELSLOTS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.DELSLOTS, 0); }
	public intValue(): IntValueContext[];
	public intValue(i: number): IntValueContext;
	public intValue(i?: number): IntValueContext | IntValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(IntValueContext);
		} else {
			return this.getRuleContext(i, IntValueContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdAddDelSlots; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdAddDelSlots) {
			listener.enterCmdAddDelSlots(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdAddDelSlots) {
			listener.exitCmdAddDelSlots(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdAddDelSlots) {
			return visitor.visitCmdAddDelSlots(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdCountKeysInSlotContext extends ParserRuleContext {
	public CLUSTER(): TerminalNode { return this.getToken(RedisSqlParser.CLUSTER, 0); }
	public COUNTKEYSINSLOT(): TerminalNode { return this.getToken(RedisSqlParser.COUNTKEYSINSLOT, 0); }
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdCountKeysInSlot; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdCountKeysInSlot) {
			listener.enterCmdCountKeysInSlot(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdCountKeysInSlot) {
			listener.exitCmdCountKeysInSlot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdCountKeysInSlot) {
			return visitor.visitCmdCountKeysInSlot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdFailOverContext extends ParserRuleContext {
	public CLUSTER(): TerminalNode { return this.getToken(RedisSqlParser.CLUSTER, 0); }
	public FAILOVER(): TerminalNode { return this.getToken(RedisSqlParser.FAILOVER, 0); }
	public FORCE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.FORCE, 0); }
	public TAKEOVER(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.TAKEOVER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdFailOver; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdFailOver) {
			listener.enterCmdFailOver(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdFailOver) {
			listener.exitCmdFailOver(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdFailOver) {
			return visitor.visitCmdFailOver(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdForgetContext extends ParserRuleContext {
	public CLUSTER(): TerminalNode { return this.getToken(RedisSqlParser.CLUSTER, 0); }
	public FORGET(): TerminalNode { return this.getToken(RedisSqlParser.FORGET, 0); }
	public stringValue(): StringValueContext {
		return this.getRuleContext(0, StringValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdForget; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdForget) {
			listener.enterCmdForget(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdForget) {
			listener.exitCmdForget(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdForget) {
			return visitor.visitCmdForget(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdGetKeysInSlotContext extends ParserRuleContext {
	public CLUSTER(): TerminalNode { return this.getToken(RedisSqlParser.CLUSTER, 0); }
	public GETKEYSINSLOT(): TerminalNode { return this.getToken(RedisSqlParser.GETKEYSINSLOT, 0); }
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public cout(): CoutContext {
		return this.getRuleContext(0, CoutContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdGetKeysInSlot; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdGetKeysInSlot) {
			listener.enterCmdGetKeysInSlot(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdGetKeysInSlot) {
			listener.exitCmdGetKeysInSlot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdGetKeysInSlot) {
			return visitor.visitCmdGetKeysInSlot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdClusterOrderContext extends ParserRuleContext {
	public CLUSTER(): TerminalNode { return this.getToken(RedisSqlParser.CLUSTER, 0); }
	public INFO(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.INFO, 0); }
	public BUMPEPOCH(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.BUMPEPOCH, 0); }
	public LINKS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.LINKS, 0); }
	public FLUSHSLOTS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.FLUSHSLOTS, 0); }
	public MYID(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MYID, 0); }
	public MYSHARDID(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MYSHARDID, 0); }
	public NODES(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.NODES, 0); }
	public SAVECONFIG(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SAVECONFIG, 0); }
	public SHARDS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SHARDS, 0); }
	public SLOTS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SLOTS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdClusterOrder; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdClusterOrder) {
			listener.enterCmdClusterOrder(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdClusterOrder) {
			listener.exitCmdClusterOrder(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdClusterOrder) {
			return visitor.visitCmdClusterOrder(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdKeySlotContext extends ParserRuleContext {
	public CLUSTER(): TerminalNode { return this.getToken(RedisSqlParser.CLUSTER, 0); }
	public KEYSLOT(): TerminalNode { return this.getToken(RedisSqlParser.KEYSLOT, 0); }
	public keyName(): KeyNameContext {
		return this.getRuleContext(0, KeyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdKeySlot; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdKeySlot) {
			listener.enterCmdKeySlot(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdKeySlot) {
			listener.exitCmdKeySlot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdKeySlot) {
			return visitor.visitCmdKeySlot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdMeetContext extends ParserRuleContext {
	public CLUSTER(): TerminalNode { return this.getToken(RedisSqlParser.CLUSTER, 0); }
	public MEET(): TerminalNode { return this.getToken(RedisSqlParser.MEET, 0); }
	public HOST(): TerminalNode { return this.getToken(RedisSqlParser.HOST, 0); }
	public port(): PortContext {
		return this.getRuleContext(0, PortContext);
	}
	public intValue(): IntValueContext | undefined {
		return this.tryGetRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdMeet; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdMeet) {
			listener.enterCmdMeet(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdMeet) {
			listener.exitCmdMeet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdMeet) {
			return visitor.visitCmdMeet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdReplicaesSlaveContext extends ParserRuleContext {
	public CLUSTER(): TerminalNode { return this.getToken(RedisSqlParser.CLUSTER, 0); }
	public stringValue(): StringValueContext {
		return this.getRuleContext(0, StringValueContext);
	}
	public REPLICAS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.REPLICAS, 0); }
	public REPLICATE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.REPLICATE, 0); }
	public SLAVES(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SLAVES, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdReplicaesSlave; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdReplicaesSlave) {
			listener.enterCmdReplicaesSlave(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdReplicaesSlave) {
			listener.exitCmdReplicaesSlave(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdReplicaesSlave) {
			return visitor.visitCmdReplicaesSlave(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdResetContext extends ParserRuleContext {
	public CLUSTER(): TerminalNode { return this.getToken(RedisSqlParser.CLUSTER, 0); }
	public RESET(): TerminalNode { return this.getToken(RedisSqlParser.RESET, 0); }
	public HARD(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.HARD, 0); }
	public SOFT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SOFT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdReset; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdReset) {
			listener.enterCmdReset(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdReset) {
			listener.exitCmdReset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdReset) {
			return visitor.visitCmdReset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSetSlotContext extends ParserRuleContext {
	public CLUSTER(): TerminalNode { return this.getToken(RedisSqlParser.CLUSTER, 0); }
	public SETSLOT(): TerminalNode { return this.getToken(RedisSqlParser.SETSLOT, 0); }
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	public STABLE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.STABLE, 0); }
	public MIGRATING(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.MIGRATING, 0); }
	public stringValue(): StringValueContext | undefined {
		return this.tryGetRuleContext(0, StringValueContext);
	}
	public IMPORTING(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.IMPORTING, 0); }
	public NODE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.NODE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSetSlot; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSetSlot) {
			listener.enterCmdSetSlot(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSetSlot) {
			listener.exitCmdSetSlot(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSetSlot) {
			return visitor.visitCmdSetSlot(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdFlushdbContext extends ParserRuleContext {
	public FLUSHDB(): TerminalNode { return this.getToken(RedisSqlParser.FLUSHDB, 0); }
	public ASYNC(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.ASYNC, 0); }
	public SYNC(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdFlushdb; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdFlushdb) {
			listener.enterCmdFlushdb(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdFlushdb) {
			listener.exitCmdFlushdb(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdFlushdb) {
			return visitor.visitCmdFlushdb(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdEchoContext extends ParserRuleContext {
	public ECHO(): TerminalNode { return this.getToken(RedisSqlParser.ECHO, 0); }
	public stringValue(): StringValueContext {
		return this.getRuleContext(0, StringValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdEcho; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdEcho) {
			listener.enterCmdEcho(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdEcho) {
			listener.exitCmdEcho(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdEcho) {
			return visitor.visitCmdEcho(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSaveContext extends ParserRuleContext {
	public SAVE(): TerminalNode { return this.getToken(RedisSqlParser.SAVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSave; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSave) {
			listener.enterCmdSave(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSave) {
			listener.exitCmdSave(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSave) {
			return visitor.visitCmdSave(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSlowlogContext extends ParserRuleContext {
	public SLOWLOG(): TerminalNode { return this.getToken(RedisSqlParser.SLOWLOG, 0); }
	public sqlStatement(): SqlStatementContext {
		return this.getRuleContext(0, SqlStatementContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSlowlog; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSlowlog) {
			listener.enterCmdSlowlog(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSlowlog) {
			listener.exitCmdSlowlog(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSlowlog) {
			return visitor.visitCmdSlowlog(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdLastsaveContext extends ParserRuleContext {
	public LASTSAVE(): TerminalNode { return this.getToken(RedisSqlParser.LASTSAVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdLastsave; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdLastsave) {
			listener.enterCmdLastsave(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdLastsave) {
			listener.exitCmdLastsave(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdLastsave) {
			return visitor.visitCmdLastsave(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdConfigContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdConfig; }
	public copyFrom(ctx: CmdConfigContext): void {
		super.copyFrom(ctx);
	}
}
export class CmdConfigGetContext extends CmdConfigContext {
	public CONFIG(): TerminalNode { return this.getToken(RedisSqlParser.CONFIG, 0); }
	public GET(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.GET, 0); }
	public pattern(): PatternContext | undefined {
		return this.tryGetRuleContext(0, PatternContext);
	}
	constructor(ctx: CmdConfigContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdConfigGet) {
			listener.enterCmdConfigGet(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdConfigGet) {
			listener.exitCmdConfigGet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdConfigGet) {
			return visitor.visitCmdConfigGet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CmdConfigSetContext extends CmdConfigContext {
	public SET(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SET, 0); }
	public stringValue(): StringValueContext[];
	public stringValue(i: number): StringValueContext;
	public stringValue(i?: number): StringValueContext | StringValueContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringValueContext);
		} else {
			return this.getRuleContext(i, StringValueContext);
		}
	}
	constructor(ctx: CmdConfigContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdConfigSet) {
			listener.enterCmdConfigSet(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdConfigSet) {
			listener.exitCmdConfigSet(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdConfigSet) {
			return visitor.visitCmdConfigSet(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CmdConfigResetContext extends CmdConfigContext {
	public RESETSTAT(): TerminalNode { return this.getToken(RedisSqlParser.RESETSTAT, 0); }
	constructor(ctx: CmdConfigContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdConfigReset) {
			listener.enterCmdConfigReset(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdConfigReset) {
			listener.exitCmdConfigReset(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdConfigReset) {
			return visitor.visitCmdConfigReset(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CmdConfigRewriteContext extends CmdConfigContext {
	public REWRITE(): TerminalNode { return this.getToken(RedisSqlParser.REWRITE, 0); }
	constructor(ctx: CmdConfigContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdConfigRewrite) {
			listener.enterCmdConfigRewrite(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdConfigRewrite) {
			listener.exitCmdConfigRewrite(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdConfigRewrite) {
			return visitor.visitCmdConfigRewrite(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdClientContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdClient; }
	public copyFrom(ctx: CmdClientContext): void {
		super.copyFrom(ctx);
	}
}
export class CmdClientPauseContext extends CmdClientContext {
	public CLIENT(): TerminalNode { return this.getToken(RedisSqlParser.CLIENT, 0); }
	public PAUSE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.PAUSE, 0); }
	public intValue(): IntValueContext | undefined {
		return this.tryGetRuleContext(0, IntValueContext);
	}
	constructor(ctx: CmdClientContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdClientPause) {
			listener.enterCmdClientPause(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdClientPause) {
			listener.exitCmdClientPause(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdClientPause) {
			return visitor.visitCmdClientPause(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CmdClientKillContext extends CmdClientContext {
	public KILL(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.KILL, 0); }
	public HOST_PORT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.HOST_PORT, 0); }
	constructor(ctx: CmdClientContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdClientKill) {
			listener.enterCmdClientKill(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdClientKill) {
			listener.exitCmdClientKill(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdClientKill) {
			return visitor.visitCmdClientKill(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CmdClientGetnameContext extends CmdClientContext {
	public GETNAME(): TerminalNode { return this.getToken(RedisSqlParser.GETNAME, 0); }
	constructor(ctx: CmdClientContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdClientGetname) {
			listener.enterCmdClientGetname(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdClientGetname) {
			listener.exitCmdClientGetname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdClientGetname) {
			return visitor.visitCmdClientGetname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CmdClientSetnameContext extends CmdClientContext {
	public SETNAME(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SETNAME, 0); }
	public stringValue(): StringValueContext | undefined {
		return this.tryGetRuleContext(0, StringValueContext);
	}
	constructor(ctx: CmdClientContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdClientSetname) {
			listener.enterCmdClientSetname(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdClientSetname) {
			listener.exitCmdClientSetname(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdClientSetname) {
			return visitor.visitCmdClientSetname(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CmdClientListContext extends CmdClientContext {
	public LIST(): TerminalNode { return this.getToken(RedisSqlParser.LIST, 0); }
	constructor(ctx: CmdClientContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdClientList) {
			listener.enterCmdClientList(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdClientList) {
			listener.exitCmdClientList(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdClientList) {
			return visitor.visitCmdClientList(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdShutdownContext extends ParserRuleContext {
	public SHUTDOWN(): TerminalNode { return this.getToken(RedisSqlParser.SHUTDOWN, 0); }
	public NOSAVE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.NOSAVE, 0); }
	public SAVE(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SAVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdShutdown; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdShutdown) {
			listener.enterCmdShutdown(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdShutdown) {
			listener.exitCmdShutdown(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdShutdown) {
			return visitor.visitCmdShutdown(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSyncContext extends ParserRuleContext {
	public SYNC(): TerminalNode { return this.getToken(RedisSqlParser.SYNC, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSync; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSync) {
			listener.enterCmdSync(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSync) {
			listener.exitCmdSync(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSync) {
			return visitor.visitCmdSync(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdRoleContext extends ParserRuleContext {
	public ROLE(): TerminalNode { return this.getToken(RedisSqlParser.ROLE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdRole; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdRole) {
			listener.enterCmdRole(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdRole) {
			listener.exitCmdRole(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdRole) {
			return visitor.visitCmdRole(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdMonitorContext extends ParserRuleContext {
	public MONITOR(): TerminalNode { return this.getToken(RedisSqlParser.MONITOR, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdMonitor; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdMonitor) {
			listener.enterCmdMonitor(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdMonitor) {
			listener.exitCmdMonitor(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdMonitor) {
			return visitor.visitCmdMonitor(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSlaveofContext extends ParserRuleContext {
	public SLAVEOF(): TerminalNode { return this.getToken(RedisSqlParser.SLAVEOF, 0); }
	public HOST(): TerminalNode { return this.getToken(RedisSqlParser.HOST, 0); }
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSlaveof; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSlaveof) {
			listener.enterCmdSlaveof(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSlaveof) {
			listener.exitCmdSlaveof(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSlaveof) {
			return visitor.visitCmdSlaveof(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdFlushallContext extends ParserRuleContext {
	public FLUSHALL(): TerminalNode { return this.getToken(RedisSqlParser.FLUSHALL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdFlushall; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdFlushall) {
			listener.enterCmdFlushall(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdFlushall) {
			listener.exitCmdFlushall(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdFlushall) {
			return visitor.visitCmdFlushall(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdSelectContext extends ParserRuleContext {
	public SELECT(): TerminalNode { return this.getToken(RedisSqlParser.SELECT, 0); }
	public intValue(): IntValueContext {
		return this.getRuleContext(0, IntValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdSelect; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdSelect) {
			listener.enterCmdSelect(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdSelect) {
			listener.exitCmdSelect(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdSelect) {
			return visitor.visitCmdSelect(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdPingContext extends ParserRuleContext {
	public PING(): TerminalNode { return this.getToken(RedisSqlParser.PING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdPing; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdPing) {
			listener.enterCmdPing(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdPing) {
			listener.exitCmdPing(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdPing) {
			return visitor.visitCmdPing(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdQuitContext extends ParserRuleContext {
	public QUIT(): TerminalNode { return this.getToken(RedisSqlParser.QUIT, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdQuit; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdQuit) {
			listener.enterCmdQuit(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdQuit) {
			listener.exitCmdQuit(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdQuit) {
			return visitor.visitCmdQuit(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdAuthContext extends ParserRuleContext {
	public AUTH(): TerminalNode { return this.getToken(RedisSqlParser.AUTH, 0); }
	public stringValue(): StringValueContext {
		return this.getRuleContext(0, StringValueContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdAuth; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdAuth) {
			listener.enterCmdAuth(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdAuth) {
			listener.exitCmdAuth(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdAuth) {
			return visitor.visitCmdAuth(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdDbsizeContext extends ParserRuleContext {
	public DBSIZE(): TerminalNode { return this.getToken(RedisSqlParser.DBSIZE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdDbsize; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdDbsize) {
			listener.enterCmdDbsize(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdDbsize) {
			listener.exitCmdDbsize(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdDbsize) {
			return visitor.visitCmdDbsize(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdBgrewriteaofContext extends ParserRuleContext {
	public BGREWRITEAOF(): TerminalNode { return this.getToken(RedisSqlParser.BGREWRITEAOF, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdBgrewriteaof; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdBgrewriteaof) {
			listener.enterCmdBgrewriteaof(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdBgrewriteaof) {
			listener.exitCmdBgrewriteaof(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdBgrewriteaof) {
			return visitor.visitCmdBgrewriteaof(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdTimeContext extends ParserRuleContext {
	public TIME(): TerminalNode { return this.getToken(RedisSqlParser.TIME, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdTime; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdTime) {
			listener.enterCmdTime(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdTime) {
			listener.exitCmdTime(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdTime) {
			return visitor.visitCmdTime(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdInfoContext extends ParserRuleContext {
	public INFO(): TerminalNode { return this.getToken(RedisSqlParser.INFO, 0); }
	public infoOpt(): InfoOptContext[];
	public infoOpt(i: number): InfoOptContext;
	public infoOpt(i?: number): InfoOptContext | InfoOptContext[] {
		if (i === undefined) {
			return this.getRuleContexts(InfoOptContext);
		} else {
			return this.getRuleContext(i, InfoOptContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdInfo; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdInfo) {
			listener.enterCmdInfo(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdInfo) {
			listener.exitCmdInfo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdInfo) {
			return visitor.visitCmdInfo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdBgsaveContext extends ParserRuleContext {
	public BGSAVE(): TerminalNode { return this.getToken(RedisSqlParser.BGSAVE, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdBgsave; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdBgsave) {
			listener.enterCmdBgsave(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdBgsave) {
			listener.exitCmdBgsave(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdBgsave) {
			return visitor.visitCmdBgsave(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdCmdContext extends ParserRuleContext {
	public COMMAND(): TerminalNode { return this.getToken(RedisSqlParser.COMMAND, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdCmd; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdCmd) {
			listener.enterCmdCmd(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdCmd) {
			listener.exitCmdCmd(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdCmd) {
			return visitor.visitCmdCmd(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdCmdxContext extends ParserRuleContext {
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdCmdx; }
	public copyFrom(ctx: CmdCmdxContext): void {
		super.copyFrom(ctx);
	}
}
export class CmdCmdInfoContext extends CmdCmdxContext {
	public COMMAND(): TerminalNode { return this.getToken(RedisSqlParser.COMMAND, 0); }
	public INFO(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.INFO, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(ctx: CmdCmdxContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdCmdInfo) {
			listener.enterCmdCmdInfo(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdCmdInfo) {
			listener.exitCmdCmdInfo(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdCmdInfo) {
			return visitor.visitCmdCmdInfo(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CmdCmdGetkeysContext extends CmdCmdxContext {
	public GETKEYS(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.GETKEYS, 0); }
	public keyName(): KeyNameContext[];
	public keyName(i: number): KeyNameContext;
	public keyName(i?: number): KeyNameContext | KeyNameContext[] {
		if (i === undefined) {
			return this.getRuleContexts(KeyNameContext);
		} else {
			return this.getRuleContext(i, KeyNameContext);
		}
	}
	constructor(ctx: CmdCmdxContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdCmdGetkeys) {
			listener.enterCmdCmdGetkeys(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdCmdGetkeys) {
			listener.exitCmdCmdGetkeys(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdCmdGetkeys) {
			return visitor.visitCmdCmdGetkeys(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}
export class CmdCmdCountContext extends CmdCmdxContext {
	public COUNT(): TerminalNode { return this.getToken(RedisSqlParser.COUNT, 0); }
	constructor(ctx: CmdCmdxContext) {
		super(ctx.parent, ctx.invokingState);
		this.copyFrom(ctx);
	}
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdCmdCount) {
			listener.enterCmdCmdCount(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdCmdCount) {
			listener.exitCmdCmdCount(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdCmdCount) {
			return visitor.visitCmdCmdCount(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CmdDebugContext extends ParserRuleContext {
	public DEBUG(): TerminalNode { return this.getToken(RedisSqlParser.DEBUG, 0); }
	public SEGFAULT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.SEGFAULT, 0); }
	public OBJECT(): TerminalNode | undefined { return this.tryGetToken(RedisSqlParser.OBJECT, 0); }
	public keyName(): KeyNameContext | undefined {
		return this.tryGetRuleContext(0, KeyNameContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_cmdDebug; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterCmdDebug) {
			listener.enterCmdDebug(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitCmdDebug) {
			listener.exitCmdDebug(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitCmdDebug) {
			return visitor.visitCmdDebug(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class SqlStatementContext extends ParserRuleContext {
	public cmdCopy(): CmdCopyContext | undefined {
		return this.tryGetRuleContext(0, CmdCopyContext);
	}
	public cmdDel(): CmdDelContext | undefined {
		return this.tryGetRuleContext(0, CmdDelContext);
	}
	public cmdDump(): CmdDumpContext | undefined {
		return this.tryGetRuleContext(0, CmdDumpContext);
	}
	public cmdExists(): CmdExistsContext | undefined {
		return this.tryGetRuleContext(0, CmdExistsContext);
	}
	public cmdExpire(): CmdExpireContext | undefined {
		return this.tryGetRuleContext(0, CmdExpireContext);
	}
	public cmdExpireat(): CmdExpireatContext | undefined {
		return this.tryGetRuleContext(0, CmdExpireatContext);
	}
	public cmdExpireTime(): CmdExpireTimeContext | undefined {
		return this.tryGetRuleContext(0, CmdExpireTimeContext);
	}
	public cmdKeys(): CmdKeysContext | undefined {
		return this.tryGetRuleContext(0, CmdKeysContext);
	}
	public cmdMove(): CmdMoveContext | undefined {
		return this.tryGetRuleContext(0, CmdMoveContext);
	}
	public cmdObject(): CmdObjectContext | undefined {
		return this.tryGetRuleContext(0, CmdObjectContext);
	}
	public cmdPersist(): CmdPersistContext | undefined {
		return this.tryGetRuleContext(0, CmdPersistContext);
	}
	public cmdPexpire(): CmdPexpireContext | undefined {
		return this.tryGetRuleContext(0, CmdPexpireContext);
	}
	public cmdPexpireat(): CmdPexpireatContext | undefined {
		return this.tryGetRuleContext(0, CmdPexpireatContext);
	}
	public cmdPExpireTime(): CmdPExpireTimeContext | undefined {
		return this.tryGetRuleContext(0, CmdPExpireTimeContext);
	}
	public cmdTtl(): CmdTtlContext | undefined {
		return this.tryGetRuleContext(0, CmdTtlContext);
	}
	public cmdPttl(): CmdPttlContext | undefined {
		return this.tryGetRuleContext(0, CmdPttlContext);
	}
	public cmdRandomkey(): CmdRandomkeyContext | undefined {
		return this.tryGetRuleContext(0, CmdRandomkeyContext);
	}
	public cmdRename(): CmdRenameContext | undefined {
		return this.tryGetRuleContext(0, CmdRenameContext);
	}
	public cmdRenamenx(): CmdRenamenxContext | undefined {
		return this.tryGetRuleContext(0, CmdRenamenxContext);
	}
	public cmdRestore(): CmdRestoreContext | undefined {
		return this.tryGetRuleContext(0, CmdRestoreContext);
	}
	public cmdScan(): CmdScanContext | undefined {
		return this.tryGetRuleContext(0, CmdScanContext);
	}
	public cmdSort(): CmdSortContext | undefined {
		return this.tryGetRuleContext(0, CmdSortContext);
	}
	public cmdSortro(): CmdSortroContext | undefined {
		return this.tryGetRuleContext(0, CmdSortroContext);
	}
	public cmdTouch(): CmdTouchContext | undefined {
		return this.tryGetRuleContext(0, CmdTouchContext);
	}
	public cmdType(): CmdTypeContext | undefined {
		return this.tryGetRuleContext(0, CmdTypeContext);
	}
	public cmdUnlink(): CmdUnlinkContext | undefined {
		return this.tryGetRuleContext(0, CmdUnlinkContext);
	}
	public cmdWait(): CmdWaitContext | undefined {
		return this.tryGetRuleContext(0, CmdWaitContext);
	}
	public cmdAppend(): CmdAppendContext | undefined {
		return this.tryGetRuleContext(0, CmdAppendContext);
	}
	public cmdDecr(): CmdDecrContext | undefined {
		return this.tryGetRuleContext(0, CmdDecrContext);
	}
	public cmdDecrby(): CmdDecrbyContext | undefined {
		return this.tryGetRuleContext(0, CmdDecrbyContext);
	}
	public cmdGet(): CmdGetContext | undefined {
		return this.tryGetRuleContext(0, CmdGetContext);
	}
	public cmdGetdel(): CmdGetdelContext | undefined {
		return this.tryGetRuleContext(0, CmdGetdelContext);
	}
	public cmdGetex(): CmdGetexContext | undefined {
		return this.tryGetRuleContext(0, CmdGetexContext);
	}
	public cmdGetrange(): CmdGetrangeContext | undefined {
		return this.tryGetRuleContext(0, CmdGetrangeContext);
	}
	public cmdGetset(): CmdGetsetContext | undefined {
		return this.tryGetRuleContext(0, CmdGetsetContext);
	}
	public cmdGetbit(): CmdGetbitContext | undefined {
		return this.tryGetRuleContext(0, CmdGetbitContext);
	}
	public cmdInc(): CmdIncContext | undefined {
		return this.tryGetRuleContext(0, CmdIncContext);
	}
	public cmdLcs(): CmdLcsContext | undefined {
		return this.tryGetRuleContext(0, CmdLcsContext);
	}
	public cmdMget(): CmdMgetContext | undefined {
		return this.tryGetRuleContext(0, CmdMgetContext);
	}
	public cmdMset(): CmdMsetContext | undefined {
		return this.tryGetRuleContext(0, CmdMsetContext);
	}
	public cmdMsetnx(): CmdMsetnxContext | undefined {
		return this.tryGetRuleContext(0, CmdMsetnxContext);
	}
	public cmdSetex(): CmdSetexContext | undefined {
		return this.tryGetRuleContext(0, CmdSetexContext);
	}
	public cmdSet(): CmdSetContext | undefined {
		return this.tryGetRuleContext(0, CmdSetContext);
	}
	public cmdSetnx(): CmdSetnxContext | undefined {
		return this.tryGetRuleContext(0, CmdSetnxContext);
	}
	public cmdSetrange(): CmdSetrangeContext | undefined {
		return this.tryGetRuleContext(0, CmdSetrangeContext);
	}
	public cmdSetbit(): CmdSetbitContext | undefined {
		return this.tryGetRuleContext(0, CmdSetbitContext);
	}
	public cmdStrlen(): CmdStrlenContext | undefined {
		return this.tryGetRuleContext(0, CmdStrlenContext);
	}
	public cmdSubstr(): CmdSubstrContext | undefined {
		return this.tryGetRuleContext(0, CmdSubstrContext);
	}
	public cmdHdelMget(): CmdHdelMgetContext | undefined {
		return this.tryGetRuleContext(0, CmdHdelMgetContext);
	}
	public cmdHexistsGetKeysStrlen(): CmdHexistsGetKeysStrlenContext | undefined {
		return this.tryGetRuleContext(0, CmdHexistsGetKeysStrlenContext);
	}
	public cmdHgetallLenVals(): CmdHgetallLenValsContext | undefined {
		return this.tryGetRuleContext(0, CmdHgetallLenValsContext);
	}
	public cmdHincrby(): CmdHincrbyContext | undefined {
		return this.tryGetRuleContext(0, CmdHincrbyContext);
	}
	public cmdHmsetHset(): CmdHmsetHsetContext | undefined {
		return this.tryGetRuleContext(0, CmdHmsetHsetContext);
	}
	public cmdHrandfield(): CmdHrandfieldContext | undefined {
		return this.tryGetRuleContext(0, CmdHrandfieldContext);
	}
	public cmdHscan(): CmdHscanContext | undefined {
		return this.tryGetRuleContext(0, CmdHscanContext);
	}
	public cmdHsetnx(): CmdHsetnxContext | undefined {
		return this.tryGetRuleContext(0, CmdHsetnxContext);
	}
	public cmdBlmove(): CmdBlmoveContext | undefined {
		return this.tryGetRuleContext(0, CmdBlmoveContext);
	}
	public cmdLmpop(): CmdLmpopContext | undefined {
		return this.tryGetRuleContext(0, CmdLmpopContext);
	}
	public cmdBpop(): CmdBpopContext | undefined {
		return this.tryGetRuleContext(0, CmdBpopContext);
	}
	public cmdBrpoplpush(): CmdBrpoplpushContext | undefined {
		return this.tryGetRuleContext(0, CmdBrpoplpushContext);
	}
	public cmdLindex(): CmdLindexContext | undefined {
		return this.tryGetRuleContext(0, CmdLindexContext);
	}
	public cmdLinsert(): CmdLinsertContext | undefined {
		return this.tryGetRuleContext(0, CmdLinsertContext);
	}
	public cmdLlen(): CmdLlenContext | undefined {
		return this.tryGetRuleContext(0, CmdLlenContext);
	}
	public cmdLmove(): CmdLmoveContext | undefined {
		return this.tryGetRuleContext(0, CmdLmoveContext);
	}
	public cmdPop(): CmdPopContext | undefined {
		return this.tryGetRuleContext(0, CmdPopContext);
	}
	public cmdLpos(): CmdLposContext | undefined {
		return this.tryGetRuleContext(0, CmdLposContext);
	}
	public cmdPush(): CmdPushContext | undefined {
		return this.tryGetRuleContext(0, CmdPushContext);
	}
	public cmdLrangeTrim(): CmdLrangeTrimContext | undefined {
		return this.tryGetRuleContext(0, CmdLrangeTrimContext);
	}
	public cmdLremSet(): CmdLremSetContext | undefined {
		return this.tryGetRuleContext(0, CmdLremSetContext);
	}
	public cmdRpoplpush(): CmdRpoplpushContext | undefined {
		return this.tryGetRuleContext(0, CmdRpoplpushContext);
	}
	public cmdSadd(): CmdSaddContext | undefined {
		return this.tryGetRuleContext(0, CmdSaddContext);
	}
	public cmdScard(): CmdScardContext | undefined {
		return this.tryGetRuleContext(0, CmdScardContext);
	}
	public cmdSdiff(): CmdSdiffContext | undefined {
		return this.tryGetRuleContext(0, CmdSdiffContext);
	}
	public cmdSdiffstore(): CmdSdiffstoreContext | undefined {
		return this.tryGetRuleContext(0, CmdSdiffstoreContext);
	}
	public cmdSintercard(): CmdSintercardContext | undefined {
		return this.tryGetRuleContext(0, CmdSintercardContext);
	}
	public cmdSismember(): CmdSismemberContext | undefined {
		return this.tryGetRuleContext(0, CmdSismemberContext);
	}
	public cmdSmove(): CmdSmoveContext | undefined {
		return this.tryGetRuleContext(0, CmdSmoveContext);
	}
	public cmdSpop(): CmdSpopContext | undefined {
		return this.tryGetRuleContext(0, CmdSpopContext);
	}
	public cmdSscan(): CmdSscanContext | undefined {
		return this.tryGetRuleContext(0, CmdSscanContext);
	}
	public cmdBzmpop(): CmdBzmpopContext | undefined {
		return this.tryGetRuleContext(0, CmdBzmpopContext);
	}
	public cmdBzpopmax(): CmdBzpopmaxContext | undefined {
		return this.tryGetRuleContext(0, CmdBzpopmaxContext);
	}
	public cmdZadd(): CmdZaddContext | undefined {
		return this.tryGetRuleContext(0, CmdZaddContext);
	}
	public cmdZcard(): CmdZcardContext | undefined {
		return this.tryGetRuleContext(0, CmdZcardContext);
	}
	public cmdZcount(): CmdZcountContext | undefined {
		return this.tryGetRuleContext(0, CmdZcountContext);
	}
	public cmdZdiff(): CmdZdiffContext | undefined {
		return this.tryGetRuleContext(0, CmdZdiffContext);
	}
	public cmdZdiffstore(): CmdZdiffstoreContext | undefined {
		return this.tryGetRuleContext(0, CmdZdiffstoreContext);
	}
	public cmdZincrby(): CmdZincrbyContext | undefined {
		return this.tryGetRuleContext(0, CmdZincrbyContext);
	}
	public cmdZinter(): CmdZinterContext | undefined {
		return this.tryGetRuleContext(0, CmdZinterContext);
	}
	public cmdZintercard(): CmdZintercardContext | undefined {
		return this.tryGetRuleContext(0, CmdZintercardContext);
	}
	public cmdZinterstore(): CmdZinterstoreContext | undefined {
		return this.tryGetRuleContext(0, CmdZinterstoreContext);
	}
	public cmdZmpop(): CmdZmpopContext | undefined {
		return this.tryGetRuleContext(0, CmdZmpopContext);
	}
	public cmdZmscore(): CmdZmscoreContext | undefined {
		return this.tryGetRuleContext(0, CmdZmscoreContext);
	}
	public cmdZpopmax(): CmdZpopmaxContext | undefined {
		return this.tryGetRuleContext(0, CmdZpopmaxContext);
	}
	public cmdZrandmember(): CmdZrandmemberContext | undefined {
		return this.tryGetRuleContext(0, CmdZrandmemberContext);
	}
	public cmdZrange(): CmdZrangeContext | undefined {
		return this.tryGetRuleContext(0, CmdZrangeContext);
	}
	public cmdZrangebylex(): CmdZrangebylexContext | undefined {
		return this.tryGetRuleContext(0, CmdZrangebylexContext);
	}
	public cmdZrangebyscore(): CmdZrangebyscoreContext | undefined {
		return this.tryGetRuleContext(0, CmdZrangebyscoreContext);
	}
	public cmdZrangestore(): CmdZrangestoreContext | undefined {
		return this.tryGetRuleContext(0, CmdZrangestoreContext);
	}
	public cmdZrank(): CmdZrankContext | undefined {
		return this.tryGetRuleContext(0, CmdZrankContext);
	}
	public cmdZremrangebyrank(): CmdZremrangebyrankContext | undefined {
		return this.tryGetRuleContext(0, CmdZremrangebyrankContext);
	}
	public cmdZrevrange(): CmdZrevrangeContext | undefined {
		return this.tryGetRuleContext(0, CmdZrevrangeContext);
	}
	public cmdZrevrangebylex(): CmdZrevrangebylexContext | undefined {
		return this.tryGetRuleContext(0, CmdZrevrangebylexContext);
	}
	public cmdZscan(): CmdZscanContext | undefined {
		return this.tryGetRuleContext(0, CmdZscanContext);
	}
	public cmdZunion(): CmdZunionContext | undefined {
		return this.tryGetRuleContext(0, CmdZunionContext);
	}
	public cmdZunionstore(): CmdZunionstoreContext | undefined {
		return this.tryGetRuleContext(0, CmdZunionstoreContext);
	}
	public cmdScriptKill(): CmdScriptKillContext | undefined {
		return this.tryGetRuleContext(0, CmdScriptKillContext);
	}
	public cmdScriptLoad(): CmdScriptLoadContext | undefined {
		return this.tryGetRuleContext(0, CmdScriptLoadContext);
	}
	public cmdEval(): CmdEvalContext | undefined {
		return this.tryGetRuleContext(0, CmdEvalContext);
	}
	public cmdEvalsha(): CmdEvalshaContext | undefined {
		return this.tryGetRuleContext(0, CmdEvalshaContext);
	}
	public cmdScriptExists(): CmdScriptExistsContext | undefined {
		return this.tryGetRuleContext(0, CmdScriptExistsContext);
	}
	public cmdScriptFlush(): CmdScriptFlushContext | undefined {
		return this.tryGetRuleContext(0, CmdScriptFlushContext);
	}
	public cmdExec(): CmdExecContext | undefined {
		return this.tryGetRuleContext(0, CmdExecContext);
	}
	public cmdWatch(): CmdWatchContext | undefined {
		return this.tryGetRuleContext(0, CmdWatchContext);
	}
	public cmdDiscard(): CmdDiscardContext | undefined {
		return this.tryGetRuleContext(0, CmdDiscardContext);
	}
	public cmdUnwatch(): CmdUnwatchContext | undefined {
		return this.tryGetRuleContext(0, CmdUnwatchContext);
	}
	public cmdMulti(): CmdMultiContext | undefined {
		return this.tryGetRuleContext(0, CmdMultiContext);
	}
	public cmdPfmerge(): CmdPfmergeContext | undefined {
		return this.tryGetRuleContext(0, CmdPfmergeContext);
	}
	public cmdPfadd(): CmdPfaddContext | undefined {
		return this.tryGetRuleContext(0, CmdPfaddContext);
	}
	public cmdPfcount(): CmdPfcountContext | undefined {
		return this.tryGetRuleContext(0, CmdPfcountContext);
	}
	public cmdEcho(): CmdEchoContext | undefined {
		return this.tryGetRuleContext(0, CmdEchoContext);
	}
	public cmdSelect(): CmdSelectContext | undefined {
		return this.tryGetRuleContext(0, CmdSelectContext);
	}
	public cmdPing(): CmdPingContext | undefined {
		return this.tryGetRuleContext(0, CmdPingContext);
	}
	public cmdSave(): CmdSaveContext | undefined {
		return this.tryGetRuleContext(0, CmdSaveContext);
	}
	public cmdSlowlog(): CmdSlowlogContext | undefined {
		return this.tryGetRuleContext(0, CmdSlowlogContext);
	}
	public cmdLastsave(): CmdLastsaveContext | undefined {
		return this.tryGetRuleContext(0, CmdLastsaveContext);
	}
	public cmdConfig(): CmdConfigContext | undefined {
		return this.tryGetRuleContext(0, CmdConfigContext);
	}
	public cmdClient(): CmdClientContext | undefined {
		return this.tryGetRuleContext(0, CmdClientContext);
	}
	public cmdShutdown(): CmdShutdownContext | undefined {
		return this.tryGetRuleContext(0, CmdShutdownContext);
	}
	public cmdSync(): CmdSyncContext | undefined {
		return this.tryGetRuleContext(0, CmdSyncContext);
	}
	public cmdRole(): CmdRoleContext | undefined {
		return this.tryGetRuleContext(0, CmdRoleContext);
	}
	public cmdMonitor(): CmdMonitorContext | undefined {
		return this.tryGetRuleContext(0, CmdMonitorContext);
	}
	public cmdSlaveof(): CmdSlaveofContext | undefined {
		return this.tryGetRuleContext(0, CmdSlaveofContext);
	}
	public cmdFlushall(): CmdFlushallContext | undefined {
		return this.tryGetRuleContext(0, CmdFlushallContext);
	}
	public cmdQuit(): CmdQuitContext | undefined {
		return this.tryGetRuleContext(0, CmdQuitContext);
	}
	public cmdAuth(): CmdAuthContext | undefined {
		return this.tryGetRuleContext(0, CmdAuthContext);
	}
	public cmdDbsize(): CmdDbsizeContext | undefined {
		return this.tryGetRuleContext(0, CmdDbsizeContext);
	}
	public cmdBgrewriteaof(): CmdBgrewriteaofContext | undefined {
		return this.tryGetRuleContext(0, CmdBgrewriteaofContext);
	}
	public cmdTime(): CmdTimeContext | undefined {
		return this.tryGetRuleContext(0, CmdTimeContext);
	}
	public cmdInfo(): CmdInfoContext | undefined {
		return this.tryGetRuleContext(0, CmdInfoContext);
	}
	public cmdBgsave(): CmdBgsaveContext | undefined {
		return this.tryGetRuleContext(0, CmdBgsaveContext);
	}
	public cmdCmd(): CmdCmdContext | undefined {
		return this.tryGetRuleContext(0, CmdCmdContext);
	}
	public cmdCmdx(): CmdCmdxContext | undefined {
		return this.tryGetRuleContext(0, CmdCmdxContext);
	}
	public cmdDebug(): CmdDebugContext | undefined {
		return this.tryGetRuleContext(0, CmdDebugContext);
	}
	public cmdFlushdb(): CmdFlushdbContext | undefined {
		return this.tryGetRuleContext(0, CmdFlushdbContext);
	}
	public cmdSsubscribe(): CmdSsubscribeContext | undefined {
		return this.tryGetRuleContext(0, CmdSsubscribeContext);
	}
	public cmdUnsubscribe(): CmdUnsubscribeContext | undefined {
		return this.tryGetRuleContext(0, CmdUnsubscribeContext);
	}
	public cmdPusubnumsub(): CmdPusubnumsubContext | undefined {
		return this.tryGetRuleContext(0, CmdPusubnumsubContext);
	}
	public cmdPusubnumpat(): CmdPusubnumpatContext | undefined {
		return this.tryGetRuleContext(0, CmdPusubnumpatContext);
	}
	public cmdPusubchannels(): CmdPusubchannelsContext | undefined {
		return this.tryGetRuleContext(0, CmdPusubchannelsContext);
	}
	public cmdPublish(): CmdPublishContext | undefined {
		return this.tryGetRuleContext(0, CmdPublishContext);
	}
	public cmdAsking(): CmdAskingContext | undefined {
		return this.tryGetRuleContext(0, CmdAskingContext);
	}
	public cmdAddDelSlots(): CmdAddDelSlotsContext | undefined {
		return this.tryGetRuleContext(0, CmdAddDelSlotsContext);
	}
	public cmdCountKeysInSlot(): CmdCountKeysInSlotContext | undefined {
		return this.tryGetRuleContext(0, CmdCountKeysInSlotContext);
	}
	public cmdFailOver(): CmdFailOverContext | undefined {
		return this.tryGetRuleContext(0, CmdFailOverContext);
	}
	public cmdForget(): CmdForgetContext | undefined {
		return this.tryGetRuleContext(0, CmdForgetContext);
	}
	public cmdGetKeysInSlot(): CmdGetKeysInSlotContext | undefined {
		return this.tryGetRuleContext(0, CmdGetKeysInSlotContext);
	}
	public cmdClusterOrder(): CmdClusterOrderContext | undefined {
		return this.tryGetRuleContext(0, CmdClusterOrderContext);
	}
	public cmdKeySlot(): CmdKeySlotContext | undefined {
		return this.tryGetRuleContext(0, CmdKeySlotContext);
	}
	public cmdMeet(): CmdMeetContext | undefined {
		return this.tryGetRuleContext(0, CmdMeetContext);
	}
	public cmdReadonly(): CmdReadonlyContext | undefined {
		return this.tryGetRuleContext(0, CmdReadonlyContext);
	}
	public cmdReadwrite(): CmdReadwriteContext | undefined {
		return this.tryGetRuleContext(0, CmdReadwriteContext);
	}
	public cmdReplicaesSlave(): CmdReplicaesSlaveContext | undefined {
		return this.tryGetRuleContext(0, CmdReplicaesSlaveContext);
	}
	public cmdReset(): CmdResetContext | undefined {
		return this.tryGetRuleContext(0, CmdResetContext);
	}
	public cmdSetSlot(): CmdSetSlotContext | undefined {
		return this.tryGetRuleContext(0, CmdSetSlotContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return RedisSqlParser.RULE_sqlStatement; }
	// @Override
	public enterRule(listener: RedisSqlParserListener): void {
		if (listener.enterSqlStatement) {
			listener.enterSqlStatement(this);
		}
	}
	// @Override
	public exitRule(listener: RedisSqlParserListener): void {
		if (listener.exitSqlStatement) {
			listener.exitSqlStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: RedisSqlParserVisitor<Result>): Result {
		if (visitor.visitSqlStatement) {
			return visitor.visitSqlStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


