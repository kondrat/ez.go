var songWord;


	
$(document).ready( function(){
				soundManager.debugMode = true;
				soundManager.waitForWindowLoad = false;
				soundManager.url = "./js/sound/swf/";
				soundManager.nullURL = './js/sound/swf/null.mp3';
				var aSoundObject;
				/*
				soundManager.onload = function() {
						

				};
					*/
		$('#playSound').click(function() {

				var song = "http://www.gstatic.com/dictionary/static/sounds/de/0/"+songWord+".mp3";

					 aSoundObject = soundManager.createSound({
			
					  id: 'mySound',
					  url: song,
					  autoLoad: false,
					  autoPlay: false,
					  multiShot:false,
					  multiShotEvents:false,
					  onload: function() {
					  	alert('mlkjl');
					    alert( loaded);//+'The sound '+this.sID+' loaded!');						
					  }, 
					  onfinish:function() {
					  	this.destruct();
					  }

					});		

	
					
							aSoundObject.play( 
									{
										onerror: function(){this.destruct();},
										//onload:	function(){alert('hi');}
										 
									} 
							);
					
							soundManager.ondataerror() = function() {
						 		alert('SoundManager failed to load'); 
						 	}


		});
});