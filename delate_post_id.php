<?php
include("connect.php");
$i=$_POST['id_blog'];
$d="DELETE FROM `blog` WHERE id=$i";
$r = mysqli_query($link,$d);
?>