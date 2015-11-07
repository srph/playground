<?php

class Yolo {

}

$instance = new Yolo();
$instance->swag = true;
$instance->task = function() {
	if ( $this->swag ) {
		echo 'Swag';
	}
};

// Uncomment to check code below
// $instance->task();

//
$task = $instance->task;
$task();