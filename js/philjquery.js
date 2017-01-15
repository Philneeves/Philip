$(window).on("load", function(){



    $("#appear").click(function(){

    	$(".cover").slideUp(1000, function(){
        $(".mastfoot").fadeOut(1000, function(){


        $(".headerApp").fadeIn(2000);
        $(".footer").fadeIn(2000);

        
        $(".img-thumbnail").show(function(){
            $(".img-thumbnail").addClass("img-thumbnail2")
                        
		            });
                });
		  });
    });
});


$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});