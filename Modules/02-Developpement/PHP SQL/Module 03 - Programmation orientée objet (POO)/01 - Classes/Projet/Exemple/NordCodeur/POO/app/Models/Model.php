<?php

namespace APP\Models;

use Database\DBConnection;

abstract class Model
{

    protected $db;
    protected $table;

    public function __construct(DBConnection $db)
    {
        $this->db = $db;
    }

    public function all() :array
    {
        $stmt = $this->db->getPDO()->query('SELECT * FROM {$this->table} ORDER BY created_at DESC');
        return $stmt->fetchAll();
    }
}
