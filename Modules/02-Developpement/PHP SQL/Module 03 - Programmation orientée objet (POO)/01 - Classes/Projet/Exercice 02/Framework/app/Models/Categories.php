<?php

// namespace App\Models;

require_once 'Models.php';

/**
 * Modèle pour la table "annonces"
 */
class CategoriesModel extends Model
{
    protected $id;

    protected $name;

    public function __construct()
    {
        $this->table = 'categories';
    }

    /**
     * Obtenir la valeur de id
     */
    public function getId(): int
    {
        return $this->id;
    }

    /**
     * Définir la valeur de id
     *
     * @return  self
     */
    public function setId(int $id): self
    {
        $this->id = $id;

        return $this;
    }

    /**
     * Obtenir la valeur de titre
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * Définir la valeur de titre
     *
     * @return  self
     */
    public function setName(string $name): self
    {
        $this->name = $name;

        return $this;
    }

}
