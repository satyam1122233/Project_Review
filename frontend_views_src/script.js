// ===============================================dropdowns============
// ===============================================dropdowns============
// ===============================================dropdowns============
validateUsername();
$("#username").change(validateUsername());

var countrySateCityinfo = {
    India:{
        "Andhra Pradesh": [ 'Visakhapatnam', 'Vijayawada', 'Guntur', 'Nellore', 'Kurnool', 'Rajahmundry', 'Tirupati', 'Kadapa', 'Kakinada', 'Anantapur' ],
        
        Assam: [ 'Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat', 'Nagaon', 'Tinsukia', 'Tezpur', 'Karimganj', 'Sibsagar', 'Goalpara' ],
        
        Bihar: [ 'Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Arrah', 'Begusarai', 'Katihar', 'Chhapra' ],
        
        Chhattisgarh: [ 'Raipur', 'Bhilai', 'Korba', 'Bilaspur', 'Raigarh', 'Rajnandgaon', 'Durg', 'Jagdalpur', 'Ambikapur', 'Dhamtari' ],
        
        Goa: [ 'Panaji', 'Vasco da Gama', 'Margao', 'Mapusa', 'Ponda', 'Bicholim', 'Curchorem', 'Sanguem', 'Canacona', 'Quepem' ],
        
        Gujarat: [ 'Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Gandhinagar', 'Nadiad', 'Anand' ],
        
        Haryana: [ 'Faridabad', 'Gurgaon', 'Panipat', 'Ambala', 'Yamunanagar', 'Rohtak', 'Hisar', 'Karnal', 'Sonipat', 'Panchkula' ],
        
        "Himachal Pradesh": [ 'Shimla', 'Mandi', 'Solan', 'Dharamshala', 'Kullu', 'Chamba', 'Hamirpur', 'Nahan', 'Bilaspur', 'Palampur' ],
        
        Jharkhand: [ 'Ranchi', 'Jamshedpur', 'Dhanbad', 'Bokaro Steel City', 'Hazaribagh', 'Deoghar', 'Giridih', 'Ramgarh', 'Dumka', 'Chaibasa' ],
        
        Karnataka: [ 'Bangalore', 'Hubli', 'Mysore', 'Gulbarga', 'Belgaum', 'Mangalore', 'Davanagere', 'Bellary', 'Shimoga', 'Tumkur' ],
        
        Kerala: [ 'Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Kollam', 'Thrissur', 'Kannur', 'Alappuzha', 'Kottayam', 'Palakkad', 'Manjeri' ],
        
       "Madhya Pradesh": [ 'Indore', 'Bhopal', 'Jabalpur', 'Gwalior', 'Ujjain', 'Sagar', 'Dewas', 'Satna', 'Ratlam', 'Rewa' ],
        
        Maharashtra: [ 'Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Aurangabad', 'Thane', 'Solapur', 'Kolhapur', 'Navi Mumbai', 'Amravati' ],
        
        Manipur: [ 'Imphal', 'Thoubal', 'Kakching', 'Ukhrul', 'Churachandpur', 'Senapati', 'Bishnupur', 'Chandel', 'Tamenglong', 'Jiribam' ],
        
        Meghalaya: [ 'Shillong', 'Tura', 'Nongstoin', 'Jowai', 'Williamnagar', 'Baghmara', 'Resubelpara', 'Mairang', 'Mawkyrwat', 'Khliehriat' ],
        
        Mizoram: [ 'Aizawl', 'Lunglei', 'Saiha', 'Champhai', 'Kolasib', 'Serchhip', 'Lawngtlai', 'Mamit', 'Hnahthial', 'Saitual' ],
        
        Nagaland: [ 'Kohima', 'Dimapur', 'Mokokchung', 'Tuensang', 'Wokha', 'Zunheboto', 'Phek', 'Mon', 'Longleng', 'Kiphire' ],
        
        Odisha: [ 'Bhubaneswar', 'Cuttack', 'Rourkela', 'Brahmapur', 'Sambalpur', 'Puri', 'Balasore', 'Bhadrak', 'Baripada', 'Jeypore' ],
        
        Punjab: [ 'Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda', 'Hoshiarpur', 'Pathankot', 'Moga', 'Firozpur', 'Batala' ],
        
        Rajasthan: [ 'Jaipur', 'Jodhpur', 'Kota', 'Bikaner', 'Ajmer', 'Udaipur', 'Bhilwara', 'Alwar', 'Bharatpur', 'Sikar' ],
        
        Sikkim: [ 'Gangtok', 'Namchi', 'Mangan', 'Singtam', 'Rangpo', 'Naya Bazar', 'Jorethang', 'Ravangla', 'Soreng', 'Melli' ],
        
        "Tamil Nadu": [ 'Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Tiruppur', 'Ranipet', 'Nagercoil', 'Thanjavur' ],
        
        Telangana: [ 'Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar', 'Ramagundam', 'Khammam', 'Mahbubnagar', 'Nalgonda', 'Adilabad', 'Suryapet' ],
        
        Tripura: [ 'Agartala', 'Udaipur', 'Dharmanagar', 'Kailashahar', 'Belonia', 'Sabroom', 'Bishalgarh', 'Khowai', 'Sonamura', 'Teliamura' ],
        
        "Uttar Pradesh": ['Agra', 'Lucknow', 'Kanpur', 'Varanasi', 'Allahabad', 'Ghaziabad', 'Meerut', 'Noida', 'Gorakhpur', 'Aligarh', 'Bareilly', 'Moradabad', 'Saharanpur', 'Gorakhpur', 'Faizabad', 'Firozabad', 'Jhansi', 'Muzaffarnagar', 'Mathura', 'Budaun', 'Etawah', 'Rampur', 'Shahjahanpur', 'Mau', 'Farrukhabad', 'Hapur', 'Sultanpur', 'Mirzapur', 'Basti', 'Deoria', 'Ballia', 'Orai', 'Etah', 'Bijnor', 'Amroha', 'Hardoi', 'Azamgarh', 'Raebareli', 'Sitapur', 'Unnao', 'Jaunpur'],

        Uttarakhand: ['Dehradun','Haridwar','Roorkee','Haldwani','Rudrapur','Kashipur','Rishikesh','Pauri','Kotdwara','Mussoorie'],

        "West Bengal": ['Kolkata','Asansol','Siliguri','Durgapur','Bardhaman','Malda','Baharampur','Kharagpur','Habra','Krishnanagar']
      }
      ,
      "United States": {
        "Alabama": ["Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa", "Hoover", "Dothan", "Auburn", "Decatur", "Madison"],
        "Alaska": ["Anchorage", "Fairbanks", "Juneau", "Sitka", "Ketchikan", "Wasilla", "Kenai", "Kodiak", "Bethel", "Palmer"],
        "Arizona": ["Phoenix", "Tucson", "Mesa", "Chandler", "Glendale", "Scottsdale", "Gilbert", "Tempe", "Peoria", "Surprise"],
        "Arkansas": ["Little Rock", "Fort Smith", "Fayetteville", "Springdale", "Jonesboro", "North Little Rock", "Conway", "Rogers", "Bentonville", "Hot Springs"],
        "California": ["Los Angeles", "San Diego", "San Jose", "San Francisco", "Fresno", "Sacramento", "Long Beach", "Oakland", "Bakersfield", "Anaheim"],
        "Colorado": ["Denver", "Colorado Springs", "Aurora", "Fort Collins", "Lakewood", "Thornton", "Arvada", "Westminster", "Pueblo", "Centennial"],
        "Connecticut": ["Bridgeport", "New Haven", "Hartford", "Stamford"]
    },
    "United Kingdom": {
        "England": ["London", "Manchester", "Birmingham", "Liverpool", "Bristol", "Leeds", "Sheffield", "Newcastle upon Tyne", "Nottingham", "Leicester"],
        "Scotland": ["Glasgow", "Edinburgh", "Aberdeen", "Dundee", "Inverness", "Stirling", "Perth", "Dumfries", "Kirkcaldy", "Ayr"],
        "Wales": ["Cardiff", "Swansea", "Newport", "Wrexham", "Barry", "Neath", "Cwmbran", "Bridgend", "Llanelli", "Merthyr Tydfil"],
        "Northern Ireland": ["Belfast", "Londonderry", "Newry", "Armagh", "Bangor", "Lisburn", "Craigavon", "Ballymena", "Newtownabbey", "Coleraine"],
        "Isle of Man": ["Douglas", "Peel", "Ramsey", "Castletown", "Port Erin", "Port St Mary", "Laxey", "Onchan", "Baldrine", "Ballaugh"],
        "Jersey": ["Saint Helier", "Saint Saviour", "Saint Clement", "Saint Lawrence", "Saint Peter", "Saint Ouen", "Saint John", "Saint Martin", "Grouville", "Trinity"],
        "Guernsey": ["Saint Peter Port", "Vale", "Castel", "St Sampson", "St Martin", "St Andrew", "St Pierre du Bois", "St Saviour", "Forest", "Torteval"]
    },
    "Canada": {
        "Ontario": ["Toronto", "Ottawa", "Mississauga", "Hamilton", "London", "Markham", "Brampton", "Vaughan", "Kitchener", "Windsor"],
        "Quebec": ["Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil", "Sherbrooke", "Saguenay", "Levis", "Trois-Rivieres", "Terrebonne"],
        "British Columbia": ["Vancouver", "Surrey", "Burnaby", "Richmond", "Abbotsford", "Coquitlam", "Kelowna", "Saanich", "Langley", "Delta"],
        "Alberta": ["Calgary", "Edmonton", "Red Deer", "Lethbridge", "St. Albert", "Medicine Hat", "Grande Prairie", "Airdrie", "Spruce Grove", "Leduc"],
        "Manitoba": ["Winnipeg", "Brandon", "Steinbach", "Thompson", "Portage la Prairie", "Selkirk", "Dauphin", "Winkler", "Morden", "Flin Flon"],
        "Saskatchewan": ["Saskatoon", "Regina", "Prince Albert", "Moose Jaw", "North Battleford", "Swift Current", "Estevan", "Weyburn", "Yorkton", "Warman"],
        "Nova Scotia": ["Halifax", "Sydney", "Dartmouth", "Truro", "New Glasgow", "Glace Bay", "Kentville", "Amherst", "Bridgewater", "Yarmouth"]
    },
    "Australia": {
        "New South Wales": ["Sydney", "Newcastle", "Central Coast", "Wollongong", "Maitland", "Coffs Harbour", "Albury", "Port Macquarie", "Wagga Wagga", "Tamworth"],
        "Victoria": ["Melbourne", "Geelong", "Ballarat", "Bendigo", "Mildura", "Warrnambool", "Shepparton", "Traralgon", "Wangaratta", "Sunbury"],
        "Queensland": ["Brisbane", "Gold Coast", "Sunshine Coast", "Townsville", "Cairns", "Toowoomba", "Mackay", "Rockhampton", "Bundaberg", "Hervey Bay"],
        "Western Australia": ["Perth", "Rockingham", "Mandurah", "Bunbury", "Geraldton", "Albany", "Kalgoorlie", "Karratha", "Broome", "Port Hedland"],
        "South Australia": ["Adelaide", "Mount Gambier", "Whyalla", "Murray Bridge", "Port Augusta", "Port Pirie", "Victor Harbor", "Gawler", "Mount Barker", "Morphett Vale"]
    }
}

// window.onload = function(){
    const selectCountry = document.getElementById('country'),
        selectState = document.getElementById('state'),
        selectCity = document.getElementById('city'),
        selects = document.querySelectorAll('select')

        selectState.disabled = true
        selectCity.disabled = true

        selects.forEach(select => {
            if(select.disabled == true){
                select.style.cursor = "auto"
            }
            else{
                select.style.cursor = "pointer"
            }
        })

        for(let country in countrySateCityinfo){
            console.log(country);
            selectCountry.options[selectCountry.options.length] = new Option(country, country)
        }


        // country change
        selectCountry.onchange = (e) =>{
            
            selectState.disabled = false
            selectCity.disabled = true

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectState.length = 1
            selectCity.length = 1

            for(let state in countrySateCityinfo[e.target.value]){
                // console.log(state);
                selectState.options[selectState.options.length] = new Option(state, state)
            }
        }

        // state change
        selectState.onchange = (e) =>{
            selectCity.disabled = false

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })

            selectCity.length = 1

            let city = countrySateCityinfo[selectCountry.value][e.target.value]

            for(let i=0; i<city.length; i++){
                selectCity.options[selectCity.options.length] = new Option(city[i], city[i])
            }

        }

        // change city
        selectCity.onchange = (e) =>{

            selects.forEach(select => {
                if(select.disabled == true){
                    select.style.cursor = "auto"
                }
                else{
                    select.style.cursor = "pointer"
                }
            })
            

          
        }
// }



// Function to initialize the page with green background for Personal Details
window.onload = function() {
    document.getElementById("pd").style.backgroundColor = "green";
    document.getElementById("pdIcon").classList.remove('fa-circle-o'); // Remove unchecked icon class
    document.getElementById("pdIcon").classList.add('fa-check-circle'); 
    document.getElementById("pd").style.color = "white";
    // loadCountries();


}



// ===============================================dropdowns============
// ===============================================dropdowns============
// ===============================================dropdowns============

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
    document.getElementById("od").style.backgroundColor = "white"; // Reset background color of Address Details
    document.getElementById("od").style.color="green";
    

}



function validatePersonalDetails() {
  //  Add validation for personal details fields (e.g., first name, email, etc.)
  return true;
    // return validateFirstName() && validateLastName()&& validateEmail() && validateAadhar() && validateDOB() && validateMobile() && validateGender();

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
    var aadharRegex = /^[1-9]\d{11}$/
    ;

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
    var mobileRegex = /^[6-9]\d{9}$/;

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
    var usernameRegex= function validateUsername() {
    var usernameInput = document.querySelector('.username input[type="text"]');
    var usernameValue = usernameInput.value.trim();
    var usernameRegex = /^[a-zA-Z0-9]{6,16}$/; // Regex to check for alphanumeric characters and length between 6 and 16 characters

    if (usernameValue === '') {
        document.getElementById("usernameError").innerHTML = "Username is required.";
        $("#submitid").off("click");
        highlightInvalidField(usernameInput);
        return false;
    } else if (!usernameRegex.test(usernameValue)) {
        document.getElementById("usernameError").innerHTML = "Please enter a valid username between 6 and 16 characters.";
        $("#submitid").off("click");

        highlightInvalidField(usernameInput);
        return false;
    }
    if (usernameValue != '') {

        $("#submitid").on("click");

    }

    return true;
}

}

function validatePassword() {
    var passwordInput = document.querySelector('.password input[type="password"]');
    var password = passwordInput.value.trim();
    var uppercaseRegex = /[A-Z]/; // Regex to check for at least one uppercase letter
    var symbolRegex = /[-!$%^&*@#()_+|~=`{}\[\]:";'<>?,.\/]/; // Regex to check for at least one symbol

    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Password is required.";
        highlightInvalidField(passwordInput);

        return false;
    } else if (password.length < 8) {
        document.getElementById("passwordError").innerHTML = "Password should be at least 8 characters long.";
        highlightInvalidField(passwordInput);
        return false;
    } else if (!uppercaseRegex.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password should contain at least one uppercase letter.";
        highlightInvalidField(passwordInput);
        return false;
    } else if (!symbolRegex.test(password)) {
        document.getElementById("passwordError").innerHTML = "Password should contain at least one symbol.";
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










    //     var config = {
    //         cUrl: 'https://api.countrystatecity.in/v1/countries',
    //         ckey: 'NHhvOEcyWk50N2Vna3VFTE00bFp3MjFKR0ZEOUhkZlg4RTk1MlJlaA=='
    //     }
       
    // var countrySelect = document.getElementById('count'),
    // stateSelect = document.getElementById('st'),
    // citySelect = document.getElementById('city')
    

    //     function loadCountries() {
        
    //         let apiEndPoint = config.cUrl
        
    //         fetch(apiEndPoint, {headers: {"X-CSCAPI-KEY": config.ckey}})
    //         .then(Response => Response.json())
    //         .then(data => {
    //                 data.forEach(country => {
    //                 const option = document.createElement('option')
    //                 option.value = country.iso2
    //                 option.textContent = country.name 
    //                 countrySelect.appendChild(option)
    //             })
    //         })
    //         .catch(error => console.error('Error loading countries:', error))
        
    //         stateSelect.disabled = true
    //         citySelect.disabled = true
    //         stateSelect.style.pointerEvents = 'none'
    //         citySelect.style.pointerEvents = 'none'
    //     }
        
        
    //     function loadStates() {
    //         stateSelect.disabled = false
    //         citySelect.disabled = true
    //         stateSelect.style.pointerEvents = 'auto'
    //         citySelect.style.pointerEvents = 'none'
        
    //         const selectedCountryCode = countrySelect.value
    //         stateSelect.innerHTML = '<option value="">Select State</option>'
    //         citySelect.innerHTML = '<option value="">Select City</option>'
        
    //         fetch(`${config.cUrl}/${selectedCountryCode}/states`, {headers: {"X-CSCAPI-KEY": config.ckey}})
    //         .then(response => response.json())
    //         .then(data => {
    //             data.forEach(state => {
    //                 const option = document.createElement('option')
    //                 option.value = state.iso2
    //                 option.textContent = state.name 
    //                 stateSelect.appendChild(option)
    //             })
    //         })
    //         .catch(error => console.error('Error loading countries:', error))
    //     }
        
        
    //         function loadCities() {
    //         citySelect.disabled = false
    //         citySelect.style.pointerEvents = 'auto'
    //         const selectedCountryCode = countrySelect.value
    //         const selectedStateCode = stateSelect.value
    //         citySelect.innerHTML = '<option value="">Select City</option>' 
    //         fetch(`${config.cUrl}/${selectedCountryCode}/states/${selectedStateCode}/cities`, {headers: {"X-CSCAPI-KEY": config.ckey}})
    //         .then(response => response.json())
    //         .then(data => {
    //             data.forEach(city => {
    //                 const option = document.createElement('option')
    //                 option.value = city.iso2
    //                 option.textContent = city.name 
    //                 citySelect.appendChild(option)
    //             })
    //         })
    //     }
