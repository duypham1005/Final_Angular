app.controller("DetailController",function($scope,mainStoreService,$routeParams){
	
	$scope.id = $routeParams.id;
	mainStoreService.getProduct($scope.id).then(function(data){
  	  $scope.product = data;
    });
    
    
});
