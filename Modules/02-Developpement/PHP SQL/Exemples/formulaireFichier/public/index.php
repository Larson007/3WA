<?php
require_once '../vendor/autoload.php';

ob_start();
require_once '../src/controllers/formController.php';
$content = ob_get_clean();


require_once '../views/layout.phtml';