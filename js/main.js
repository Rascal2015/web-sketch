(function($){
	$(function(){
		$('#sidebar-nav').on('click', 'a', function(e){
		    e.preventDefault();
		    var _source = $(this).attr('href');

		    	_parent = $(this).parent();
		    if( _source !== '#' && ! _parent.hasClass('active') ){
		        _parent.addClass('active').siblings('.active').removeClass('active')
		    }
		});
		 console.log($('#sidebar-nav a').attr('href'));		   
	})
})(window.jQuery)
   $(window).on('load', function(event) {
  $('body').removeClass('preloading');
  $('.load').delay(500).fadeOut('fast');
});
