if (document.readyState !== "loading") {
    сode();
} else {
    document.addEventListener("DOMContentLoaded", code());
}


function code() {

    $(".imgan").on('mouseover', function () { //анимация для изображения
        $(".imgan").animate({
            "border-radius": "35px"
            
        }, 500
        );
    });
    $(".imgan").on('mouseover', function () { //анимация для изображения
        $(".imgan").animate({
            "opacity": "0.5"
        }, 500);
    });
    $(".imgan").on('mouseout', function () { //анимация для изображения
        $(".imgan").animate({
            "border-radius": "0px"
        }, 500);

    });
    $(".imgan").on('mouseover', function () { //анимация для изображения
        $(".imgan").animate({
            "opacity": "1.0"
        }, 500);
    });




    // console.log(com);




}
