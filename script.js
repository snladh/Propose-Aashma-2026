const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

let noClicks = 0;

noBtn.addEventListener("click", () => {
  noClicks++;

  // Make Yes bigger every time No is clicked
  const scale = 1 + noClicks * 0.15;
  yesBtn.style.transform = `scale(${scale})`;

  // Move No button randomly (mobile-friendly)
  const x = Math.random() * 120 - 60;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

yesBtn.addEventListener("click", () => {
  document.body.innerHTML = `
    <div style="
      height:100vh;
      display:flex;
      align-items:center;
      justify-content:center;
      background: linear-gradient(135deg, #ffdde1, #ee9ca7);
      font-family: -apple-system, BlinkMacSystemFont, sans-serif;
      text-align:center;
      padding: 20px;
    ">
      <div style="
        background:white;
        padding:30px;
        border-radius:20px;
        max-width:420px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.15);
      ">
        <h1 style="margin-top:0;">Yayyyy 💖</h1>
        <p style="font-size:18px;">
          You just made me the happiest person alive.
        </p>
        <p style="font-size:16px;">
          Happy Valentine’s Day, baby boo 😘
        </p>
      </div>
    </div>
  `;
});
