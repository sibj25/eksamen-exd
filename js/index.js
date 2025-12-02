"use strict";

// // infoskærm
// const ooux = [
//   {
//     id: "fish-card",
//     objekt: "Fisk (Infokort)",
//     relationer: { åbner: "popup-infoboks", tilhører: "environment" },
//     cta: ["showInfo", "playSound"],
//     attributter: { navn: "", billede: "", fakta: [], lydfil: "" },
//   },
//   {
//     id: "environment",
//     objekt: "environment (Baggrund + elementer)",
//     relationer: { indeholder: ["sten", "koraller", "muslinger", "fish-card"] },
//     cta: [],
//     attributter: { grafik: "", farver: [], animation: "" },
//   },
//   {
//     id: "popup-infoboks",
//     objekt: "Pop-up Infoboks",
//     relationer: { viserInfoOm: "fish-card" },
//     cta: ["playSound", "close"],
//     attributter: { titel: "", tekst: "", lydknap: true, lukkeknap: true },
//   },
//   {
//     id: "menu",
//     objekt: "Menu / Startområde",
//     relationer: { linkerTil: ["spil", "infoscreen"] },
//     cta: ["startGame", "showInfo"],
//     attributter: { knap: "Start" },
//   },
// ];

// Infocards array
const fishCards = [
  {
    fishName: "kejserfisk",
    fishSize: "20-30 cm",
    fishHabitat: "Lever ved koralrev",
    funFact1:
      "Føder sig af svampe og koraller og er kendt for sit farverige udseende.",
    funFact2:
      "Den ægte kejserfisk har en 'maske' over øjnene for at forvirre rovdyr.",
    image: "kejserfisk.gif",
    video: "emperor-animation-novoice.mp4",
  },
  {
    fishName: "klovnfisk",
    fishSize: "Op til 9 cm",
    fishHabitat: "Lever i Stillehavets koralrev i søanemonens tentakler",
    funFact1: "Klovnfisken kan skifte køn, hvis hunnen dør eller forsvinder.",
    funFact2: "Klækker ud som små hanner og hunnerne er større end hannerne.",
    image: "klovnfisk.gif",
    video: "klovnfisk-foley-bubble-true.mp4",
  },
  {
    fishName: "kirurgfisk",
    fishSize: "15-30 cm",
    fishHabitat: "Tropiske koralrev over hele verden",
    funFact1:
      "Har skarpe pigge på haleroden, der ligner kirurgiske skalpeller.",
    funFact2: "Er en farverig revfisk, der svømmer omkring koralrev.",
    image: "kirurgfisk.svg",
    video: "kirurg-animation-novoice.mp4",
  },
  {
    fishName: "pudsefisk",
    fishSize: "Op til 14 cm",
    fishHabitat: "Bor i koralrev",
    funFact1:
      "Spiser parasitter og slim fra andre havdyr og hjælper med at holde dem rene.",
    funFact2:
      "Alle pudsefisk er født som hunner og kan skifte køn, når hannen forsvinder.",
    image: "pudsefisk.svg",
    video: "cleaner-animation-novoice.mp4",
  },
  {
    fishName: "blå-chromis",
    fishSize: "Op til 8 cm",
    fishHabitat: "Koralrev",
    funFact1:
      "Den har en klar blå farve med sort stribe langs ryggen og forkedlet hale.",
    funFact2: "Lever hovedsageligt af små planktonorganismer.",
    image: "chromis.gif",
    video: "chromis-animation-novoice.mp4",
  },
  {
    fishName: "rævefjæs",
    fishSize: "Op til 25 cm",
    fishHabitat: "Koralrev",
    funFact1: "Kendes på sin gul-orange krop og sort/hvide hoved.",
    funFact2: "Har svagt giftige pigstråler i ryggen som forsvar.",
    image: "raevefisk.gif",
    video: "foxface-animatio-novoice.mp4",
  },
  {
    fishName: "sandspiser-gobi",
    fishSize: "5-8 cm",
    fishHabitat: "Sandbund ved koralrev",
    funFact1: "Kendt for at 'spise' sand for at finde føde.",
    funFact2: "Holder havbunden ren ved at filtrere sandet.",
    image: "gobi.svg",
    video: "sandspiser-animation-novoice.mp4",
  },
  {
    fishName: "kuglefisk",
    fishSize: "30-35 cm",
    fishHabitat: "Tropiske have og koralrev",
    funFact1: "Kan puste sig op til en kugle som forsvar.",
    funFact2: "Har fire tænder og knuser skaller fra krebsdyr og bløddyr.",
    image: "kuglefisk.svg",
    video: "kugle-animation-novoice.mp4",
  },
];

const gameScreen = document.getElementById("gameScreen");
const infoScreen = document.getElementById("infoScreen");
const fishContainer = document.getElementById("infoScreen");

// placering af fiskene på infoskærm

const positions = {
  kejserfisk: { left: "10%", top: "20%" },
  klovnefisk: { left: "45%", top: "40%" },
  kirurgfisk: { left: "65%", top: "40%" },
  pudsefisk: { left: "25%", top: "64%" },
  "blå-chromis": { left: "75%", top: "10%" },
  rævefjæs: { left: "70%", top: "76%" },
  "sandspiser-gobi": { left: "10%", top: "98%" },
  kuglefisk: { left: "80%", top: "60%" },
};

const modal = document.getElementById("fishModal");
const closeModal = document.getElementById("closeModal");
const modalName = document.getElementById("modalName");
const modalVideo = document.getElementById("modalVideo");
const modalSize = document.getElementById("modalSize");
const modalFact1 = document.getElementById("modalFact1");
const modalFact2 = document.getElementById("modalFact2");

fishCards.forEach((fish) => {
  const card = document.createElement("div");
  card.classList.add("fishCard");
  card.classList.add(fish.fishName);

  card.style.position = "absolute";
  card.style.left = positions[fish.fishName]?.left || "50%";
  card.style.top = positions[fish.fishName]?.top || "50%";

  card.innerHTML = `
    <img src="img/${fish.image}" alt="${fish.fishName}" />
  `;

  card.addEventListener("click", () => {
    modalName.textContent = fish.fishName;
    modalVideo.src = `video/${fish.video}`;
    modalSize.textContent = fish.fishSize;
    modalFact1.textContent = fish.funFact1;
    modalFact2.textContent = fish.funFact2;
    modal.classList.remove("hidden");
  });

  fishContainer.appendChild(card);
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
  modalVideo.pause();
  modalVideo.currentTime = 0;
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
      modalVideo.pause();
      modalVideo.currentTime = 0;
    modal.classList.add("hidden");
  }
});

/* // character selection
const characterContainer = document.querySelector(".characterContainer");
characters.forEach((fish, index) => {
  const option = document.createElement("div"); // laver et nyt div-element
  option.classList.add("characterOption"); // giver det klassen
  option.innerHTML = `
    <img src="img/${fish.image}" alt="${fish.characName}">
    <p>${fish.characName}</p>
  `;

  option.addEventListener("click", () => {
    selectedFishIndex = index;
    document
      .querySelectorAll(".characterOption")
      .forEach((opt) => opt.classList.remove("selected"));
    option.classList.add("selected");
    console.log(`Du valgte: ${fish.characName}`);
  });

  characterContainer.appendChild(option); // tilføj til HTML’en
});
 */

/* // Spillet

// dom-manipulation til game setup
const canvas = document.getElementById("gameCanvas");

// Gør spillet 2d :)
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;

let points = 0;
let gameRunning = false;
let stars = [];
let fishX = canvas.width / 2 - 25; // i midten af canvaset
let fishY = canvas.height - 300; // lidt over bunden sådan ja kan altid justeresr
let fishWidth = 200;
let fishHeight = 200;
let fishSpeed = 6;
let starInterval;
let lastStarTime = 0;
let starSpawnDelay = 1000;
let isGameOver = false;

const fishImg = new Image();
const starImg = new Image();
starImg.src = "img/points.svg";

// ---------- SPILLE FUNKTIONER-----------
// laver stjerner
function createStar() {
  const spawnWidth = canvas.width * 0.2; // Width hvor stjerner kan spawne
  const minX = canvas.width / 2 - spawnWidth / 2;
  const x = minX + Math.random() * spawnWidth - 10; // Gør at stjernen er i midten
  stars.push({ x, y, size: 20 });
}

// tegner fisken (gif) + array skal opdateres :=)
function drawFish() {
  ctx.drawImage(fishImg, fishX, fishY, fishWidth, fishHeight); // vi tager fat i let variablerne ovenover her og vores fishImg const :)
}

// tegner spillet
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // rydder skærmen hver frame

  drawFish();

  // tegn stjerner
  stars.forEach((star) => {
    ctx.drawImage(starImg, star.x, star.y, star.size, star.size);
  });

  // opdater score
  ctx.fillStyle = "black";
  ctx.font = "20px Mali";
  ctx.fillText(`${points}`, 20, 30);
}

// får stjerner til at bevæge sig nedad skærmen
function updateStars() {
  stars.forEach((star) => {
    star.y += 3;

    // Hvis stjerne rammer bunden → game over
    if (star.y + star.size >= canvas.height) {
      gameOver();
    }
  });

  // Behold kun stjerner der stadig er på skærmen
  stars = stars.filter((star) => star.y < canvas.height + 20);
}

// her tjekkes om en fisk rammer en stjerne
function checkCollision() {
  stars.forEach((star, i) => {
    if (
      fishX < star.x + star.size &&
      fishX + fishWidth > star.x &&
      fishY < star.y + star.size &&
      fishY + fishHeight > star.y
    ) {
      stars.splice(i, 1); // her fjernes stjernen, hvis der er collision
      points++; // giver pointsssss
      soundCoin.play();
    }
  });
}

function gameOver() {
  if (isGameOver) return; // stop dobbelte game over
  isGameOver = true;
  gameRunning = false;

  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "white";
  ctx.font = "20px Mali";
  ctx.fillText("Av av, du har tabt", canvas.width / 2 - 110, canvas.height / 2);
  ctx.font = "10px Mali";
  ctx.fillText(
    "Tryk 'Tilbage til menu' for at starte igen",
    canvas.width / 2 - 120,
    canvas.height / 2 + 40
  );
  ctx.restore();
  cancelAnimationFrame(animationFrameId); // stop den næste frame helt
}

// looper bare spillet igennem
function gameLoop(timestamp) {
  if (!gameRunning) return;

  // Spawn en stjerne hver 1000 ms
  if (timestamp - lastStarTime > starSpawnDelay) {
    createStar();
    lastStarTime = timestamp;
  }

  updateStars();
  checkCollision();
  draw();

  requestAnimationFrame(gameLoop);
}

// lille smule eventlisteners
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft" && fishX > 0) fishX -= fishSpeed;
  if (e.key === "ArrowRight" && fishX < canvas.width - fishWidth)
    fishX += fishSpeed;
});

// OG til touch så vi kan teste begge: https://smmathias.github.io/exd-project-storcenter-nord/

// Tilføj touch-styring
let touchX = null;

canvas.addEventListener("touchstart", (e) => {
  touchX = e.touches[0].clientX;
});

canvas.addEventListener("touchmove", (e) => {
  const newTouchX = e.touches[0].clientX;
  const diff = newTouchX - touchX;

  // Flyt fisken vandret
  fishX += diff * 0.5; // multiplier styrer følsomheden
  touchX = newTouchX;

  // Begræns fisken så den ikke går udenfor canvas
  if (fishX < 0) fishX = 0;
  if (fishX > canvas.width - fishWidth) fishX = canvas.width - fishWidth;
});

function startGame() {
  // Stop alt eksisterende før nyt spil
  gameRunning = false;
  if (starInterval) {
    clearInterval(starInterval);
    starInterval = null;
  }
  stars = [];
  points = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Start nyt spil
  gameRunning = true;
  const chosenFish = characters[selectedFishIndex];
  fishImg.src = `gif-copy/${chosenFish.gif}`;

  fishImg.onload = () => {
    lastStarTime = 0;
    gameLoop();
  };
} 
 */