var isPalindrome = function (x) {
    let reversedStr = ''
    let xStr = x.toString() 
    //xStr = '123'
    for (let i of xStr) {
        reversedStr = i + reversedStr //'
        
    }
    return(reversedStr === xStr)
};

console.log(isPalindrome(-89))