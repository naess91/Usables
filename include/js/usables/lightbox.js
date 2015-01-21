 jQuery(document).ready(function($) {

var current, size;  
 $('.lightbox').click(function(e) {  

   
    e.preventDefault();								// prevent default click event
    var image_href = $(this).attr("href"); 			// grab href from clicked element    
    var slideNum = $('.lightbox').index(this);	    // determine the index of clicked trigger

    // find out if #lightbox exists
    if ($('#slideshow').length > 0) {        
      // #lightbox exists
      $('#slideshow').fadeIn(300);
      // #lightbox does not exist - create and insert (runs 1st time only)
    } else {                                

// create HTML markup for lightbox window
      var lightbox =
          '<div id ="overlay"></div><div id="slideshow" >' +
          '<div class="nav">' +
          '<a class="prev slide-nav" title="Preview" id="lightbox35Prev"></a>' +
          '<a class="next slide-nav" title="Next;" id="lightbox35Next"></a>' +
          '</div>' +
          '</div>';
      
      //insert lightbox HTML into page
      $('body').append(lightbox);
      
      // fill lightbox with .lightbox35 hrefs in #imageSet
      $('#imageSet').find('.lightbox').each(function() {
        var $href = $(this).attr('href');
        $('#slideshow').append(
          '<img src="' + $href + '">'
        );
      });
      
    }
    
    // setting size based on number of objects in slideshow
    size = $('#slideshow img').length;
    
    // hide all slide, then show the selected slide
    $('#slideshow img').hide();
    $('#slideshow img:eq(' + slideNum + ')').show();
    
    // set current to selected slide
    current = slideNum;
  });
  


//enter_13  //esc_27 //shift_16 //ctrl_17 //alt;  
$(document).keyup(function(e) {
  if ( e.keyCode == 27 || e.keyCode == 16 || e.keyCode == 17 ||   e.keyCode == 18 || e.keyCode == 46)   
  {$('#slideshow').remove(); }   
});


  
//Click anywhere on the page to get rid of lightbox window
// using .on() instead of .live(). more modern, and fixes event bubbling issues

$('body').on('click', '#slideshow img', function() { 
 dest = current + 1;
    if (dest > size - 1) { dest = 0; }
     // fadeOut curent slide, FadeIn next/prev slide
    $('#slideshow img:eq(' + current + ')').fadeOut(200);
    $('#slideshow img:eq(' + dest + ')').fadeIn(200);
    
    // update current slide
    current = dest;
});


$('body').on('click', '#slideshow', function() { 
$('#slideshow').remove();
$('#overlay').remove();});
   
 	
 
  // show/hide navigation when hovering over #slideshow
$('body').on(
	{ 	mouseenter: function() {    $('.nav').fadeIn(300);    }, 
		mouseleave: function() {    $('.nav').fadeOut(300);   }
	},'#slideshow');
  
  // navigation prev/next
  $('body').on('click', '.slide-nav', function(e) {    
    // prevent default click event, and prevent event bubbling to prevent lightbox from closing
    e.preventDefault();
    e.stopPropagation();
    
    var $this = $(this);
    var dest;
    

    if ($this.hasClass('prev')) {
      dest = current - 1;
      if (dest < 0) {  dest = size - 1; }
	  
    } else {

    dest = current + 1;
    if (dest > size - 1) {
        dest = 0;
      }
    }
    
    // fadeOut curent slide, FadeIn next/prev slide
    $('#slideshow img:eq(' + current + ')').fadeOut(200);
    $('#slideshow img:eq(' + dest + ')').fadeIn(200);
    
    // update current slide
    current = dest;
  });


function changeImg(current, dest){
	// fadeOut curent slide, FadeIn next/prev slide
    $('#slideshow img:eq(' + current + ')').fadeOut();
    $('#slideshow img:eq(' + dest + ')').fadeIn();
}

  
  $(document.documentElement).keyup(function (event) {  
    var $this = $(this);
    var dest;
    
  if (event.keyCode == 37 ) {
          dest = current - 1;
      if (dest < 0) {
        dest = size - 1;
      }
	  
changeImg(current, dest);
 // update current slide
 current = dest;	
   } 
  
  
  
  else if (event.keyCode == 39) {
      dest = current + 1;
      if (dest > size - 1) {
        dest = 0;
      }
	  
changeImg(current, dest);
 // update current slide
 current = dest;	  
  }
  
  });


  
});



	function fsheh(){
	$('#slideshow').remove();
	}
	
	$('#lightbox35Close').click(function() {
	alert(12);
	$('#slideshow').remove();
	});
	
		
 

              
