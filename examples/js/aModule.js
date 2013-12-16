var myPrj = new defineNs();

myPrj.define('aModule', [], function () {
    'use strict';

    function hellow (_str) {
        return 'A say hi~' + _str;
    }

    return {
        hellow: hellow
    }
});
