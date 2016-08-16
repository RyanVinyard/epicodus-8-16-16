$(document).ready(function() {
  $("#countby").submit(function(event) {

    var count_by = $("#input2").val();
    var count_to = $("#input1").val() / count_by;

    function count_function (toNum, byNum) {
      for (var i = 0; i <= toNum; i++) {
        $("#output").append("<li>" + i * byNum + "</li>");
      };
    };

    count_function(count_to, count_by);

    // var count_to = $("#input1").val();
    // var count_by = $("#input2").val();
    // // var output = 0;
    // for (var i = 0; i <= count_to; i+=count_by) {
    //   // output = count_by;
    //   $("#output").append("<li>" + i + ", " + "</li>");
    // };

  event.preventDefault();
  });

  var flavors = ["vanilla","mint","chocolate","strawberry"];
  var li_ids = ["#flavor1", "#flavor2", "#flavor3", "#flavor4"];
  var n = 0;
  for (var i = 0; i <= flavors.length; i++) {
    $(li_ids[n]).text(flavors[n]);
    n++;
  };

  // flavors.forEach(function(flavor){
  //   $(li_ids[i]).text(flavor);
  //   i++;
  // });

  $("#text_enter").submit(function(event) {

    var sentence = $("#user_input").val();
    var vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];

    // for (var i = 0; i <= sentence.length; i++) {
    //   for (var n = 0; i <= vowels.length; n++) {
    //     if (sentence[i] === vowels[n]) {
    //       sentence = sentence.replace(vowels[n], "-");
    //     };
    //   };
    // };

    for(var i = 0; i < vowels.length; i++){
      for (var n = 0; n < sentence.length; n++){
        if (sentence[n] === vowels[i]) {
          sentence = sentence.replace(vowels[i], "-");
        };
      };
    };

  $("#sentence_output").append(sentence);
  event.preventDefault();
  });


  $("#factorial").submit(function(event) {

    var factorial = $("#user_factor").val();

    var num = factorial
    for (var i = 1; i < num; i++) {
      factorial = factorial * i;
    }

    // var num = factorial;
    // answer = 1;
    // while (num >= 1) {
    //   answer = answer * num;
    //   num -= 1;
    // };

  $("#factorial_output").text(factorial);
  event.preventDefault();
  });

  $("#palindrome").submit(function(event) {

    var palindrome = $("#userPalin").val();
    var n = palindrome.length - 1;
    var isPalin = "true";

    for (var i = 0; i < palindrome.length; i++) {
      if (palindrome[i] === palindrome[n]) {
        n -= 1;
      } else {
        isPalin="false";
      };
    };

  $("#palinOutput").append(isPalin);
  event.preventDefault();
  });

  $("#prime").submit(function(event) {
    var number = $("#userNumber").val();
    var list = [];
    for (i = 2; i <= number; i++) {
      list.push(i);
    };

    for (n = 1; n <= list.length; n++) {
      for (multiplier = 2; n*multiplier <= number; multiplier++) {
        list[i*multiplier - 2] = x;
      };
    };

  event.preventDefault();
  });

});
