<?php
include('connect.php');
session_start();
$id=$_SESSION['id'];
$name=$_POST['name'];
$famele=$_POST['famele'];
$familyname=$_POST['familyname'];
$res= "UPDATE mounet SET Name='$name',Female='$famele',Famyliname='$familyname' WHERE id= $id ";
$sav = mysqli_query($link,$res);
echo $res;
?>