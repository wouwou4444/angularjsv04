(function () {
    'use strict';

    angular.module('Data')
    .service('MenuDataService', MenuDataService );

    MenuDataService.$inject = ['$http'];
    function MenuDataService ($http) {
        var service = this;

        service.getAllCategories = function () {

        }

        service.getItemsForCategory = function (categoryShortName) {
            
        }

    }
})();