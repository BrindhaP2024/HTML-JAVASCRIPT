document.addEventListener('DOMContentLoaded', () => {
  const cardArray = [
    { name: 'A', img: '🂡' },
    { name: 'A', img: '🂡' },
    { name: 'B', img: '🂢' },
    { name: 'B', img: '🂢' },
    { name: 'C', img: '🂣' },
    { name: 'C', img: '🂣' },
    { name: 'D', img: '🂤' },
    { name: 'D', img: '🂤' },
    { name: 'E', img: '🂥' },
    { name: 'E', img: '🂥' },
    { name: 'F', img: '🂦' },
    { name: 'F', img: '🂦' },
    { name: 'G', img: '🂧' },
    { name: 'G', img: '🂧' },
    { name: 'H', img: '🂨' },
    { name: 'H', img: '🂨' }
  ];

  cardArray.sort(() => 0.5 - Math.random());

  const gameBoard = document.getElementById('game-board');
  const movesCountElement = document.getElementById('moves-count');
  const timerElement = document.getElementById('timer');
  const resetButton = document.getElementById('reset-button');

  let firstCard, secondCard;
  let hasFlippedCard = false;
  let lockBoard = false;
  let moves = 0;
  let matches = 0;
  let timer;
  let time = 0;

  function createBoard() {
    cardArray.forEach(item => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.dataset.name = item.name;
      card.innerHTML = `
        <div class="card-inner">
          <div class="card-front">${item.img}</div>
          <div class="card-back"></div>
        </div>
      `;
      card.addEventListener('click', flipCard);
      gameBoard.appendChild(card);
    });
  }

  function flipCard() {
    if (lockBoard) return;
    if (this === firstCard) return;

    this.classList.add('flipped');

    if (!hasFlippedCard) {
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    moves++;
    movesCountElement.textContent = `Moves: ${moves}`;

    checkForMatch();
  }

  function checkForMatch() {
    let isMatch = firstCard.dataset.name === secondCard.dataset.name;
    isMatch ? disableCards() : unflipCards();
  }

  function disableCards() {
    firstCard.removeEventListener('click', flipCard);
    secondCard.removeEventListener('click', flipCard);
    matches++;
    if (matches === cardArray.length / 2) {
      clearInterval(timer);
      setTimeout(() => alert(`Congratulations! You've completed the game in ${moves} moves and ${time} seconds!`), 500);
    }
    resetBoard();
  }

  function unflipCards() {
    lockBoard = true;
    setTimeout(() => {
      firstCard.classList.remove('flipped');
      secondCard.classList.remove('flipped');
      resetBoard();
    }, 1500);
  }

  function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

  function startTimer() {
    timer = setInterval(() => {
      time++;
      timerElement.textContent = `Time: ${time}s`;
    }, 1000);
  }

  function resetGame() {
    clearInterval(timer);
    gameBoard.innerHTML = '';
    moves = 0;
    matches = 0;
    time = 0;
    movesCountElement.textContent = `Moves: 0`;
    timerElement.textContent = `Time: 0s`;
    cardArray.sort(() => 0.5 - Math.random());
    createBoard();
    startTimer();
  }

  resetButton.addEventListener('click', resetGame);

  createBoard();
  startTimer();
});
