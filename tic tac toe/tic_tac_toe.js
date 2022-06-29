let tour = false

function myFunction(id) {
    let value = document.getElementById(id);
    console.log(value.children[0].innerHTML)
    if (value.children[0].innerHTML != "") {
        alert("impossible la Case est déjà remplie")
    }
    else {
        if (tour === false) {
            value.children[0].innerHTML = "X"
            tour = true
            let joueur = document.getElementById("joueur");
            joueur.innerHTML = "joueur1"

        }
        else {
            value.children[0].innerHTML = "O"
            tour = false
            let joueur = document.getElementById("joueur");
            joueur.innerHTML = "joueur2"
        }
        win()
    }
}

function win() {
    let groupe1 = document.getElementsByClassName("colonne_group");
    let groupe2 = document.getElementsByClassName("colonne_group2");
    let groupe3 = document.getElementsByClassName("colonne_group3");
    console.log(groupe1[0].children)
    let array = []
    for (let i = 0; groupe1[0].children.length > i; i++)
        array.push(groupe1[0].children[i].children[0].innerHTML)
    for (let i = 0; groupe1[0].children.length > i; i++)
        array.push(groupe2[0].children[i].children[0].innerHTML)
    for (let i = 0; groupe1[0].children.length > i; i++)
        array.push(groupe3[0].children[i].children[0].innerHTML)
    let win = false
    if ((array[0] === "X" && array[1] === "X" && array[2] === "X") || (array[0] === "O") && (array[1] === "O" && array[2] === "O")) {
        win = true
    }
    if ((array[3] === "X" && array[4] === "X" && array[5] === "X" || array[3] === "O" && array[4] === "O" && array[5] === "O")) {
        win = true
    }
    if ((array[6] === "X" && array[7] === "X" && array[8] === "X") || (array[6] === "O") && (array[7] === "O" && array[8] === "O")) {
        win = true
    }
    if ((array[0] === "X" && array[3] === "X" && array[6] === "X") || (array[0] === "O") && (array[3] === "O" && array[6] === "O")) {
        win = true
    }
    if ((array[1] === "X" && array[4] === "X" && array[7] === "X") || (array[1] === "O") && (array[4] === "O" && array[7] === "O")) {
        win = true
    }
    if ((array[2] === "X" && array[5] === "X" && array[8] === "X") || (array[2] === "O") && (array[5] === "O" && array[8] === "O")) {
        win = true
    }
    if ((array[0] === "X" && array[4] === "X" && array[8] === "X") || (array[0] === "O") && (array[4] === "O" && array[8] === "O")) {
        win = true
    }
    if ((array[2] === "X" && array[4] === "X" && array[6] === "X") || (array[2] === "O") && (array[4] === "O" && array[6] === "O")) {
        win = true
    }
    let fill = 0
    for (let i = 0; array.length > i; i++) {
        if (array[i] != "")
            fill += 1
    }

    if (win === true) {
        tour = false
        reset_all(groupe1, groupe2, groupe3)
        if (tour === true)
            alert("le joueur 1 gagne")
        if (tour === false)
            alert("le joueur 2 gagne")
    }
    else if (fill === 9) {
        alert("C'est une égalité")
        reset_all(groupe1, groupe2, groupe3)
    }
}

function reset_all(groupe1, groupe2, groupe3) {
    for (let i = 0; groupe1[0].children.length > i; i++)
        groupe1[0].children[i].children[0].innerHTML = ""
    for (let i = 0; groupe1[0].children.length > i; i++)
        groupe2[0].children[i].children[0].innerHTML = ""
    for (let i = 0; groupe1[0].children.length > i; i++)
        groupe3[0].children[i].children[0].innerHTML = ""
}

