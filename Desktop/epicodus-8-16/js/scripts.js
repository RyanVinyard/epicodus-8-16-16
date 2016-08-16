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
    // var output = 0;
    // for (var i = 0; i <= count_to; i+=count_by) {
    //   output = count_by;
    //   $("#output").append("<li>" + i + ", " + "</li>");
    // };

  event.preventDefault();
  });
});
