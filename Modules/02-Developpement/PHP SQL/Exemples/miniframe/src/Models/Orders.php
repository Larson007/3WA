<?php
declare(strict_types=1);
require_once '../../autoload.php';
namespace App\Models;

use DateTime;
use App\Models\AbstractModel;

class Orders extends AbstractModel
{
    private int $id;
    private int $userID;
    private string $reference;
    private DateTime $date;
}