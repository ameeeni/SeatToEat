<?php
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
//databaseConnexion 
$conn = new mysqli('localhost', 'root' ,'' , 'food_web_db');
 
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}else {
    if(isset($_POST['register'])){
   
    $stmt = $conn ->prepare("insert into create_account(username , email , password) values (? , ?  , ?)");
    $stmt -> bind.param("ssssssi" , $username , $email , $password );
    $stmt -> execute();
    echo "user registred!";
   
}
}

?>

?>