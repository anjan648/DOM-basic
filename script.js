const myBody = document.body;
const box2 = document.getElementById('box-2');
console.log(box2)

const divs = document.getElementsByTagName('div');
console.log(divs)

const random = document.querySelector('.container .random')
console.log(random);
random.innerHTML = "<h1>Hello </h1>"

box2.style.backgroundColor= "red";

box2.classList.add('round-2')

const newParagraph = document.createElement("p");
newParagraph.innerText = "This is brand new"
const container = document.getElementById('container');
container.appendChild(newParagraph)