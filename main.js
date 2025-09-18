document.addEventListener('DOMContentLoaded', function() {
  const starsContainer = document.createElement('div');
  starsContainer.classList.add('stars');
  document.body.insertBefore(starsContainer, document.body.firstChild);

  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 2 + 's';
    starsContainer.appendChild(star);
  }
});
