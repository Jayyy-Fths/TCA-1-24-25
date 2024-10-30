function setcolor(color) {
    document.body.style.backgroundColor = color;
}

function randomColor() {
    const colors = ['green', 'red', 'blue', 'yellow', 'purple', 'orange'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomIndex];
}
