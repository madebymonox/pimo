<?php
session_start();

// Validate and sanitize input
$service = isset($_GET['service']) ? htmlspecialchars($_GET['service']) : '';
$name = isset($_GET['name']) ? htmlspecialchars($_GET['name']) : '';
$message_content = isset($_GET['message']) ? nl2br(htmlspecialchars($_GET['message'])) : '';
$email = isset($_GET['email']) ? htmlspecialchars($_GET['email']) : '';
$referer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : '/';

// Validate required fields
if ($service && $name && $message_content && $email) {
    $to = "enquiries@winlynltd.com";
    $subject = $service;
    $message = "
        <html>
            <head><title>Contact</title></head>
            <body>
                <h4>{$name}</h4>
                <p>{$message_content}</p>
            </body>
        </html>";

    // Set content-type
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type:text/html;charset=UTF-8\r\n";
    $headers .= "From: <{$email}>\r\n";

    if (mail($to, $subject, $message, $headers)) {
        $_SESSION['msg'] = '<div class="alert alert-success"><strong>Success!</strong> Message sent!</div>';
    } else {
        $_SESSION['msg'] = '<div class="alert alert-danger"><strong>Oops!</strong> Something went wrong, try again.</div>';
    }
} else {
    $_SESSION['msg'] = '<div class="alert alert-warning"><strong>Warning!</strong> Please fill all required fields.</div>';
}

// Redirect safely
header("Location: {$referer}");
exit;
