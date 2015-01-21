(function(n){n.viewportSize={},n.viewportSize.getHeight=function(){return t("Height")},n.viewportSize.getWidth=function(){return t("Width")};var t=function(t){var f,o=t.toLowerCase(),e=n.document,i=e.documentElement,r,u;return n["inner"+t]===undefined?f=i["client"+t]:n["inner"+t]!=i["client"+t]?(r=e.createElement("body"),r.id="vpw-test-b",r.style.cssText="overflow:scroll",u=e.createElement("div"),u.id="vpw-test-d",u.style.cssText="position:absolute;top:-1000px",u.innerHTML="<style>@media("+o+":"+i["client"+t]+"px){body#vpw-test-b div#vpw-test-d{"+o+":7px!important}}<\/style>",r.appendChild(u),i.insertBefore(r,e.head),f=u["offset"+t]==7?i["client"+t]:n["inner"+t],i.removeChild(r)):f=n["inner"+t],f}})(this);



( function( $ ) {
	
	// Setup variables
	$window = $(window);
	$slide = $('.homeSlide');
	$slideTall = $('.homeSlideTall');
	$slideTall2 = $('.homeSlideTall2');
	$body = $('body');
	htmlbody = $('html,body');
	var duration = 500;
	
    //FadeIn all sections   
	$body.imagesLoaded( function() {
		setTimeout(function() {
		      
		      // Resize sections
		      adjustWindow();
		      
		      // Init navigation
		      initHomepageNav();
		      
		      // Fade in sections
			  $body.removeClass('loading').addClass('loaded');
			  
		}, 800);
	});
	
	function adjustWindow(){
		
		// Init Skrollr
		var s = skrollr.init({
		    forceHeight: false,
		    render: function(data) {
		    
		        //Debugging - Log the current scroll position.
		        //console.log(data.curTop);
		    }
		});
		
		// Get window size
	    winH = $window.height();
	    
	    // Keep minimum height 550
	    if(winH <= 550) {
			winH = 550;
		} 
	    
	    // Resize our slides
	    $slide.height(winH);
	    $slideTall.height(winH*2);
	    $slideTall2.height(winH*2);
	    
	    // Refresh Skrollr after resizing our sections
	    s.refresh($('.homeSlide'));
	    
	}

	function initHomepageNav(){
		
		var homeSlides = $('.homeSlide');
		var $slideContent = $('.hsContainer');
		var slidesCount = $(homeSlides).length;
		var activeSlide = 1;
		
		// Build HTML for Nav
		$('#navbar').appendTo('body').delay(1200).fadeIn(duration);
		

		
		//Setup navbar index
		
		$('.home').click(function (e) {
				e.preventDefault();
		    	index=1;
				scrollToSlide(index);
				$( "#home" ).addClass( "selected" );
				$( "#blog" ).removeClass( "selected" );
				$( "#gallery" ).removeClass( "selected" );
				$( "#documentation" ).removeClass( "selected" );
		});
		
		$('.contactform').click(function (e) {
				e.preventDefault();
		    	index=2;
				scrollToSlide(index);
				$( "#home" ).removeClass( "selected" );
				$( "#blog" ).addClass( "selected" );
				$( "#gallery" ).removeClass( "selected" );
				$( "#documentation" ).removeClass( "selected" );
			
		});
		
		$('.imgcarousel').click(function (e) {
				e.preventDefault();
		    	index=3;
				scrollToSlide(index);
				$( "#home" ).removeClass( "selected" );
				$( "#blog" ).removeClass( "selected" );
				$( "#gallery" ).addClass( "selected" );
				$( "#documentation" ).removeClass( "selected" );
		});
		
			$('.imggallery').click(function (e) {
				e.preventDefault();
		    	index=4;
				scrollToSlide(index);
				$( "#home" ).removeClass( "selected" );
				$( "#blog" ).removeClass( "selected" );
				$( "#gallery" ).addClass( "selected" );
				$( "#documentation" ).removeClass( "selected" );
		});
		
		
		
		
	
		
		
		
		
		
	
	    
	    
		function scrollToSlide(slideId){
			
			// Custom slide content offset
		    var customSlideOffset = $("#slide-"+slideId).attr('data-content-offset');
		    
		    
		    // Scroll to the top of a container if it doesn't have custom offset defined
		    if(typeof customSlideOffset === 'undefined'){
		        
		        htmlbody.animate({scrollTop: ($("#slide-"+slideId).offset().top) + 'px'},'slow');
		        
		    } else {
		        
		        // Convert percentage 'eg. 25p' into pixels
		        if(customSlideOffset.indexOf('p')!=-1) {
			       
			       var customSlideOffset = parseInt(customSlideOffset.split('p')[0]);
				   var slideHeight = $slide.height();
				   
				   customSlideOffset = Math.ceil((slideHeight/100) * customSlideOffset);
				   
				   //console.log(slideHeight +' '+ customSlideOffset);
				   
				   htmlbody.animate({scrollTop: ($("#slide-"+slideId).offset().top + customSlideOffset) + 'px'},'slow');
			        
		        } else {
			       
			       var customSlideOffset = parseInt(customSlideOffset);
			       
			       htmlbody.animate({scrollTop: ($("#slide-"+slideId).offset().top + customSlideOffset) + 'px'},'slow');
			        
		        }
		    
		    }
		}
	    
	    
	}


  
		
} )( jQuery );