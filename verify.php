
//(payment save file)


<?php
include 'db.php';

$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$course = $_POST['course'];
$payment_id = $_POST['payment_id'];

$conn = new mysqli("localhost","root","","ujala");

$sql = "INSERT INTO students (name,email,phone,course,payment_id,status)
VALUES ('$name','$email','$phone','$course','$payment_id','PAID')";

$conn->query($sql);

echo "success";
?>