<?php

session_start();

include("connect.php");
$s=$_SESSION["id"];
$blog="SELECT * FROM `blog`INNER JOIN mounet ON blog.autor_id =mounet.id WHERE `autor_id`= $s";
$r=mysqli_query($link,$blog);
$n = mysqli_num_rows($r);
$m = array();
for($i=0;$i<$n;$i++){
    $f = mysqli_fetch_array($r);
    $m[$i]=$f;
    
}
echo json_encode($m);
?>