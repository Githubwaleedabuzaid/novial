let s = document.getElementById("stars")
let m = document.getElementById("moon")
let m3 = document.getElementById("three")
let m4 = document.getElementById("foure")
let r = document.getElementById("river")
let b = document.getElementById("boat")
let novial = document.querySelector(".novial")
window.onscroll= function(){
    let value = scrollY;
    s.style.left=value+"px"
    m.style.top=value*3 +"px"
    m3.style.top=value*0.8 +"px"
    m4.style.top=value*0.5 +"px"
    r.style.top=value +"px"
    b.style.top=value +"px"
    b.style.left=value*2 +"px"
    novial.style.fontSize=value +"px"
    if(scrollY>=50){
        novial.style.position="fixed"
    }
    if(scrollY>=200){
        novial.style.display="none"
        novial.style.fontSize="200px"
    }

    if(scrollY>=380){
        novial.style.display="none"
    }
    else{
        novial.style.display="block"
    }
    if(scrollY>=170){
        document.querySelector(".main").style.background=" linear-gradient(rgb(61, 154, 182),rgb(18, 50, 71))"
    }
    if(scrollY<=170){
        document.querySelector(".main").style.background=" linear-gradient(rgb(11, 0, 61),rgb(49, 0, 49))"
    }
}
