<?php

	$fileSave = 'contactMsg.txt';

	$title = $_POST['title'];
	$name = $_POST['contact-name'];
	$email = $_POST['contact-email'];
	$message = $_POST['message'];

	if (isset($_POST['submit'])) {

		$contact_msg_content = 'Name: '.$title.' '.$name.'<br>'.
							   'Email: '.$email.'<br>'.
								'Message: '.$message.'<br>'.
								'======================================';
		file_put_contents($fileSave, $contact_msg_content, FILE_APPEND);
	}

?>