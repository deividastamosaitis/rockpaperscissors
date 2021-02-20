const game = () => {
  let pScore = 0;
  let cScore = 0;

  const intro = () => {
    const playBtn = document.querySelector(".intro button");
    const intro = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      intro.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };

  const playGame = () => {
    const options = document.querySelectorAll(".options button");
    const computerHand = document.querySelector(".computer-hand");
    const playerHand = document.querySelector(".player-hand");
    const computerOptions = ["Rock", "Paper", "Scissors"];
    options.forEach((option) => {
      option.addEventListener("click", function () {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        compareHands(this.textContent, computerChoice);
        playerHand.src = `./assets/img/${this.textContent}.png`;
        computerHand.src = `./assets/img/${computerChoice}.png`;
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };
  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector(".winner");

    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie!";
      return;
    }
    if (playerChoice === "Rock") {
      if (computerChoice === "Scissors") {
        winner.textContent = "You win";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You lose";
        cScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "Paper") {
      if (computerChoice === "Scissors") {
        winner.textContent = "You lose";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You win";
        pScore++;
        updateScore();
        return;
      }
    }
    if (playerChoice === "Scissors") {
      if (computerChoice === "Rock") {
        winner.textContent = "You lose";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "You win";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  intro();
  playGame();
};

game();
