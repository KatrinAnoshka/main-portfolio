<?php

$frm_name  = "New message!";
$recepient = "melana309@gmail.com, nosha309@mail.ru, nosha_bobruysk@mail.ru, katrinanoshka@gmail.com";
$sitename  = "Katrin Anoshka portfolio";
$subject   = "New message from \"$sitename\"";
$email     = "info@bobrmama.by";

$name = trim($_POST["name"]);
$phone = trim($_POST["phone"]);
$mail = trim($_POST["mail"]);
$text = trim($_POST["text"]);
$formname = trim($_POST["formname"]);

$message = "
Form: $formname <br>
Name: $name <br>
Phone: $phone <br>
Mail: $mail <br>
Text: $text 
";

mail($recepient, $subject, $message, "From: $frm_name <$email>" . "\r\n" . "Reply-To: $email" . "\r\n" . "X-Mailer: PHP/" . phpversion() . "\r\n" . "Content-type: text/html; charset=\"utf-8\"");
