var app = angular.module('editApp', []);

app.directive('makeEditable', function(){
  return {
    restrict: 'A',
    transclude: true,
    templateUrl: './js/templates/editableContent.html',
    scope: true
  }
});

app.controller('editableController', ['$scope', function($scope){
  $scope.isEditable = false;
  $scope.test="hi";

  $scope.clickEdit = function(){
    console.log('testing');
    if($scope.isEditable == false){
      $scope.isEditable = true;
    } else {
      $scope.isEditable = false;
    }
  };
}]);
