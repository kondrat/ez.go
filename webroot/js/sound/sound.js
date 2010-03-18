var song = "./js/sound/town.mp3";

$(document).ready( function(){
	
	
	//soundManager.debugMode = false;
	soundManager.waitForWindowLoad = true;
	soundManager.url = "./js/sound/swf/";
	var aSoundObject;
	soundManager.onload = function() {
			var song1 = song;
			
		 aSoundObject = soundManager.createSound({

		  id: 'mySound',
		  autoLoad: false,
		  autoPlay: false,
		  onload: function() {
		    alert('The sound '+this.sID+' loaded!');						
		  }
		});
	
		//aSoundObject.play({volume: 100});
		
	};
	
		$('#playSound').click(function() {
				song = "./js/sound/city.mp3";
				//if ( loaded == true ) {
				aSoundObject.play({url : song});
			//}
		});
});