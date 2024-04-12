// Function to initialize the page with green background for Personal Details
window.onload = function() {
    document.getElementById("pd").style.backgroundColor = "green";
    document.getElementById("pdIcon").classList.remove('fa-circle-o'); // Remove unchecked icon class
    document.getElementById("pdIcon").classList.add('fa-check-circle'); 
    document.getElementById("pd").style.color = "white";

}

// Function to hide personal details section and show address details section
function disHide1() {


    if (!validatePersonalDetails()) {
        return;
    }
    
    if(!isRadioButtonChecked()){
        return
    }
    
     if (document.querySelector('.yes-checkbox-container input[type="radio"]').checked && isChooseFileInputEmpty()) {
            alert('This field is required');
            return;
        }


        


    document.getElementById("pid").style.display = "none";
    document.getElementById("pd").style.backgroundColor = "white"; // Reset background color of Personal Details
    document.getElementById("pd").style.color="green";
    document.getElementById("aid").style.display = "block";
    document.getElementById("ad").style.backgroundColor = "green"; // Set background color of Address Details
    document.getElementById("ad").style.color = "white";





    document.getElementById("pdIcon").classList.remove('fa-circle-o');
    document.getElementById("pdIcon").classList.add('fa-check-circle');
    document.getElementById("adIcon").classList.remove('fa-circle-o');
    document.getElementById("adIcon").classList.add('fa-check-circle');
}

// Function to hide address details section and show other details section
function disHide2() {


    if (!validateAddressDetails()) {
        return;
    }



    document.getElementById("aid").style.display = "none";
    document.getElementById("ad").style.backgroundColor = "white"; // Reset background color of Address Details
    document.getElementById("ad").style.color="green";
    document.getElementById("od").style.color = "white";

    document.getElementById("oid").style.display = "block";
    document.getElementById("od").style.backgroundColor = "green"; // Set background color of Other Details




    document.getElementById("adIcon").classList.remove('fa-circle-o');
    document.getElementById("adIcon").classList.add('fa-check-circle');

    document.getElementById("odIcon").classList.remove('fa-circle-o');
    document.getElementById("odIcon").classList.add('fa-check-circle');

    
}

// Function to show personal details section and hide address details section
function disShow1() {
    document.getElementById("pid").style.display = "block";
    document.getElementById("pd").style.backgroundColor = "green"; // Set background color of Personal Details
   
    document.getElementById("pd").style.color="white";
    document.getElementById("ad").style.color="green";

    document.getElementById("aid").style.display = "none";
    document.getElementById("ad").style.backgroundColor = "white"; // Reset background color of Address Details


    document.getElementById("adIcon").classList.remove('fa-check-circle');
    document.getElementById("adIcon").classList.add('fa-circle-o');



}

// Function to show address details section and hide other details section
function disShow2() {
    document.getElementById("aid").style.display = "block";
    document.getElementById("ad").style.backgroundColor = "green"; // Set background color of Address Details
    document.getElementById("ad").style.color="white";
    document.getElementById("od").style.color="green";

    document.getElementById("oid").style.display = "none";
    document.getElementById("od").style.backgroundColor = "white"; // Reset background color of Other Details


    document.getElementById("odIcon").classList.remove('fa-check-circle');
    document.getElementById("odIcon").classList.add('fa-circle-o');
}

// Function to hide other details section and show confirmation message
function disHide3() {



      // Validate other details before proceeding
      if (!validateOtherDetails()) {
        return;
    }




    document.getElementById("oid").style.display = "none";
    document.getElementById("fid").style.display = "block";

    document.getElementById("od").style.backgroundColor = "white"; // Reset background color of Address Details
    document.getElementById("od").style.color="green";
    

}







function validatePersonalDetails() {
  //  Add validation for personal details fields (e.g., first name, email, etc.)
    return validateFirstName() && validateLastName()&& validateEmail() && validateAadhar() && validateDOB() && validateMobile() && validateGender();

}




// Validation for first name

// Function to validate first name
function validateFirstName() {
    var firstNameInput = document.getElementById('firstnameid');
    var firstNameValue = firstNameInput.value.trim(); // Trim any leading or trailing spaces

    // Regular expression to check if the input contains only characters
    var lettersRegex = /^[A-Za-z]+$/;

    // Check if the input is empty or contains non-character values
    if (firstNameValue === '') {
        alert('First Name is required');
        highlightInvalidField(firstNameInput);
        return false;
    } else if (!lettersRegex.test(firstNameValue)) {
        alert('First Name should contain only letters');
        highlightInvalidField(firstNameInput);


        return false;
    } else {
        return true;
    }
}


// Validate Last Name
function validateLastName() {
    var lastNameInput = document.getElementById('lastnameid');
    var lastNameValue = lastNameInput.value.trim(); // Trim any leading or trailing spaces

    // Regular expression to check if the input contains only letters
    var lettersRegex = /^[A-Za-z]+$/;

    if (lastNameValue === "") {
        // If the input is empty, display an alert and highlight the field
    
        return true;
    } else if (!lettersRegex.test(lastNameValue)) {
        // If the input contains non-letter values, display an alert and highlight the field
        alert('Last Name should contain only letters');
        highlightInvalidField(lastNameInput);
        return false;
    }

    return true;
}


// Function to validate email
function validateEmail() {
    var emailInput = document.getElementById('emailid');
    var emailValue = emailInput.value.trim();

    // Regular expression to check if the input is a valid email address
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the input is empty or does not match the email format
    if (emailValue === '') {
        alert('Email is required');
        highlightInvalidField(emailInput);
        return false;
    } else if (!emailRegex.test(emailValue)) {
        alert('Invalid email format');
        highlightInvalidField(emailInput);
        return false;
    } else {
        return true;
    }
}

// Function to validate Aadhar number
function validateAadhar() {
    var aadharInput = document.getElementById('aadharid');
    var aadharValue = aadharInput.value.trim();

    // Regular expression to check if the input is a valid Aadhar number (12 digits)
    var aadharRegex = /^\d{12}$/;

    // Check if the input is empty or does not match the Aadhar number format
    if (aadharValue === '') {
        alert('Aadhar Number is required');
highlightInvalidField(aadharInput);
        return false;
    } else if (!aadharRegex.test(aadharValue)) {
        alert('Aadhar Number should contain 12 digits');
        highlightInvalidField(aadharInput);
        return false;
    } else {
        return true;
    }
}

// Function to validate date of birth
function validateDOB() {
    var dobInput = document.getElementById('dobid');
    var dobValue = dobInput.value.trim();

    // Perform additional validation if needed (e.g., minimum age, format)

    // Check if the input is empty
    if (dobValue === '') {
        alert('Date of Birth is required');
        highlightInvalidField(dobInput);
        return false;
    } else {
        return true;
    }
}

// Function to validate mobile number
function validateMobile() {
    var mobileInput = document.getElementById('mobileid');
    var mobileValue = mobileInput.value.trim();

    // Regular expression to check if the input is a valid mobile number (10 digits)
    var mobileRegex = /^[0-9]{10}$/;

    // Check if the input is empty or does not match the mobile number format
    if (mobileValue === '') {
        alert('Mobile Number is required');
        highlightInvalidField(mobileInput);
        return false;
    } else if (!mobileRegex.test(mobileValue)) {
        alert('Mobile Number should contain 10 digits');
        highlightInvalidField(mobileInput);
        return false;
    } else {
        return true;
    }
}

// Function to validate gender
function validateGender() {
    var genderInputs = document.getElementsByName('gender');
    var genderSelected = false;

    // Check if any gender option is selected
    for (var i = 0; i < genderInputs.length; i++) {
        if (genderInputs[i].checked) {
            genderSelected = true;
            break;
        }
    }

    // If no gender is selected, show an alert
    if (!genderSelected) {
        alert('Gender is required');

        return false;
    }else{
            return true;

    }

}


function isRadioButtonChecked() {
    // Iterate through each radio button
    var radioButtons = document.querySelectorAll('input[type="radio"][name="upload-photo"]');
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            // If any radio button is checked, return true
            return true;
        }
    }
    // If no radio button is checked, return false
    alert('Please choose whether to upload a photo: Yes or No is required');
    return false;
    
}




// Add event listener to the radio buttons
document.querySelectorAll('input[type="radio"][name="upload-photo"]').forEach(function(radioButton) {
    radioButton.addEventListener('change', function() {
        // Check if the "Yes" radio button is checked
        if (document.querySelector('.yes-checkbox-container input[type="radio"]').checked) {
            // Perform some action when "Yes" is checked
            document.getElementById('user-photo').style.display= "block";
            
            document.getElementById('user-photo').addEventListener('click', function() {
                replacePhoto(); // This is where validatePhoto() is called
            });

        } else {
            // Perform some action when "No" is checked
            document.getElementById('user-photo').style.display= "none";
        }
    });
});


// Function to replace the selected file
function replacePhoto() {
    var fileInput = document.getElementById('user-photo');
    var file = fileInput.files[0]; // Get the selected file

    // Check if a file is selected
    if (file) {
        // Clear any previously selected file
        fileInput.value = '';
    }
    return true;
}









function isChooseFileInputEmpty() {
    var fileInput = document.getElementById('user-photo');
    return fileInput.files.length === 0;
}









//address//

// Add event listeners to input fields in Address Details to remove red border when filled
document.querySelectorAll('#count, #st, #city, #street, #land, #pin').forEach(function(input) {
    input.addEventListener('input', function() {
        if (input.value.trim() !== "") {
            input.style.border = ""; // Remove red border
        }
    });
});

// Validate Address Details fields
function validateAddressDetails() {
    var isValid = true;

    // Validate Country
    var countrySelect = document.getElementById('count');
    if (!validateSelect(countrySelect, "Country")) {
        isValid = false;
    }

    // Validate State
    var stateSelect = document.getElementById('st');
    if (!validateSelect(stateSelect, "State")) {
        isValid = false;
    }

    // Validate City
    var citySelect = document.getElementById('city');
    if (!validateSelect(citySelect, "City")) {
        isValid = false;
    }

    // Validate Street
    var streetInput = document.getElementById('street');
    if (!validateField(streetInput, "Street")) {
        isValid = false;
    }

    // Validate Landmark
    var landmarkInput = document.getElementById('land');
    if (!validateField(landmarkInput, "Landmark")) {
        isValid = false;
    }

    // Validate Pincode
    var pincodeInput = document.getElementById('pin');
    if (!validateField(pincodeInput, "Pincode", /^[0-9]{6}$/, "Pincode should be a 6-digit number")) {
        isValid = false;
    }

    return isValid;
}

// Function to validate select dropdown
function validateSelect(select, fieldName) {
    if (select.value === "") {
        alert("Please select a value for " + fieldName);
        highlightInvalidField(select);
        return false;
    }
    return true;
}

// Function to validate field
function validateField(input, fieldName, regex, errorMessage) {
    var value = input.value.trim();

    if (value === '') {
        alert(fieldName + " is required");
        highlightInvalidField(input);
        return false;
    }

    // Perform regex validation if provided
    if (regex && !regex.test(value)) {
        alert(errorMessage);
        highlightInvalidField(input);
        return false;
    }

    return true;
}







//Other*//

function validateOtherDetails() {
    // Validate fields in the Other Details section
    return validateUsername() && validatePassword() && validateHobbies();
}

function validateUsername() {
    var usernameInput = document.querySelector('.username input[type="text"]');
    var username = usernameInput.value.trim();
    if (username === "") {
        alert("Username is required.");
        highlightInvalidField(usernameInput);
        return false;
    }
    return true;
}

function validatePassword() {
    var passwordInput = document.querySelector('.password input[type="password"]');
    var password = passwordInput.value.trim();
    if (password === "") {
        alert("Password is required.");
        highlightInvalidField(passwordInput);
        return false;
    }
    return true;
}

function validateHobbies() {
    var hobbiesChecked = document.querySelectorAll('.hobbies_flex input[type="checkbox"]:checked');
    if (hobbiesChecked.length < 2) {
        alert("Select at least 2 hobbies.");
        return false;
    }
    return true;
}

// Add event listeners to input fields in Personal Details to remove red border when filled
document.querySelectorAll('.username input[type="text"], .password input[type="password"], #firstnameid, #emailid, #aadharid, #dobid, #mobileid').forEach(function(input) {
    input.addEventListener('input', function() {
        if (input.value.trim() !== "") {
            input.style.border = ""; // Remove red border
        }
    });
});








/*Highlight Function*/

function highlightInvalidField(input) {
    input.style.border = "1px solid red"; // Add red border to the input field
    input.focus(); // Set focus to the input field for immediate correction
}
