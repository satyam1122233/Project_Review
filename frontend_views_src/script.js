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
        document.getElementById("uploadPhotoError").innerHTML = "Please upload a photo";
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
    var firstNameValue = firstNameInput.value.trim(); 

    var lettersRegex = /^[A-Za-z]+$/;

    // Check if the input is empty or contains non-character values
    if (firstNameValue === '') {
        document.getElementById("nameError").innerHTML = "First Name is required";
        highlightInvalidField(firstNameInput);
        return false;
    } else if (!lettersRegex.test(firstNameValue)) {
        document.getElementById("nameError").innerHTML = "First Name should contain only letters";
        highlightInvalidField(firstNameInput);
        return false;

    } 
    
        document.getElementById("nameError").innerHTML = ""; // Clear error 

        return true;
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
        document.getElementById("lastNameError").innerHTML = "Last Name should contain only letters";
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

    if (emailValue === '') {
        document.getElementById("emailError").innerHTML = "Email is required";
        highlightInvalidField(emailInput);
        return false;
    } else if (!emailRegex.test(emailValue)) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email";
        highlightInvalidField(emailInput);
        return false;
    } else {
        document.getElementById("emailError").innerHTML = ""; // Clear error 

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
        document.getElementById("aadharError").innerHTML = "Please enter aadhar number";
highlightInvalidField(aadharInput);
        return false;
    } else if (!aadharRegex.test(aadharValue)) {
        document.getElementById("aadharError").innerHTML = "Please enter a valid Aadhar number of 12 digits";
        highlightInvalidField(aadharInput);
        return false;
    } else {
        document.getElementById("aadharError").innerHTML = "";

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
        document.getElementById("dobError").innerHTML = "Date of Birth is required";
        highlightInvalidField(dobInput);
        return false;
    } else {
        document.getElementById("dobError").innerHTML = "";

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
        document.getElementById("mobileError").innerHTML = "Mobile Number is required";
        highlightInvalidField(mobileInput);
        return false;
    } else if (!mobileRegex.test(mobileValue)) {
        document.getElementById("mobileError").innerHTML = "Mobile Number should contain 10 digits";
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
        document.getElementById("genderError").innerHTML = "Gender is required";

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
const radioButton=document.querySelectorAll('[name=upload-photo]');
for(let i = 0;i<radioButton.length;i++) {
    radioButton[i].addEventListener('change', function() {
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
}


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


function validateAddressDetails() {
    return validStreet() && validLandmark() && validPincode();
}
    

    // Validate Street
    function validStreet(){
        var streetInput = document.getElementById('street');
        var streetValue= streetInput.value.trim();
        var streetregex= /^[a-zA-Z0-9\s,'-.]+$/;;
        if (streetValue==='') {
            document.getElementById("streetError").innerHTML = "Street is required";
            highlightInvalidField(streetInput);
            return false;

        }else if(!streetregex.test(streetValue)){
            document.getElementById("streetError").innerHTML = "Please enter a valid street address";
            highlightInvalidField(streetInput);
            return false;
        }else{
            return true;
        }
        
    }
    

    // Validate Landmark
    function validLandmark(){
        var landmarkInput = document.getElementById('land');
        var landmarkValue= landmarkInput.value.trim();
         var landmarkRegex= /^[a-zA-Z0-9\s,'-]*$/;

         if (landmarkValue==='') {
            document.getElementById("landmarkError").innerHTML = "Landmark is required";
    
            highlightInvalidField(landmarkInput)
            return false;
        }else if(!landmarkRegex.test(landmarkValue)){
            document.getElementById("landmarkError").innerHTML = "Please enter a valid Landmark";
    
            highlightInvalidField(landmarkInput)
            return false;
        }else{
            return true
        }
         
    }
    

    // Validate Pincode
    function validPincode(){
        var pincodeInput = document.getElementById('pin');
        var pincodeValue= pincodeInput.value.trim();
        var pincodeRegex= /^[0-9]{6}$/;

        if (pincodeValue==='') {
            document.getElementById("pincodeError").innerHTML = "Pincode is required";
            highlightInvalidField(pincodeInput);
            return false;
        }else if(!pincodeRegex.test(pincodeValue)){
            document.getElementById("pincodeError").innerHTML = "Please enter a valid Pincode";
            highlightInvalidField(pincodeInput);
            return false;
        }else{
            return true;
        }
    
    }




//Other*//

function validateOtherDetails() {
    // Validate fields in the Other Details section
    return validateUsername() && validatePassword() && validateHobbies();
}

function validateUsername() {
    var usernameInput = document.querySelector('.username input[type="text"]');
    var usernameValue = usernameInput.value.trim();
    var usernameRegex= /^[0-9A-Za-z]{6,16}$/    ;
    if (usernameValue === '') {
        document.getElementById("usernameError").innerHTML = ("Username is required.");
        highlightInvalidField(usernameInput);
        return false;
    }else if(usernameRegex.test(usernameValue)){
        document.getElementById("usernameError").innerHTML = ("Please enter a valid Username");
        highlightInvalidField(usernameInput);
        return false;
    }
    return true;
}

function validatePassword() {
    var passwordInput = document.querySelector('.password input[type="password"]');
    var password = passwordInput.value.trim();
    if (password === "") {
        document.getElementById("passwordError").innerHTML =("Password is required.");
        highlightInvalidField(passwordInput);
        return false;
    }
    return true;
}

function validateHobbies() {
    var hobbiesChecked = document.querySelectorAll('.hobbies_flex input[type="checkbox"]:checked');
    if (hobbiesChecked.length < 2) {
        document.getElementById("hobbiesError").innerHTML =("Select at least 2 hobbies.");
        return false;
    }
    return true;
}






/*Highlight Function*/

function highlightInvalidField(input) {
    input.style.border = "1px solid red"; // Add red border to the input field
    input.focus(); // Set focus to the input field for immediate correction
}
















// Add event listeners to input fields in Personal Details and Address Details to remove red border and error message when filled
document.querySelectorAll('#firstnameid, #lastnameid , #aadharid, #mobileid, #count, #st, #city, #street, #land, #pin,#username, #password').forEach(function(input) {
    input.addEventListener('input', function() {
        // When the user types or interacts with the input field, remove the red error message and border
        var errorDiv = input.nextElementSibling; // Assuming the error message div follows the input field
        if (errorDiv) {
            errorDiv.innerHTML = ""; // Clear the error message
        }
        input.style.border = ""; // Remove the red border
    });
});

document.getElementById('emailid').addEventListener('input', function() {
    // When the user types or interacts with the email input field, remove the red error message and border
    var errorDiv = document.getElementById('emailError');
    if (errorDiv) {
        errorDiv.innerHTML = ""; // Clear the error message
    }
    this.style.border = ""; // Remove the red border
});
document.getElementById('dobid').addEventListener('input', function() {
    // When the user types or interacts with the email input field, remove the red error message and border
    var errorDiv = document.getElementById('dobError');
    if (errorDiv) {
        errorDiv.innerHTML = ""; // Clear the error message
    }
    this.style.border = ""; // Remove the red border
});
document.getElementById('mobileid').addEventListener('input', function() {
    // When the user types or interacts with the email input field, remove the red error message and border
    var errorDiv = document.getElementById('mobileError');
    if (errorDiv) {
        errorDiv.innerHTML = ""; // Clear the error message
    }
    this.style.border = ""; // Remove the red border
});
document.querySelectorAll('input[type="radio"][name="gender"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        // When the user interacts with the radio buttons, remove the error message
        var errorDiv = document.getElementById('genderError');
        if (errorDiv) {
            errorDiv.innerHTML = ""; // Clear the error message
        }
    });
});
// Handle change event for radio buttons
document.querySelectorAll('input[type="radio"][name="upload-photo"]').forEach(function(radio) {
    radio.addEventListener('change', function() {
        // When the user selects an option, clear the error message
        var errorDiv = document.getElementById('uploadPhotoError');
        if (errorDiv) {
            errorDiv.innerHTML = ""; // Clear the error message
        }
    });
});

// Handle input event for file input
document.getElementById('user-photo').addEventListener('input', function() {
    // When the user interacts with the file input, clear the error message
    var errorDiv = document.getElementById('uploadPhotoError');
    if (errorDiv) {
        errorDiv.innerHTML = ""; // Clear the error message
    }
});



document.querySelector('.hobbies_flex').addEventListener('change', function() {
    var checkboxes = document.querySelectorAll('.input_hobbies');
    var checkedCount = 0;
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
            checkedCount++;
        }
    });

    
    var errorDiv = document.getElementById("hobbiesError");
    if (errorDiv) {
        if (checkedCount < 2) {
            errorDiv.innerHTML = "Please select at least 2 hobbies";
        } else {
            errorDiv.innerHTML = "";
        }
    }
});



// Add event listeners to input fields for real-time validation

//personal details
document.getElementById('firstnameid').addEventListener('input', validateFirstName);
document.getElementById('lastnameid').addEventListener('input', validateLastName);
document.getElementById('emailid').addEventListener('input', validateEmail);
document.getElementById('aadharid').addEventListener('input', validateAadhar);
document.getElementById('dobid').addEventListener('input', validateDOB);
document.getElementById('mobileid').addEventListener('input', validateMobile);


//address details
document.getElementById('street').addEventListener('input', validStreet);
document.getElementById('land').addEventListener('input', validLandmark);document.getElementById('pin').addEventListener('input', validPincode);

//other details
document.getElementById('username').addEventListener('input', validateUsername);
document.getElementById('password').addEventListener('input', validatePassword);
