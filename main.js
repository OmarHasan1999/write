let project = document.querySelector('.project');
let firstButton = document.querySelector('.firstButton');
let close = document.querySelector('.close');


firstButton.addEventListener('click',() => {
    project.classList.add('new');
})
close.addEventListener('click',() => {
    project.classList.remove("new");
})
