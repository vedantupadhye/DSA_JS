// function sum (num){
//     let totalSum = 0
//     while(num>0){ 
//     let newNum = num%10
//     num = Math.floor(num/10)
//     totalSum += newNum
//     }
//     return totalSum
// }

// console.log(sum(1287
    
// ))
const nums1 = [2, 3, 5,4];
const nums2 = [1, 4, 6];

function mergeArray(nums1, nums2) {
    const copyArr = [...nums1, ...nums2]; // Merge the arrays
    // Sort the array manually using nested loops
    for (let i = 0; i < copyArr.length; i++) {
        for (let j = i + 1; j < copyArr.length; j++) {
            if (copyArr[j] < copyArr[i]) {
                // Swap the elements
                let temp = copyArr[i];
                copyArr[i] = copyArr[j];
                copyArr[j] = temp;
            }
        }
    }
    return copyArr; // Return the sorted array
}

console.log(mergeArray(nums1, nums2));
