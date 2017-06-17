angular.module('ui.bootstrap.demo', ['ngAnimate', 'ngSanitize', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('PaginationDemoCtrl', function ($scope, $log) {
  $scope.totalItems = 64;
  $scope.currentPage = 4;

  $scope.setPage = function (pageNo) {
    $scope.currentPage = pageNo;
  };

  $scope.pageChanged = function() {
    $log.log('Page changed to: ' + $scope.currentPage);
  };
// This is actually gonna work as the data per page
  $scope.noOfRecord = 20;
  $scope.maxSize = 5;
// This is the total no of items available
// if this exceeds noOfRecord say 21 then the another |1|2| will come else it will be like |1| only
  $scope.bigTotalItems = 20;
  $scope.bigCurrentPage = 1;
});
//http://jsfiddle.net/g30rg3/p5a1zLrz/
/* $scope.ngGridFIx = function() {
*   window.dispatchEvent(new Event('resize'));
*  }
*
* <tab select="ngGridFix()"> ... </tab>
*
*
*
*/
