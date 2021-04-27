<?php
$serverName = "localhost";
$userName = "root";
$password = "";
$dbNombre = "ventas";

$conn = mysqli_connect($serverName, $userName, $password, $dbNombre);
if (!$conn) {
    http_response_code(500);
    die("Error: " . mysqli_connect_error());
}