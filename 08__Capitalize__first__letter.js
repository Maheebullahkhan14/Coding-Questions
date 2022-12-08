function CapitalizeFirstletter(string){
    let arr = string.split(' ')
    let len = arr.length

    for(let i = 0 ; i< len ; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
    }
    const newstr = arr.join(' ')
    console.log(newstr)
}


var str = 'hello i am Khan Maheebullah'
// console.log(str)
CapitalizeFirstletter(str)