const  button= document.querySelector("#button")
const disclaimer= document.querySelector("#disclaimer")

const onClick=function( ) {
 disclaimer.innerHTML = "Buy some and try it out."

}

button.addEventListener("click", onClick)

document.addEventListener("DOMContentLoaded", function () {
    const toggleSwitch = document.getElementById("toggleSwitch");

    toggleSwitch.addEventListener("change", function () {
        if (this.checked) {
            console.log("Switch is ON");
        } else {
            console.log("Switch is OFF");
        }
    });
});
