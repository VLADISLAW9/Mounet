<?php
$f1=$_FILES['file']['tmp_name'];
$f2='img/'.$_FILES['file']['name'];
if($_FILES['file']['type']=='image/jpeg' || $_FILES['file']['type']=='image/gif' || $_FILES['file']['type']=='image/png'){


    copy($f1,$f2);

   include("connect.php");
   $i =$_SESSION['id'];
   $t="INSERT INTO `posts`( `text`, `like_count`, `coments`, `img`, `autor_post`) VALUES ('ghjfrgjfg',0,0,'$f1',$i)";
   mysqli_query($link,$t);
}
//echo($_FILES['file']['tmp_name']);
echo json_encode($_POST);
?>