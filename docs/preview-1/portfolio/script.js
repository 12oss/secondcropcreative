$(function() {
	//PLACE all portfolio directories in the array below in the projectsArray variable
	var projectsArray = ['_template', '_template2', '_template3']	
	var $projectnav = $('.project-nav');
	var inArray = false;
	function getCurDir(){
		var loc = window.location.pathname;
		var loc = loc.substring(0, loc.lastIndexOf('/'));
		var portfolio = loc.substr(0, loc.lastIndexOf('/'))
		dir = loc.split('/')
		dir = dir.slice(-1).pop()
		
		for(var i = 0; i<projectsArray.length; i++){
			if(dir == projectsArray[i]){
				inArray = true;
				
				$projectnav.append('<a href="'+portfolio+'/'+projectsArray[i-1]+'/index.html" class="prev-proj"><i class="fa fa-angle-left fa-2x"></i></a>')	
				$projectnav.append('<a href="'+portfolio+'/'+projectsArray[i+1]+'/index.html" class="next-proj"><i class="fa fa-angle-right fa-2x"></i></a>')
			}
			
			
		}	
		
		//This is for index at root of /portfolio if such a page existed...
		//if(!inArray){
		//	$projectnav.append('<a href="'+loc+'/'+projectsArray[0]+'/index.html" class="next-proj"><i class="fa fa-angle-right fa-2x"></i></a>')
		//}
		
	}
	
	getCurDir();
	
});

