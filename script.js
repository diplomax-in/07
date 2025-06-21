document.getElementById("darkToggle").addEventListener("change", function () {
  document.body.classList.toggle("invert-mode");

  // Save choice
  if (document.body.classList.contains("invert-mode")) {
    localStorage.setItem("theme", "invert");
  } else {
    localStorage.setItem("theme", "normal");
  }
});

// Load saved theme
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme") === "invert") {
    document.body.classList.add("invert-mode");
    document.getElementById("darkToggle").checked = true;
  }
});
const quotes = [
  "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  "Don’t watch the clock; do what it does. Keep going.",
  "The harder you work for something, the greater you'll feel when you achieve it.",
  "Push yourself, because no one else is going to do it for you.",
  "Sometimes later becomes never. Do it now.",
  "Dream it. Wish it. Do it.",
  "Great things never come from comfort zones.",
  "Work hard in silence, let success make the noise.",
  "Don't limit your challenges. Challenge your limits.",
  "It always seems impossible until it's done. – Nelson Mandela",
  "The future depends on what you do today. – Mahatma Gandhi",
  "Your only limit is your mind.",
  "Discipline is the bridge between goals and accomplishment.",
  "Believe in yourself and all that you are.",
  "Study while others are sleeping; work while others are loafing."
];

function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById('quote-text').textContent = quotes[randomIndex];
}

// Call on page load
window.onload = showRandomQuote;
function sharePage() {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: 'Check out this page!',
        url: window.location.href
      })
      .then(() => console.log('Page shared successfully!'))
      .catch(error => console.log('Error sharing:', error));
    } else {
      alert('Sharing not supported on this browser.');
    }
  }

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
  
