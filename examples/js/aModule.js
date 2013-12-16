var myPrj = new deFineNs();

myPrj.define('aModule', [], function () {
    'use strict';

    function hellow (_str) {
        return 'A say hi~' + _str;
    }

    return {
        hellow: hellow
    }
});
