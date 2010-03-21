var songWord;


	
$(document).ready( function(){


				soundManager.debugMode = true;
				soundManager.waitForWindowLoad = false;
				soundManager.url = "./js/sound/swf/";
				soundManager.nullURL = './js/sound/swf/null.mp3';
				
        var aSoundObject;
        
    $('#submitWrodId').click(function() {
         $("#playSound").removeClass("activeSound");
 				var song = "http://www.gstatic.com/dictionary/static/sounds/de/0/"+songWord+".mp3";
            
					 aSoundObject = soundManager.createSound({
			
					  id: 'mySound',
					  url: song,
					  autoLoad: false,
					  autoPlay:false,
					  multiShot:false,
					  multiShotEvents:false,
					  onload: function() {
					    //alert( 'The sound '+this.sID+' loaded!');	
					    if( this.readyState !== 3 ) {
					      this.destruct();
					    } else {
					      $("#playSound").addClass("activeSound");
					    }					
					  },
					  onfinish:function() {	
					  	this.destruct();
					  }

					});		     
    } );



				
				
		$('#playSound').click(function() {
				
							aSoundObject.play( 
									{
										onerror: function(){this.destruct();}
									} 
							);

		});
});
