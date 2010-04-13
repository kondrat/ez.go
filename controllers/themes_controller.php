<?php
class ThemesController extends AppController {

	var $name = 'Themes';

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