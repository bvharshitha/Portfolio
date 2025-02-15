
<!-- function sendMailUsingGmail($to, $subject, $message, $fromEmail, $fromName) {
    $smtpHost = "smtp.gmail.com"; // Gmail SMTP server
    $smtpPort = 587; // TLS port
    $username = "venkataharshitha555@gmail.com"; // Replace with your Gmail
    $password = "qczt pgaa ltup rlyd"; // Replace with your App Password -->


    <?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Retrieve data from form
    $fromName = htmlspecialchars($_POST['name']); // Sender's name
    $fromEmail = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL); // Sender's email
    $message = htmlspecialchars($_POST['message']); // Message
    $to = "venkataharshithab01@gmail.com"; // Replace with recipient's email
    $subject = "New Message from $fromName";

    // Validate the sender's email
    if (!filter_var($fromEmail, FILTER_VALIDATE_EMAIL)) {
        echo "Invalid email format.";
        exit;
    }

    // Function to send email using Gmail SMTP
    function sendMailUsingGmail($to, $subject, $message, $fromEmail, $fromName) {
        $smtpHost = "smtp.gmail.com"; // Gmail SMTP server
        $smtpPort = 587; // TLS port
        $username = "venkataharshitha555@gmail.com"; // Replace with your Gmail
        $password = "qczt pgaa ltup rlyd"; // Replace with your App Password
        // Create a connection to the Gmail SMTP server
        $socket = fsockopen($smtpHost, $smtpPort, $errno, $errstr, 10);
        if (!$socket) {
            echo "Connection failed: $errstr ($errno)";
            return false;
        }

        fread($socket, 1024);

        // Send EHLO command
        fwrite($socket, "EHLO $smtpHost\r\n");
        fread($socket, 1024);

        // Start TLS encryption
        fwrite($socket, "STARTTLS\r\n");
        fread($socket, 1024);
        if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            echo "Failed to enable TLS encryption.";
            fclose($socket);
            return false;
        }

        // Re-send EHLO after starting TLS
        fwrite($socket, "EHLO $smtpHost\r\n");
        fread($socket, 1024);

        // Authenticate
        fwrite($socket, "AUTH LOGIN\r\n");
        fread($socket, 1024);

        fwrite($socket, base64_encode($username) . "\r\n");
        fread($socket, 1024);

        fwrite($socket, base64_encode($password) . "\r\n");
        fread($socket, 1024);

        // Send MAIL FROM command
        fwrite($socket, "MAIL FROM: <$username>\r\n");
        fread($socket, 1024);

        // Send RCPT TO command
        fwrite($socket, "RCPT TO: <$to>\r\n");
        fread($socket, 1024);

        // Send DATA command
        fwrite($socket, "DATA\r\n");
        fread($socket, 1024);

        // Prepare email headers and body
        $headers = "From: $fromName <$fromEmail>\r\n";
        $headers .= "Reply-To: $fromEmail\r\n";
        $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

        
        $fullMessage = "Name:  $fromName \n\n";
        $fullMessage .= "From_Mail: $fromEmail\n\n";
        $fullMessage .= "Message:\t \n$message\n";
        

        // Send email content
        fwrite($socket, "Subject: $subject\r\n$headers\r\n\r\n$fullMessage\r\n.\r\n");

        // Close the connection
        fwrite($socket, "QUIT\r\n");
        fclose($socket);

        echo "Email sent successfully.";
        return true;
    }

    // Send the email
    if (sendMailUsingGmail($to, $subject, $message, $fromEmail, $fromName)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    }
} else {
    echo "Invalid request method.";
}
?>
