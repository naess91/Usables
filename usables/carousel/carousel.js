
jQuery(document).ready(function($) {
  
		//Image carousel witdh navigation
   
        $('.carousel-list li:first').before($('.carousel-list li:last')); 
        
             
        $('.scroll-right img').click(function(){
       
           
            var item_width = $('.carousel-list li').outerWidth() + 10;
            
            var left_indent = parseInt($('.carousel-list').css('left')) - item_width;
            
            $('.carousel-list:not(:animated)').animate({'left' : left_indent},500,function(){    
                
                $('.carousel-list li:last').after($('.carousel-list li:first'));
               
                $('.carousel-list').css({'left' : '-210px'});
            }); 
        });
        
      
        $('.scroll-left img').click(function(){
            
            var item_width = $('.carousel-list li').outerWidth() + 10;
         
            var left_indent = parseInt($('.carousel-list').css('left')) + item_width;
            
            $('.carousel-list:not(:animated)').animate({'left' : left_indent},500,function(){    
            
            $('.carousel-list li:first').before($('.carousel-list li:last')); 
            
            $('.carousel-list').css({'left' : '-210px'});
            });
            
            
        });
 

                })(jQuery); 