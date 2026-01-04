/* YEAR */
document.getElementById("year").textContent = new Date().getFullYear();

/* TYPING EFFECT */
const text = "Building futuristic digital experiences";
let index = 0;

function type() {
  if (index < text.length) {
    document.querySelector(".typing").textContent += text.charAt(index);
    index++;
    setTimeout(type, 80);
  }
}
type();

/* PARTICLES */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 80; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2,
    dx: Math.random() - 0.5,
    dy: Math.random() - 0.5
  });
}

function animate() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p => {
    ctx.beginPath();
    ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
    ctx.fillStyle = "#00f5ff";
    ctx.fill();
    p.x += p.dx;
    p.y += p.dy;
  });
  requestAnimationFrame(animate);
}
animate();
