let arr = [1,23,53,5,12,45]

for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log(element);
}

arr.forEach((value , index , arr)=>{
    console.log(value , index, arr);
})

let word ={
    a:1,
    b:2,
    c:3
}

for (const key in word) {
    if (Object.prototype.hasOwnProperty.call(word, key)) {
        const element = word[key];
        console.log(key,element)
    }
}
for (const element of arr) {
    console.log(element)
}

let newArr = arr.map(e=>{
    return e**2;
})
console.log(newArr)
console.log(arr)

const greaterThanHundred = (e=>{
    if(e>10){
        return true
    }
    return false
})
console.log(arr.filter(greaterThanHundred))



