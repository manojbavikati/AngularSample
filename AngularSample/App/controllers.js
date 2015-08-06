(function () {
    'use strict';

    angular
        .module('vendorApp')
        .controller('controllers', controllers);

    controllers.$inject = ['$location']; 

    function controllers($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'controllers';

        activate();

        function activate() { }
    }
})();
