///////////////////////////// BACKGROUND MOVING ////////////////////////////////////

$(function () {
    var x = 0;
    setInterval(function () {
        x -= 1;
        $('.second').css('background-position', x + 'px 0');
    }, 10);
})

$(function () {
    var x = 0;
    setInterval(function () {
        x -= 1;
        $('#backgroundGame').css('background-position', x + 'px 0');
    }, 10);
})
