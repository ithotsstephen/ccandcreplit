<?php
// Simple redirect to React app
header('HTTP/1.1 301 Moved Permanently');
header('Location: /index.html');
header('Cache-Control: no-cache');
exit();
?>