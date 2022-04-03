<?php
declare(strict_types=1);
require_once '../../autoload.php';
namespace App\Models;

use App\Models\AbstractModel;

class Categories extends AbstractModel
{
    private int $id;
    private string $title;
    private string $description;
}