let HomePage = (function ($) {
    'use strict';

    function init() {

        $(".year").html(new Date().getFullYear());

        setTimeout(function () {
            $(".shape").removeClass("jackInTheBox");
            $("h2").removeClass("bounceIn");
            $("h2").removeClass("delay200ms");
            $("h2").removeClass("delay400ms");
            $("h2").removeClass("delay600ms");
        }, 1200);
    }

    return {
        init: init
    };
}(jQuery));