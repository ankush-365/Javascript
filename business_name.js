let adjective = [
    {adj: "Crazy", val: '0'},
    {adj: "Amazing", val: '1'},
    {adj: "Fire", val: '2'},
]
let shop = [
    {name: "Engine", value: '0'},
    {name: "Foods", value: '1'},
    {name: "Garments", value: '2'},
]
let word = [
    {wrd: "Bros", num: '0'},
    {wrd: "Limited", num: '1'},
    {wrd: "Hub", num: '2'},
]

c= Math.floor((Math.random()*3))
a= Math.floor((Math.random()*3))
b= Math.floor((Math.random()*3))
console.log(c)
console.log(b)
console.log(a)


d = adjective[c].adj;
e = shop[b].name;
f = word[a].wrd;

console.log(d.concat(e,f))
