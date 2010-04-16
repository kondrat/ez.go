<?php
class ThemesController extends AppController {

	var $name = 'Themes';
//--------------------------------------------------------------------
//--------------------------------------------------------------------	
  function beforeFilter() {

  			//default title
  			$this->set('title_for_layout', __('Cards',true) );
  			//allowed actions
        $this->Auth->allow('updateTheme');

        parent::beforeFilter(); 
        $this->Auth->autoRedirect = false;
        
        // swiching off Security component for ajax call

				if( $this->RequestHandler->isAjax() && $this->action == 'updateTheme' ) { 
		   			$this->Security->validatePost = false;
		   	}

  }

//--------------------------------------------------------------------
//--------------------------------------------------------------------


//--------------------------------------------------------------------
	//ajax staff
		//----------------------------------------------------------------
	function updateTheme(){
		//ajax preparation
		Configure::write('debug', 0);
		$this->autoLayout = false;
		$this->autoRender = false;
			
			if ( $this->RequestHandler->isAjax() ){			
						//our host only
						if (strpos(env('HTTP_REFERER'), trim(env('HTTP_HOST'), '/')) === false) {
							$this->Security->blackHoleCallback = 'gotov';
						}		
				
				
			//	if($this->Auth->user('id'))
				
				
				if($this->Theme->save($this->data) ) {
					$contents['stat'] = 1;
					$contents['theme'] = $this->data["Theme"]["theme"];
				}	else {
					$contents['stat'] = 0;
				}
					
	      $contents = json_encode($contents);
				$this->header('Content-Type: application/json');				
				return ($contents);						
							
			} else {				
				$this->Security->blackHoleCallback = 'gotov';		
			}		
	}



				//blackhole redirection
				//-----------------------------
				function gotov() {	
					$this->redirect(null, 404, true);
				}	






//--------------------------------------------------------------------
	function index() {
		$this->Theme->recursive = 0;
		$this->set('themes', $this->paginate());
	}

	function view($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid theme', true));
			$this->redirect(array('action' => 'index'));
		}
		$this->set('theme', $this->Theme->read(null, $id));
	}

	function add() {
		if (!empty($this->data)) {
			$this->Theme->create();
			if ($this->Theme->save($this->data)) {
				$this->Session->setFlash(__('The theme has been saved', true));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The theme could not be saved. Please, try again.', true));
			}
		}
		$users = $this->Theme->User->find('list');
		$this->set(compact('users'));
	}

	function edit($id = null) {
		if (!$id && empty($this->data)) {
			$this->Session->setFlash(__('Invalid theme', true));
			$this->redirect(array('action' => 'index'));
		}
		if (!empty($this->data)) {
			if ($this->Theme->save($this->data)) {
				$this->Session->setFlash(__('The theme has been saved', true));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The theme could not be saved. Please, try again.', true));
			}
		}
		if (empty($this->data)) {
			$this->data = $this->Theme->read(null, $id);
		}
		$users = $this->Theme->User->find('list');
		$this->set(compact('users'));
	}

	function delete($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid id for theme', true));
			$this->redirect(array('action'=>'index'));
		}
		if ($this->Theme->delete($id)) {
			$this->Session->setFlash(__('Theme deleted', true));
			$this->redirect(array('action'=>'index'));
		}
		$this->Session->setFlash(__('Theme was not deleted', true));
		$this->redirect(array('action' => 'index'));
	}
	function admin_index() {
		$this->Theme->recursive = 0;
		$this->set('themes', $this->paginate());
	}

	function admin_view($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid theme', true));
			$this->redirect(array('action' => 'index'));
		}
		$this->set('theme', $this->Theme->read(null, $id));
	}

	function admin_add() {
		if (!empty($this->data)) {
			$this->Theme->create();
			if ($this->Theme->save($this->data)) {
				$this->Session->setFlash(__('The theme has been saved', true));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The theme could not be saved. Please, try again.', true));
			}
		}
		$users = $this->Theme->User->find('list');
		$this->set(compact('users'));
	}

	function admin_edit($id = null) {
		if (!$id && empty($this->data)) {
			$this->Session->setFlash(__('Invalid theme', true));
			$this->redirect(array('action' => 'index'));
		}
		if (!empty($this->data)) {
			if ($this->Theme->save($this->data)) {
				$this->Session->setFlash(__('The theme has been saved', true));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The theme could not be saved. Please, try again.', true));
			}
		}
		if (empty($this->data)) {
			$this->data = $this->Theme->read(null, $id);
		}
		$users = $this->Theme->User->find('list');
		$this->set(compact('users'));
	}

	function admin_delete($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid id for theme', true));
			$this->redirect(array('action'=>'index'));
		}
		if ($this->Theme->delete($id)) {
			$this->Session->setFlash(__('Theme deleted', true));
			$this->redirect(array('action'=>'index'));
		}
		$this->Session->setFlash(__('Theme was not deleted', true));
		$this->redirect(array('action' => 'index'));
	}
}
?>