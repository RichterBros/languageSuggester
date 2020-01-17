$(document).ready(function(){
  
  var result = 0;
  
  $("input[type='button']").click(function(){
      var radioValue = parseInt($("input[name='cars']:checked").val());
      if(radioValue){
          result += 1;
      }
          var radioValue = parseInt($("input[name='trucks']:checked").val());
      if(radioValue){
          result += 1;
        
      }
 
      var radioValue = parseInt($("input[name='dogs']:checked").val());
      if(radioValue){
          result += 1;
        
      }

      var radioValue = parseInt($("input[name='cats']:checked").val());
      if(radioValue){
          result += 1;
        
      }
      //alert(result);
      
      if (result === 0){
        $("#output").text("please select some items");
        $("#output").show();

      }
      
      if (result === 4){
        $("#output").text("your language is python");
        $("#output").show();

      }

      if (result === 6){
        $("#output").text("your language is c#");
        $("#output").show();

      }

    

event.preventDefault();
  });

});