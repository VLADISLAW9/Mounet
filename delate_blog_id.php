<?php
include("connect.php");
$i=$_POST['id_post'];
$d="DELETE FROM `posts` WHERE id=$i";
$r = mysqli_query($link,$d);
?>