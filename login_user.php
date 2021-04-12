<?php
   session_start();
   include('connect.php');
   $login = $_POST['login'];
   $password = $_POST['pass'];
   $select = "SELECT `id`, `Name`, `Female`, `Famyliname`, `login`, `password`, `img` FROM `mounet` WHERE login='$login' and password = '$password' ";
 
   $r=mysqli_query($link,$select);
   $n=mysqli_num_rows($r);
   if($n==0){
     //header('Location: MOUnEt.php?mess=Пользователь не найден');
     //echo "Пользователь не найден";
     echo "0";
   }
   else{
      $mas=mysqli_fetch_array( $r);
       $_SESSION['login']=$login;
       $_SESSION['id']=$mas[0];
      // header('Location: MOUnEt.php?mess=Пользователь не найден');
     // echo "Пользователь найден";
      echo "1";
   }
?>