let BioPage = (function ($) {
    'use strict';

    function init() {

        $(".year").html(new Date().getFullYear());
    }

    return {
        init: init
    };
}(jQuery));