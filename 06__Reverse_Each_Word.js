// 2) Reverse each word of a given string.
// Given string — Welcome to Hello World
// Should become — emocleW ot olleH dlroW

function ReverseEachWord(str ,separator){
    let arr = str.split(separator)
    let Reversearr = arr.reverse()
    let ConvertingintoStr = Reversearr.join(separator)
    return ConvertingintoStr
}

var String1 =  'Khan Maheebullah'
let  WholestringReversed = ReverseEachWord(String1, '')

let EachwordReverse = ReverseEachWord(WholestringReversed, ' ')
console.log(EachwordReverse)

// var Reverse = str.split('').reverse().join('')
// var Eachrev = Reverse.split(' ').reverse().join(' ')
// console.log(Eachrev)