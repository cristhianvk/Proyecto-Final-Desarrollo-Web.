<?php
   include("conexion.php");

   $email = $_POST["email"];
   $pass = $_POST["password"];
   $name = $_POST["name"];

   //registrar
   if (isset($_POST["btnRegistrar"])) {

      $sqlgrabar = "INSERT INTO usuario (email, password, name) values ('$email','$pass','$name')";

      if (mysqli_query($conn, $sqlgrabar)) {
         echo "<script> alert('Usuario registrado con exito: $name'); window.location='../html/login.html' </script>";
      }else{
         echo "Error: ".$sql."<br>".mysqli_error($conn);
      }
      mysqli_close($conn);
   }
?>