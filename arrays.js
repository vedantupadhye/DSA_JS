// let arr = [2,4,54,32]

//Adds the element to the start of the array - unshift
// arr.unshift(1)
 


//Filter only returns the elements that satisfy the condition
// if no filter then will return the existing array 
// var newArr = arr.filter((i)=>{
//     return i > 10
// })

// var newMap = arr.map((i)=>{
//     return i+10
// })


// Reduce ->  
// console.log(newMap)


// const nums = [1,3,5,7,9]
// const nums2 = [2,4,6,8,10]


// const finalNums = [nums,...nums2]
// console.log(finalNums)


// Second Largest 
arr = [4,8,12,10,9,4]

function largest(arr){
   const uniqueArr =  Array.from(new Set(arr))
   uniqueArr.sort((a,b) =>{
    return b-a
   })

   if(uniqueArr.length >= 1){
    return uniqueArr[1]
   }else{
    return "Array is empty"
   }
  
}

console.log(largest(arr))

// Rotate array by K 
arr = [1,2,3,4,5]

function rotate(arr,k){
   let n = arr.length
 
   if(n===0 || k%n === 0){
      return arr
   }

   k = k%n;
   let temp = new Array(n);
   for(let i=0;i<n;i++){
      temp[(i+k)%n] = arr[i]

   }
   return temp
}

console.log(rotate(arr,2))