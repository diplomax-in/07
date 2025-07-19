    (function(d, w, c) {
        w.ChatraID = 'butnt9brnBzjzsY5P';
        var s = d.createElement('script');
        w[c] = w[c] || function() {
            (w[c].q = w[c].q || []).push(arguments);
        };
        s.async = true;
        s.src = 'https://call.chatra.io/chatra.js';
        if (d.head) d.head.appendChild(s);
    })(document, window, 'Chatra');

// Dark Mode Toggle
const toggle = document.getElementById('modeToggle');
if (toggle) {
  toggle.addEventListener('change', () => {
    document.body.classList.toggle('inverted');
  });
}

// Quotes Array
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

// Show Random Quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quoteElement = document.getElementById('quote-text');
  if (quoteElement) {
    quoteElement.textContent = quotes[randomIndex];
  }
}

// Page Load Quote
window.addEventListener('load', showRandomQuote);

// Share Page Functionality
function sharePage() {
  if (navigator.share) {
    navigator.share({
      title: document.title,
      text: 'Check out this page!',
      url: window.location.href
    })
    .then(() => console.log('Page shared successfully!'))
    .catch(error => console.error('Error sharing:', error));
  } else {
    alert('Sharing not supported on this browser.');
  }
}

// Toggle Section Visibility
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

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      entry.target.classList.remove('hidden');
    }
  });
});
document.querySelectorAll('.hidden').forEach(el => observer.observe(el));

// Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navbarList = document.getElementById('navbar')?.querySelector('ul');
if (menuToggle && navbarList) {
  menuToggle.addEventListener('click', () => {
    navbarList.classList.toggle('active');
    menuToggle.innerHTML = navbarList.classList.contains('active') ? '&times;' : '&#9776;';
  });
}

// Subscribe Button
const subscribeBtn = document.getElementById("subscribe-btn");
if (subscribeBtn) {
  subscribeBtn.addEventListener("click", () => {
    const emailInput = document.getElementById("email");
    const agreeCheckbox = document.getElementById("agree");

    if (!emailInput || !agreeCheckbox) return;

    if (emailInput.value.trim() === "") {
      alert("Please enter your email.");
    } else if (!agreeCheckbox.checked) {
      alert("Please agree to the Privacy Notice.");
    } else {
      alert("Thank you for subscribing! You'll now receive updates from Diplomax.");
      emailInput.value = "";
      agreeCheckbox.checked = false;
    }
  });
}

// Like Button
let likeCount = 0;
function incrementLike() {
  likeCount++;
  const likeDisplay = document.getElementById("like-count");
  if (likeDisplay) {
    likeDisplay.textContent = likeCount;
  }
}
//download app
let deferredPrompt;
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  installBtn.style.display = 'block';

  installBtn.addEventListener('click', () => {
    installBtn.style.display = 'none';
    deferredPrompt.prompt();

    deferredPrompt.userChoice.then(choice => {
      if (choice.outcome === 'accepted') {
        console.log('App Installed');
      } else {
        console.log('User Dismissed Install');
      }
      deferredPrompt = null;
    });
  });
});
