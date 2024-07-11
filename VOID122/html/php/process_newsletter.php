<?php
//TEST: ohne das der Code wirklich geht, da man für Mailer zahlen muss

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'path/to/PHPMailer/src/Exception.php';
require 'path/to/PHPMailer/src/PHPMailer.php';
require 'path/to/PHPMailer/src/SMTP.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['mail'];

    $mail = new PHPMailer(true);
    try {
        $mail->isSMTP();
        $mail->Host = 'smtp.example.com'; 
        $mail->SMTPAuth = true;
        $mail->Username = 'your_email@example.com'; 
        $mail->Password = 'your_password'; 
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Empfänger
        $mail->setFrom('your_email@example.com', 'VOID');
        $mail->addAddress($email);

        // Inhalt der E-Mail
        $mail->isHTML(true);
        $mail->Subject = 'Newsletter Subscription';
        $mail->Body    = 'Thank you for subscribing to our newsletter!';
        $mail->AltBody = 'Thank you for subscribing to our newsletter!';

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    }
} else {
    echo 'Invalid request method';
}
?>
