function showMessage() {
  const message = "🎈 I love you, Ho! 🎂";
  const element = document.getElementById("hiddenMessage");
  element.innerHTML = "";
  element.style.display = "block";

  let index = 0;
  function typeWriter() {
    if (index < message.length) {
      element.innerHTML += message.charAt(index);
      index++;
      setTimeout(typeWriter, 50); // typing speed
    }
  }

  // 👇 Play the birthday sound!
  const birthdaySound = new Audio('birthday.mp3');
  birthdaySound.play();
  
  typeWriter();
  startGame();
  startBalloons();
  confettiExplosion();
}

let score = 0;

function startGame() {
  const cake = document.getElementById("cake");
  cake.innerText = "🍰";

  moveCake();
  cake.onclick = () => {
    score++;
    document.getElementById("score").innerText = score;
    moveCake();
  };
}

function moveCake() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);
  const cake = document.getElementById("cake");
  cake.style.left = `${x}px`;
  cake.style.top = `${y}px`;
}

function createBalloon() {
  const balloon = document.createElement("div");
  balloon.classList.add("balloon");
  balloon.innerText = "🎈";

  const left = Math.random() * 90;
  balloon.style.left = `${left}%`;

  document.body.appendChild(balloon);

  const popSound = new Audio('pop.mp3');
  popSound.volume = 0.3;
  popSound.play();

  setTimeout(() => {
    balloon.remove();
  }, 6000);
}

function startBalloons() {
  for (let i = 0; i < 10; i++) {
    setTimeout(createBalloon, i * 500);
  }
}

function confettiExplosion() {
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
}

function generateCard() {
  const messages = [
    "🎁 You light up every room, Tlotlo!",
    "💫 May all your dreams come true this year.",
    "🎂 You deserve all the cake and love today!",
    "🎉 Sending hugs and sparkles your way!",
    "🌈 Keep being the amazing YOU!"
  ];
  const random = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById("cardMessage").innerText = random;
}
