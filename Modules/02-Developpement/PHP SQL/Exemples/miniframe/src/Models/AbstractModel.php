<?php
declare(strict_types=1);
namespace App\Models;

use Services\Database;
// require_once '../autoload.php';




abstract class AbstractModel
{
    use Database;

    /**
     * findone - return one result
     *
     * @param string $sql - your request 
     * @param array $param - associative array for binding
     * @return array
     */
    protected function findOne(string $sql, array $param = [])
    {
        try {
            $co = $this->getPDO();
            $req = $co->prepare($sql);
            $req->execute($param);
            return $req->fetch();
        } catch (PDOException $e) {
            echo $e->getMessage();
            die();
        }
    }

    /**
     * findAll - return multiple results
     *
     * @param string $sql - your personal request
     * @param array $param - associative array for binding
     * @return array
     */
    protected function findAll(string $sql, array $param = []): array
    {
        try {
            $co = $this->getPDO();
            $req = $co->prepare($sql);
            $req->execute($param);
            return $req->fetchAll();
        } catch (PDOException $e) {
            echo $e->getMessage();
            die();
        }
    }

    /**
     * baseSql - use this for any insert or upddate
     *
     * @param string $sql - your personal request
     * @param array $param - associative array for binding
     * @return string
     */
    protected function baseSql(string $sql, array $param = []): string
    {
        try{
            
            $co = $this->getPdo();
            $request = $co->prepare($sql);
            $request->execute($param); 
            return $co->lastInsertId();
            
        } catch(PDOException $e) {
            echo $e->getMessage();
            die();
        }
    }


    /**
     * delete - use this for delete element from database
     *
     * @param string $sql - your personal request
     * @param array $param - associative array for binding
     * @return void
     */
    protected function delete(string $sql, array $param = [])
    {
        try {
            $co = $this->getPDO();
            $req = $co->prepare($sql);
            $req->execute($param);
        } catch (PDOException $e) {
            echo $e->getMessage();
            die();
        }
    }

    /**
     * count - use this for count result from database
     *
     * @param string $sql - your personal request
     * @param array $param - associative array for binding
     * @return string - return number of value find
     */
    protected function countRow(string $sql, array $param = []): int
    {
        try{
            
            $co = $this->getPdo();
            $request = $co->prepare($sql);
            $request->execute($param); 
            return $request->rowCount();
            
        } catch(PDOException $e) {
            echo $e->getMessage();
            die();            
        }
    }
}
