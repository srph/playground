<?php

header('Content-Type: application/json');
echo json_encode([
	'files' => cleanFormat($_FILES['yolo'])
]);

function cleanFormat($files)
{
	$clean = [];
	$length = count($files['name']);

	for ( $i = 0; $i < $length; $i++ )
	{
		$clean[] = [ 'name'	=> $files['name'][$i] ];
	}

	return $clean;
}