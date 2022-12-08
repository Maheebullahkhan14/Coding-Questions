function LongestWord(string){
    let arr = string.split(' ')
    let Longest = ''
    
    for(let index = 0 ; index < arr.length; index++){
        if(arr[index].length > Longest.length){
            Longest = arr[index]
        }
    }
    return Longest
}

let str = 'hed is a goosdsdsssd Man butsdsd  not Smart'

console.log(LongestWord(str))