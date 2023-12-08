var abcjs = import("./test.js")

function doTest(abcString) {
    const tuneBook = new abcjs.TuneBook(abcString);
	const abcParser = new abcjs.parse.Parse();
	const parserLint = new abcjs.test.ParserLint();

    tuneBook.tunes.forEach((item) => {
		abcParser.parse(item.abc);
		const tune = abcParser.getTune();
		const warnings = abcParser.getWarnings();
		const lint1 = parserLint.lint(tune, warnings);

        console.log("PARSER OUTPUT");
        console.log(lint1);
    });
}

doTest(`X: 1
T: The Diamond Quarrie
T: 8x32R 3C (Elaine Brunken 2002)
T: 1,2 fig8; MirrReels3; HelloGoodbye; CornPassTurn
P: Avril's Hornpipe
C: Muriel Johnstone
C: arr. T. Traub 10-16-2014
K: F
R: Reel
L: 1/8
|: cc|"F"dcAF CFAc|"Gm"d2 G2 G2 f2|"C"egce gceg|1,2 "F"facf a2 :|2,4 "F"f2 a2 f2 :|
c^c|"Bb"dfBd fdBG|"F"AcFA cAFC|"C"EGCE GABG|"F"AGAB c=Bc^c|"Bb"dfBd fdBG|
"F"AcFA cAFC|"C"EGCE GCEG|"F"F2 A2 F2 c^c||"Bb"dfBd fdBG|"F"AcFA c2 f2|"C"egce gceg|
"F"fcfa c'2 c^c|"Bb"dfBd fdBG|"F"AcFA c2 f2|"C"egce gceg|"F"f2 a2 f2 |]`);