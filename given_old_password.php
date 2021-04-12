<?php
include('connect.php');
session_start();
$g=$_POST['old_password'];
$i=$_SESSION['id'];
$sel="SELECT * FROM `mounet` WHERE id=$i AND password='$g' ";
$res = mysqli_query($link,$sel);
$n=mysqli_num_rows($res);
if($n==0){
  echo 0;
}
else{
    echo 1;
}
?>