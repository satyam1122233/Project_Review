<?php 
// $servername = "localhost";
// $username = "keresearch_param";
// $password = "OD^PE{hlC{?g";
// $dbname = "keresearch_templates";

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "students";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$table1="template_det"; 
$users = "users"
?>