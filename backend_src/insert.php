<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

    include 'config.php';


    // if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['register'])) {
    
    // // Initialize the $upload variable
    $upload = 0;
    
    // // Check if the "upload-photo" radio button has been selected
    if (isset($_POST['upload-photo']) && $_POST['upload-photo'] == 'Yes') {
        $upload = 1;
    }
    
    // Your database connection code should be here




    $first_name = $_POST['firstnameid'];
    $last_name = $_POST['lastnameid'];
    $date_of_birth = $_POST['dobid'];
    $gender = $_POST['gender'];
    $email_id = $_POST['emailid'];
    $mobile = $_POST['mobileid'];
    $aadhar_no = $_POST['aadharid'];
    //$upload_photo = $_POST['userphoto'];
    $country = $_POST['country'];
    $state = $_POST['state'];
    $city = $_POST['city'];
    $street = $_POST['street'];
    $landmark = $_POST['land'];
    $pincode = $_POST['pin'];
    $username = $_POST['username'];
    $password = $_POST['password'];
    $hobbies = $_POST['hobbies'];
    // to convert array hobbies[]  to  string we use implode() function
    //[] to string
    $hobbie1 = implode(",", $hobbies);
    
    // Fetch the last inserted ID
    // $last_id_query = "SELECT MAX(id) as last_id FROM tbl_student_registration";
    // $last_id_result = mysqli_query($conn, $last_id_query);
    // $row = mysqli_fetch_assoc($last_id_result);
    // $last_id = $row['last_id'];
    
    // Increment the last ID by one to get the new ID
    $new_id = $last_id + 1;
    
    $filename = $_FILES["userphoto"]["name"];
    $tempname = $_FILES["userphoto"]["tmp_name"];
    $folder = "images/".$filename;
    
    // Move the uploaded file to the desired location
    if (move_uploaded_file($tempname, $folder)) {
        // File uploaded successfully
        $query = "INSERT INTO $table1 ( first_name, last_name, date_of_birth, gender, upload_photo, photo_name, email_id, mobile, aadhar_no, country, state, city, street, landmark, pincode, username, password, hobbies, created_date) VALUES ( '$first_name', '$last_name', '$date_of_birth', '$gender', '$upload', '$folder', '$email_id', '$mobile', '$aadhar_no', '$country', '$state', '$city', '$street', '$landmark', '$pincode', '$username', '$password', '$hobbie1', NOW())";
        
        $information = mysqli_query($conn, $query);
        
        if ($information) {
            echo "Data inserted into database.";
        } else {
            echo "Failed to insert data into database.";
        }
    } else {
        // Failed to move uploaded file
        echo "Failed to upload file.";
    }
// }
?>
