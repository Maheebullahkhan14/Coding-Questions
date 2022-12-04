// missingNumbers([1, 2, 4, 5, 7]);
// // [3, 6]

function findMissingNumber(arr){
    let MissingArr = []

    let MinVal = Math.min(...arr)
    let MaxVal = Math.max(...arr)

    for(let i = MinVal ; i < MaxVal ; i++){
        if(arr.indexOf(i) < 0){
            MissingArr.push(i)
        }
    }
    return MissingArr
}

var arr = [-3 ,1 ,3]
console.log(findMissingNumber(arr))

// 1) Find the Min Value and Max Value in an Array
//     and initialise Empty array

// 2) using for loop iterate through an array

// 3) if indexof current Element is less then zero then add 
// that into missingArray
	



