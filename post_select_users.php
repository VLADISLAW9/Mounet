<?php

session_start();

include("connect.php");
$s=$_SESSION["id"];
$post="SELECT * FROM `posts`INNER JOIN mounet ON posts.autor_post =mounet.id WHERE `autor_post`= $s";
$r=mysqli_query($link,$post);
$n = mysqli_num_rows($r);
$m = array();
for($i=0;$i<$n;$i++){
    $f = mysqli_fetch_array($r);
    $m[$i]=$f;
    
}
echo json_encode($m);
?>