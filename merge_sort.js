var tableau = [8.5645, 8.6354636, -12, 43, 6/2 , 9, 43524,444,8989,2242,234,980,49, 23, 76, 82, 49, 32,234, 1,890 , 3, 4, 5, 6]
var sort_tableau = []
var save_size = tableau.length
var min = tableau[0]
var index = 0
var test = 0

while (sort_tableau.length < save_size) {
    var j = 0
    while (j < tableau.length) {
        if (tableau[j] < min)
        {
            min = tableau[j]
            index = j
            test = 1
        }
        else if (tableau[j] === min)
        {
            min = tableau[j]
            index = j
            test = 2
        }
        j = j + 1
    }
    if (test === 1 || test === 2)
    {
        sort_tableau.push(tableau[index])
        tableau.splice(index, 1)
    }else {
        min = min + 1
    }
    test = 0
}
console.log(sort_tableau)
