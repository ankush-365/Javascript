console.log(document.body.childNodes);
let cont = document.body.childNodes[1];
console.log(cont)
cont.style.backgroundColor = "lightpink"
let boxes = document.getElementsByClassName("box")
console.log(boxes);
// boxes[2].style.backgroundColor = "red";
let container = document.getElementsByClassName("container")
console.log(container)

// document.getElementById("red").style.backgroundColor = "red"

document.querySelectorAll(".box").forEach(e=>{
    e.style.backgroundColor = "blue"
})