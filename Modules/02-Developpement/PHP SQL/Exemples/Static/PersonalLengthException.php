<?php
// Exeption est une class de Php dont on peut etendre pour creer nos propre exception
class PersonalLengthException extends Exception
{
  public function __construct()
  {
      //la propriété message est disponible par heritage, je lui affecte une valeur ! (c'est un choix)
      $this->message = 'Longueur de text innadapté';
  }
}
