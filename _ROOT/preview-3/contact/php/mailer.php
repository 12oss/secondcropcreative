<?php
/*Be sure to include the js for the validator on the page you need to validate*/


/* Set e-mail recipient */
/*can be any email recipient but must have an admin email setup on your domain (ie. something@yourdoamin.com)*/
/*additionally can only test it once live - will not function in local dev*/

$myemail = "ross9387@gmail.com";


/*variables must match form inputNames/IDs*/
$name = $_POST['inputName'];
$address1 = $_POST['inputAddress1'];
$address2 = $_POST['inputAddress2'];
$city = $_POST['inputCity'];
$zip = $_POST['inputZip'];
$state = $_POST[inputState];
$email = $_POST['inputEmail'];
$subject = $_POST['inputSubject'];
$message = $_POST['inputMessage'];
$phone = $_POST['inputPhone'];

/* Let's prepare the message for the e-mail */

$subject = "Weeble World - Online Form Enquiry";

$message = "

Via Weeble World Online contact form:

Name: $name
Address: $address1
$address2
$city $state $zip
Email: $email
Daytime Phone: $phone
Subject: $subject

Message:
$message

";

/* Send the message using mail() function */
mail($myemail, $subject, $message, $headers);

/* Redirect visitor to the thank you page */
header('Location: /contact/thank-you');
exit();




?>