document.addEventListener('DOMContentLoaded', function() {
    var button = document.createElement('button');
    button.textContent = 'press';
    button.id = 'my-button';
    document.body.appendChild(button)
    button.onclick = createSquare;
    
    var container = document.createElement('div');
    container.id = 'container';
    document.body.appendChild(container);
});

function randomNum() {
    return Math.floor((Math.random() * 150)) + 50;
}

var numSquares = 0;

function createSquare() {
    var square = document.createElement('div');
    square.className = 'square';
    square.id = document.getElementsByClassName('square').length;
    document.getElementById('container').appendChild(square);
    
    square.onmouseover = function() {
        this.textContent = square.id;
    };
    square.onmouseout = function() {
        this.textContent = "";
    };
    square.onclick = function() {
        this.style.backgroundColor = 'rgb(' + randomNum() + ',' + randomNum() + ',' + randomNum() + ')';
    };
    square.ondblclick = function() {

        if(this.id % 2 == 0) {
            var nextSquare = this.nextSibling;
            
            if (nextSquare) {
                nextSquare.parentNode.removeChild(nextSquare);
            } else {
                alert("Next element does not exist");
            };
            
            } else {
                
            var prevSquare = this.previousSibling;
            if (prevSquare) {
                prevSquare.parentNode.removeChild(prevSquare);
            } else {
                alert('Previous element does not exist');
                
            };
        }
    };
}