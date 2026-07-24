<?php
// Contact form processing script
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $name = isset($_POST['name']) ? trim(filter_var($_POST['name'], FILTER_SANITIZE_SPECIAL_CHARS)) : '';
    $email = isset($_POST['email']) ? trim(filter_var($_POST['email'], FILTER_SANITIZE_EMAIL)) : '';
    $phone = isset($_POST['phone']) ? trim(filter_var($_POST['phone'], FILTER_SANITIZE_SPECIAL_CHARS)) : '';
    $message = isset($_POST['message']) ? trim(filter_var($_POST['message'], FILTER_SANITIZE_SPECIAL_CHARS)) : '';

    $to = "sujitchowdhary@hotmail.com";
    $subject = "New Contact / Appointment Request from " . ($name ?: "Website Visitor");
    $headers = "From: " . ($email ?: "no-reply@drsujitchowdhary.com") . "\r\n";
    $headers .= "Reply-To: " . ($email ?: "no-reply@drsujitchowdhary.com") . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    $body = "Name: $name\nEmail: $email\nPhone: $phone\n\nMessage:\n$message\n";

    if (function_exists('mail') && !empty($to)) {
        @mail($to, $subject, $body, $headers);
    }
    
    header("Location: ../contact.php?status=success");
    exit;
} else {
    header("Location: ../contact.php");
    exit;
}
?>
