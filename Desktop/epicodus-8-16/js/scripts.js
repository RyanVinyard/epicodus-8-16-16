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

});
