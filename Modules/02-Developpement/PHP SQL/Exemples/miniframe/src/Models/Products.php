<?php
declare(strict_types=1);
require_once '../../autoload.php';
namespace App\Models;

use App\Models\AbstractModel;

class Products extends AbstractModel
{
    private int $id;
    private string $name;
    private string $description;
    private float $price;
}