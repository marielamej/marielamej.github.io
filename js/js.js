document.addEventListener("DOMContentLoaded", function () {
    const holes = document.querySelectorAll(".hole");
    const startButton = document.getElementById("startButton");
    const endButton = document.getElementById("endButton");
    const volumeDisplay = document.getElementById("volume");
    const timerDisplay = document.getElementById("timer");

    let timer;
    let volume = 0;
    let countdown;
    let moleInterval;
    let volumeFluctuationInterval;
    let targetVolume = 50; // Initial target volume level

    // Set the initial state to game over
    let gameOver = true;

    function comeout() {
        holes.forEach(hole => {
            hole.classList.remove('mole');
            hole.removeEventListener('click', handleMoleClick);
        });

        let random = holes[Math.floor(Math.random() * 9)];

        random.classList.add('mole');
        random.addEventListener('click', handleMoleClick);
    }

    function handleMoleClick() {
        if (!gameOver) {
            fluctuateVolume(); // Fluctuate volume
            volumeDisplay.textContent = `Volume: ${volume}`; // Update volume display
            setTargetVolume(); // Update target volume
        }
        this.classList.remove('mole'); // Remove mole from the clicked hole
    }

    function fluctuateVolume() {
        const change = Math.floor(Math.random() * 101); // Random change between 0 and 100
        volume = change; // Update volume with the random change
    }

    function setTargetVolume() {
        targetVolume = Math.floor(Math.random() * 101); // Set a new random target volume
    }

    function startGame() {
        if (!gameOver) {
            return;
        }

        gameOver = false;
        volume = 50; // Reset volume to default
        volumeDisplay.textContent = `Volume: ${volume}`;
        timer = 45;
        timerDisplay.textContent = `Time: ${timer}s`;

        startButton.disabled = true;
        endButton.disabled = false;

        countdown = setInterval(() => {
            timer--;
            timerDisplay.textContent = `Time: ${timer}s`;

            if (timer <= 0) {
                clearInterval(countdown);
                clearInterval(volumeFluctuationInterval);
                gameOver = true;
                alert(`Game Over!\nFinal Volume: ${volume}`);
                startButton.disabled = false;
                endButton.disabled = true;
            }
        }, 1000);

        moleInterval = setInterval(() => {
            if (!gameOver) comeout();
        }, 1000);

        volumeFluctuationInterval = setInterval(fluctuateVolume, 100); // Fluctuate volume every 100ms
    }

    function endGame() {
        clearInterval(countdown);
        clearInterval(moleInterval);
        clearInterval(volumeFluctuationInterval);
        gameOver = true;
        alert(`Volume has been set!\nFinal Volume: ${volume}`);
        volume = 50; // Reset volume to default
        volumeDisplay.textContent = `Volume: ${volume}`;
        timer = 45;
        timerDisplay.textContent = `Time: ${timer}s`;
        startButton.disabled = false;
        endButton.disabled = true;
    }

    startButton.addEventListener("click", startGame);
    endButton.addEventListener("click", endGame);
});
