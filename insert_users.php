<?php
/*$f1=$_FILES['img']['tmp_name'];
$f2='img/'.$_FILES['img']['name'];
if($_FILES['img']['type']=='image/jpeg' || $_FILES['img']['type']=='image/gif' || $_FILES['img']['type']=='image/png'){


    copy($f1,$f2);
**/
    $host ="localhost";
    $login = "root";
    $password ="root";
    $bd = "mounet";
    $link =mysqli_connect($host,$login,$password,$bd);
    $Name = $_POST['name'];
    $Female =$_POST['female'];
    $Famyliname= $_POST['familyname'];
    $login = $_POST['login'];
    $password = $_POST['password'];
   // $img = $_POST['img'];
    $sel="select* from mounet where login='$login' ";
   // echo $sel;
    $f=mysqli_query($link,$sel);
    $n=mysqli_num_rows($f);
    if($n==0){
      $s= "INSERT INTO `mounet`(`Name`, `Female`, `Famyliname`, `login`, `password`, `img`) 
      VALUES ('$Name','$Female','$Famyliname','$login','$password','')";
       
    
    mysqli_query($link,$s);
  //  header('Location: MOUnEt.php');
   echo "1";
    
}else{
      //  echo 'пароли не совпадают';
      //  header("Location: MOUnEt.php?err=Пароли не совпадают&log=$login &nam=$Name &fem=$Female &Fam=$Famyliname &img=$img");
      echo "0";
    }

//else{
  // header("Location: MOUnEt.php?err=Файлы не походят по формату");
   
//}




?>