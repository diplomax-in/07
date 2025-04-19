let likeCount = 0;

function incrementLike() {
  likeCount++;
  document.getElementById("like-count").textContent = likeCount;
}
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  });

  const hiddenElements = document.querySelectorAll('.hidden');
  hiddenElements.forEach(el => observer.observe(el));



const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar').querySelector('ul');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
  menuToggle.innerHTML = navbar.classList.contains('active') ? '&times;' : '&#9776;';
});
