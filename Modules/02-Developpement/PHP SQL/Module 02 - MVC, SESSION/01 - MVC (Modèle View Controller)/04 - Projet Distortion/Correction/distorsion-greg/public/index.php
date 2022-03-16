<?php
require_once '../configuration/routes.php';
require_once '../router/router.php';

$path = $_GET['url'] ?? DEFAULT_PATH;

$content = loadPage($path);

require_once '../views/layout.phtml';