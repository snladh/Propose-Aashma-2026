const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainCard = document.getElementById("mainCard");

const stage = document.getElementById("stage");
const stageImg = document.getElementById("stageImg");
const stageText = document.getElementById("stageText");
const stageYes = document.getElementById("stageYes");

const messageEl = document.querySelector(".message");
const questionEl = document.querySelector(".question");

const boom = document.getElementById("boomSound");

let noClicks = 0;
let hideTimer = null;
let audioUnlocked = false;


/* ---------- AUDIO ---------- */

function unlockAudio() {
  if (audioUnlocked) return;
  audioUnlocked = true;
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    ctx.resume();
  } catch (e) {}
}

function playBoom() {
  if (!boom) return;
  boom.currentTime = 0;
  boom.volume = 0.6;
  boom.play().catch(() => {});
}


/* ---------- TEXT FLOW ---------- */

const textFlow = [
  {
    message: "Bebu… please be my Valentine 💖",
    question: "Will you say yes?"
  },
  {
    message: "Luna literally wants you to say yes 🐾",
    question: "Please say yes Maya?"
  },
  {
    message: "Even Ronaldo is shocked hearing that ⚽",
    question: "Please say YES!"
  },
  {
    message: "Baba Maamu pani shocked bhaisyo 😄",
    question: "It’s a yes haii?"
  },
  {
    message: "Mahadev le pani qsn garnu bhayo 🙏",
    question: "Aba yes vanna parcha…"
  }
];


/* ---------- IMAGE FLOW ---------- */

const stages = [
  { img: "rock_sure.JPG", bottom: "You sure?" },
  { img: "luna_sure.png", bottom: "" },
  { img: "ronaldo_sure.png", bottom: "" },
  { img: "parents_sure.png", bottom: "Chorii… you sure?" },
  { img: "shiva_sure.png", bottom: "Balikaa… you sure?" },
  { img: "world_end.gif", bottom: "The Earth! Whats happening ..." }
];


function hideStage() {
  stage.classList.add("hidden");
  mainCard.classList.remove("hidden");
}


function showImage(stageData) {
  mainCard.classList.add("hidden");
  stage.classList.remove("hidden");

  stageText.innerText = stageData.bottom;
  stageYes.classList.add("hidden");

  stageImg.style.opacity = 0;
  stageImg.src = "";

  playBoom();

  setTimeout(() => {
    stageImg.src = stageData.img;
    stageImg.onload = () => {
      stageImg.style.opacity = 1;
    };
  }, 120);
}


/* ---------- NO BUTTON ---------- */

noBtn.onclick = () => {
  noClicks++;

  if (noClicks === 1) unlockAudio();

  const stageData = stages[Math.min(noClicks - 1, stages.length - 1)];

  // NORMAL STAGES
  if (noClicks < 6) {
    showImage(stageData);

    hideTimer = setTimeout(() => {
      hideStage();

      const text = textFlow[noClicks - 1];
      messageEl.innerText = text.message;
      questionEl.innerText = text.question;

    }, 2500);
  }

  // WORLD GIF STAGE (SPECIAL)
  else {
    showImage(stageData);

    // No buttons on GIF
    stageYes.classList.add("hidden");

    setTimeout(() => {
      hideStage();

      // Final message screen
      messageEl.innerText =
        "The world exploded and the NO button exploded with that.";
      questionEl.innerText =
        "Universe wants us to be together, looks like you have no choice now.";

      // Remove No forever
      noBtn.style.display = "none";
    }, 5100); // GIF viewing time
  }
};


/* ---------- YES FLOW ---------- */

function yesFlow() {
  unlockAudio();

  mainCard.classList.add("hidden");
  stage.classList.remove("hidden");

  stageText.innerText = "Bebu… you sure?? 😏";
  stageYes.classList.add("hidden");

  playBoom();

  stageImg.style.opacity = 0;
  stageImg.src = "";

  setTimeout(() => {
    stageImg.src = "sunil_sure.PNG";
    stageImg.onload = () => stageImg.style.opacity = 1;
  }, 120);

  setTimeout(() => {
    stageImg.style.opacity = 0;
    stageImg.src = "";

    stageImg.src = "Love.PNG";
    stageText.innerText =
      "Hehe, JK Bebu.\n" +
      "Thank you for choosing me 💖\n" +
      "Now, I am the happiest person on Earth.";

    stageImg.onload = () => stageImg.style.opacity = 1;
  }, 3500);
}

yesBtn.onclick = yesFlow;
stageYes.onclick = yesFlow;
