<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

    include 'config.php';




    $sql = "SELECT * FROM `tbl_student_registration`";
    $retval =$conn->query($sql);
    if(! $retval ) {
        die('Could not insert data: ' .$conn->connect_error);
    }

    $counts=$retval->num_rows;

    $js = array();


    if($retval->num_rows >0){
	while($row =$retval->fetch_assoc()) {


        $js[] = array(
            'id' => $row['id'],
            'first_name' => $row['first_name'],
            'last_name' => $row['last_name'],
            'email_id' => $row['email_id'],
            'mobile' => $row['mobile'],
            'landmark' => $row['landmark'],
            'pincode' => $row['pincode'],
            'username' => $row['username'],
            'password' => $row['password'],
            'state' => $row['state'],
            'aadhar_no' => $row['aadhar_no'],
            'date_of_birth' => $row['date_of_birth'],
            'gender' => $row['gender'],
            'street' => $row['street'],
            'hobbies' => $row['hobbies'],
            'image_blb' => base64_encode($row['image_blb']) // Encode image data to base64



        );
    }
    }

    echo json_encode($js);

?>
