<?php
declare(strict_types=1);
namespace App\Models;
use App\Models\ModelManager;

class Contact extends ModelManager
{
    public function add($param)
    {   
        $sql = "INSERT INTO contact (lastname, firstname, email) VALUES (?,?,?)";
        $this->insert($sql,$param);
    }

    public function search($param)
    {   
        $sql = "SELECT * FROM contact WHERE lastname LIKE :lastname";
        return $this->findAll($sql,$param);
    }
}