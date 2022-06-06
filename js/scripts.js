$(document).ready(function() {
  $("form#groceries").submit(function(event) {
    event.preventDefault();
  // $(".click").click(function() {
    $(".hidden").hide();
    $(".outputText").show();
    const inputValue1 = $("input#firstItem").val();
    const inputValue2 = $("input#secondItem").val();
    const inputValue3 = $("input#thirdItem").val();
    // console.log(inputValue1);
    // console.log(inputValue2);
    // console.log(inputValue3);
    const firstArray = [inputValue1, inputValue2, inputValue3];
    const secondArray = firstArray.sort();
    const thirdArray = secondArray.map(element => {
      return element.toUpperCase();
    });
    // secondArray.toUpperCase();

    
    
    
    $(".output#firstItem").text(thirdArray[0]);
    $(".output#secondItem").text(thirdArray[1]);
    $(".output#thirdItem").text(thirdArray[2]);
    
    
    $("#refresh").click(function(event) {
      location.reload();
    });
  });
});
//  $("#refresh").click(function(event) {
//    location.reload();
//  });
// });