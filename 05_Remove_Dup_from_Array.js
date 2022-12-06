function RemoveDup(arr){
    let obj = {}

    for(let i of arr){
        obj[i] = true
    }
    let b = Object.keys(obj).map(Number)
    return b
}

let arr = [4 , 4 ,6 ,8 ,4]

console.log(RemoveDup(arr))