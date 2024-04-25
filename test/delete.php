<?php

    include 'config.php';

    $id = $_REQUEST['id'];


    $sql = "DELETE FROM `tbl_student_registration` WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo "Record updated successfully";
      } else {
        echo "Error updating record: " . $conn->error;
      }

?>