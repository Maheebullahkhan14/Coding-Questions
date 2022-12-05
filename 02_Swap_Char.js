function Swap(value){
    const ValLength = value.length
    if(ValLength < 2){
        return value
    }

    return value.charAt(ValLength - 1)+ value.substring(1,ValLength-1) + value.charAt(0)
}

console.log(Swap('king'))
console.log(Swap('k'))
console.log(Swap(''))

