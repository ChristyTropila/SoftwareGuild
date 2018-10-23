<?php
if($_POST["submit"]) {
    $recipient="tropila04@gmail.com";
    $subject="Form to email message";
    $sender=$_POST["sender"];
    $senderEmail=$_POST["senderEmail"];
    $message=$_POST["message"];

    $mailBody="Name: $sender\nEmail: $senderEmail\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $sender <$senderEmail>");

    $thankYou="<p>Thank you! Your message has been sent.</p>";
}
?>

<!DOCTYPE html>
<html lang="en">

<head>

  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <title>Contacts Page</title>

    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

<style>
  nav {
      border-top: thin #5b7d87 solid;
      border-bottom: thin #5b7d87 solid;
      padding-top: 12px;
      padding-bottom: 12px;
  }
  .btn {
      background-color: #282828;
      color: #DCDCDC;

  }



  .btn:hover {
      font-weight: bold;
      color: red;
  }

  .containter{
    font-family: "Times New Roman";
    font-weight: 800;
    font-size: 100%;

  }

  </style>
</head>

<body style="background-color: #e7e4e4;">

  <header class="jumbotron" style="background-color: #202020; color: #DCDCDC;">
      <h1>Contact Me</h1>
  </header>

<hr />

<nav>
<a class="btn badge-pill" href="bootstrap.html">Home</a>
  </nav>

  <hr />

  <div class="containter">

    <?=$thankYou ?>

  <h2>Information Request</h2>
  <form method="post" action="bootstrapcontact.php">
    <label for="firstName">First Name:</label><br />
    <input type="text" id="firstName" name="firstName"><br />
    <label for="lastName">Last Name:</label><br />
    <input type="text" id="lastName" name="lastName"><br />
    <label for="phone">Phone Number:</lable><br />
    <input type="text" id="phone" name="phone"><br />
<label for="info">Additional Information</label><br />
<textarea id="info" name="info"></textarea>
<br>
<br>

<input class="btn badge-pill" type="submit" name="submit" value="Submit">

</div>
</form>

<footer>
  <hr />

<p style="text-align:center;">&copy; Christy Tropila . All Rights Reserved<p>
</footer>
</body>
</html>
