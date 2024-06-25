var sidenav = document.querySelector(".side-navbar")

function shownavbar()
{
    sidenav.style.left = "0"
}

function closenavbar()
{
    sidenav.style.left = "-60%"
}

document.getElementById('subscribe-button').addEventListener('click', function() {
    const emailInput = document.getElementById('email-input').value;
    const messageDiv = document.getElementById('message');

    // Clear any previous messages
    messageDiv.textContent = '';

    if (validateEmail(emailInput)) {
        // Proceed with the subscription process (e.g., send email to server)
        messageDiv.style.color = 'green';
        messageDiv.textContent = 'Thank you for subscribing!';
        // You can add the logic to send the email to your server here
    } else {
        // Display error message
        messageDiv.style.color = 'red';
        messageDiv.textContent = 'Please enter a valid email address.';
    }
});

// Function to validate email using a regular expression
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
