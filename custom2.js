$(document).ready(function(){
	//add red colour to td's
	$('table tr td').click(function(){
	 if ($(this).hasClass('red')) {       
        $(this).removeClass('red');
    } else {
		$('table tr td').removeClass('red');
		$(this).addClass('red');  
			}
	});
	//add red color from clicking td to bike part
	$('table tr td').click(function(){
	 if ($(this).hasClass('show-on-bike')) {       
        var getid = $(this).attr('id');
		if ($('path'+'#'+getid).hasClass('svg-color')) {
		$('path'+'#'+getid).removeClass('svg-color');
		
		} else{
			$('path'+'#'+getid).removeClass('svg-color');
			$('path'+'#'+getid).addClass('svg-color');
				}
		}
	
	});
	
	//add red color to bike part after clicking path
	$('path.hover-color').click(function(){
	if ($(this).hasClass('svg-color')) {       
        $(this).removeClass('svg-color');
    } else {
		$('path.hover-color').removeClass('svg-color');
		$(this).addClass('svg-color');  
			}
	});
	
	//add red color to bike part after clicking polygon
	$('polygon.hover-color').click(function(){
	if ($(this).hasClass('svg-color')) {       
        $(this).removeClass('svg-color');
    } else {
		$('polygon.hover-color').removeClass('svg-color');
		$(this).addClass('svg-color');  
			}
	});	
	
	$('[data-toggle="popover"]').popover();
	$('#names').DataTable();
 
});

