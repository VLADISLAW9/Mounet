<?php
include('connect.php');
session_start();
$p=$_POST['new_password'];
$id=$_SESSION['id'];
$update="UPDATE `mounet` SET `password`='$p' WHERE id=$id";
$res = mysqli_query($link,$update);
echo $update;
?>