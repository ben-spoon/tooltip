$(document).on('mouseover', '.tooltip', function() {
    /**
     * Adds a tooltip to an object
     * Uses the data-title of that object for the
     * tooltip text
     */

    $('.tooltip-wrapper').remove();
    var text = $(this).data('title'),
        pos   = $(this).offset();
    $(this).append('<div class="tooltip-wrapper"><span class="tool-tip-text">' + text + '</span></div>');
    $('.tooltip-wrapper').css('top', pos.top + 15).css('left', pos.left + 15);

}).on('mouseout', '.tooltip', function() {
    $('.tooltip-wrapper').remove();
});
