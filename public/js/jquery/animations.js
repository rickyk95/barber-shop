
      $('document').ready(function(){
        $('body').scrollspy({target:'.navbar'})
        $('.navbar a').on('click',function(e){             
            if(this.hash !== ' '){
              e.preventDefault()
              var hash = this.hash
              $('html, body').animate({
                scrollTop: $(hash).offset().top
              }, 800, function () {
                window.location.hash = hash;
              })
            }
        })

        $('#main-section-text').hide()
        $('#main-section button').hide()
        $('#main-section-text').fadeIn(1500)
        $('#main-section button').fadeIn(2000)
         $('#inner h3, #inner h4').hide()
         $('#inner h3').fadeIn(2500)
         $('#inner h4').fadeIn(4500)
         $('#text-animation').hide()
         $('#animation-section h1').hide()      
         $('#animation-section').hover(function(){
         $('.animated-background-circle-1').addClass('move-circle-bottom-left')
         $('.animated-background-circle-2').addClass('move-circle-top-right')
         $('#animation-section h1').fadeIn(3500)                                                      
         })         

})