<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $mail = new PHPMailer(true);
    try {
        // Servereinstellungen
        $mail->isSMTP();
        $mail->Host = 'smtp.sendgrid.net'; // Set the SMTP server to send through
        $mail->SMTPAuth = true;
        $mail->Username = 'apikey'; // SMTP username
        $mail->Password = 'your_sendgrid_api_key'; // SMTP password
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Empfänger
        $mail->setFrom($email, $name);
        $mail->addAddress('info@voidstreetwear.com'); 

        // Inhalt der E-Mail
        $mail->isHTML(true);
        $mail->Subject = 'Neue Anfrage von ' . $name;
        $mail->Body    = '<b>Name:</b> ' . $name . '<br><b>Email:</b> ' . $email . '<br><br><b>Nachricht:</b><br>' . nl2br($message);
        $mail->AltBody = "Name: $name\nEmail: $email\n\nNachricht:\n$message";

        $mail->send();
        echo 'Nachricht wurde gesendet.';
    } catch (Exception $e) {
        echo "Nachricht konnte nicht gesendet werden. Fehler: {$mail->ErrorInfo}";
    }
} else {
    echo 'Ungültige Anfragemethode';
}
