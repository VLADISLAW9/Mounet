<?php
include("connect.php");
$i = $_POST['id_blog'];
$r="SELECT `Text` FROM `blog` WHERE id =$i";

$m=mysqli_query($link,$r);
$q= mysqli_fetch_array($m);
echo json_encode($q);
?>