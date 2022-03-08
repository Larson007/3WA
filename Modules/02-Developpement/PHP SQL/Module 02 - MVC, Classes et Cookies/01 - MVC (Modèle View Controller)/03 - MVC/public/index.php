
<?php
require_once dirname(__DIR__) . '/router/router.php';

$path = $_GET['url'] ?? DEFAULT_PATH;

$content = router($path);


require_once dirname(__DIR__) . '/views/layout.phtml';
