let score = 0;
let timeLeft = 30;
let gameInterval;
let ballSpawner;
let ballIntervalTime = null;

const scoreElement = document.getElementById('score');
const timerElement = document.getElementById('timer');
const ballsContainer = document.getElementById('balls-container');
const difficultySelect = document.getElementById('difficulty');
const startBtn = document.getElementById('start-btn');

// Sons
const soundClick = document.getElementById('sound-click');
const soundHover = document.getElementById('sound-hover');
const soundKey = document.getElementById('sound-key');

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function generateBall() {
  const ball = document.createElement('div');
  ball.classList.add('ball');

  const types = ['blue', 'pink', 'green'];
  const type = types[Math.floor(Math.random() * types.length)];
  ball.classList.add(type);

  const maxX = ballsContainer.clientWidth - 50;
  const maxY = ballsContainer.clientHeight - 50;
  ball.style.left = Math.random() * maxX + 'px';
  ball.style.top = Math.random() * maxY + 'px';

  ballsContainer.appendChild(ball);

  if (type === 'blue') {
    ball.addEventListener('click', () => {
      playSound(soundClick);
      removeBall(ball);
    });
  } else if (type === 'pink') {
    ball.addEventListener('mouseenter', () => {
      playSound(soundHover);
      removeBall(ball);
    });
  }
}

function removeBall(ball) {
  ball.classList.add('remove');
  setTimeout(() => ball.remove(), 300);
  score++;
  updateScore();
}

function updateScore() {
  scoreElement.textContent = 'Pontuação: ' + score;
}

function updateTimer() {
  timerElement.textContent = 'Tempo: ' + timeLeft + 's';
  if (timeLeft <= 0) {
    clearInterval(gameInterval);
    clearInterval(ballSpawner);
    alert('Fim do jogo! Pontuação: ' + score);
  } else {
    timeLeft--;
  }
}

function startGame() {
  const selectedDifficulty = difficultySelect.value;
  if (!selectedDifficulty) {
    alert('Selecione uma dificuldade!');
    return;
  }

  ballIntervalTime = parseInt(selectedDifficulty);

  score = 0;
  timeLeft = 30;
  updateScore();
  updateTimer();
  ballsContainer.innerHTML = '';

  clearInterval(gameInterval);
  clearInterval(ballSpawner);

  gameInterval = setInterval(updateTimer, 1000);
  ballSpawner = setInterval(generateBall, ballIntervalTime);
}

document.addEventListener('keydown', (e) => {
  if (e.key.toLowerCase() === 'd') {
    const greenBall = document.querySelector('.green');
    if (greenBall) {
      playSound(soundKey);
      removeBall(greenBall);
    }
  }
});

startBtn.addEventListener('click', startGame);
