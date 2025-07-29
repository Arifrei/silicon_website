document.addEventListener('DOMContentLoaded', () => {
  const intro = document.querySelector('.intro');
  intro.style.opacity = 0;
  intro.style.transform = 'translateY(20px)';
  setTimeout(() => {
    intro.style.transition = 'all 0.7s ease';
    intro.style.opacity = 1;
    intro.style.transform = 'translateY(0)';
  }, 200);
});

function showToast() {
  alert('👋 Thanks for checking out Silicon Networking!\nScroll down for upcoming events.');
}
