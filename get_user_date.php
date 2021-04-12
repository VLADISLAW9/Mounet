<?php
include("connect.php");
session_start();
$s=$_SESSION["id"];
$r="SELECT * FROM `mounet` WHERE id=$s";
$res=mysqli_query($link,$r);
$fet=mysqli_fetch_array($res);
echo json_encode($fet);
?>