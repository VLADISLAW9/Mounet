<?php
session_start();
include("connect.php");
$s=$_SESSION["id"];
$d="DELETE FROM `posts` WHERE `autor_post` = $s";
$r = mysqli_query($link,$d);
header('Location: http://localhost/site/MOUnEt/user_page.php');
?>