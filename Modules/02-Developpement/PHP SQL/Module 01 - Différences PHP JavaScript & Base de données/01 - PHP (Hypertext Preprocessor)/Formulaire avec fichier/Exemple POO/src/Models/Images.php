<?php

namespace App\Models;

use App\Models\Model;


/**
 * Modèle pour la table "annonces"
 */
class Images extends Model
{
    protected $id;

    protected $name;
    
    protected $altText;

    public function __construct()
    {
        $this->table = 'images';
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

    /**
     * Obtenir la valeur de titre
     */
    public function getAltText(): string
    {
        return $this->name;
    }

    /**
     * Définir la valeur de titre
     *
     * @return  self
     */
    public function setAltText(string $altText): self
    {
        $this->altText = $altText;

        return $this;
    }

}
