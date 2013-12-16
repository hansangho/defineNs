(function(){
    'use strict';

    function defineNamespace () {
        var names = [], depens = [], modules = [];

        function define (_nameStr, _depenArr, _moduleFn) {
            var idx, args = [];
            for (var i = 0, len = _depenArr.length; i < len; i++) {
                args.push(modules[names.indexOf(_depenArr[i])]);
            };

            names.push(_nameStr);
            depens.push(_depenArr);
            modules.push(_moduleFn.apply(undefined, args));
        }
        return {
            define: define,
            names: names,
            depens: depens,
            modules: modules
        }
    }

    var global = (function(){ return this || (0,eval)('this'); }());
        global.defineNs = defineNamespace;
})();
