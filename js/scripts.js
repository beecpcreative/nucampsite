$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselPause").click(function () {
        $(".carousel").carousel("pause");
    });
    $("#carouselPlay").click(function(){
        $(".carousel").carousel("cycle");
    });
});
$(function() {
    $(".btn").click(function(){
        $("#reserveButton").modal('show');
    });
    $(".btn").click(function(){
        $("#loginButton").modal('show');
});
