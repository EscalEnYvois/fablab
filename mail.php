<?php 
    if (isset($_POST["contact_message"]))
    {
    $message = $_POST["contact_message"];
    $pseudo = $_POST["contact_name"];
    $email = $_POST["contact_email"];
    $headers ='From: "' . $pseudo . '""' . $email . '"';
    $destinataire = "dorian.vassart.informatique@escalenyvois.fr"
        if (mail($destinataire,'Contact FabLab', $message, $headers))
        {
            header('Location: index.html');
        }        
    } 
?>