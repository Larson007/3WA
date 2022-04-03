<?php
declare(strict_types=1);
namespace App\Models;
// require_once '../autoload.php';

use DateTime;
use App\Models\AbstractModel;


require_once 'AbstractModel.php';

class Users extends AbstractModel
{
    private int $id;
    private int $addressID;
    private string $email;
    private string $password;
    private string $firstName;
    private string $lastName;
    private DateTime $registrationDate;
    private DateTime $birthDate;

    public function findAllUsers()
    {
        return $this->findAll('SELECT * FROM users');
    }
    
    public function findUser()
    {
        $sql = 'SELECT * from users WHERE email = :email';
        $param = [':email' => 'xgoncalves@example.org'];
        
        return $this->findOne($sql, $param);
    }
}

