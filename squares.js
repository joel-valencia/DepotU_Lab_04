document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    button.textContent = 'press';
    button.id = 'my-button';
    document.body.appendChild(button)
    document.getElementById('my-button').onclick = squares;
});

function squares() {
    var square = document.createElement('div');
    square.className = 'square';
    square.id = document.getElementsByClassName('square').length;
    document.body.appendChild(square);
}