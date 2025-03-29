let button = document.getElementById("btn")

button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "<b>Supp Bitch Wyd</b> Hope you enjoy!!"
})
button.addEventListener("contextmenu", ()=>{
    alert("Apni had mat bhul")
})
button.addEventListener("keydown", (e)=>{
    console.log(e.key, e.keyCode, s)
})