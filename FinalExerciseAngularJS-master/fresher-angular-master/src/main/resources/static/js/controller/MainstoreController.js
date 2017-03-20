

app.controller("MainstoreController",function($scope,mainStoreService,$http){

	$scope.getAll = function(){
		mainStoreService.getProducts().then(function(data){
			$scope.products = data;
			console.log ('Get Data Success!!!' + $scope.products)
		})
			
	
	}
	
	$scope.add = function(index,id){
		mainStoreService.getProductIA(id).then(function(data){
			
			$scope.products[index].available ++;
		})

	}
	
	$scope.sub = function(index,id){
		if ($scope.products[index].available > 0) {
		mainStoreService.getProductDA(id).then(function(data){
			
			
				$scope.products[index].available --; 
			
		})
		}
	}
	
	   $scope.addProduct = function(){
	    	
		   mainStoreService.addProduct($scope.product).then(function(data){
	    		console.log('đã gửi data thành công'); 
	    		name : $scope.product.name;
	    		model : $scope.product.model;
	    		year : $scope.product.year;
	    		price : $scope.product.price;
	    		producer : $scope.product.producer;
	    		available : $scope.product.available;
	    	})
	    	
	  };
	  
	  $scope.removeProduct = function(index, id) {
		  mainStoreService.removeProduct(id).then(function(index){
			
			  $scope.products.splice(index, 1);
		  })
		
		};
		
});
app.directive('myDir',function(){
	return {
		templateUrl: "/fresherangular/views/store/temp.html"
	}
})