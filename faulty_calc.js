let a = prompt("Enter value ")
let b = prompt("Enter value ")
let c = prompt("Enter operation")
let random = Math.random()
let obj = {
    "+": "-",
    "*": "/",
    "/": "**"
}

if(random>0.1){~
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
else{
    c = obj[c];
    alert(`The result is ${eval(`${a} ${c} ${b}`)}`)
}
