$(function(){
    $('.minimum-unit').click(function(){
        var $answer = $(this).find('.French')
        if($answer.hasClass('open')){
            $answer.removeClass('open');
            $answer.fadeOut('fast');
        }
        else{
            $answer.addClass('open');
            $answer.fadeIn();
        }
    })
});