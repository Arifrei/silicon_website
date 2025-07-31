const canvas = document.getElementById('bg-particles');
if (canvas) {
  const ctx = canvas.getContext('2d');
  let w, h, particles;

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  function random(min, max) {
    return Math.random() * (max - min) + min;
  }

  function createParticles() {
    particles = [];
    const count = Math.floor(w / 32);
    for (let i = 0; i < count; i++) {
      particles.push({
        x: random(0, w),
        y: random(0, h),
        vx: random(-0.5, 0.5),
        vy: random(-0.5, 0.5),
        r: random(1.5, 2.5),
      });
    }
  }
  createParticles();
  window.addEventListener('resize', createParticles);

  function draw() {
    ctx.clearRect(0, 0, w, h);
    ctx.globalAlpha = 0.7;
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 2 * Math.PI);
      ctx.fillStyle = "#7dd9ef";
      ctx.shadowColor = "#2ec4c9";
      ctx.shadowBlur = 16;
      ctx.fill();
      ctx.shadowBlur = 0;
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const a = particles[i], b = particles[j];
        const dist = Math.hypot(a.x - b.x, a.y - b.y);
        if (dist < 110) {
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = "#2ec4c930";
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }
    }
    ctx.globalAlpha = 1.0;
  }

  function update() {
    for (let p of particles) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
    }
  }

  function animate() {
    update();
    draw();
    requestAnimationFrame(animate);
  }
  animate();
}

document.addEventListener('DOMContentLoaded', () => {
  const intro = document.querySelector('.intro');
  if (intro) {
    intro.style.opacity = 0;
    intro.style.transform = 'translateY(20px)';
    setTimeout(() => {
      intro.style.transition = 'all 0.7s ease';
      intro.style.opacity = 1;
      intro.style.transform = 'translateY(0)';
    }, 200);
  }
});

function showToast() {
  alert('👋 Thanks for checking out Silicon Networking!\nScroll down for upcoming events.');
}
