<?php

require '../helpers.php';

// dd($_FILES);

header('Content-Type: application/json');
echo json_encode($_FILES);