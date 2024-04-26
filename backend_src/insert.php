<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include 'config.php';

// Initialize the $upload variable
$upload = 0;

// Check if the "upload-photo" radio button has been selected
if (isset($_POST['upload-photo']) && $_POST['upload-photo'] == 'Yes') {
    $upload = 1;
}

$first_name = $_POST['firstnameid'];
$last_name = $_POST['lastnameid'];
$date_of_birth = $_POST['dobid'];
$gender = $_POST['gender'];
$email_id = $_POST['emailid'];
$mobile = $_POST['mobileid'];
$aadhar_no = $_POST['aadharid'];
$country = $_POST['country'];
$state = $_POST['state'];
$city = $_POST['city'];
$street = $_POST['street'];
$landmark = $_POST['land'];
$pincode = $_POST['pin'];
$username = $_POST['username'];
$password = $_POST['password'];
$hobbies = $_POST['hobbies'];

// Convert array hobbies[] to string
$hobbies_str = implode(",", $hobbies);

// Fetch the last inserted ID
$last_id_query = "SELECT MAX(id) as last_id FROM tbl_student_registration";
$last_id_result = mysqli_query($conn, $last_id_query);
$row = mysqli_fetch_assoc($last_id_result);
$last_id = $row['last_id'];

// Increment the last ID by one to get the new ID
$new_id = $last_id + 1;




// Check if image file is uploaded
if ($upload && isset($_FILES['userphoto']['tmp_name']) && $_FILES['userphoto']['tmp_name'] != '') {
    $image = $_FILES['userphoto']['tmp_name'];
    $image_blb = addslashes(file_get_contents($image));
    $photo_name = $_FILES['userphoto']['name'];

   
} else {
    
  // If no  is uploaded, use the default image
  $default_image_path = '../backend_src/default_image/default_profile_img.jpeg'; 
  $image_blb = addslashes(file_get_contents($default_image_path));
  $photo_name = 'default_image.jpg'; 

}
  $query = "INSERT INTO `tbl_student_registration` (id, first_name, last_name, date_of_birth, gender, upload_photo, image_blb, photo_name, email_id, mobile, aadhar_no, country, state, city, street, landmark, pincode, username, password, hobbies, created_date) VALUES ('$new_id', '$first_name', '$last_name', '$date_of_birth', '$gender', '$upload', '$image_blb', '$photo_name', '$email_id', '$mobile', '$aadhar_no', '$country', '$state', '$city', '$street', '$landmark', '$pincode', '$username', '$password', '$hobbies_str', NOW())";


// Execute the query
$information = mysqli_query($conn, $query);

if ($information) {
  echo "<script>
  window.location.href = '../frontend_views_src/fid_success.html';
  </script>";

} else {
    echo "Failed to insert data into database: " . mysqli_error($conn);
}
?>
