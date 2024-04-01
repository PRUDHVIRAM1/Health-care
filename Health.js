$(document).ready(function(){
    $("#bookmark").click(function(){
        $("#bookmark").html("<i class='fas fa-bookmark icon on'></i>");
    });
    $("#user").click(function(){
        $("#userinfo").css("display","block");
    });
    $(".bar2").click(function(){
        $("#userinfo").css("display","none");
    });
    $("#back").click(function(){
    var $p = parseInt($(".active").text());
    if($p!=1)
      {
        $p--;
        $(".page").hide();
        $("."+$p).show(1000);
        $('.pagination > li > a').removeClass('active');
        $('#btn'+$p).addClass('active');
    }
    });
    $("#btn1").click(function(){
         $(".page").hide();
        $(".1").show(1000);
        $('.pagination > li > a').removeClass('active');
        $('#btn1').addClass('active');
    });
    $("#btn2").click(function(){
        $(".page").hide();
        $(".2").show(1000);
        $('.pagination > li > a').removeClass('active');
        $('#btn2').addClass('active');
    });
    $("#btn3").click(function(){
          $(".page").hide();
        $(".3").show(1000);
        $('.pagination > li > a').removeClass('active');
        $('#btn3').addClass('active');
    });
    $("#btn4").click(function(){
          $(".page").hide();
        $(".4").show(1000);
        $('.pagination > li > a').removeClass('active');
        $('#btn4').addClass('active');
    });
    $("#btn5").click(function(){
          $(".page").hide();
        $(".5").show(1000);
        $('.pagination > li > a').removeClass('active');
        $('#btn5').addClass('active');
    });
    $("#next").click(function(){
    var $p = parseInt($(".active").text());
    if($p!=5)
      {
        $p++;
        $(".page").hide();
        $("."+$p).show(1000);
        $('.pagination > li > a').removeClass('active');
        $('#btn'+$p).addClass('active');
      } 
    });
});