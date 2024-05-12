// script.js
document.addEventListener('DOMContentLoaded', function() {
    const rectangle = document.getElementById('rectangle');

    // Create grid squares
    for (let i = 0; i < 20; i++) {  // 4 rows * 5 columns = 20 squares
        let div = document.createElement('div');
        div.style.backgroundColor = 'black';
        rectangle.appendChild(div);
    }

    let secondsPassed = 0;
    const interval = setInterval(() => {
        if (secondsPassed < 45) {
            let randomIndex = Math.floor(Math.random() * rectangle.children.length);
            rectangle.children[randomIndex].style.backgroundColor = 'transparent';
            secondsPassed++;
        } else {
            clearInterval(interval);
            console.log('Complete: The rectangle is now fully see-through.');
        }
    }, 1000);
});
