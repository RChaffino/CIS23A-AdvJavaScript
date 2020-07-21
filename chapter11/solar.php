<?php
$WeatherSource = "https://api.openweathermap.org/data/2.5/onecall?"
	. "lat=" . $_GET["lat"] 
	. "&lon=" . $_GET["lng"] 
	. "&exclude=minutely,hourly" 
	. "&appid=3c023ae6f83867dd4549eb5a5237307e";
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>