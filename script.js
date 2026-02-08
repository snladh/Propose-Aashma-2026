const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const mainCard = document.getElementById("mainCard");

const stage = document.getElementById("stage");
const stageImg = document.getElementById("stageImg");
const stageText = document.getElementById("stageText");
const stageYes = document.getElementById("stageYes");

let noClicks = 0;

const flow = [
  { img:"rock_sure.JPG", text:"You sure?" },
  { img:"luna_sure.png", text:"" },
  { img:"ronaldo_sure.png", text:"" },
  { img:"parents_sure.png", text:"Chorii… you sure?" },
  { img:"shiva_sure.png", text:"Balikaa… you sure?" },
  { img:"world_end.gif", text:"" }
];

noBtn.onclick = () => {
  noClicks++;
  mainCard.classList.add("hidden");
  stage.classList.remove("hidden");

  const step = flow[Math.min(noClicks-1, flow.length-1)];
  stageImg.src = step.img;
  stageText.innerText = step.text;

  if(noClicks === 6){
    stageText.innerText =
      "The world is destroyed…\n" +
      "And the NO button got destroyed with it.\n" +
      "Universe wants us together.\n" +
      "Seems like you have no option.\n" +
      "So it’s a YES? 😌";

    stageYes.classList.remove("hidden");
  }
};

function yesFlow(){
  stageImg.src = "sunil_sure.PNG";
  stageText.innerText = "You sure?? 😏";
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
