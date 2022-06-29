var mots = ["livre", "cahier", "table", "manger", "chaise", "stylo", "basket", "fourmi", "jeux", "code", "cable", "random", "fraise"]
var bonhomme = "          \n" +
    "          \n" +
    "          \n" +
    "          \n" +
    "          \n" +
    "          \n" +
    "          \n" +
    "          \n" +
    "          \n" +
    "          \n"

const { rawListeners, exit } = require("process");
const readline = require("readline");

const terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

var nbrs_essai = 0;
var compteur = 7

function start() {
    var random = Math.round(Math.random() * 4)
    var mot = mots[random];
    var i = 0
    var mot_non_trouvé = ""
    while (i != mot.length) {
        i = i + 1
        mot_non_trouvé = mot_non_trouvé + "_";
    }
    console.log(bonhomme)
    console.log(mot_non_trouvé)
    jeu(mot_non_trouvé, mot)
}

function jeu(mot_non_trouvé, mot) {
    terminal.question("qu'elle lettre veux tu ?", function (response) {
        var position = mot.indexOf(response)
        if (position > -1) {
            i = 0;
            var mot_non_trouvé_replace = ""
            while (i != mot_non_trouvé.length) {
                if (i === position)
                    mot_non_trouvé_replace = mot_non_trouvé_replace + response;
                else if (mot_non_trouvé[i] != "_")
                    mot_non_trouvé_replace = mot_non_trouvé_replace + mot_non_trouvé[i]
                else
                    mot_non_trouvé_replace = mot_non_trouvé_replace + "_"
                i = i + 1;
            }
            mot_non_trouvé = mot_non_trouvé_replace
        }
        else {
            nbrs_essai = nbrs_essai + 1;
            compteur = compteur - 1
            bonhome(nbrs_essai)
            console.log("\x1b[41m", 'mauvaise lettre', "\x1b[0m");
        }
        console.log(bonhomme)
        console.log(mot_non_trouvé)
        console.log("il vous reste \x1b[1m" + compteur + "\x1b[0m essais")
        if (nbrs_essai >= 7) {
            console.log(bonhomme)
            console.log("vous avez perdu comme c'est dommage")
            exit();
        }
        if (mot_non_trouvé.indexOf("_") > -1) {
            jeu(mot_non_trouvé, mot)
        }
        else {
            console.log("\x1b[42m", "Bravo c'est gagné \x1b[0m!")
            console.log(nbrs_essai)
            exit();
        }
    })
}

function bonhome(essai) {
    switch (essai) {
        case 1:
            console.log(essai, "test")
            bonhomme = "          \n" +
                "          \n" +
                "          \n" +
                "          \n" +
                "          \n" +
                "          \n" +
                "          \n" +
                "          \n" +
                "          \n" +
                "______       \n"
            break;
        case 2:
            bonhomme =
                " ooooo    \n" +
                "  ooo     \n" +
                "     \n" +
                "|         \n" +
                "|          \n" +
                "|        \n" +
                "|         \n" +
                "|        \n" +
                "|       \n" +
                "______       \n"
            break;
        case 3:
            bonhomme =
                " ooooo    \n" +
                "  ooo     \n" +
                " ______    \n" +
                "|         \n" +
                "|           \n" +
                "|         \n" +
                "|          \n" +
                "|         \n" +
                "|       \n" +
                "______       \n"
            break;
        case 4:
            bonhomme =
                " ooooo    \n" +
                "  ooo     \n" +
                " ______    \n" +
                "|     |    \n" +
                "|           \n" +
                "|           \n" +
                "|          \n" +
                "|         \n" +
                "|       \n" +
                "______       \n"
            break;
        case 5:
            bonhomme =
                " ooooo    \n" +
                "  ooo     \n" +
                " ______    \n" +
                "|     |    \n" +
                "|     O     \n" +
                "|           \n" +
                "|          \n" +
                "|          \n" +
                "|       \n" +
                "______       \n"
            break;

        case 6:
            bonhomme =
                " ooooo    \n" +
                "  ooo     \n" +
                " ______    \n" +
                "|     |    \n" +
                "|     O     \n" +
                "|    _|_    \n" +
                "|          \n" +
                "|         \n" +
                "|       \n" +
                "______       \n"
            break;
        case 7:
            bonhomme =
                " ooooo    \n" +
                "  ooo     \n" +
                " ______    \n" +
                "|     |    \n" +
                "|     O     \n" +
                "|    _|_    \n" +
                "|     |    \n" +
                "|    / \\   \n" +
                "|       \n" +
                "______       \n"
            break;
    }
}

start();