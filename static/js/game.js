require.config({
    paths: {
        // templates: '../templates',
        backbone: 'libs/backbone/backbone',
        gamejs: 'libs/gamejs/gamejs',
        jquery: 'libs/jquery/jquery-1.8.2',
        underscore: 'libs/underscore/underscore'
    }
});

require(['jquery', 'gamejs', 'modules/main', 'modules/globals'], function($, gamejs, main, globals) {
    // game init
    gamejs.preload([
        globals.starsField.image
    ]);

    globals.screenSize = [$('gjs-canvas').attr('width'), $('gjs-canvas').attr('height')];
    gamejs.ready(main);
});