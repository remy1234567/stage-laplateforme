function multiplication(nombre1, nombre2)
{
    var result = nombre1*nombre2;
    console.log("le résultat est " + result);
}
function division(nombre1,nombre2)
{
    var result = nombre1/nombre2;
    console.log("le résultat est :" + result);
}
function soustraction(nombre1,nombre2)
{
    var result = nombre1-nombre2;
    console.log("le résultat est :" + result);
}
function addition(nombre1,nombre2)
{
    var result = nombre1+nombre2
    console.log("le résultat de cette addition est :" + result);
}

function start() {
    var argument = process.argv 
    if (argument[3] === "+")
       addition(parseInt(argument[2]),parseInt(argument[4]))
    else if(argument[3] === "-")
    {
       soustraction(parseInt(argument[2]),parseInt(argument[4])) 
    }
    else if (argument[3] === "/")
    division(parseInt(argument[2]),parseInt(argument[4]))
    else if (argument[3] === "*")
    multiplication(parseInt(argument[2]),parseInt(argument[4]))
    else
    console.log("vous avez rentré un symbole qui n'est pas une opération")
}

start()