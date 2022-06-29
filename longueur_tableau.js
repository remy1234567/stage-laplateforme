var tableau = ["remy", "mylan", "lucas","nicolas"];

function calcul_longueur_tableau(tab)
{
    var i = 0;

    while(tab[i] != undefined)
    {
        console.log(tab[i])
        i = i + 1;
    }
    console.log(tab.length)
}

calcul_longueur_tableau(tableau)