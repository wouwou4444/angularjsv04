(function () {
    'use strict';

    angular.module('data')
    .service('MenuDataService', MenuDataService )
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

    MenuDataService.$inject = ['$http', 'ApiBasePath'];;
    function MenuDataService ($http,ApiBasePath) {
        var service = this;

        service.getAllCategories = function () {
            return $http({
                method: "GET",
                url: ( ApiBasePath + "/categories.json" )
            })
            .then(function (result) {
                // process result and only keep items that match
                var categories = result.data;

                console.log('Categories :', categories);
                //console.log('searchItem:', searchItem)

                // return processed items
                service.categories = categories;
                return categories;
            })
            .catch(function (error){
                console.log(error)
            });

        }


        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: "GET",
                url: ( ApiBasePath + "/menu_items.json?category=" + categoryShortName)
            })
            .then(function (result) {
                // process result and only keep items that match
                var items = result.data.menu_items;

                console.log('Items :', items);
                //console.log('searchItem:', searchItem)

                // return processed items
                service.items = items;
                return items;
            })
            .catch(function (error){
                console.log(error)
            });

        }


    }
})();