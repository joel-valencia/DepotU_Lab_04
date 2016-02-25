document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    button.textContent = 'press';
    button.id = 'my-button';
    document.body.appendChild(button)
    button.onclick = createSquare;
});

function createSquare() {
    var square = document.createElement('div');
    square.className = 'square';
    square.id = document.getElementsByClassName('square').length;
    document.body.appendChild(square);
    square.onmouseover = function() {
        square.textContent = square.id;
    };
    square.onmouseout = function() {
        square.textContent = "";
    };
}