console.log("test");

var docBody = document.querySelector('body');
let backgroundColor = localStorage.getItem('backgroundColor');
docBody.style.backgroundColor = backgroundColor;


document.getElementById('orange').addEventListener('click', function(){
    localStorage.setItem('backgroundColor', '#ff9a00');
    backgroundColor = localStorage.getItem('backgroundColor');
    docBody.style.backgroundColor = backgroundColor;
});

document.getElementById('pink').addEventListener('click', function(){
    localStorage.setItem('backgroundColor', '#ff165d');
    backgroundColor = localStorage.getItem('backgroundColor');
    docBody.style.backgroundColor = backgroundColor;
});
