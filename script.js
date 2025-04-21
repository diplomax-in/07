// Like button functionality
let likeCount = 0;
function incrementLike() {
  likeCount++;
  document.getElementById("like-count").textContent = likeCount;
}

// Scroll animation for hidden elements
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach(el => observer.observe(el));

// Responsive menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navbarList = document.getElementById('navbar')?.querySelector('ul'); // Optional chaining added

if (menuToggle && navbarList) {
  menuToggle.addEventListener('click', () => {
    navbarList.classList.toggle('active');
    menuToggle.innerHTML = navbarList.classList.contains('active') ? '&times;' : '&#9776;';
  });
}

// Subscribe button functionality
const subscribeBtn = document.getElementById("subscribe-btn");
if (subscribeBtn) {
  subscribeBtn.addEventListener("click", function () {
    const emailInput = document.getElementById("email");
    const agreeCheckbox = document.getElementById("agree");

    if (!emailInput || !agreeCheckbox) return;

    if (emailInput.value.trim() === "") {
      alert("Please enter your email.");
    } else if (!agreeCheckbox.checked) {
      alert("Please agree to the Privacy Notice.");
    } else {
      alert("Thank you for subscribing! Diplomax. You'll now receive updates from Polytechnic Walle.");
      emailInput.value = ""; // Clear input
      agreeCheckbox.checked = false;
    }
  });
}