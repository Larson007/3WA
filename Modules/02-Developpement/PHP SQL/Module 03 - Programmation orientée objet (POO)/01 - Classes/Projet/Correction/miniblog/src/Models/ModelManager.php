<?php

namespace App\Models;

use Services\Database;

abstract class ModelManager
{
    use Database;
    
    /**
     * insert - use this for any insert or upddate
     *
     * @param string $sql - your personal request
     * @param array $param - associative array for binding
     * @return string - return last insert id 
     */
    protected function insert(string $sql, array $param = []): string
    {
        $co = $this->getPdo();
        $request = $co->prepare($sql);
        $request->execute($param); 
        return $co->lastInsertId();
    }

    /**
     * findAll - return multiple results
     *
     * @param string $sql - your personal request
     * @param array $param - associative array for binding
     * @return array - return object table
     */
    protected function findAll(string $sql, array $param = []): array
    {
        $co = $this->getPdo();
        $request = $co->prepare($sql);
        $request->execute($param); 
        return $request->fetchAll();
    }

    /**
     * findone - return one result
     *
     * @param string $sql - your personal request 
     * @param array $param - associative array for binding
     * @return array - object or object table
     */
    protected function findOne(string $sql, array $param = [])
    {
        $co = $this->getPdo();
        $request = $co->prepare($sql);
        $request->execute($param); 
        return $request->fetch();
    }

    /**
     * count - use this for any insert or upddate
     *
     * @param string $sql - your personal request
     * @param array $param - associative array for binding
     * @return string - return last insert id 
     */
    protected function countRow(string $sql, array $param = []): int
    {
        $co = $this->getPdo();
        $request = $co->prepare($sql);
        $request->execute($param); 
        return $request->rowCount();
    }
}
