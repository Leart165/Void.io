<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $paymentMethod = $_POST['payment-method'];

    // Erstellen der Bestätigungsnachricht
    $message = "<h2>Vielen Dank für Ihre Bestellung!</h2>";
    $message .= "<p><b>Name:</b> $name</p>";
    $message .= "<p><b>Email:</b> $email</p>";
    $message .= "<p><b>Adresse:</b> $address</p>";
    $message .= "<p><b>Zahlungsmethode:</b> $paymentMethod</p>";

    // PHPMailer-Instanz erstellen
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
        $mail->setFrom('no-reply@voidstreetwear.com', 'VOID Streetwear');
        $mail->addAddress($email, $name); // Add a recipient

        // Inhalt der E-Mail
        $mail->isHTML(true);
        $mail->Subject = 'Bestellbestätigung';
        $mail->Body    = $message;
        $mail->AltBody = strip_tags($message);

        $mail->send();
        echo 'Bestellbestätigung wurde gesendet.';
    } catch (Exception $e) {
        echo "Bestellbestätigung konnte nicht gesendet werden. Fehler: {$mail->ErrorInfo}";
    }
} else {
    echo 'Ungültige Anfragemethode';
}
