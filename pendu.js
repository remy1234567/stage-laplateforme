var mots =["livre","cahier","table","manger","chaise","stylo","basket","fourmi","jeux","code","cable","random"]

const { rawListeners, exit } = require("process");
const readline = require("readline");

const terminal = readline.createInterface({
     input: process.stdin,
     output: process.stdout
})

var nbrs_essai =0;
var compteur = 7

function start ()
{
    var random = Math.round(Math.random() * 4)
    var mot = mots[random];
   var i = 0 
   var mot_non_trouvé = ""
   while (i!=mot.length){
    i = i + 1
    mot_non_trouvé = mot_non_trouvé + "_";
   }
   jeu(mot_non_trouvé, mot)
}

function jeu(mot_non_trouvé, mot)
{
    terminal.question("qu'elle lettre veux tu ?", function (response) {
        var position = mot.indexOf(response)
        if(position > -1)
        {
            i=0;
            var mot_non_trouvé_replace = ""
            while(i != mot_non_trouvé.length)
            {
                if (i === position)
                    mot_non_trouvé_replace = mot_non_trouvé_replace + response;
                else if (mot_non_trouvé[i] != "_")
                    mot_non_trouvé_replace = mot_non_trouvé_replace + mot_non_trouvé[i]
                else
                    mot_non_trouvé_replace = mot_non_trouvé_replace + "_"
                i = i + 1;
            }
            mot_non_trouvé = mot_non_trouvé_replace
            console.log(mot_non_trouvé)
        }
        else {
            nbrs_essai = nbrs_essai + 1;
            compteur=compteur -1
            console.log("\x1b[41m",'mauvaise lettre',"\x1b[0m");
        }
        console.log("il vous reste \x1b[1m" + compteur + "\x1b[0m essais")
        if(nbrs_essai >= 7)
        {
            console.log("vous avez perdu comme c'est dommage")
            exit();
        }
        if (mot_non_trouvé.indexOf("_") > -1)
        {
            jeu(mot_non_trouvé, mot)
        }
        else {
            console.log("\x1b[42m","Bravo c'est gagné \x1b[0m!")
            console.log(nbrs_essai)            
            exit();
        }
       })
}

start();