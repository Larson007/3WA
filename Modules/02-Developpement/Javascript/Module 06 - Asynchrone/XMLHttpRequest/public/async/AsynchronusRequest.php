<?php
//attention a bien require l'autoload j'ai perdu une demi heure la dessus
require_once dirname(dirname(__DIR__)).DIRECTORY_SEPARATOR.'vendor'.DIRECTORY_SEPARATOR.'autoload.php';
// require_once dirname(dirname(__DIR__)).DIRECTORY_SEPARATOR.'src'.DIRECTORY_SEPARATOR.'Models/Contact.php';
use App\Models\Contact;


if($_GET['action'] === 'adduser'){
    $lastname = $_POST['lastname'];
    $firstname = $_POST['firstname'];
    $email= $_POST['email'];
    
    $param = [$lastname, $firstname, $email];
    
    foreach($param as $value){
       if(empty($value)){
           
            echo json_encode([
                    'status' => 0,
                    'message' => 'au moin un champ vide'
                ]);
           return;  
       }
    }
    
   echo json_encode([
        'status' => 1,
        'message' => 'Contact enregistré avec succes'
    ]);
    $contact = new Contact();
    $contact->add($param);
} 