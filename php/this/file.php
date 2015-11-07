<?php

class Context {
	public function execute(Closure $callback) {
		$callback();
	}
}

class TaskManager {
	protected $tasks = array('clean', 'groom');

	public function execute() {
		$context = new Context();
		$context->execute(function() {
			array_pop($this->tasks);
			echo count($this->tasks);
		});
	}
}

$manager = new TaskManager();
$manager->execute();