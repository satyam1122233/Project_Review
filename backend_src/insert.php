<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

    include 'config.php';


    $first_name = $_POST['firstnameid'];
    $last_name = $_POST['lastnameid'];
     $gender = $_POST['gender'];
    $email = $_POST['emailid'];
    $phone = $_POST['mobileid'];
    $hobbies = $_POST['hobbies'];
    $country = $_POST['country'];
    $state = $_POST['state'];
    $city = $_POST['city'];
    $street = $_POST['street'];
    $landmark = $_POST['land'];
    $pincode = $_POST['pin'];
    $user_name = $_POST['username'];
    $password = $_POST['password'];
    $dob = $_POST['dobid'];
    $aadhar = $_POST['aadharid'];
    //$password = $_POST['upload-photo'];

   
    // $sql = " INSERT INTO `reg_details` (`id`, `first_name`, `last_name`, `date_of_birth`, `gender`, `email_id`, `mobile`, `aadhar_no`, `upload_photo`, `country`, `state`, `city`, `street`, `landmark`, `pincode`, `username`, `password`, `hobbies`) VALUES (NULL, 'satyam', 'kumar', '2024-04-02', 'm', 's@12.gmail.com', 'd', 'dsds', '', 'dsds', 'ddd', 'dsdsd', 'dssd', 'dss', '32', 'ffff', 'cxc', 'dskjhd')";

    $sql = "INSERT INTO `registration_details` (`id`, `first_name`, `last_name`,`date_of_birth`, `gender`, `email_id`, `mobile`, `aadhar_no`, `country`, `state`, `city`, `street`, `landmark`, `pincode`, `username`, `password`,`hobbies`) VALUES (NULL, '$first_name', '$last_name','$dob', '$gender', '$email', '$phone', '$aadhar', '$country', '$state', '$city', '$street', '$landmark', '$pincode', '$user_name', '$password','$hobbies')";

   

    // echo '<script>alert("text")</script>';
        //  echo 'done';


?>
