<?php
declare(strict_types=1);
namespace App\Models;

class User extends ModelManager
{
    public function findByMail(string $mail)
    {
        $sql = 'SELECT id, last_name, first_name, email, password, role from users WHERE email = :email';
        $param = [':email' => $mail];
        return $this->findOne($sql, $param);
    }
    
    public function matchMail(string $mail)
    {
        $sql = 'SELECT id from users WHERE email = :email';
        $param = [':email' => $mail];
        return $this->countRow($sql, $param);
    }
    
    public function insertUser(string $nom, string $prenom, string $mail, string $pass): ?string
    {
        $sql = 'INSERT INTO users (last_name, first_name, email, password)  VALUE ( :last_name, :first_name, :email, :password )';
        $param = [
            ':last_name' => $nom,
            ':first_name' => $prenom,
            ':email' => $mail,
            ':password' => password_hash($pass, PASSWORD_DEFAULT)
        ];
        return $this->insert($sql, $param);
    }
}