<?php
if (isset($_REQUEST['name'],$_REQUEST['email'])) {

    $name = $_REQUEST['name'];
    $email = $_REQUEST['email'];
    $message = $_REQUEST['message'];

    $to = 'aryanbhatt1002@gmail.com';

    $subject = 'Contact Request From Website';
    $headers = $name." <".$email."> \r\n";

    $send_email = mail($to,$subject,$message,$headers);

    echo ($send_email) ? 'success' : 'error';
}
?>