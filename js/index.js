// Your code goes here

const busImg = document.querySelector('#fun-bus');
busImg.addEventListener('mouseenter', () => {
    busImg.style.transform = "scale(1.2)";
});
busImg.addEventListener('mouseleave', () => {
    busImg.style.transform = "scale(1)";
});

const links = document.querySelectorAll('.nav-link');
links.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.color = 'red';
    });
});
links.forEach(element => {
    element.addEventListener('mouseleave', () => {
        element.style.color = 'black';
    });
});

const image = document.querySelectorAll('img');
image.forEach(element => {
    element.addEventListener('wheel', () => {
        element.style.transform = 'scale(.5)';
    });
});

const content = document.querySelectorAll('.content-section');
content.forEach(element => {
    element.addEventListener('drag', () => {
        element.style.flexDirection = 'row-reverse';
    });
});

content.forEach(element => {
    element.addEventListener('dragend', () => {
        element.style.flexDirection = 'row';
    });
});

const buttons = document.querySelectorAll('.btn');

buttons[0].addEventListener('click', () => {
    buttons[0].style.backgroundColor = 'red';
});

buttons[1].addEventListener('dblclick', () => {
    buttons[1].style.backgroundColor = 'pink';
});

buttons[2].addEventListener('drag', () => {
    buttons[2].style.backgroundColor = 'blue';
});


const body = document.querySelector('body');

const container = document.querySelector('.home');

const intro = document.querySelector('.intro');


body.addEventListener('click', (event) => {
    body.style.backgroundColor = 'red';
    console.log('body');
    event.stopPropagation();
});

container.addEventListener('click', (event) => {
    container.style.backgroundColor = 'green';
    console.log('container');
    event.stopPropagation();
});

intro.addEventListener('click', (event) => {
    intro.style.backgroundColor = 'yellow';
    console.log('intro');
    event.stopPropagation();
});