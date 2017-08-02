app.controller('MainController', ['$scope','$http' ,function($scope,$http) {
    $scope.text = 'Krakow';
    $scope.info = null;
    $scope.test = 0;
	$scope.url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + $scope.text + '&mode=json&units=metric&cnt=7&appid=7015bb43823c67a8dbab603344842aa8';
	$scope.do = false;

	$http.get($scope.url) 
            .success(function(data) { 
              //return data;
              $scope.info = data;
              $scope.test = $scope.info.list.length;
               $scope.myDataSource = {
                chart: {
                    caption: "Weather during next 7 days",
                    numberSuffix: " C"              
                },
                data: []
              }

		      for (var i = 0; i < $scope.test; i++) {
		       	$scope.myDataSource.data[i]= {
		       		label: $scope.info.list[i].dt*1000 | data  ,
		       		value: $scope.info.list[i].temp.day
		       	}
      		 }
      		 $scope.do = true;
      		console.log($scope.myDataSource);
            }) 
            .error(function(err) { 
              return err; 
            }); 

    $scope.submit = function() {
        if ($scope.text) {
        	$scope.url = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' + $scope.text + '&mode=json&units=metric&cnt=7&appid=7015bb43823c67a8dbab603344842aa8';
        	 $http.get($scope.url) 
            .success(function(data) { 
              //return data;
              $scope.info = data;
              $scope.test = $scope.info.list.length;
              $scope.do = false;
              for (var i = 0; i < $scope.test; i++) {
		       	$scope.myDataSource.data[i]= {
		       		label: $scope.info.list[i].dt*1000  ,
		       		value: $scope.info.list[i].temp.day
		       	}
      		 }
      		 $scope.do = true;
            }) 
            .error(function(err) {
              return err; 
            
            }); 
        }
      };

     



}]);