<?php
    if(isset($_POST['submit'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $comment = $_POST['comment'];

        $mailTo = 'sydney.sauer@outlook.com';
        $headers = "From: ".$email;
        $txt = "You have received an e-mail from ".$name.".\n\n".$message;

        mail($mailTo, $subject, $txt, $headers);
    }
?>