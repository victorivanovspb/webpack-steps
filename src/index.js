'use strict';

// import 'jquery';
// import 'popper.js';

import 'bootstrap/dist/css/bootstrap.css';
import './css/styles.css';

// import 'bootstrap';
import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/alert';


console.log('Hello, world!');
console.log('Hello, world! Again.');

jQuery(document)
    .ready(function($) {
        console.log('jquery');

        ((selector) => {
            const color = (Math.random() > 0.5) ? '#eee' : '#fff';
            selector.css('background-color', color);
        })( $('body') );
    });
