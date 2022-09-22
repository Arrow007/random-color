let body = document.querySelector('body');
let heading = document.querySelector('#color');
let button = document.querySelector('#random');

button.addEventListener('click', () => {
    let red = Math.floor((Math.random() * 255) + 1);
    let green = Math.floor((Math.random() * 255) + 1);
    let blue = Math.floor((Math.random() * 255) + 1);
    let color = `rgb(${red}, ${green}, ${blue})`;
    let inverse = `rgb(${Math.abs(red - 255)}, ${Math.abs(green - 255)}, ${Math.abs(blue - 255)})`;
    body.style.backgroundColor = color;
    heading.innerHTML = color;
    heading.style.color = inverse;
    button.style.backgroundColor = inverse;
    button.style.color = color;
});