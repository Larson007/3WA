
<?php

/* The constructor function creates a connection to the database */
class Connexion
{
    private $host;
    private $db;
    private $login;
    private $pass;
    private $connec;

/**
 * The constructor function creates a connection to the database
 * 
 * @param host The hostname of the database server.
 * @param db The name of the database to connect to.
 * @param login The login to use to connect to the database.
 * @param pass The password for the database user.
 */
    public function __construct(string $host,string  $db,string  $login,string  $pass)
    {
        $this->host = $host;
        $this->db = $db;
        $this->login = $login;
        $this->pass = $pass;
        $this->connexion();
    }

/**
 * Connect to the database and store the connection in the object
 */
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

/**
 * This function is used to execute a prepared statement
 * 
 * @param sql The SQL statement to be executed.
 * @param array cond An array of parameters to bind to the prepared statement.
 * 
 * @return An array of associative arrays.
 */
    public function request($sql, array $cond = null)
    {
        $stmt = $this->connec->prepare($sql);

        // if ($cond) {
        //     foreach ($cond as $v) {
        //         $stmt->bindParam($v[0], $v[1], $v[2]);
        //     }
        // }

        $stmt->execute();

        return $stmt->fetchAll();
        $stmt->closeCursor();
        $stmt = NULL;
    }
}
