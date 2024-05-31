let score = 0;
let timeLeft = 10;
let timer;

document.getElementById('clickButton').disabled = true;

document.getElementById('clickButton').addEventListener('click', () => {
    score++;
    document.getElementById('score').textContent = score;
});

document.getElementById('startButton').addEventListener('click', () => {
    score = 0;
    timeLeft = 10;
    document.getElementById('score').textContent = score;
    document.getElementById('time').textContent = timeLeft;

    document.getElementById('clickButton').disabled = false;
    document.getElementById('startButton').disabled = true;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById('time').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById('clickButton').disabled = true;
            document.getElementById('startButton').disabled = false;
            alert(`Time's up! Your score is: ${score}`);
        }
    }, 1000);
});
