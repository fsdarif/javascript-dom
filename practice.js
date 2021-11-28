const parents = document.querySelector('#items');
const children = parents.children;

const divElement = document.createElement('div');
divElement.className = 'red';
divElement.setAttribute('id', 'greenId');
divElement.setAttribute('title', 'created by js');
divElement.innerHTML = "arif"

const container = document.querySelector('.todo-list');
const h2Element = document.querySelector('h2');

container.insertBefore(divElement, h2Element)
container.appendChild(divElement);
container.append(divElement, document.createElement('p'), "Hello World");


// event listener
const header = document.querySelector('#header');
header.addEventListener('click', (event) => {
    
})

const inputElement = document.querySelector('input[type="text"]');
inputElement.addEventListener('blur', (event) => {
     console.log(event.target.value)
})

// form
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    
})
