function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");

  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('nameModal');
  const welcomeMessage = document.getElementById('welcomeMessage');
  const nameInput = document.getElementById('nameInput');
  const submitButton = document.getElementById('submitName');

  // Check if name is already stored
  let userName = localStorage.getItem('userName');

  if (userName) {
    welcomeMessage.textContent = `Hi ${userName}`;
  } else {
    modal.style.display = 'block';
  }

  submitButton.addEventListener('click', function() {
    userName = nameInput.value.trim();
    if (userName) {
      localStorage.setItem('userName', userName);
      welcomeMessage.textContent = `Hi ${userName}`;
      modal.style.display = 'none';
    }
  });

  // Close modal if user presses Enter
  nameInput.addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
      submitButton.click();
    }
  });
});
