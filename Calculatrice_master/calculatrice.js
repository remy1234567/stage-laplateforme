function myFunction(id) {
    let value = document.getElementById(id).innerHTML;
    let screen = document.getElementById("screen").innerHTML
    if (screen.includes("x" || "+" || "-" || ":") && (value === "x" || value === "+" ||
        value === "-" || value === ":"))
        return;
    if (value === "x" || value === "+" || value === "-" || value === ":") {
        screen = screen + " ";
    }
    screen = screen + value;
    if (value === "x" || value === "+" || value === "-" || value === ":") {
        screen = screen + " ";
    }
    document.getElementById("screen").innerHTML = screen
}
function suppr_all() {
    document.getElementById("screen").innerHTML = "";
}
function choose_symbol() {
    let screen = document.getElementById("screen").innerHTML;
    let split_string = screen.split(" ")
    let  nb1= split_string[0]
    let symbol = split_string[1]
    let nb2 = split_string[2]
    let result = 0
    if (symbol === "+")
        result = addition(parseInt(nb1), parseInt(nb2))
    else if (symbol === "-") {
        result = soustraction(parseInt(nb1), parseInt(nb2))
    }
    else if (symbol === ":")
        result = division(parseInt(nb1), parseInt(nb2))
    else if (symbol === "x")
        result = multiplication(parseInt(nb1), parseInt(nb2))

    document.getElementById("screen").innerHTML = result.toString();
}

function multiplication(nombre1, nombre2) {
    var result = nombre1 * nombre2;
    return result;
}
function division(nombre1, nombre2) {
    var result = nombre1 / nombre2;
    return result;
}
function soustraction(nombre1, nombre2) {
    var result = nombre1 - nombre2;
    return result;
}
function addition(nombre1, nombre2) {
    var result = nombre1 + nombre2
    return result;
}