<?php

header('Content-Type: application/json');
echo json_encode([
	'files' => $_FILES,
	'data' => $_POST
]);