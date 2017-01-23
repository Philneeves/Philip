$(window).on("load", function(){



    $("#appear").click(function(){

    	$(".cover").slideUp(1000, function(){
        $(".mastfoot").fadeOut(1000, function(){


        $(".headerApp").fadeIn(2000);
        $(".footer").fadeIn(2000);
        $(".thumbnail").fadeIn(2000);

        
        $(".img-thumbnail").show(function(){
            $(".img-thumbnail").addClass("img-thumbnail2")
                        
		            });
                });
		  });
    });
});

$("#imgtn1").hover(function() {
$( '#imgtn1' ).attr("src","img/ang2.png");
}, 
function() {
});

$("#imgtn2").hover(function() {
$( '#imgtn2' ).attr("src","img/rps_new.png");
}, 
function() {
});

// $(document).ready(function(){
$("#imgtn3").hover(function() {
$( '#imgtn3' ).attr("src","img/album_banner1.jpg");
}, 
function() {
});

$("#imgtn4").hover(function() {
$( '#imgtn4' ).attr("src","img/me_icon.jpeg");
}, 
function() {
});


$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});