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
      }
    }

  $("#sentence_output").append(sentence);
  event.preventDefault();
  });


  $("#factorial").submit(function(event) {

    var factorial = $("#user_factor").val();

    // for (var i = 1; i < factorial; i++) {
    //   (factorial * i);
    //   alert("loop");
    // }

    var num = factorial;
    answer = 1;
    while (num >= 1) {
      answer = answer * num;
      num -= 1;
    };

  $("#factorial_output").append(answer);
  event.preventDefault();
  });

});
