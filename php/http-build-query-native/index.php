<?php

$query = http_build_query([
    'yolo' => [
      'swag',
      '2'
    ],
    'user' => [
      'name' => 'kier'
    ]
]);

print_r($query);
