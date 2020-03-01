
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $('.top-content').backstretch("img/post-bg.jpg");

	/*
	    Modals
	*/
	$('.launch-modal').on('click', function(e){
		e.preventDefault();
		$( '#' + $(this).data('modal-id') ).modal();
	});

});
