$(document).ready(function(){
  
  var result = 0;
  
  $("input[type='button']").click(function(){
    event.preventDefault();
    
    var arr = document.getElementById('rbtn').getElementsByTagName('input')
      
    for (i =0; i<arr.length; i++){
      if (arr[i].checked===true){
      result +=1;
      }
    }
      
    if (result === 0){
      $("#output").text("Please select some items.");
      $("#output").show();
    }
    if (result >= 1 && result <= 3){
      $("#output").text("Your language is python!");
      $("#output").show();
    }
    if (result >= 4 && result <= 7){
      $("#output").text("Your language is javascript!");
      $("#output").show();
    }
    if (result >= 6){
      $("#output").text("Your language is c#!");
      $("#output").show();
    }
  });
});