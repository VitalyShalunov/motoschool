if (document.readyState !== "loading") {
    сode();
} else {
    document.addEventListener("DOMContentLoaded", code());
}


function code() {

    $(".imgan").on('mouseover', function() { //анимация для изображения
        $(".imgan").animate({
            "border-radius": "35px"
        
        }, 500
        );
    });
    $(".imgan").on('mouseover', function() { //анимация для изображения
        $(".imgan").animate({
            "width": "+=50px"
        }, 500);
    });
        $(".imgan").on('mouseout', function() { //анимация для изображения
            $(".imgan").animate({
                "border-radius": "0px"
            }, 500);
    
        });
        $(".imgan").on('mouseover', function() { //анимация для изображения
            $(".imgan").animate({
                "width": "-=50px"
            }, 500);
        });


        var comment = new Array();
        var i=0;


        $("#btntextblock").on("click", function () { //при клике на кнопку отправить
            var tex = $("#textblock").val();
            if(tex!==""){
            $('#comment ul').append("<li>" + tex + "</li><br>");
            comment[i++]= tex;
            console.log("i="+i+"  text="+tex);
            $("#textblock").val("");
            }
        });

        
        

        
        

    }
