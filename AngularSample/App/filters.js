(function () {
    'use strict';

    angular
        .module('app')
        .filter('filters', filters);
    
    function filters() {
        return filtersFilter;

        function filtersFilter(input) {
            return input;
        }
    }
})();