const  button= document.querySelector("#button")
const disclaimer= document.querySelector("#disclaimer")

const onClick=function( ) {
 disclaimer.innerHTML = "Buy some and try it out."

}

button.addEventListener("click", onClick)