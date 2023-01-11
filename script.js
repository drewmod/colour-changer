let btn = document.getElementById("button")





let RandColor=()=> {
    //16 digit hex decimal number
    let val = "0123456789ABCDEF";
    // const pound sign
    let cons ="#"
    // to get the six digit we loop our val together with pound 
    
    for(let i=0; i<6; i++){
        cons = cons + val[Math.floor(Math.random()*16)]
 
    }

    return cons
}

console.log(RandColor());

function ChangeColor() {
  document.body.style.backgroundColor = RandColor()  
}

btn.addEventListener("click", ChangeColor)
