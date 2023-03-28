<?php

    $nom = $_POST["nom"];
    $prenom = $_POST["prenom"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    if (!empty($email) && !empty($message)){
        if (filter_var($email, FILTER_VALIDATE_EMAIL)){
            $reciever = "nabfisher303@gmail.com";

            $subject = "De : $nom $prenom <$email>";
            $body = "Nom : $nom\nPrenom : $prenom\nE-mail : $email\nMessage :\n\t$message";
            $sender = "From: $email";
            if (mail($reciever, $subject, $body, $sender)){
                echo "Votre message a été envoyé";
            }else{
                echo "Votre message n'a pas pu être envoyé";
            }
        }else{
            echo "Veuillez saisir une adresse email valide";
        }
    }else if (empty($email)){
        echo "L'e-mail est requis pour envoyer votre message";
    }else{
        echo "Veuillez ecrire un message";
    }

?>