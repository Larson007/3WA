
<?php

class Connexion
{
    private $host;
    private $db;
    private $login;
    private $pass;
    private $connec;

    public function __construct($host, $db, $login, $pass)
    {
        $this->host = $host;
        $this->db = $db;
        $this->login = $login;
        $this->pass = $pass;
        $this->connexion();
    }

    private function connexion()
    {
        try {
            $bdd = new PDO(
                'mysql:host='. $this->host .';dbname=' . $this->db . ';charset=utf8mb4',
                $this->login,
                $this->pass
            );
            $bdd->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_WARNING);
            $bdd->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
            $this->connec = $bdd;
        } catch (PDOException $e) {
            $msg = 'ERREUR PDO dans ' . $e->getFile() . ' L.' . $e->getLine() . ' : ' . $e->getMessage();
            die($msg);
        }
    }

    public function request($sql, array $cond = null)
    {
        $stmt = $this->connec->prepare($sql);

        if ($cond) {
            foreach ($cond as $v) {
                $stmt->bindParam($v[0], $v[1], $v[2]);
            }
        }

        $stmt->execute();

        return $stmt->fetchAll();
        $stmt->closeCursor();
        $stmt = NULL;
    }
}
