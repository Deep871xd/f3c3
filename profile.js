const profileDetails = document.getElementById('profileDetails');
const logoutButton = document.getElementById('logoutButton');

// Retrieve the user details from local storage
const user = JSON.parse(localStorage.getItem('user'));

// Check if the user is logged in
if (user) {
  
  const userDetailsHTML = `
  username: ${user.username}<br>
  Email: ${user.email}<br>
  Token: ${user.accessToken}<br>
  Password:${user.password}
  `;
  profileDetails.innerHTML = userDetailsHTML;
} else {
  // If the user is not logged in, redirect to the signup page
  window.location.href = 'index.html';
}

// add event listener to logoutButton
logoutButton.addEventListener('click', function () {
  // Clear local storage before redirect to the signup page
  localStorage.clear();

  // Redirect to the signup page
  window.location.href = 'index.html';
});