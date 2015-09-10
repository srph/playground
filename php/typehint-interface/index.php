<?php

interface YoloInterface {
	public function yolo1();
	public function yolo2($whatever);
}

class Yolo implements YoloInterface {
	public function yolo1() {

	}

	public function yolo2($whatever) {
		
	}
}

function Hoho(YoloInterface $yolo) {
	echo 'Nice!';
}

Hoho(new Yolo);