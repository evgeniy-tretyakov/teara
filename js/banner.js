(function($) {


    sliceSlider = function(){
        let delta = 0;
        let currentSlideIndex = 0;
        let scrollThreshold = 40;
        let slides = $('.slide');
        let numSlides = $('.slide').length;
        let navPrev = $('.js-slice-prev');
        let navNext = $('.js-slice-next');


            navPrev.on('click', function(){
                prevSlide();
            });

            navNext.on('click', function(){
                nextSlide();
            });

          handleScroll = function(e){
  
            // Scrolling up
            if (e.originalEvent.detail < 0 || e.originalEvent.wheelDelta > 0) { 
      
              delta--;
           
              if ( Math.abs(delta) >= scrollThreshold) {
                prevSlide();
              }
            }
       
            // Scrolling Down
            else {
       
              delta++;
       
              if (delta >= scrollThreshold) {
                nextSlide();
              }
            }
       
            // Prevent page from scrolling
            return false;
          }; 

          showSlide = function(){ 
            // reset
            delta = 0;
            // Bail if we're already sliding
            if ($('body').hasClass('is-sliding')){
              return;
            }
            // Loop through our slides
            slides.each(function(i, slide) {
      
              // Toggle the is-active class to show slide
              $(slide).toggleClass('is-active', (i === currentSlideIndex)); 
              $(slide).toggleClass('is-prev', (i === currentSlideIndex - 1)); 
              $(slide).toggleClass('is-next', (i === currentSlideIndex + 1)); 
              
              // Add and remove is-sliding class
              $('body').addClass('is-sliding');
      
              setTimeout(function(){
                  $('body').removeClass('is-sliding');
              }, 1000);
            });
          };

          prevSlide = function(){
        
            // If on first slide, loop to last
            if (currentSlideIndex <= 0) {
              currentSlideIndex = numSlides;
            }
            currentSlideIndex--;
            
            showSlide();
          };
      
          /**
           * Next Slide
           */
          nextSlide = function(){
            
            currentSlideIndex++;
         
            // If on last slide, loop to first
            if (currentSlideIndex >= numSlides) { 
              currentSlideIndex = 0;
            }
       
            showSlide();
          };
    };

    $(document).ready(function(){
        sliceSlider();
    });

  })(jQuery);