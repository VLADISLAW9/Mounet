<?php
include('connect.php');
$select ="SELECT * FROM `posts` inner JOIN mounet ON posts.autor_post = mounet.id";
$r=mysqli_query($link,$select);
$n = mysqli_num_rows($r);
$m = array();
for($i=0;$i<$n;$i++){
    $f = mysqli_fetch_array($r);
    $m[$i]=$f;
    
}
echo json_encode($m);
?>