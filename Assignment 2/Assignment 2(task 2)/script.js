// Function to check password strength
function checkPasswordStrength() {
    let password = document.getElementById("password").value;
    let strengthIndicator = document.getElementById("strengthIndicator");

    if (password.length > 0) {
        strengthIndicator.style.display = "block";
    } else {
        strengthIndicator.style.display = "none";
        return;
    }

    let strength=0;

    if (password.length >= 6) strength++; 
    if (password.match(/[A-Z]/)) strength++; 
    if (password.match(/[0-9]/)) strength++; 
    if (password.match(/[@$!%*?&#]/)) strength++; 

  
    strengthIndicator.className = "";

    
    if (strength === 1) {
        strengthIndicator.style.backgroundColor = "red";
        strengthIndicator.style.width = "33%";
    } else if (strength === 2 || strength === 3) {
        strengthIndicator.style.backgroundColor = "orange";
        strengthIndicator.style.width = "66%";
    } else if (strength === 4) {
        strengthIndicator.style.backgroundColor = "green";
        strengthIndicator.style.width = "100%";
    }
}

// Function to preview uploaded profile picture
function previewImage() {
    let file = document.getElementById("pic").files[0];
    let preview = document.getElementById("imagePreview");

    if (file) {
        let reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            preview.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
}

// Function to validate password confirmation
function validatePassword() {
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let errorMsg = document.getElementById("passwordError");

    if (password !== confirmPassword) {
        errorMsg.style.display = "block";
    } else {
        errorMsg.style.display = "none";
    }
}

// Function to enable submit button when T&C is checked
function enableSubmit() {
    document.getElementById("submitBtn").disabled = !document.getElementById("tc").checked;
}

// Attach event listeners
document.getElementById("password").addEventListener("input", checkPasswordStrength);
document.getElementById("confirm-password").addEventListener("input", validatePassword);
document.getElementById("pic").addEventListener("change", previewImage);
document.getElementById("tc").addEventListener("change", enableSubmit);
