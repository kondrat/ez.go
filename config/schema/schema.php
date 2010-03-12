<?php 
/* SVN FILE: $Id$ */
/* App schema generated on: 2010-03-12 22:03:13 : 1268420593*/
class AppSchema extends CakeSchema {
	var $name = 'App';

	function before($event = array()) {
		return true;
	}

	function after($event = array()) {
	}

	var $cards = array(
		'id' => array('type' => 'integer', 'null' => false, 'default' => NULL, 'key' => 'primary'),
		'user_id' => array('type' => 'integer', 'null' => true, 'default' => NULL),
		'created' => array('type' => 'datetime', 'null' => true, 'default' => NULL),
		'modified' => array('type' => 'datetime', 'null' => true, 'default' => NULL),
		'indexes' => array('PRIMARY' => array('column' => 'id', 'unique' => 1), 'id' => array('column' => 'id', 'unique' => 0)),
		'tableParameters' => array('charset' => 'utf8', 'collate' => 'utf8_general_ci', 'engine' => 'InnoDB')
	);
	var $users = array(
		'id' => array('type' => 'integer', 'null' => false, 'default' => NULL, 'length' => 10, 'key' => 'primary'),
		'username' => array('type' => 'string', 'null' => true, 'length' => 64, 'key' => 'unique'),
		'password' => array('type' => 'string', 'null' => false, 'length' => 64),
		'key' => array('type' => 'string', 'null' => true, 'default' => NULL, 'length' => 32, 'key' => 'unique'),
		'type' => array('type' => 'string', 'null' => true, 'default' => 'guest', 'length' => 50),
		'timezone' => array('type' => 'integer', 'null' => true, 'default' => NULL, 'length' => 3),
		'email' => array('type' => 'string', 'null' => false, 'length' => 100),
		'active' => array('type' => 'boolean', 'null' => false, 'default' => '0'),
		'created' => array('type' => 'datetime', 'null' => true, 'default' => NULL),
		'indexes' => array('PRIMARY' => array('column' => 'id', 'unique' => 1), 'username' => array('column' => 'username', 'unique' => 1), 'key' => array('column' => 'key', 'unique' => 1)),
		'tableParameters' => array('charset' => 'utf8', 'collate' => 'utf8_general_ci', 'engine' => 'InnoDB')
	);
}
?>