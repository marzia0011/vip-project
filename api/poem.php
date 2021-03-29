<?php
    include "./db.php";
    $db = new DataBase();
    $poem_id = (int)$_GET['id'];
    $response = $db->fetchSingle($poem_id);
    echo $response;
?>