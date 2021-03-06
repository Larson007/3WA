<?php
//attention a bien require l'autoload j'ai perdu une demi heure la dessus
require_once dirname(dirname(__DIR__)).DIRECTORY_SEPARATOR.'vendor'.DIRECTORY_SEPARATOR.'autoload.php';
use App\Models\Contact;

class AsynchronusRequest
{
    public function __construct(private string $action)
    {
        $this->loadAction();
    }

    //cette method vérifie le parametre GET['action'] de la requete pour définir quel fonction lancer
    private function loadAction()
    {
        match(true){
            ($this->action === 'adduser') => $this->adduser(),
            ($this->action === 'searchuser') => $this->searchuser(),
            ($this->action === 'addfile') => $this->addfile(),
            default => $this->defaultResp(),
        };
    }

    private function adduser()
    {   
        // j'effetue tout mes controlle comme d'habitude
        $lastname = $_POST['lastname'];
        $firstname = $_POST['firstname'];
        $email = $_POST['email'];
        $param = [$lastname, $firstname, $email];

        //echo json_encode permet de retourner une reponse au format json que notre objet xhr peut interpreter
        if(empty($lastname) || empty($firstname) || empty($email))
        {
            echo json_encode([
                'status' => 0,
                'message' => 'champs invalide'
            ]);
            //return ici coupe l'execution du script si un champs est manquant
            return;
        } 
        
        //si tou est en regle, j'envoi vers la bdd    
        echo json_encode([
            'status' => 1,
            'message' => 'Utilisateur enregistré'
        ]);
        $contact = new Contact();
        $contact->add($param);
    }

    public function searchUser()
    {
        $name = $_GET['name'];
        $param = [':lastname' => '%'.$name.'%'];
        $contact = new Contact();
        $response = $contact->search($param);
        echo json_encode($response);
    }
    public function addfile()
    {
        //attention definir l'entete car il y a un input type files
        header('Content-Type: application/json; charset=utf-8');
        
        //ici je fais mon traitement
        echo 'file : <br>';
        print_r($_FILES);
        echo 'post : <br>';
        print_r($_POST);
        
        
        //ici je retorune la reponse au format json
        $response = 
        [
            'status' => 'echec ou reussi selon mes conditions',
            'message' => 'info utile peut être a afficher par js'
        ];
        echo json_encode($response);
    }
    
    private function defaultResp()
    {
        echo json_encode([
            'status' => 0,
            'message' => 'mauvaise configuration de votre url'
        ]);
    }

}

//j'instancie ma class avec le parametre get
new AsynchronusRequest($_GET['action']);