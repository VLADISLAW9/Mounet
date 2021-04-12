<?php
include("connect.php");
$i=$_POST['id_blog'];
$e=$_POST['e'];
$r="UPDATE `blog` SET `Text`='$e' WHERE `id`=$i";
$res = mysqli_query($link,$r);
?>