$(document).ready(function() {
    $('#plus1').click(function () {
        var $input = $(this).parent().find('progress');
        var count = parseInt($input.val()) + 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('#plus3').click(function () {
        var $input = $(this).parent().find('progress');
        $input.val(parseInt($input.val()) + 3);
        $input.change();
        return false;
    });
});
        $('#plus7').click(function () {
        var $input = $(this).parent().find('progress');
        $input.val(parseInt($input.val()) + 7);
        $input.change();
        return false;
    });