myPrj.define('bModule', ['aModule'], function (am) {
    'use strict';

    function start () {
        console.log( 'myPrj - i am B!' );
        console.log( 'myPrj - B call A:', am.hellow('B') );
    }

    return {
        start: start
    }
});