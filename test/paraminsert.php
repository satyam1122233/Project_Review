<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

    include 'config.php';

    //     echo '<script>
    //     window.location.href = "insert.php"
    // </script>';
    // $image = $_FILES["image"];
    // $info = getimagesize($image["tmp_name"]);
    // if(!$info)
    // {
    //   die("File is not an image");
    // }
    // $name = $image["name"];
    // $type = $image["type"];
    // $blob = addslashes(file_get_contents($image["tmp_name"]));
    
    $first_name = $_POST['firstnameid'];
    $last_name = $_POST['lastnameid'];
    // $gender = $_POST['gender'];
    $email = $_POST['emailid'];
    $dob = $_POST['dobid'];
    $phone = $_POST['mobileid'];
    $aadhar = $_POST['aadharid'];
    $street = $_POST['street'];

    $hobbies = $_POST['hobbies'];
    // $image = $_POST['image'];

    // $country = $_POST['country'];
    // $state = $_POST['state'];
    // $city = $_POST['city'];
    // $landmark = $_POST['land'];
    $pincode = $_POST['pin'];
    // $user_name = $_POST['username'];
    // $password = $_POST['password'];
    // $password = $_POST['i'];

   
    // $sql = " INSERT INTO `reg_details` (`id`, `first_name`, `last_name`, `date_of_birth`, `gender`, `email_id`, `mobile`, `aadhar_no`, `upload_photo`, `country`, `state`, `city`, `street`, `landmark`, `pincode`, `username`, `password`, `hobbies`) VALUES (NULL, 'satyam', 'kumar', '2024-04-02', 'm', 's@12.gmail.com', 'd', 'dsds', '', 'dsds', 'ddd', 'dsdsd', 'dssd', 'dss', '32', 'ffff', 'cxc', 'dskjhd')";


    $sql = "INSERT INTO `registration_details` (`id`, `first_name`, `last_name`,`date_of_birth`, `email_id`, `mobile`, `aadhar_no`,`street`, `pincode`, `hobbies`) VALUES (NULL, '$first_name', '$last_name','$dob', '$email', '$phone', '$aadhar','$street', '$pincode', '$hobbies')";

    if ($conn->query($sql) === TRUE) {
        echo "Success updating record";
        
      } else {
        echo "Error updating record: " . $conn->error;
      }

      



?>
