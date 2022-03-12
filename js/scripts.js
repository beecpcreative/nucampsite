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
    $("#reserveButton").click(function () {
        $(".modal").modal("show");
    });
    $("#loginButton").click(function(){
        $(".modal").modal("show");
    });
});