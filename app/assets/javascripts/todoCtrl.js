(function(){
  "use Strict"
  angular.module("app").controller("todoCtrl",
    function($scope){
      $scope.task_list = [];

      $scope.addTask = function(task){
        if (task){
          $scope.task_list.push(task);
          $scope.newTask = null;
        }
      }

      $scope.toggleState = function(task){
        var index = $scope.task_list.indexOf(task);
        if (index > -1) {
          $scope.task_list.splice(index, 1);
        }
      }

      window.$scope = $scope;
  });
})();
