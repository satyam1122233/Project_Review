<?php 

// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "students";

$servername = "srv-dev.dayalinfosystems.com";
$username = "satyamk_miet";
$password = "Sk#9719&";
$dbname = "db_satyamk_miet";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$table1="tbl_student_registration"; 
?>