<?php
declare(strict_types=1);
require_once '../../autoload.php';
namespace App\Models;

use AbstractModel;

class Addresses extends AbstractModel
{
    private int $id;
    private int $userID;
    private string $street;
    private string $number;
    private string $complements;
    private string $postalCode;
    private string $city;
}