// Input: nums = [0, 1, 0, 3, 12];
// Output: [1, 3, 12, 0, 0]; I

// const nums = [3, 1, 2, 3, 12];
// const nums = [3, 1, 2, 3, 12, 0, 0];

function SendZeroesToEnd(arr){
    let CountZeroes = 0

    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i] === 0){
            arr.splice(i,1)
            CountZeroes++
            i--
        }
    }
    for(let i = 0 ; i< CountZeroes ; i++){
        arr.push(0)
    }
    return arr
}

let arr = [66, 0, 21, 4, 0, 6, 0,2,0 ,0]

console.log(SendZeroesToEnd(arr))