$('.sl ').slick({
            autoplay: true,
            autoplaySpeed: 20000,
            
            slidesToShow: 3,
            slidesToScroll: 2,
         
            arrows: false,
            
             responsive: [
                 {
                   breakpoint: 1500,
                   settings: {
                     slidesToShow: 3,
                     slidesToScroll: 2,
                     infinite: true,
                     
                   }
                 },
                 {
                   breakpoint: 1300,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     infinite: true,
                     arrows: true ,
                   }
                 },
                 {
                   breakpoint: 600,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1,
                     arrows: true,
                   }
                 },
                 {
                   breakpoint: 480,
                   settings: {
                     slidesToShow: 1,
                     slidesToScroll: 1
                   }
                 }

                 ]


          });