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
document.getElementById("subscribe-btn").addEventListener("click", function () {
  const emailInput = document.getElementById("email");
  const agreeCheckbox = document.getElementById("agree");

  if (emailInput.value === "") {
    alert("Please enter your email.");
  } else if (!agreeCheckbox.checked) {
    alert("Please agree to the Privacy Notice.");
  } else {
    alert("Thank you for subscribing! Diplomax. You'll now receive updates from DIPLOMAX [ JHARKHAND POLYTECHNIC ].");
    emailInput.value = ""; // Reset the input field
    agreeCheckbox.checked = false;
  }
});
