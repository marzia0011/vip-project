<?php
class DataBase {
  function fetchAll() {
    $mysqli = new mysqli("localhost","root","","poetries");
    if ($mysqli -> connect_errno) {
      echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
      exit();
    }
    $sql = "SELECT p.id, p.title, c.name FROM poem p JOIN category c on p.category_id = c.id ORDER by p.id";
    $poems = array();
    $result = $mysqli -> query($sql);
    if ($result->num_rows > 0) {
      while($row = $result->fetch_assoc()) {
        $poems[] = $row;
      }
    }
    $response = new stdClass();
    $response->data = $poems;
    $mysqli -> close();
    return json_encode($response, JSON_UNESCAPED_UNICODE);
  }

  function fetchSingle($poem_id) {
    $mysqli = new mysqli("localhost","root","","poetries");
    if ($mysqli -> connect_errno) {
      echo "Failed to connect to MySQL: " . $mysqli -> connect_error;
      exit();
    }
    $sql = "SELECT title, body, category_id FROM poem where id = '$poem_id'";
    $result = $mysqli -> query($sql);
    $row = $result->fetch_row();
    $response = new stdClass();
    $response->title = $row[0];
    $response->body = $row[1];
    $category = $row[2];
    $sql2 = "SELECT p.id, p.title, c.name FROM poem p JOIN category c on p.category_id = c.id where (p.category_id = '$category' and p.id <> '$poem_id') limit 5";
    $poems = array();
    $result2 = $mysqli -> query($sql2);
    if ($result2->num_rows > 0) {
      while($row2 = $result2->fetch_assoc()) {
        $poems[] = $row2;
      }
    }
    $response->poems = $poems;
    $mysqli -> close();
    return json_encode($response, JSON_UNESCAPED_UNICODE);
  }
}
?>