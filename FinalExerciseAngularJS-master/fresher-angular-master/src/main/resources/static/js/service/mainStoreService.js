var app = angular.module('myApp');

app.factory('mainStoreService', function($http) {

  var getProducts = function() {
    return $http.get("http://localhost:9000/fresherangular/product/list")
      .then(function(response) {
        return response.data;
      });
  };
  
  var getProductIA = function(id) {
	    return $http.get("http://localhost:9000/fresherangular/product/increase/" + id)
	      .then(function(response) {
	        return response.data;
	      });
	  };
	  
	  var getProductDA = function(id) {
		    return $http.get("http://localhost:9000/fresherangular/product/decrease/" + id)
		      .then(function(response) {
		        return response.data;
		      });
		  };
		  
		  var getProduct = function(id) {
			    return $http.get("http://localhost:9000/fresherangular/product/get/" + id)
			      .then(function(response) {
			        return response.data;
			      });
			  };
			  var removeProduct = function(id) {
				  console.log('đã xóa ! ');
					return $http.post("http://localhost:9000/fresherangular/product/remove", id).then(function(response) {
						return response.data;
						
					})};
			  
		  var addProduct = function(data) {
			  console.log('đã gửi data thành công trên web service'); 
			    return $http.post("http://localhost:9000/fresherangular/product/add",data)
			      .then(function(response) {
			        return response.data;
			      });
			  };
  return {
	  getProducts : getProducts,
	  getProductIA : getProductIA,
	  getProductDA : getProductDA,
	  addProduct : addProduct,
	  getProduct : getProduct,
	  removeProduct : removeProduct,
  }
  
  
});