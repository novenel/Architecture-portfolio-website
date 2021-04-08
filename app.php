<?php
    if(isset($_POST['submit'])) {
        $name = trim($_POST['name']);
        $email = trim($_POST['email']);
        $tel = trim($_POST['phone']);
   //     $file = trim($_POST['file']);
        $message = trim($_POST['message']);

        if(!empty($name) && !empty($email) && !empty($tel)) {
            if(filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $from = "$email";
                $to = "agne.babaityte@gmail.com";
                $subject = "New message";
                $autorius = 'Nuo: ' . $name . ', ' . $email . ', ' . $tel;
     //           $failas = $file;
                $zinute = htmlspecialchars($message);
    //          mail($to, $subject, $autorius, $failas, $zinute, $from);
    //          echo "<script>alert('Thank you. We got your message and will contact with you.');</script>";
            }
        }
        include('db.php'); 
    }
