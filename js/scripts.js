$(function(){


    //start scrolling  and backgroung navbar 
$(window).scroll(function(){
    if($(this).scrollTop()>0){
        $('nav').css('paddingTop','10px'),
        $('nav').css('paddingBottom','20px'),
        $('.contact').fadeOut();
    }
    if($(this).scrollTop()===0){
        $('nav').removeClass('wihte_background');
        $('.contact').fadeIn();
        $('nav').css({
            paddingTop:'25px',
            paddingBottom:'25px',
            webkitTransition:'all .5s linear',
            mozTransition:'all .5s linear',
            Transition:'all .5s linear',
        })
    }
})
// end scrolling backgroung navbar 



    var owl = $(".owl-demo");
    owl.owlCarousel({
        items : 1, //10 items above 1000px browser width
        itemsDesktop : [1000,1], //5 items between 1000px and 901px
        itemsDesktopSmall : [900,1], // betweem 900px and 601px
        itemsTablet: [600,1], //2 items between 600 and 0
        itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
    });
    owl.trigger('owl.play',3000);// auto work
    

    
        $(".next").click(function(){
            owl.trigger('owl.next');
        })
        $(".prev").click(function(){
            owl.trigger('owl.prev');
        })

            /* Custom Navigation Events
        $(".play").click(function(){
            owl.trigger('owl.play',2000); //owl.play event accept autoPlay speed as second parameter
        })
        $(".stop").click(function(){
            owl.trigger('owl.stop');
        });  */

    
/************************************ start scroll to top   *******************/
$('.to_top').on('click',function(){
    $('html,body').animate({
        scrollTop:0
    })
});
  /************************************ end scroll to top     *******************/
    
})