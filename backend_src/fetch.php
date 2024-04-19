<?php

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

    include 'config.php';




    $sql = "SELECT * FROM `registration_details`";
    $retval =$conn->query($sql);
    if(! $retval ) {
        die('Could not insert data: ' .$conn->connect_error);
    }

    $counts=$retval->num_rows;



    if($retval->num_rows >0){
	while($row =$retval->fetch_assoc()) {

        $js[] = $row;
    }
    }

    echo json_encode($js);

?>
