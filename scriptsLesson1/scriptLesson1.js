const myPow = (num, rec) => {
    return rec > 1 ? num * myPow(num, rec - 1) : num
}

console.log(myPow(2, 4))

const myFact = (num) => {
    return num > 1 ? num * myFact(num - 1) : num
}

console.log(myFact(4))