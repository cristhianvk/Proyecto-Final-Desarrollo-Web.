<?php
   session_start();
   include("conexion.php");

   $email = $_POST["email"];
   $pass = $_POST["pass"];

   //login
   if (isset($_POST["btnIngresar"])) {

      $query = mysqli_query($conn, "SELECT * FROM usuario WHERE email = '$email' AND password ='$pass'");
      
      $nr = mysqli_num_rows($query);

      if ($nr == 1) {
         $_SESSION['user'] = $email;
         header('location: ../html/curso.html');
         exit;
      }else{
         echo '
            <script> 
               alert("Usuario no existe"); 
               window.location = "../index.html";
            </script>";
         ';
         exit;
      }
   }
?>