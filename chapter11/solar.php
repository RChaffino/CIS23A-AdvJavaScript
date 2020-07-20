<?php
$WeatherSource = "https://api.openweathermap.org/data/2.5/forecast/daily?" . 
$_GET["lat"] . "," . $_GET["lon"] ;
header("Content-Type: application/json");
header("Cache-Control: no-cache");
readfile($WeatherSource);
?>