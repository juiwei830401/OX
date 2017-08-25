var app = angular.module('myOX', []);
app.controller('OX', function ($rootScope, $scope, $controller) {
	//初始
		$scope.init = function(){
			$scope.A1 = 'A1';
			$scope.A2 = 'A2';
			$scope.A3 = 'A3';
			$scope.B1 = 'B1';
			$scope.B2 = 'B2';
			$scope.B3 = 'B3';
			$scope.C1 = 'C1';
			$scope.C2 = 'C2';
			$scope.C3 = 'C3';
			$scope.OX = 'O';
			$scope.result = '';
			$scope.lock = false;
		}
		$scope.init();
		
		//點擊
		$scope.go = function(val){
			if($scope.lock){
				return;
			}
			//判斷位置
			if(val ==  $scope.A1){
				$scope.A1 = $scope.OX;
			}
			else if(val == $scope.A2){
				$scope.A2 = $scope.OX;
			}
			else if(val == $scope.A3){
				$scope.A3 = $scope.OX;
			}
			else if(val == $scope.B1){
				$scope.B1 = $scope.OX;
			}
			else if(val == $scope.B2){
				$scope.B2 = $scope.OX;
			}
			else if(val == $scope.B3){
				$scope.B3 = $scope.OX;
			}
			else if(val == $scope.C1){
				$scope.C1 = $scope.OX;
			}
			else if(val == $scope.C2){
				$scope.C2 = $scope.OX;
			}
			else if(val == $scope.C3){
				$scope.C3 = $scope.OX;
			}
			else{
				return;
			}
			//判斷連線
			if( ($scope.A1 == $scope.A2 && $scope.A2 == $scope.A3) ||
				($scope.B1 == $scope.B2 && $scope.B2 == $scope.B3) ||
				($scope.C1 == $scope.C2 && $scope.C2 == $scope.C3) ||
				($scope.A1 == $scope.B1 && $scope.B1 == $scope.C1) ||
				($scope.A2 == $scope.B2 && $scope.B2 == $scope.C2) ||
				($scope.A3 == $scope.B3 && $scope.B3 == $scope.C3) ||
				($scope.A1 == $scope.B2 && $scope.B2 == $scope.C3) ||
				($scope.A3 == $scope.B2 && $scope.B2 == $scope.C1)){
				$scope.result = $scope.OX + ' WIN';
				$scope.lock = true;
			}
			//判斷和局
			else if(!($scope.A1 == 'A1' || $scope.A2 == 'A2' || $scope.A3 == 'A3' ||
				 $scope.B1 == 'B1' || $scope.B2 == 'B2' || $scope.B3 == 'B3' ||
				 $scope.C1 == 'C1' || $scope.C2 == 'C2' || $scope.C3 == 'C3')){
				$scope.result = 'DRAW';
				$scope.lock = true;
			}
			//OX調換
			if($scope.OX == 'O'){
				$scope.OX = 'X';
			}else if($scope.OX == 'X'){
				$scope.OX = 'O';
			}
		}
});
