<?php
session_start();
if (isset($_SESSION['rol']) && $_SESSION['rol'] !== ''){
    echo json_encode($_SESSION);
}else{
    http_response_code(401);
    die();
}