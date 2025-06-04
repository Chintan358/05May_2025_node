<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Inquiry Form</title>
</head>
<body>
  <h2>Inquiry Form</h2>
  <form action="test.php" method="POST">
    <label for="name">Name:</label><br>
    <input type="text" id="name" name="name" required><br><br>

    <label for="email">Email:</label><br>
    <input type="email" id="email" name="email" required><br><br>

    <label for="message">Message:</label><br>
    <textarea id="message" name="message" rows="5" required></textarea><br><br>

    <button type="submit">Send Inquiry</button>
  </form>

  <?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize inputs
    $name = htmlspecialchars(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = htmlspecialchars(trim($_POST["message"]));

    // Set client email here
    $to = "chintan.tops@gmail.com";
    $subject = "New Inquiry from $name";

    $body = "You have received a new inquiry.\n\n";
    $body .= "Name: $name\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message\n";

    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    if (mail($to, $subject, $body, $headers)) {
        echo "Your inquiry has been sent successfully.";
    } else {
        echo "There was an error sending your inquiry. Please try again.";
    }
} else {
    echo "Invalid request method.";
}
?>

</body>
</html>
