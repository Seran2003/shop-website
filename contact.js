document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("successMessage").style.display = "none";
    document.getElementById("emailErrorMessage").style.display = "none";
});

function validateForm(event) {
    event.preventDefault();

    document.getElementById("successMessage").style.display = "none";
    document.getElementById("emailErrorMessage").style.display = "none";

    var email = document.getElementById("email").value;
    var isValidEmail = validateEmail(email);

    if (!isValidEmail) {
        document.getElementById("emailErrorMessage").style.display = "block";
    } else {
        document.getElementById("successMessage").style.display = "block";
    }
}

function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}