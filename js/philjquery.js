$(document).ready(function(){
    $("#appear").click(function(){
    	$(".cover").fadeOut(1000, function(){

        	$("#imgtn1").fadeIn(2000, function(){

        
		        $("#imgtn2").fadeIn(2000, function(){


		        	$("#imgtn3").fadeIn(2000, function(){


		        		$("#imgtn4").fadeIn(2000, function(){

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