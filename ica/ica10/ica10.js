//const buttons = document.querySelectorAll("button");
//console.log(button)

//for (const button in buttons) {
    //button.addEventListener('click', changeText);
//}
//button.addEventListener('click', changeText);

const button1 = document.querySelector(".button1");
button1.addEventListener('click', changeText);

//const button2 = document.querySelector("#button2");
const button2 = document.getElementById("button2");
button2.addEventListener('click', changeColor);

const heading = document.querySelector("h1")

function changeText() {
    // alert('test successful!');
    const head = prompt("tell me a secret");
    heading.textContent = head;

}

function changeColor() {
    const newColor = prompt("Enter a new color: ");
    document.body.style.backgroundColor = newColor;
}