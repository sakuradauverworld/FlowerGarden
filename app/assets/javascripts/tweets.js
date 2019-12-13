$(function(){

  $(function() {
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
  
});