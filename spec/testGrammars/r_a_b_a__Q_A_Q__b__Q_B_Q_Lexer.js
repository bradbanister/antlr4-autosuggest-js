// jshint ignore: start
var antlr4 = require('antlr4/index');


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0002\u0004\u000b\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0002\u0002\u0004\u0003\u0003",
    "\u0005\u0004\u0003\u0002\u0002\u0002\n\u0002\u0003\u0003\u0002\u0002",
    "\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0003\u0007\u0003\u0002\u0002",
    "\u0002\u0005\t\u0003\u0002\u0002\u0002\u0007\b\u0007C\u0002\u0002\b",
    "\u0004\u0003\u0002\u0002\u0002\t\n\u0007D\u0002\u0002\n\u0006\u0003",
    "\u0002\u0002\u0002\u0003\u0002\u0002"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

function r_a_b_a__Q_A_Q__b__Q_B_Q_Lexer(input) {
	antlr4.Lexer.call(this, input);
    this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    return this;
}

r_a_b_a__Q_A_Q__b__Q_B_Q_Lexer.prototype = Object.create(antlr4.Lexer.prototype);
r_a_b_a__Q_A_Q__b__Q_B_Q_Lexer.prototype.constructor = r_a_b_a__Q_A_Q__b__Q_B_Q_Lexer;

r_a_b_a__Q_A_Q__b__Q_B_Q_Lexer.EOF = antlr4.Token.EOF;
r_a_b_a__Q_A_Q__b__Q_B_Q_Lexer.T__0 = 1;
r_a_b_a__Q_A_Q__b__Q_B_Q_Lexer.T__1 = 2;

r_a_b_a__Q_A_Q__b__Q_B_Q_Lexer.prototype.channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];

r_a_b_a__Q_A_Q__b__Q_B_Q_Lexer.prototype.modeNames = [ "DEFAULT_MODE" ];

r_a_b_a__Q_A_Q__b__Q_B_Q_Lexer.prototype.literalNames = [ null, "'A'", "'B'" ];

r_a_b_a__Q_A_Q__b__Q_B_Q_Lexer.prototype.symbolicNames = [  ];

r_a_b_a__Q_A_Q__b__Q_B_Q_Lexer.prototype.ruleNames = [ "T__0", "T__1" ];

r_a_b_a__Q_A_Q__b__Q_B_Q_Lexer.prototype.grammarFileName = "r_a_b_a__Q_A_Q__b__Q_B_Q_.g4";



exports.r_a_b_a__Q_A_Q__b__Q_B_Q_Lexer = r_a_b_a__Q_A_Q__b__Q_B_Q_Lexer;

Object.defineProperty(r_a_b_a__Q_A_Q__b__Q_B_Q_Lexer.prototype, "atn", {
	get : function() {
		return atn;
	}
});

