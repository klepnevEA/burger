<?php
//print_r($_REQUEST);
require "../phpmailer/PHPMailerAutoload.php";

$user = [
	'name' => $_REQUEST['name'],
	'phone' => $_REQUEST['phone'],
	'street' => $_REQUEST['street'],
	'home' => $_REQUEST['home'],
	'part' => $_REQUEST['part'],
	'appt' => $_REQUEST['appt'],
	'floor' => $_REQUEST['floor'],
	'comment' => $_REQUEST['comment'],
	'payment' => $_REQUEST['payment']
];


$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'burder.burder@yandex.ru';                 // SMTP username
$mail->Password = 'Xtvgbjy159';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->setFrom('burder.burder@yandex.ru', 'Отправитель');
$mail->addAddress('burder.burder@yandex.ru', 'Получатель');     // Add a recipient
$mail->addReplyTo('burder.burder@yandex.ru', 'Information');


//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Сообщение от пользователя';
$mail->Body    = 'Сообщение от пользователя: '. $user['name']. '<br> телефон: '. $user['phone']. '<br> Улица: ' . $user['street']. '<br> Дом: ' . $user['home'].'<br> Корпус: ' . $user['part'].'<br> Квартира: ' . $user['appt'].'<br> Этаж: ' . $user['floor'].'<br> Комментарии: ' . $user['comment']. '<br><br>Способ оплаты: ' . $user['payment'];
$mail->AltBody = 'Альтернативный текст';

echo json_encode($user);

if(!$mail->send()) {
    echo 'Message could not be sent.';
    echo 'Mailer Error: ' . $mail->ErrorInfo;
} else {
	
}
