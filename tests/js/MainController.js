app.controller('MainController',['$scope',function($scope){
    $scope.list = ["call free","mail dufeutrell","go joney go"];
    $scope.addItem = function(){
        $scope.list.push($scope.addToDo);
    }
}])