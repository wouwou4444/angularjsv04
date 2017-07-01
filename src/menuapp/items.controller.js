(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemsListController', ItemsListController);


ItemsListController.$inject = ['MenuDataService', 'items'];
function ItemsListController(MenuDataService, items) {
  var itemsList = this;

  console.log("items list: ", items)
  itemsList.items = items;
}

})();