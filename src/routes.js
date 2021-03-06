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
        .state('menuCategories', {
            url: '/menu-categories',
            templateUrl: 'src/menuapp/templates/menu-categories.template.html',
            controller: 'CategoriesListController as cat',
            resolve: {
                categories: ['MenuDataService', function (MenuDataServiceService) {
                    return MenuDataServiceService.getAllCategories();
                }]
                }
        })
        // items
        .state('mainItemsList', {
            url: '/main-items-list/{catShortName}',
            templateUrl: 'src/menuapp/templates/main-items-list.template.html',
            controller: 'ItemsListController as itemsList',
            resolve: {
                items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataServiceService) {
                    return MenuDataServiceService.getItemsForCategory($stateParams.catShortName);
                }]
                }
        });

        
    }
})();