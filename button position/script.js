
$(document).ready(function () {
     var i=0;
    $("body").click(function () {       
        if(i==1){
             $("ul").show(); 
             i=0;          
        }else{
              $("ul").hide();   
        }
    })
    $(".btn-default").click(function () {
        i++;
        this.client;
        var x = event.clientX;
        var y = event.clientY;       
        var list_full_width = $("ul").outerWidth();
        var list_full_height = $("ul").outerHeight();
        if (x < 1000 && y < 301) {
            $('.content').css({ "top": y });
            $('.content').css({ "left": x });
            $("ul").show();
            $('body').append($('.content'));
        }
        if (x > 85 && y < 90) {
            $('.content').css({ "top": y });
            $('.content').css({ "left": x - list_full_width });
            $("ul").show();
            $('body').append($('.content'));
        }
        if (x < 85 && y > 90) {
            $('.content').css({ "top": y - list_full_height });
            $('.content').css({ "left": x });
            $("ul").show();
            $('body').append($('.content'));
        }
        if (x > 1000 && y > 301) {
            $('.content').css({ "top": y - list_full_height });
            $('.content').css({ "left": x - list_full_width });
            $("ul").show();
            $('body').append($('.content'));
        }


        // console.log(x + "asd" + y)
    })

i=0
    $("li").click(function(){
        if($(this).attr("disabled")){
            $("ul").hide();
            i=0;
        }
        else{
            alert("Item clicked!");
        }
        i=0;
    })

})