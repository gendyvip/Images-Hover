$(document).ready(function () {
    $("#container").append(`<div id="show"></div>`);
    $("img").hover(
        function () {
            var src = $(this).attr('src');
            $("#show").html(`<img src="${src}" style="width: 500px; height:700px">`)
        },
        function () {
            $("#show").empty();
        }
    );
    $("#container").mousemove(function (e) {
        $("#show").css({
            left: e.clientX + 5 + 'px',
            top: e.clientY + 5 + 'px',
        });
    });
});