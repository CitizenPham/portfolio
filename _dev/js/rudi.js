$(document).ready(function() {

	var isTouchDevice = 'ontouchstart' in document.documentElement;
	if( isTouchDevice ) {
    $('p.category').css({'height': '20px'});
	}

  // Unwrap images from p tags
  $('.project-content p > img').unwrap();

  // My info section
  $('.my-info-toggle').click(function() {
    $('.my-info').velocity().slideToggle(450);
  });

  // Fetching all my Instagram photos
  var token = '099f9ecb834e4a4eb6122214db37d64e',
        num_photos = 10;

  $.ajax({
  	url: 'https://api.instagram.com/v1/users/self/media/recent',
  	dataType: 'jsonp',
  	type: 'GET',
  	data: {access_token: token, count: num_photos},
  	success: function(data){
   		console.log(data);
  		for( x in data.data ){
  			$('.instagram-container').append('<div class="instagram-post"><img src="'+data.data[x].images.standard_resolution.url+'"></div>');
  		}
  	},
  	error: function(data){
  		console.log(data);
  	}
  });

});
