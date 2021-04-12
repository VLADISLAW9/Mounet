<?php
include("connect.php");
$i = $_POST['id_post'];
$r="SELECT `text` FROM `posts` WHERE id =$i";

$m=mysqli_query($link,$r);
$q= mysqli_fetch_array($m);
echo json_encode($q);
?>