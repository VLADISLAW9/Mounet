<?php
include("connect.php");
session_start();
$i=$_SESSION['id'];
$s="SELECT `img` FROM `mounet` WHERE id=$i";
$r=mysqli_query($link,$s);
$n = mysqli_num_rows($r);
$m=mysqli_fetch_array($r);
echo json_encode($m);
?>