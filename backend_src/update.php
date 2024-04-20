<?php

    include 'config.php';


    $id = $_POST['id']; 
    $first_name = $_POST['firstnameid'];
    $last_name = $_POST['lastnameid'];
    // $gender = $_POST['gender'];
    $email = $_POST['emailid'];
    $phone = $_POST['mobileid'];
    // $hobbies = $_POST['hobbies'];
    // $country = $_POST['country'];
    // $state = $_POST['state'];
    // $city = $_POST['city'];
    $street = $_POST['street'];
    // $landmark = $_POST['land'];
    $pincode = $_POST['pin'];
    // $user_name = $_POST['username'];
    // $password = $_POST['password'];
    $dob = $_POST['dobid'];
    $aadhar = $_POST['aadharid'];
    //$password = $_POST['upload-photo'];

  

    // $sql = "INSERT INTO `registration_details` (`id`, `first_name`, `last_name`,`date_of_birth`, `gender`, `email_id`, `mobile`, `aadhar_no`, `country`, `state`, `city`, `street`, `landmark`, `pincode`, `username`, `password`,`hobbies`) VALUES (NULL, '$first_name', '$last_name','$dob', '$gender', '$email', '$phone', '$aadhar', '$country', '$state', '$city', '$street', '$landmark', '$pincode', '$user_name', '$password','$hobbies')";

  //  $sql = "UPDATE `registration_details` SET `first_name` = '$first_name', `last_name` = '$last_name', `date_of_birth` = '$dob', `gender` = '$gender', `email_id` = '$email', `mobile` = '$phone', `aadhar_no` = '$aadhar', `country` = '$country', `state` = '$state', `city` = '$city', `street` = '$street', `landmark` = '$landmark', `pincode` = '$pincode', `username` = '$user_name', `password` = '$password', `hobbies` = '$hobbies' WHERE `registration_details`.`id` = $id";

  $sql = "UPDATE `registration_details` SET `first_name` = '$first_name', `last_name` = '$last_name', `date_of_birth` = '$dob',`email_id` = '$email', `mobile` = '$phone', `aadhar_no` = '$aadhar',`street` = '$street', `pincode` = '$pincode' WHERE `registration_details`.`id` = $id";


   


    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
    //     echo '<script>
    //     window.location.href = "index.php"
    // </script>';
      } else {
        echo "Error updating record: " . $conn->error;
      }

?>