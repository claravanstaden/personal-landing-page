let HomePage = (function ($) {
    'use strict';

    function init() {

        setTimeout(function () {
            $(".shape").removeClass("jackInTheBox");
        }, 1200);
    }

    return {
        init: init
    };
}(jQuery));