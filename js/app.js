var app = angular.module('myShoppingList', []);
app.controller('myController', getProducts);
function getProducts($scope){
	$scope.products = ['Chocolate', 'Roses', 'Flowers'];
	$scope.errorText = "";
	$scope.addItem = function(){
		if(!$scope.newItem){
			return;
		}
		if($scope.products.indexOf($scope.newItem) == -1){
				$scope.products.push($scope.newItem);
				$scope.errorText = "El producto ha sido registrado correctamente."
				$scope.newItem = "";
		}
		else {
				$scope.errorText = "El producto ya se encuentra registrado."
		}
	}
	$scope.removeItem = function(x){
		$scope.errorText ="";
		var indexItem = $scope.products.indexOf(x);
		$scope.products.splice(indexItem, 1);
	}
};

