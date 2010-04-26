<?php
class Textblock extends AppModel {
	var $name = 'Textblock';
	//The Associations below have been created with all possible keys, those that are not needed can be removed

	var $belongsTo = array(
		'Text' => array(
			'className' => 'Text',
			'foreignKey' => 'text_id',
			'conditions' => '',
			'fields' => '',
			'order' => ''
		)
	);
}
?>