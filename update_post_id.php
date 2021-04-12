<?php
include("connect.php");

$i=$_POST['id_post'];
$e=$_POST['e'];
$r="UPDATE `posts` SET `text`='$e' WHERE `id`=$i";
$res = mysqli_query($link,$r);
?>