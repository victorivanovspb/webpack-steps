'use strict';

// import 'jquery';
// import 'popper.js';
import './css/styles.css';

console.log('Hello, world!');
console.log('Hello, world! Again.');

jQuery(document)
    .ready(function($) {
        console.log('jquery');

        ((selector) => {
            const color = (Math.random() > 0.5) ? 'light-gray' : 'white';
            selector.css('background-color', color);
        })( $('body') );
    });
