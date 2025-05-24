
function toggleSection(id, btn) {
  const sections = document.getElementsByClassName("section");
  const buttons = document.getElementsByClassName("toggle-btn");

  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    const button = buttons[i];

    if (section.id === id) {
      const isActive = section.classList.contains("active");

      if (isActive) {
        section.classList.remove("active");
        btn.classList.remove("active");
        setTimeout(() => section.style.display = "none", 500);
      } else {
        section.style.display = "block";
        setTimeout(() => section.classList.add("active"), 10);
        btn.classList.add("active");
      }
    } else {
      section.classList.remove("active");
      setTimeout(() => section.style.display = "none", 500);
      button.classList.remove("active");
    }
  }
}
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
      alert("Thank you for subscribing! Diplomax. You'll now receive updates from Diplomax Jharkhand polytechnic.");
      emailInput.value = ""; // Clear input
      agreeCheckbox.checked = false;
    }
  });
}

  const urlParams = new URLSearchParams(window.location.search);
  const branch = urlParams.get('branch');

  // Hide all sections first
  document.querySelectorAll('.notes-section').forEach(sec => sec.style.display = 'none');

  // Show the selected branch section
  if (branch) {
    document.getElementById(branch).style.display = 'block';
  }
  
