$(window).on("load", function(){
    $("#appear").click(function(){
    	$(".cover").fadeOut(1000, function(){

            $(".headerApp").fadeIn(6000);
            $(".footer").fadeIn(6000);
        	$("#imgtn1").fadeIn(1000, function(){

        
		        $("#imgtn2").fadeIn(1000, function(){


		        	$("#imgtn3").fadeIn(1000, function(){


		        		$("#imgtn4").fadeIn(1000, function(){

		        		});
		        	});
		        });
    		});
        });
    });
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});