$(function(){
  $(function(){
    $(".footer__contents5__text").click( function(){
      var h = Number($("#height").val());
      var w = Number($("#weight").val());
      var p = ( w / ( (h / 100) * (h / 100) ) );
      var q = Math.round(p * 10)/ 10
      if(q < 18.5){
        $(".rank1").css("display","inline-block").fadeIn()
        $(".rank2").css("display","none")
        $(".rank3").css("display","none")
        $(".rank4").css("display","none")
        $(".rank5").css("display","none")
        $(".rank6").css("display","none")
      }
       if(18.5 < q ){
        $(".rank2").css("display","inline-block").fadeIn()
        $(".rank1").css("display","none")
        $(".rank3").css("display","none")
        $(".rank4").css("display","none")
        $(".rank5").css("display","none")
        $(".rank6").css("display","none")
        }
       if(25 < q ){
        $(".rank3").css("display","inline-block").fadeIn()
        $(".rank1").css("display","none")
        $(".rank2").css("display","none")
        $(".rank4").css("display","none")
        $(".rank5").css("display","none")
        $(".rank6").css("display","none")
        }
       if(30 < q ){
        $(".rank4").css("display","inline-block").fadeIn()
        $(".rank1").css("display","none")
        $(".rank2").css("display","none")
        $(".rank3").css("display","none")
        $(".rank5").css("display","none")
        $(".rank6").css("display","none")
        }
       if(35 < q ){
        $(".rank5").css("display","inline-block").fadeIn()
        $(".rank1").css("display","none")
        $(".rank2").css("display","none")
        $(".rank3").css("display","none")
        $(".rank4").css("display","none")
        $(".rank6").css("display","none")
        }
      if(40 < q) {
        $(".rank6").css("display","inline-block").fadeIn()
        $(".rank1").css("display","none")
        $(".rank2").css("display","none")
        $(".rank3").css("display","none")
        $(".rank4").css("display","none")
        $(".rank5").css("display","none")
        }
    });
  });
 
  $(function(){
    $(".footer__contents5__text").click( function(){
      var h = Number($("#height").val());
      var w = Number($("#weight").val());
      var p = ( w / ( (h / 100) * (h / 100) ) );
      var Q = Math.round(p * 10)/ 10
      var tagOutput = $('#box5');
      tagOutput.html(Q);
  });
  });

  $(function(){
    $(".footer__contents4__text").click(function(){
      var i = Number($("#idealweight").val());
      var w = Number($("#weight").val()); 
      var tagOutput = $('#box4');
    if (i > w){
      var g = w / i * 100
      var z = Math.round(g * 10)/ 10 + "%"
      tagOutput.html(z)
    }else{
      var d = i / w * 100
      var h = Math.round(d * 10)/ 10 + "%"
      tagOutput.html(h)
    }
  });
  });

  $(function(){
    $(".footer__contents4__text").click(function(){
      var i = Number($("#idealweight").val());
      var w = Number($("#weight").val()); 
      var g = w / i * 100
      var z = Math.round(g * 10)/ 10
      var d = i / w * 100
      var h = Math.round(d * 10)/ 10
     if (z >= 4 && h >= 4){
      $("#marigold").fadeIn()
     }
     if (z >= 8 && h >= 8){
      $("#kikyou").fadeIn()
     }
     if (z >= 12 && h >= 12){
      $("#tulip").fadeIn()
     }
     if (z >= 16 && h >= 16){
      $("#hyacinth").fadeIn()
     }
     if (z >= 20 && h >= 20){
      $("#amaryllis").fadeIn()
     }
     if (z >= 24 && h >= 24){
      $("#calla").fadeIn()
     }
     if (z >= 28 && h >= 28){
      $("#sandersonia").fadeIn()
     }
     if (z >= 32 && h >= 32){
      $("#ajisai").fadeIn()
     }
     if (z >= 36 && h >= 36){
      $("#whitelaceflower").fadeIn()
     }
     if (z >= 40 && h >= 40){
      $("#blue_bonnet").fadeIn()
     }
     if (z >= 44 && h >= 44){
      $("#geranium").fadeIn()
     }
     if (z >= 48 && h >= 48){
      $("#ayame").fadeIn()
     }
     if (z >= 52 && h >= 52){
      $("#tsubuwaki").fadeIn()
     }
     if (z >= 56 && h >= 56){
      $("#christmas_rose").fadeIn()
     }
     if (z >= 60 && h >= 60){
      $("#rindou").fadeIn()
     }
     if (z >= 64 && h >= 64){
      $("#syakunage").fadeIn()
     }
     if (z >= 68 && h >= 68){
      $("#shiroinunazuna").fadeIn()
     }
     if (z >= 72 && h >= 72){
      $("#katakuri").fadeIn()
     }
     if (z >= 76 && h >= 76){
      $("#seitaka_awadachisou").fadeIn()
     }
     if (z >= 80 && h >= 80){
      $("#nadeshiko").fadeIn()
     }
     if (z >= 84 && h >= 84){
      $("#anthurium").fadeIn()
     }
     if (z >= 88 && h >= 88){
      $("#rose_rainbow").fadeIn()
     }
     if (z >= 92 && h >= 92){
      $("#syakoba_saboten").fadeIn()
     }
     if (z >= 96 && h >= 96){
      $("#nemophila").fadeIn()
     }
     if (z >= 100 && h >= 100){
      $("#kalmia_karumia").fadeIn()
     }
  });
  });



});