document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form from submitting normally

  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Simple validation
  if (username === "" || password === "") {
    document.getElementById('error-message').innerText = "Both fields are required.";
  } else if (username !== "user" || password !== "password123") {
    document.getElementById('error-message').innerText = "Incorrect username or password.";
  } else {
    // Redirect to dashboard or main page (for demonstration, we'll alert success)
    alert("Login successful! Welcome to the Recipe Sharing Platform.");
    // You can redirect to another page here
    // window.location.href = "dashboard.html";
  }
});
