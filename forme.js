function start() {
    var argument = process.argv
    console.log(argument)
    var longueur = argument[2]
    var forme = argument[3]
    var largeur = argument[4]
    console.log(longueur, forme, largeur)
    if (forme === "square") {
        dessin_square(longueur)
    }
    else if (forme === "rectangle") {
        dessin_rectangle(longueur, largeur)

    } else if (forme === "triangle") {
        dessin_triangle(longueur)
    }
}

function dessin_square(longueur) {
    var i = 0
    while (i < longueur) {
        process.stdout.write("_")
        process.stdout.write("_")
        i = i + 1
    }
    process.stdout.write('\n');
    i = 0
    while (i < longueur) {
        process.stdout.write("|")
        var j = 0;
        while (j < longueur - 1) {
            process.stdout.write("  ")
            j = j + 1;
        }
        process.stdout.write('|')
        process.stdout.write('\n')
        i = i + 1
    }
    i = 0
    while (i < longueur) {
        process.stdout.write("_")
        process.stdout.write("_")
        i = i + 1

    }
    process.stdout.write('\n')

}

function dessin_rectangle(longueur, largeur) {
    console.log("je suis un rectangle")
    var i = 0
    while (i < longueur) {
        process.stdout.write("_")
        process.stdout.write("_")
        i = i + 1 

    }
    process.stdout.write('\n');
    i = 0
    while (i < largeur) {
        process.stdout.write("|")
        var j = 0;
        while (j < longueur - 1) {
            process.stdout.write("  ")
            j = j + 1;

        } process.stdout.write('|')
        process.stdout.write('\n')
        i = i + 1
    }
    i = 0
    while (i < longueur) {
        process.stdout.write("_")
        process.stdout.write("_")
        i = i + 1

    }
    process.stdout.write('\n')
}
function dessin_triangle(longueur) {
    console.log("je suis un triangle")

    var i = 0
    var k = 0
    var p = 0
    while (i < longueur) {
        var begin = 0
        while (begin + 1 < (longueur - p)) {
            process.stdout.write(" ")
            begin = begin + 1;
        }
        p=p+1
        process.stdout.write("/")
        var j = longueur - k;
        while (j <= longueur - 1) {
            process.stdout.write("  ")
            j = j + 1;
        }
        k = k + 1
        process.stdout.write("\\")
        process.stdout.write('\n')
        i = i + 1
    }
    i = 0
    while (i < longueur) {
        process.stdout.write("‾")
        process.stdout.write("‾")
        i = i + 1

    }
     process.stdout.write('\n');

}


start()

