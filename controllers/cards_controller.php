<?php
class CardsController extends AppController {

	var $name = 'Cards';



//--------------------------------------------------------------------
//--------------------------------------------------------------------	
  function beforeFilter() {
  			//default title
  			$this->set('title_for_layout', __('Users data',true) );
  			//allowed actions
        $this->Auth->allow( 'logout','login', 'reg','kcaptcha', 'reset', 'userNameCheck','index','view'
        										//'acoset','aroset','permset','buildAcl'
        										);

        parent::beforeFilter(); 
        $this->Auth->autoRedirect = false;
        
        // swiching off Security component for ajax call
        
				if( $this->RequestHandler->isAjax() && $this->action == 'userNameCheck' ) { 
		   			$this->Security->validatePost = false;
		   	}
		   	
		   	

    }

//--------------------------------------------------------------------
//--------------------------------------------------------------------


//--------------------------------------------------------------------
	//ajax staff
		//----------------------------------------------------------------

	function getTransl(){
		
			Configure::write('debug', 0);
			$this->autoLayout = false;
			$this->autoRender = false;
			
			if ( $this->RequestHandler->isAjax() ){

				if (strpos(env('HTTP_REFERER'), trim(env('HTTP_HOST'), '/')) === false) {
					$this->Security->blackHole($this, 'Invalid referrer detected for this request!');
				}
				//main staff
					//http://mabp.kiev.ua/2008/08/28/google_translate/comment-page-2/#comments
					//check also : http://snippets.pp.ru/article/127/
						$str='girl';
					 	$from='ru';
					 	$to='en';
					$fp = fsockopen("www.google.com", 80, $errno, $errstr, 30);
					if (!$fp) {
						trigger_error("$errstr ($errno) \n", E_USER_WARNING);
						return "";
					} else {
						$text = "text=".urlencode($str);
						$out = "POST /translate_a/t?client=t&sl=".$from."&tl=".$to." HTTP/1.1\r\n";
						$out .= "Host: www.google.com\r\n";
						$out .= "User-Agent: Mozilla/5.0\r\n";
						$out .= "Accept-Encoding: deflate\r\n";
						$out .= "Content-length: ".strlen($text)."\r\n";
						$out .= "Connection: Close\r\n\r\n";
						$out .= $text;
				
				
						fputs($fp, $out);
						$res = "";
						while (!feof($fp)) {
							$res .=  fgets($fp, 1024);
						}
						fclose($fp);
					}
				
				
					$res = explode("\r\n\r\n",$res);
					$res = explode("\r\n",$res[1]);
					
					debug( json_decode($res[1]) );

				
				
			} else {				
				$this->Security->blackHoleCallback = 'gotov';	
				$this->Security->blackHole($this, 'You are not authorized to process this request!');			
			}
			
			
					
	}
				//blackhole redirection
				//-----------------------------
				function gotov() {
					$this->redirect(null, 404, true);
				}	
//--------------------------------------------------------------------
	function index() {
		$this->Card->recursive = 0;
		$this->set('cards', $this->paginate());
	}

	function view($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid card', true));
			$this->redirect(array('action' => 'index'));
		}
		$this->set('card', $this->Card->read(null, $id));
	}

	function add() {
		if (!empty($this->data)) {
			$this->Card->create();
			if ($this->Card->save($this->data)) {
				$this->Session->setFlash(__('The card has been saved', true));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The card could not be saved. Please, try again.', true));
			}
		}
		$users = $this->Card->User->find('list');
		$this->set(compact('users'));
	}

	function edit($id = null) {
		if (!$id && empty($this->data)) {
			$this->Session->setFlash(__('Invalid card', true));
			$this->redirect(array('action' => 'index'));
		}
		if (!empty($this->data)) {
			if ($this->Card->save($this->data)) {
				$this->Session->setFlash(__('The card has been saved', true));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The card could not be saved. Please, try again.', true));
			}
		}
		if (empty($this->data)) {
			$this->data = $this->Card->read(null, $id);
		}
		$users = $this->Card->User->find('list');
		$this->set(compact('users'));
	}

	function delete($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid id for card', true));
			$this->redirect(array('action'=>'index'));
		}
		if ($this->Card->delete($id)) {
			$this->Session->setFlash(__('Card deleted', true));
			$this->redirect(array('action'=>'index'));
		}
		$this->Session->setFlash(__('Card was not deleted', true));
		$this->redirect(array('action' => 'index'));
	}
	function admin_index() {
		$this->Card->recursive = 0;
		$this->set('cards', $this->paginate());
	}

	function admin_view($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid card', true));
			$this->redirect(array('action' => 'index'));
		}
		$this->set('card', $this->Card->read(null, $id));
	}

	function admin_add() {
		if (!empty($this->data)) {
			$this->Card->create();
			if ($this->Card->save($this->data)) {
				$this->Session->setFlash(__('The card has been saved', true));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The card could not be saved. Please, try again.', true));
			}
		}
		$users = $this->Card->User->find('list');
		$this->set(compact('users'));
	}

	function admin_edit($id = null) {
		if (!$id && empty($this->data)) {
			$this->Session->setFlash(__('Invalid card', true));
			$this->redirect(array('action' => 'index'));
		}
		if (!empty($this->data)) {
			if ($this->Card->save($this->data)) {
				$this->Session->setFlash(__('The card has been saved', true));
				$this->redirect(array('action' => 'index'));
			} else {
				$this->Session->setFlash(__('The card could not be saved. Please, try again.', true));
			}
		}
		if (empty($this->data)) {
			$this->data = $this->Card->read(null, $id);
		}
		$users = $this->Card->User->find('list');
		$this->set(compact('users'));
	}

	function admin_delete($id = null) {
		if (!$id) {
			$this->Session->setFlash(__('Invalid id for card', true));
			$this->redirect(array('action'=>'index'));
		}
		if ($this->Card->delete($id)) {
			$this->Session->setFlash(__('Card deleted', true));
			$this->redirect(array('action'=>'index'));
		}
		$this->Session->setFlash(__('Card was not deleted', true));
		$this->redirect(array('action' => 'index'));
	}
}
?>