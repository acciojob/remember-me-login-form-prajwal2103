document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const rememberMeCheckbox = document.getElementById('checkbox');
  const existingUserButton = document.getElementById('existing');

  // Check if there are saved details in localStorage
  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (savedUsername && savedPassword) {
    existingUserButton.style.display = 'block';
  }

  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;
    const rememberMe = rememberMeCheckbox.checked;

    if (rememberMe) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }

    alert(`Logged in as ${username}`);

    if (savedUsername && savedPassword) {
      existingUserButton.style.display = 'block';
    }
  });

  existingUserButton.addEventListener('click', () => {
    alert(`Logged in as ${savedUsername}`);
  });
});
