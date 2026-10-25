
document.getElementById('year').textContent = new Date().getFullYear();

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
  menuButton.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu');
  menuButton.textContent = isOpen ? '✕' : '☰';
});

navigation.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation menu');
    menuButton.textContent = '☰';
  });
});

const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.dataset.filter;

    filterButtons.forEach(item => {
      const isActive = item === button;
      item.classList.toggle('active', isActive);
      item.setAttribute('aria-pressed', String(isActive));
    });

    projectCards.forEach(card => {
      card.hidden = selected !== 'all' && card.dataset.category !== selected;
    });
  });
});
