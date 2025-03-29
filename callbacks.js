console.log("ANkususcis")
console.log("jjdkjkjdj")


const callback = (arg)=>{
    console.log("this is a callback function")
    console.log(arg)
}

const loadscript = (src , callback)=>{
    let sc = document.createElement("script")
    sc.onload = callback("Something")
    document.head.append(sc)
}

loadscript("https://images.pexels.com/photos/249798/pexels-photo-249798.png?auto=compress&cs=tinysrgb&w=600",callback )

setTimeout(() => {
    console.log("Set timeout")
}, 2000);

setTimeout(() => {
    console.log("Set timeout 2")
}, 3000);
