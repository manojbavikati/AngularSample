(function() {
    'use strict';

    angular
        .module('vendorApp')
        .directive('directives', directives);

    directives.$inject = ['$window'];
    
    function directives ($window) {
        // Usage:
        //     <directives></directives>
        // Creates:
        // 
        var directive = {
            link: link,
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();