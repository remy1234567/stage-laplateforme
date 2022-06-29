var tableau = [8, 12, 43, 9, 43524,444,8989,2242,234,980,49, 23, 76, 82, 49, 32,234, 1,890 , 3, 4, 5, 6]
var sort_tableau = []
var save_size = tableau.length
var max  = tableau[0]
var index = 0
var test = 0

while (sort_tableau.length === save_size) {
    var j = 0
    while (j < tableau.length) {
        if (tableau[j] > max)
        {
            max = tableau[j]
            index = j
            test = 0
        }
        else if (tableau[j] === max)
        {
            max = tableau[j]
            index = j
            test = 1
        }
        j = j + 1
    }
    if (test === 1 || test === 2)
    {
        sort_tableau.push(tableau[index])
        tableau.splice(index, 1)
    }else {
        max = max - 1
    }
    test = 2
}
console.log(tableau)
console.log(sort_tableau)
