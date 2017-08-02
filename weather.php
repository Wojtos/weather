<!DOCTYPE html>
<html>
<head>
	<title>Pogoda</title>
	<style type="text/css">
		h1{text-align: center;}
		h2{color: red;}
		.nice{background-color: grey;}
	</style>
	<script src="fusioncharts.js"></script>
	<script src="//ajax.googleapis.com/ajax/libs/angularjs/1.3.5/angular.min.js"></script>
	<!--<script src="https://ajax.googleapis.com/ajax/libs/angular_material/1.1.0-rc.5/angular-material.min.js"></script>-->
	<script src="angular-fusioncharts.min.js"></script>

</head>
<body ng-app="WeatherApp">
<div ng-controller="MainController">
	<form ng-submit="submit()">
	  Enter text and hit enter:
	  <input type="text" ng-model="text" name="text" />
	  <input type="submit" id="submit" value="Submit" />

	</form>
	<h1>Weather in {{ info.city.name }}</h1>
	<div ng-repeat="day in info.list" class="nice">
		<h2>Dzien: {{day.dt*1000 | date }}</h2>
		<p>Main description: {{day.weather[0].main}}</p>
		<p>Other description: {{day.weather[0].description}}</p>
		<p>Średnia temperatura: {{day.temp.day}}&deg;C</p>
		<p>Minimalna temperatura: {{day.temp.min}}&deg;C</p>
		<p>Maksymalna temperatura: {{day.temp.max}}&deg;C</p>
		<p>Cisnienie: {{day.pressure}} hPa</p>
		<p>Wilgotnosc: {{day.humidity}}%

		</p>
	</div>
	<div ng-if="do" fusioncharts
       width="600"
       height="400"
       type="line"
       dataSource="{{myDataSource}}" >
    </div>
</div>
<script src ="app.js"></script>
<!--<script src="service.js"></script>-->
<script src="MainController.js"></script>

</form>
</body>
</html>