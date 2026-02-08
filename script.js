const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainCard = document.getElementById("mainCard");

const stage = document.getElementById("stage");
const stageImg = document.getElementById("stageImg");
const stageText = document.getElementById("stageText");
const stageYes = document.getElementById("stageYes");

let noClicks = 0;
let hideTimer = null;

const flow = [
  { img:"rock_sure.JPG", text:"You sure?" },
  { img:"luna_sure.png", text:"" },
  { img:"ronaldo_sure.png", text:"" },
  { img:"parents_sure.png", text:"Chorii… you sure?" },
  { img:"shiva_sure.png", text:"Balikaa… you sure?" },
  { img:"world_end.gif", text:"" }
];

function showStage(step, autoHide=true){
  mainCard.classList.add("hidden");
  stage.classList.remove("hidden");

  stageImg.src = step.img;
  stageText.innerText = step.text;

  stageYes.classList.add("hidden");

  if(hideTimer) clearTimeout(hideTimer);

  if(autoHide){
    hideTimer = setTimeout(()=>{
      stage.classList.add("hidden");
      mainCard.classList.remove("hidden");
    }, 4000);
  }
}

noBtn.onclick = () => {
  noClicks++;

  const step = flow[Math.min(noClicks-1, flow.length-1)];

  // Steps 1–5 → auto hide
  if(noClicks < 6){
    showStage(step, true);
  }

  // Step 6 → world end
  else {
    mainCard.classList.add("hidden");
    stage.classList.remove("hidden");

    stageImg.src = step.img;
    stageText.innerText =
      "When the world was destroyed,\n" +
      "the NO button was destroyed too.\n" +
      "Universe wants us together.\n" +
      "Seems like you have no option.\n" +
      "So it’s a YES? 😌";

    stageYes.classList.remove("hidden");
    noBtn.style.display = "none";
  }
};

function yesFlow(){
  if(hideTimer) clearTimeout(hideTimer);

  mainCard.classList.add("hidden");
  stage.classList.remove("hidden");

  stageImg.src = "sunil_sure.PNG";
  stageText.innerText = "Bebu… you sure?? 😏";
  stageYes.classList.add("hidden");

  setTimeout(()=>{
    stageImg.src = "Love.PNG";
    stageText.innerText =
      "Thank you for choosing me Bebu 💖\n" +
      "You made me the happiest person on Earth.";
  }, 5000);
}

yesBtn.onclick = yesFlow;
stageYes.onclick = yesFlow;
