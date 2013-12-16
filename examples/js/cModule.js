myPrj.define('cModule', ['aModule','bModule'], function ( am, bm ) {
    'use strict';

    console.log( 'myPrj - i am C!', this );
    console.log( 'myPrj - C call A:', am.hellow('C') );
    bm.start();

    return {
    }
});