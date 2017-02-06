<?php

header('Content-type: application/json');

$errors = '';

if(empty($errors)) {

  $properties =
  '<span>Segmente: </span>' . $_POST['parts'] . '<span>-teilig</span><br>'.
  '<span>Holz: </span>' . $_POST['wood'] . '<br>' .
  '<span>Gebeizt auf: </span>' . $_POST['stain'] . '<br>' .
  '<span>Kapitäle: </span>' . $_POST['deco'] . '<br>' .
  '<span>Kranzleisten: </span>' . $_POST['ledge'] . '<br>' .
  '<span>Breite: </span>' . $_POST['width'] . '<span> cm<span><br>' .
  '<span>Tiefe: </span>' . $_POST['depth'] . '<span> cm<span><br>' .
  '<span>Höhe: </span>' . $_POST['height'] . '<span> cm<span>';

  //message to customer
  $from_name = 'Regale nach Mass';
  $from_email = 'roch.d@freenet.de'; //TODO
  $message ='<h1>Danke für Ihre Anfrage.</h1>' . $properties;

  $to_email = $_POST['mail'];

  $subject = 'Regale nach Mass - Ihre Anfrage ist eingegangen';

  //message to base
  $subject_base = 'Regale nach Mass - Neue Anfrage';
  $to_email_base = 'p.drozd@freenet.de';
  $message_base = '<p>Nachricht des Klienten:</p><br>' .
    $_POST['message'] .
    '<br><p>Klient hat folgendes bestellt.</p>'.
    $properties

    ;

  //headers
  $headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=UTF-8\r\n";
	$headers .= "From: test\n";
	$headers .= "Reply-To: $from_email";


  mail($to_email,$subject, $message, $headers); //mail to customer
  mail($to_email_base,$subject_base, $message_base, $headers); //mail to base

  $response_array['status'] = 'success';
  echo json_encode($response_array);
}
else {
  $response_array['status'] = 'error';
  echo json_encode($response_array);
}

 ?>
