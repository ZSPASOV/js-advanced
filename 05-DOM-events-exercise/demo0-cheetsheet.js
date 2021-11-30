// selecting dom elements
const element = document.getElementById('content');
document.querySelector('#content');
document.querySelectorAll('ul li');

// get / set content 
element.textContent;
element.value;

// traversing DOM 
element.parentElement;
element.children;

// create element 
const para = document.createElement('p');

// adding to dom 
element.appendChild(para);

// removing from DOM 
para.remove();

// events 
element.addEventListener('click', e=> {
    console.log(e.target);
});