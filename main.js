$(document).ready(function () {
    $("#color-range").on("input change", function () {
      // Change Body Background Color
      $("body").css("background-color", $(this).val());
      // Change h1 Color to White if Body Color is black
      if ($("#color-range").val() <= "#242424") {
        $("h1").css("color", "white");
      } else {
        $("h1").css("color", "black");
      }
    });
  });
  