window.onload = function() {
    const volumeControl = document.getElementById('volumeControl');
    const volumeButton = document.getElementById('volumeButton');
    const particlesCanvas = document.getElementById('particlesCanvas');
    const volumeChangeDisplay = document.getElementById('volumeChangeDisplay');
    const ctx = particlesCanvas.getContext('2d');
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;
    let isDragging = false;
    let initialX = 0;
    let initialY = 0;

    // Set canvas size to screen dimensions
    particlesCanvas.width = screenWidth;
    particlesCanvas.height = screenHeight;

    // Function to generate random number
    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // Function to randomly move volume control
    function randomizeVolumeControl() {
        const newX = random(0, screenWidth - volumeControl.offsetWidth);
        const newY = random(0, screenHeight - volumeControl.offsetHeight);

        volumeControl.style.left = newX + 'px';
        volumeControl.style.top = newY + 'px';
    }

    // Randomly move volume control every 3 seconds
    setInterval(randomizeVolumeControl, 3000);

    class Ball {
        constructor(x, y, radius, color, velocity) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.velocity = velocity;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.closePath();
        }

        update() {
            this.draw();
            this.x += this.velocity.x;
            this.y += this.velocity.y;

            if (this.x + this.radius > screenWidth || this.x - this.radius < 0) {
                this.velocity.x = -this.velocity.x;
            }

            if (this.y + this.radius > screenHeight || this.y - this.radius < 0) {
                this.velocity.y = -this.velocity.y;
            }
        }
    }

    const balls = [];

    for (let i = 0; i < 25; i++) {
        const radius = random(10, 30);
        const x = random(radius, screenWidth - radius);
        const y = random(radius, screenHeight - radius);
        const color = `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`;
        const velocity = {
            x: random(-3, 3),
            y: random(-3, 3)
        };

        balls.push(new Ball(x, y, radius, color, velocity));
    }

    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, screenWidth, screenHeight);

        balls.forEach(ball => {
            ball.update();
        });
    }

    animate();

    // Dragging volume control event listeners remain the same

    // Click movement of volume control
    volumeButton.addEventListener('click', function(event) {
        const newX = random(0, screenWidth - volumeControl.offsetWidth);
        const newY = random(0, screenHeight - volumeControl.offsetHeight);

        volumeControl.style.left = newX + 'px';
        volumeControl.style.top = newY + 'px';

        // Update volume change display
        volumeChangeDisplay.innerText = `Volume changed to (${newX}, ${newY})`;
        volumeChangeDisplay.style.display = 'block';

        // Hide volume change display after 2 seconds
        setTimeout(function() {
            volumeChangeDisplay.style.display = 'none';
        }, 2000);
    });
};
