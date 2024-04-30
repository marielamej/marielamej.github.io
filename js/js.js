window.onload = function() {
    const volumeControl = document.getElementById('volumeControl');
    const volumeButton = document.getElementById('volumeButton');
    const volumeIcon = document.getElementById('volumeIcon');
    const volumeIndicator = document.getElementById('volumeIndicator');
    const volumePercentage = document.getElementById('volumePercentage');
    const particlesCanvas = document.getElementById('particlesCanvas');
    const ctx = particlesCanvas.getContext('2d');
    const particles = [];
    let screenWidth = window.innerWidth;
    let screenHeight = window.innerHeight;

    // Set canvas size to screen dimensions
    particlesCanvas.width = screenWidth;
    particlesCanvas.height = screenHeight;

    // Function to create particles
    function createParticle(x, y) {
        const particle = {
            x: x,
            y: y,
            radius: Math.random() * 3 + 1,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
            velocity: {
                x: (Math.random() - 0.5) * 5,
                y: (Math.random() - 0.5) * 5
            },
            life: 50
        };
        particles.push(particle);
    }

    // Function to update particles
    function updateParticles() {
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            p.x += p.velocity.x;
            p.y += p.velocity.y;
            p.life--;

            // Remove dead particles
            if (p.life <= 0) {
                particles.splice(i, 1);
                i--;
            }
        }
    }

    // Function to draw particles
    function drawParticles() {
        for (let i = 0; i < particles.length; i++) {
            const p = particles[i];
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        }
    }

    // Function to randomly reposition the volume control
    function randomizePosition() {
        const newX = Math.random() * (screenWidth - volumeControl.offsetWidth);
        const newY = Math.random() * (screenHeight - volumeControl.offsetHeight);

        volumeControl.style.left = newX + 'px';
        volumeControl.style.top = newY + 'px';
    }

    // Initially position the volume control randomly
    randomizePosition();

    // Re-randomize position on button click
    volumeButton.addEventListener('click', function() {
        // Recalculate screen dimensions in case of window resize
        screenWidth = window.innerWidth;
        screenHeight = window.innerHeight;
        randomizePosition();
    });

    // Randomly move volume control every 5 seconds
    setInterval(randomizePosition, 5000);

    // Dragging volume control
    let isDragging = false;
    let initialX = 0;
    let initialY = 0;

    volumeButton.addEventListener('mousedown', function(event) {
        isDragging = true;
        initialX = event.clientX;
        initialY = event.clientY;
    });

    document.addEventListener('mousemove', function(event) {
        if (isDragging) {
            const offsetX = event.clientX - initialX;
            const offsetY = event.clientY - initialY;

            const newX = volumeControl.offsetLeft + offsetX;
            const newY = volumeControl.offsetTop + offsetY;

            volumeControl.style.left = newX + 'px';
            volumeControl.style.top = newY + 'px';

            // Create particles at the volume control's position
            createParticle(newX + volumeControl.offsetWidth / 2, newY + volumeControl.offsetHeight / 2);

            // Calculate and display volume change percentage
            const volumePercentageX = Math.round((newX / (screenWidth - volumeControl.offsetWidth)) * 100);
            const volumePercentageY = Math.round((newY / (screenHeight - volumeControl.offsetHeight)) * 100);
            volumeIndicator.innerText = `Volume X: ${volumePercentageX}%, Volume Y: ${volumePercentageY}%`;
            volumePercentage.innerText = `Volume: ${volumePercentageX}%`;

            initialX = event.clientX;
            initialY = event.clientY;
        }
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
    });

    // Show volume indicator on hover
    volumeButton.addEventListener('mouseenter', function() {
        volumeIndicator.style.display = 'block';
        volumePercentage.style.display = 'block';
        setTimeout(function() {
            volumeIndicator.style.opacity = '1';
            volumePercentage.style.opacity = '1';
        }, 50); // Delay to ensure smooth transition
    });

    // Hide volume indicator on mouse leave
    volumeButton.addEventListener('mouseleave', function() {
        volumeIndicator.style.opacity = '0';
        volumePercentage.style.opacity = '0';
        setTimeout(function() {
            volumeIndicator.style.display = 'none';
            volumePercentage.style.display = 'none';
        }, 300); // Delay to allow the fade-out animation
    });

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, screenWidth, screenHeight);
        updateParticles();
        drawParticles();
        requestAnimationFrame(animate);
    }
    animate();
};
