console.log("test");

var docBody = document.querySelector('body');

document.getElementById('orange').addEventListener('click', function(){
    docBody.style.backgroundColor = '#ff9a00';
});

document.getElementById('pink').addEventListener('click', function(){
    docBody.style.backgroundColor = '#ff165d';
});
