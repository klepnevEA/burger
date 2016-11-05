<?php
//print_r($_REQUEST);


$user = [
	'name' => $_POST['name'],
	'phone' => $_POST['phone'],
	'street' => $_POST['street'],
	'home' => $_POST['home'],
	'part' => $_POST['part'],
	'appt' => $_POST['appt'],
	'floor' => $_POST['floor'],
	'comment' => $_POST['comment'],
	'payment' => $_POST['payment']
];


$message = "Сообщение отправлено" . $user['name'];

$result = mail('burder.burder@yandex.ru', 'Тема письма', $message);
echo json_encode($user);
