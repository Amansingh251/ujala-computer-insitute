// (database connection)

<?php
$conn = new mysqli("localhost","root","","ujala");

if($conn->connect_error){
    die("Connection failed");
}
?>








