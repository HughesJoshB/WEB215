// Javascript file for hiding alerts
// WEB215 Hughes, Josh
// 11/9/2017

/*$('#hide').click(function(){
	$(')
}*/


$(function()
{  
//hide alerts on load
$('div [class*="alert-success"]').addClass('hidden');
$('div [class*="alert-danger"]').addClass('hidden');

$('#submit').click(function(){
	//submit click handler
	//first pass just show alerts
	
	//$('div [class*="alert-success"]').removeClass('hidden');
	$('input').each(function(){
		//use HTML5 checkValidity function
		var inputGroup = $(this).parents('.input-group');
		
		if (this.checkValidity()){
			//$('div [class*="alert-success"]').removeClass('hidden');
			inputGroup.addClass('has-success').removeClass('has-error');
			//this.addClass('has-success').removeClass('has-error');
		}
		else{
			$('div [class*="alert-danger"]').removeClass('hidden');
			inputGroup.addClass('has-error').removeClass('has-success');
			//this.addClass('has-error').removeClass('has-success');
		}
	})
	})
})

