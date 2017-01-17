<?php

header('Content-type: application/json');

$errors = '';

if(empty($errors)) {

  //message to customer
  $from_name = $_POST['Regale nach Maß'];
  $from_email = $_POST['testmail@mail.de']; //TODO
  $message = '<p>Danke für Ihre Anfrage.</p>';

  $to_email = $_POST['mail'];

  $subject = 'Regale nach Maß - Ihre Anfrage ist eingegangen';

  //message to base
  $subject_base = 'Regale nach Maß - Neue Anfrage';
  $to_email_base = 'testmail@mail.de'; //TODO
  $message_base = '<p>Hier die Anfrage ...</p>';

  $headers .= "MIME-Version: 1.0\r\n";
	$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";
	$headers .= "From: $my_email\n";
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
