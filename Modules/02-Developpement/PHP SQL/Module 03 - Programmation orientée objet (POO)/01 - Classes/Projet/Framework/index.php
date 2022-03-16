<?php

require_once 'app/config/router.php';
echo 'Hello';

var_dump(__DIR__);

// Rooter
$path = $_GET['url'] ?? DEFAULT_PATH;
$content = router($path);


require_once __DIR__ . '/app/views/layouts/index.phtml';