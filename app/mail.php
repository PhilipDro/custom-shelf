<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
header('Content-type: application/json');

$errors = '';

if(empty($errors)) {
  // if($_POST['stain'] != '') {
  //   $stain = '<span>Gebeizt auf: </span>' .  '<strong>' .ucfirst($_POST['stain']) . '</strong><br>'
  // }
  // else {
  //   $stain = '';
  // }
  // if($_POST['drawer'] != '') {
  //   $drawer = '<span>Schubladen: </span>' .  '<strong>' .ucfirst($_POST['drawer']) . '</strong><br>'
  // }
  // else {
  //   $drawer = '';
  // }
  // if($_POST['leoDrawers'] != '') {
  //   $leoDrawers = '<span>Schubladen: </span>' .  '<strong>' .ucfirst($_POST['leoDrawers']) . '</strong><br>'
  // }
  // else {
  //   $leoDrawers = '';
  // }
  // if($_POST['slidingDoor'] != '') {
  //   $slidingDoor = '<span>Schiebetüren: </span>' .  '<strong>' .ucfirst($_POST['slidingDoor']) . '</strong><br>'
  // }
  // else {
  //   $slidingDoor = '';
  // }
  // if($_POST['surface'] != '') {
  //   $surface = '<span>Oberflächenbehandlung: </span>' .  '<strong>' .ucfirst($_POST['surface']) . '</strong><br>'
  // }
  // else {
  //   $surface = '';
  // }

  $properties =
  '<span>Segmente: </span>' . '<strong>' . $_POST['parts'] . '<span>-teilig</span></strong><br></strong>' .
  '<span>Holz: </span>' . '<strong>' . ucfirst($_POST['wood']) . '</strong><br>' .
  //$stain .
  '<span>Kapitäle: </span>' .  '<strong>' .ucfirst($_POST['deco']) . '</strong><br>' .
  '<span>Kranzleisten: </span>' .  '<strong>' .ucfirst($_POST['ledge']) . '</strong><br>' .
  // $drawer .
  // $leoDrawers .
  // $slidingDoor .
  // $surface .
  '<span>Breite: </span>' .  '<strong>' .$_POST['width'] . '<span> cm<span></strong><br>' .
  '<span>Tiefe: </span>' . '<strong>' . $_POST['depth'] . '<span> cm<span></strong><br>' .
  '<span>Höhe: </span>' .  '<strong>' .$_POST['height'] . '<span> cm<span></strong>';

  //message to customer
  $from_name = 'Regale nach Mass';
  $from_email = 'roch.d@freenet.de'; //TODO
  $message ='<h1>Danke für Ihre Anfrage.</h1><p>Sie interessieren sich für folgendes Regal:</p>' . $properties .
    '<p>Wir werden uns sobald wie möglich mit Ihnen in Verbindung setzen.</p>';

  $to_email = $_POST['mail'];

  $subject = 'Regale nach Mass - Ihre Anfrage ist eingegangen';

  //message to base
  $subject_base = 'Regale nach Mass - Neue Anfrage';
  $to_email_base = 'p.drozd@freenet.de';
  $message_base = 'Telefonnummer des Klienten: ' . '<strong>' . $_POST['phone'] . '</strong>' .
    '<p>Nachricht des Klienten:</p><br>' .
    $_POST['message'] .
    '<br><p>Klient hat Interesse an folgendem Regal:</p>'.
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
