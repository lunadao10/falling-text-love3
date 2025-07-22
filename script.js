
// Phát nhạc khi người dùng chạm vào màn hình
document.addEventListener('click', function () {
  const sound = document.getElementById('sound');
  if (sound && sound.paused) {
    sound.play().catch(() => {
      console.log("Không thể tự động phát nhạc");
    });
  }
});

// Tạo hiệu ứng rơi chữ
const messages = [
  "I think I’ve fallen for you",
  "You make my heart smile",
  "I can’t stop thinking about you",
  "You complete me.",
  "I didn’t believe in love until I met you.",
  "Being with you feels like home",
  "You’re the reason I smile every day",
  "I want to be yours.",
  "You’re the one I’ve been looking for.",
  "Will you be mine?"
];

const scene = document.getElementById("scene");

function createFallingText(message) {
  const el = document.createElement("div");
  el.className = "falling-text";
  el.innerText = message;
  el.style.left = Math.random() * 100 + "vw";
  el.style.animationDuration = 3 + Math.random() * 5 + "s";
  scene.appendChild(el);

  setTimeout(() => {
    el.remove();
  }, 8000);
}

setInterval(() => {
  const msg = messages[Math.floor(Math.random() * messages.length)];
  createFallingText(msg);
}, 1200);

// Xoay theo hướng nghiêng của điện thoại
window.addEventListener('deviceorientation', function (event) {
  const rotateY = event.gamma || 0;
  const rotateX = event.beta || 0;
  scene.style.transform = `rotateX(${rotateX / 10}deg) rotateY(${rotateY / 10}deg)`;
});
