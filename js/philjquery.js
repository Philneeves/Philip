$(window).on("load", function(){



    $("#appear").click(function(){

    	$(".cover").slideUp(2000, function(){


        $(".headerApp").fadeIn(6000);
        $(".footer").fadeIn(6000);

            $(".img-thumbnail").show(function(){
            $(".img-thumbnail").addClass("img-thumbnail2")
        
		          });
		  });
    });
});


$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});