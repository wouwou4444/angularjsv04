(function () {
    'use strict';

    angular.module('MenuApp')
    .component('categories',  {
        templateUrl: 'src/menuapp/templates/categories.template.html',
        controller: categoriesComponentController,
        bindings: {
        categories: '<',
        }
    });

    categoriesComponentController.$inject = ['categories'];
    function categoriesComponentController (categories) {
        
    }

})();