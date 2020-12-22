var NumberOfWords = 28

var words = new BuildArray(NumberOfWords)

// Use the following variables to
// define your random words:
words[1] = "Splattershot Jr."
words[2] = "Custom Jr."
words[3] = "Kensa Jr."
words[4] = "Tentatek"
words[5] = "Octoshot"
words[6] = "Kensashot"
words[7] = "Forge Pro"
words[8] = "Kensa Pro"
words[9] = "Splattershot Pro"
words[10] = "Aerospray"
words[11] = "Nzap"
words[12] = ".52 Gal Kensa"
words[13] = ".52 Gal"
words[14] = ".96 Gal"
words[15] = "Splash or Sploosh"
words[16] = "Jet Squelcher"
words[17] = "L3 Nozzlenose"
words[18] = "H3 Nozzlenose"
words[19] = "Squeezer"
words[20] = "Blaster"
words[21] = "Range Blaster"
words[22] = "Luna Blaster"
words[23] = "Rapid Blaster"
words[24] = "Clash Blaster"
words[25] = "Splat Charger"
words[26] = "Splatterscope"
words[27] = "Squiffer"
words[28] = "E-Liter"
words[29] = "Bamboozler"
words[30] = "Goo Tuber"
words[31] = "Splat Roller"
words[32] = "Dynamo"
words[33] = "Carbon Roller"
words[34] = "Flingza"
words[35] = "Inbrush"
words[36] = "Octobrush"
words[37] = "Slosher"
words[38] = "Tri-Slosher"
words[39] = "Sloshing Machine"
words[40] = "Explosher"
words[41] = "Bloblobber"
words[42] = "Heavy Splatling"
words[43] = "Hydra Splatling"
words[44] = "Ballpoint Splatling"
words[45] = "Nautilus"
words[46] = "Splat Dualies"
words[47] = "Dualie Squelchers"
words[48] = "Tetras"
words[49] = "Gloogas"
words[50] = "Dapples"
words[41] = "Splat Brella"
words[42] = "Tenta Brella"
words[43] = "Undercover Brella"


function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}
