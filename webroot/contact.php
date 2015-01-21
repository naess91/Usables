<?php
if($_POST)
{
	$to_email   	= "naess1991@gmail.com"; // Replace with own email
	
	//check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
		
		$output = json_encode(array( 
			'type'=>'error', 
			'message' => 'Sorry Request must be Ajax POST'
		));
		die($output); 
    } 
	
	$user_name		= filter_var($_POST["user_name"], FILTER_SANITIZE_STRING);
	$user_email		= filter_var($_POST["user_email"], FILTER_SANITIZE_EMAIL);
	$phone_number	= filter_var($_POST["phone_number"], FILTER_SANITIZE_NUMBER_INT);
	$subject		= filter_var($_POST["subject"], FILTER_SANITIZE_STRING);
	$message		= filter_var($_POST["msg"], FILTER_SANITIZE_STRING);
	
	
	if(strlen($user_name)<4){ 
		$output = json_encode(array('type'=>'error', 'message' => 'Namnet du angivit är för kort!'));
		die($output);
	}
	
	if(strlen($user_name)<1){ 
		$output = json_encode(array('type'=>'error', 'message' => 'Var vänligen ange ett namn!'));
		die($output);
	}
	
	if(!filter_var($user_email, FILTER_VALIDATE_EMAIL)){ //email validation
		$output = json_encode(array('type'=>'error', 'message' => 'Skriv in en giltigt email'));
		die($output);
	}
		if(!filter_var($phone_number, FILTER_SANITIZE_NUMBER_FLOAT)){ //check for valid numbers in phone number field
		$output = json_encode(array('type'=>'error', 'message' => 'Skriv endast siffror'));
		die($output);
	}
	
	if(strlen($message)<3){ //check emtpy message
		$output = json_encode(array('type'=>'error', 'message' => 'Ditt meddelande är fört kort. Skriv något mer'));
		die($output);
	}
	
	//email body
	$message_body = $message."\r\n\r\nNamn:".$user_name."\r\nEmail:".$user_email."\r\nTelefon:" . $phone_number ;
	
	//proceed with PHP email.
	$headers = 'From: '.$user_name.'' . "\r\n" .
	'Reply-To: '.$user_email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	
	$send_mail = mail($to_email, $subject, $message_body, $headers);
	
	if($send_mail)
	{
		$output = json_encode(array('type'=>'message', 'message' => 'Tack för ditt meddelande '.$user_name .'.<br> Vi återkommer till dig med ett svar så fort som möjligt.'));
		die($output);
	}else{
			$output = json_encode(array('type'=>'error', 'message' => 'Det gick inte att skicka iväg meddelandet. Kolla php config.'));
		die($output);
	}
}
?>