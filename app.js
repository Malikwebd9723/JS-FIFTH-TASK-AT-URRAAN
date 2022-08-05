const interval = setInterval(bubble, 500);
function bubble(){
    const bubbleBox = document.querySelector('.bubbleBox');
    const bubbles = document.createElement('span');
    bubbleBox.appendChild(bubbles);

    const size = 50 + (Math.random()* 50);
    bubbles.style.width = size + "px";
    bubbles.style.height = size + "px";
    bubbles.style.left = Math.random() * innerWidth + "px";
    }
    