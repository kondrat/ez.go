var songWord;


	
$(document).ready( function(){


				soundManager.debugMode = false;
				soundManager.waitForWindowLoad = true;
				soundManager.url = "./js/sound/swf/";
				soundManager.nullURL = './js/sound/swf/null.mp3';
				
        
        
        
    $('#submitWrodId').click(function() {
         $("#playSound").removeClass("activeSound");
 				
           //alert(song);
					 var aSoundObject = soundManager.createSound({			
					  id: 'mySound',
					  url: song,
					  autoLoad: false,
					  autoPlay:true,
					  multiShot:false,
					  multiShotEvents:false,
					  volume: 0,
					  onload: function() {
					    //alert( 'The sound '+this.sID+' loaded!');	
					    if( this.readyState !== 3 ) {
					    	noSound = 0;
					      this.destruct();
					    } else {
					    	//alert('sound');
					      $("#playSound").removeClass("activeSoundPlay").addClass("activeSound");
					      noSound = 1;
					    }					
					  },
					  onfinish:function() {	
					  	//$("#playSound").removeClass("activeSoundPlay").addClass("activeSound");
					  	this.destruct();					  	
					  }

					});		     
    } );



				
				
		$('#playSound').click(function() {
					if(noSound === 1) {
						var aSoundObject2 = soundManager.createSound({			
					  	id: 'mySound',
					  	url: song,
						  onload: function() {
						    //alert( 'The sound '+this.sID+' loaded!');	
						    if( this.readyState !== 3 ) {
						      this.destruct();
						    } else {
						    	//alert('sound2');
						      //$("#playSound").removeClass("activeSoundPlay").addClass("activeSound");
						    }					
						  },
						  whileloading:function(){
						  	//alert('test');
						  	$("#playSound").removeClass("activeSound activeSoundHover").addClass("activeSoundPlay");
						  },
						  onfinish:function() {	
						  	$("#playSound").removeClass("activeSoundPlay").addClass("activeSound");
						  	this.destruct();					  	
						  }					  	
					  	
					  	
					  	
					  });
					  
						aSoundObject2.play();
					}
		});
		
		$(".activeSound").live('mouseover mouseout',function(event){
			  if (event.type == 'mouseover') {
			    $(this).addClass("activeSoundHover");
			  } else {
			    $(this).removeClass("activeSoundHover");
			  }			
		});
		
		
});
