$(document).ready(function(){
	
	$('#show-review').on('shown.bs.tab', function(e){
		console.log('review tab shown');
		//update contents from 
		$('#title-review').empty().append( $('#title-input').val() );
		$('#address-review').empty().append( $('#address-input').val() );
		$('#type-review').empty().append( $('#type-input').val() );
		$('#description-review').empty().append( $('#description-input').val() );
	});
});
