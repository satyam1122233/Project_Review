<?php

    include 'config.php';


    $id = $_POST['id']; 
    $first_name = $_POST['firstnameid'];
    $last_name = $_POST['lastnameid'];
    $gender = $_POST['gender'];
    $email = $_POST['emailid'];
    $phone = $_POST['mobileid'];
    $hobbies = implode(",", $_POST['hobbies']); // Convert hobbies array to comma-separated string
    $country = $_POST['country'];
    $state = $_POST['state'];
    $city = $_POST['city'];
    $street = $_POST['street'];
    $landmark = $_POST['landmark'];
    $pincode = $_POST['pin'];
    $user_name = $_POST['username'];
    $password = $_POST['password'];
    $dob = $_POST['dobid'];
    $aadhar = $_POST['aadharid'];

  



 

  $sql = "UPDATE `tbl_student_registration` SET `first_name` = '$first_name', `last_name` = '$last_name', `date_of_birth` = '$dob', `gender` = '$gender',`email_id` = '$email', `mobile` = '$phone', `aadhar_no` = '$aadhar',`country` = '$country', `state` = '$state', `city` = '$city', `street` = '$street',`landmark` = '$landmark', `pincode` = '$pincode',`username` = '$user_name', `password` = '$password', `hobbies` = '$hobbies' WHERE `tbl_student_registration`.`id` = $id";


   


    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    //     echo '<script>
    //     window.location.href = "index.php"
    // </script>';
      } else {
        echo "Error updating record: " . $conn->error;
      }

?>