(function () {
    'use strict';

    angular.module('MenuApp')
    .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig ($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise("/");
        
        $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'src/menuapp/templates/home.template.html'
        })
        // categories
        .state('categories', {
            url: '/categories',
            templateUrl: 'src/menuapp/templates/categories.template.html',
            controller: 'categoriesListController as cat',
            resolve: {
                categories: ['MenuDataService', function (MenuDataServiceService) {
                return MenuDataServiceService.getAllCategories();
                }]
                }
        })
        // items
        .state('items', {
            url: '/items/{catShortName}',
            templateUrl: 'src/menuapp/templates/items.template.html',
            controller: 'itemsListController as items',
            resolve: {
                items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataServiceService) {
                return MenuDataServiceService.getItemsForCategory($stateParams.catShortName);
                }]
                }
        })

        
    }
})();