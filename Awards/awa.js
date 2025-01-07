function draw() {
  var canvas = $("canvas")[0];
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(120, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 50, 50);
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(70, 30, 50, 50);
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(90, 30, 50, 50);
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(120, 30, 50, 50);
    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(170, 50, 50, 50);
    ctx.fillStyle = "rgba(0, 0, 0, 43.5)";
    ctx.fillRect(190, 60, 120, 190);
    ctx.fillStyle = "rgba(0, 0, 10, 1.5)";
    ctx.fillRect(0, 60, 190, 190);
  }
}

$(document).ready(function () {
  // $(document).draw();
  $("#content").animate(
    {
      opacity: 5,
      marginTop: "0",
    },
    20000
  );
  $("h2").click(function () {
    $(this).next(".subtext").slideToggle("fast");
    $(this).children(".hex").toggleClass("moved");
  });
});

// if (confirm("Press a button!")) {
//   txt = "You pressed OK!";
// } else {
//   txt = "You pressed Cancel!";
// }
