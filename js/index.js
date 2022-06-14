'use strict';

window.addEventListener('DOMContentLoaded', function () {

    const calc = require('./modules/calc'),
            cards = require('./modules/cards'),
            form = require('./modules/form'),
            modal = require('./modules/modal'),
            slides = require('./modules/slides'),
            tabs = require('./modules/tabs'), 
            timer = require('./modules/timer');

            calc();
            cards();
            form();
            modal();
            slides();
            tabs();
            timer();
        

});