<?php
$WeatherSource = "https://api.openweathermap.org/data/2.5/forecast/daily?cnt=7&appid=3c023ae6f83867dd4549eb5a5237307e" . 
$_GET["lat"] . "," . $_GET["lon"];
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>