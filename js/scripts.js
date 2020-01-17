$(document).ready(function() {
  $(".btn").click(function() {
    var question1 = ($("input#1stQuestion").val());
    var question2 = ($("input#2ndQuestion").val());
    var question3 = ($("input#3rdQuestion").val());
  
  if (question1 === "yes"){
    question1 = 1;
  }
  
  if (question2 === "yes"){
    question2 = 1;
  }
  
  if (question3 === "yes"){
    question3 = 1;  
  }
  
  if (question1 + question2 + question3 > 2){

  
    $("#output").text("your language is python");
    $("#output").show();
  }
  
  
  
  console.log(question1);
  
  
  //if (side1 && side2 && side3) {  
    //if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      //$("#output").text("Not a triangle, sorry");
      //$("#output").show();
    //} else if (side1 === side2 && side1 === side3) {
      //$("#output").text("Equilateral");
      //$("#output").show();
   // } else if (side1 === side2 && side1 !== side3 || side1 === side3 && side2 !== side1 || side2 //=== side3 && side2 !== side1) {
      //$("#output").text("Isosceles");
      //$("#output").show();
    //} else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
      //$("#output").text("Scalene");
      //$("#output").show();
    //} else {
      //$("#output").text("I don't know what to tell you");
      //$("#output").show();
    //}
  //} else {
    //$("#output").text("Please try again and enter numbers");
    //$("#output").show();
  //}





event.preventDefault();
  });

});