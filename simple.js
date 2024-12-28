function sum (num){
    let totalSum = 0
    while(num>0){ 
    let newNum = num%10
    num = Math.floor(num/10)
    totalSum += newNum
    }
    return totalSum
}

console.log(sum(1287
    
))