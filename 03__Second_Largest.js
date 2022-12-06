function SecondLargest(arr){
    let largest = -1234567
    let SecondLargest = -1234567

    let i = 0

    if(arr.length < 2){
        return 'Invalid Input'
    }

    for(i = 0 ; i<arr.length ;i++){
        if(arr[i] > largest){
            SecondLargest = largest
            largest = arr[i]
        }
        else if(arr[i] !== largest && arr[i] > SecondLargest){
            SecondLargest = arr[i]
        }
    }
    if(SecondLargest === -1234567){
        return 'No second Largest Value'
    }
    else{
        return SecondLargest
    }
}

var arr = [15]

console.log(SecondLargest(arr))