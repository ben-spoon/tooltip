/**
 * Adds a tooltip to an object
 * Uses the data-title of that object for the
 * tooltip text
 *
 * Ben Spoon
 * http://benspoon.com
 * @benspoon
 */
 (function() {
var clear = null;
$(document).on('mouseover', '.tooltip', function() {
    $('.tooltip-wrapper').remove();
    var text = $(this).data('title'),
        imageOptions = $(this).data('image'),
        style = $(this).data('position'),
        imageSplit = '',
        imageStyle = '',
        pos   = $(this).offset();

    $(this).parent().append('<div class="tooltip-wrapper"></div>');
    if (imageOptions) {
        if (imageOptions.indexOf(',') > -1) {
            imageSplit = imageOptions.split(',');
            image = imageSplit[0];
            imageStyle = imageSplit[1];
        } else {
            image = imageOptions;
        }
        $('.tooltip-wrapper').append('<img style="'+
            imageStyle+'" src="'+image+'" class="tool-tip-image"></img>');
    }
    if (text !== '') {
        $('.tooltip-wrapper').append('<span class="tool-tip-text">'+
            text + '</span>');
    }
    if (style === 'bottom') {
        $('.tooltip-wrapper').css('margin-top', 5).css('left', pos.left + 30);
    } else if (style === 'top') {
        $('.tooltip-wrapper').css('margin-top', -($('.tooltip-wrapper').height()*4)).css('left', pos.left + 30);
    }

}).on('mouseout', '.tooltip', function() {
    clear = setTimeout(function (){
        $('.tooltip-wrapper').remove();
    }, 100);
}).on('mouseenter', '.tooltip-wrapper', function() {
    if (clear){
        clearTimeout(clear);
        clear = null;
    }
}).on('mouseleave', '.tooltip-wrapper', function() {
    clear = setTimeout(function (){
        $('.tooltip-wrapper').remove();
    }, 100);
});
})();
