<?php
class TextsController extends AppController {

	var $name = 'Texts';


//--------------------------------------------------------------------
//--------------------------------------------------------------------	
  function beforeFilter() {

  			//default title
  			$this->set('title_for_layout', __('Text upload',true) );
  			//allowed actions
        $this->Auth->allow('add');

        parent::beforeFilter(); 
        $this->Auth->autoRedirect = false;
        
        // swiching off Security component for ajax call
        
        //to be rebuild
				if( $this->RequestHandler->isAjax() && $this->action == 'getTransl' || $this->action == 'saveCard' ) { 
		   			$this->Security->validatePost = false;
		   	}
		   	
		   	

    }

//--------------------------------------------------------------------
//--------------------------------------------------------------------

//--------------------------------------------------------------------
	function add() {
		$lastCards = array();
		$curTheme = array();
		$authUserId = $this->Auth->user('id');
		
		
	
		if ( $authUserId != null ) {

			$curTheme = $this->Text->Theme->find('all', array(
					'conditions' => array('Theme.user_id' => $this->Auth->user('id') ),
					'fields' => array('Theme.theme'),
					'order' => array('Theme.current_theme DESC'),
					'limit' => 1,
					'contain' => array('Card' => array(
																							'fields' => array('Card.word'),
																							'limit'=> 10,
																							'order'=>'Card.id DESC'
																						)
														)
				)			
			);
		
		}

		$allThemes = $this->Text->Theme->find('list', array(
					'conditions' => array('Theme.user_id' => $this->Auth->user('id') ),
					'fields' => array('Theme.id','Theme.theme'),
					'order' => array('Theme.id DESC'),
					'contain' => false
			)
		);

		$this->set('curTheme', $curTheme);
		
		$this->set('allThemes',$allThemes);
	}
//--------------------------------------------------------------------


	function index() {
		$this->Text->recursive = 0;
		$this->set('texts', $this->paginate());
	}

	function view($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid text', true));
			$this->redirect(array('action' => 'index'));
		}
		$this->set('text', $this->Text->read(null, $id));
	}



	function edit($id = null) {
		if (!$id && empty($this->data)) {
			$this->Session->setFlash(__('Invalid text', true));
			$this->redirect(array('action' => 'index'));
		}
		if (!empty($this->data)) {
			if ($this->Text->save($this->data)) {
				$this->Session->setFlash(__('The text has been saved', true));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The text could not be saved. Please, try again.', true));
			}
		}
		if (empty($this->data)) {
			$this->data = $this->Text->read(null, $id);
		}
		$users = $this->Text->User->find('list');
		$this->set(compact('users'));
	}

	function delete($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid id for text', true));
			$this->redirect(array('action'=>'index'));
		}
		if ($this->Text->delete($id)) {
			$this->Session->setFlash(__('Text deleted', true));
			$this->redirect(array('action'=>'index'));
		}
		$this->Session->setFlash(__('Text was not deleted', true));
		$this->redirect(array('action' => 'index'));
	}
	function admin_index() {
		$this->Text->recursive = 0;
		$this->set('texts', $this->paginate());
	}

	function admin_view($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid text', true));
			$this->redirect(array('action' => 'index'));
		}
		$this->set('text', $this->Text->read(null, $id));
	}

	function admin_add() {
		if (!empty($this->data)) {
			$this->Text->create();
			if ($this->Text->save($this->data)) {
				$this->Session->setFlash(__('The text has been saved', true));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The text could not be saved. Please, try again.', true));
			}
		}
		$users = $this->Text->User->find('list');
		$this->set(compact('users'));
	}

	function admin_edit($id = null) {
		if (!$id && empty($this->data)) {
			$this->Session->setFlash(__('Invalid text', true));
			$this->redirect(array('action' => 'index'));
		}
		if (!empty($this->data)) {
			if ($this->Text->save($this->data)) {
				$this->Session->setFlash(__('The text has been saved', true));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The text could not be saved. Please, try again.', true));
			}
		}
		if (empty($this->data)) {
			$this->data = $this->Text->read(null, $id);
		}
		$users = $this->Text->User->find('list');
		$this->set(compact('users'));
	}

	function admin_delete($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid id for text', true));
			$this->redirect(array('action'=>'index'));
		}
		if ($this->Text->delete($id)) {
			$this->Session->setFlash(__('Text deleted', true));
			$this->redirect(array('action'=>'index'));
		}
		$this->Session->setFlash(__('Text was not deleted', true));
		$this->redirect(array('action' => 'index'));
	}
}
?>