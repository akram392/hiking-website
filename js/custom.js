jQuery(function($) {
  
    new WOW().init();
  

  
    
    $(document).ready( function() {
      //enabling stickUp on the '.navbar-wrapper' class
      $('.navbar-wrapper').stickUp();
    });
    

  
    $('.img-feature').owlCarousel({
        loop:true,
        margin:15,
        nav:true,
        navText:["←","→"],
        autoplay:true,
        autoplayTimeout:4000,
        responsive:{
            0:{            //phone size
                items:1 
            },
            600:{         //tablet size jonno
                items:2
            },
            1000:{        //laptop size
                items:3
            }
        }
    })

    // animation counter
      $('.number').animationCounter({

        start: 0,
        step:2,
        end: 100,
        txt:" k",
        delay:100

      });  

      $('.client').animationCounter({

        start: 0,
        step:5,
        end: 3785,
        delay:10

      });  

      $('.blog').animationCounter({

        start: 0,
        step:5,
        end: 2500,
        delay:10

      }); 
    
});