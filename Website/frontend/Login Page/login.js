document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent the form from reloading the page
  
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
  
    const errorMessage = document.getElementById('errorMessage');
    errorMessage.textContent = '';
  
    try {
      const response = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
  
      const data = await response.json();
      
      if (response.ok) {
        window.location.href = '../Main Page/mainPage.html'; // Redirect to Main Page
      } else {
        errorMessage.textContent = data.error; // Display error message
      }
    } catch (err) {
      errorMessage.textContent = 'An error occurred. Please try again later.';
    }
  });
  