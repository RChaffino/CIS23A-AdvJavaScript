/*    
 *	Author:		Rich Chaffino
 *	Instructor:	Dr. Mandyam
 *	Class:		CIS 023A - Advanced JavaScript
 *	Date:   	27 June 2020
 *	Project:	Projects
 *	Filename:	index.js
 */

"use scrict";

/* global variables */


/* constructor function */


/* create event listeners and populate image elements */
function createEventListeners() {
	var obj = document.getElementById("header");
	if (obj.addEventListener) {
		obj.addEventListener("click", function(){
			window.location.href = "index.htm";
		}, false);
	} else if (obj.attachEvent) {
		obj.attachEvent("onclick", function(){
			window.location.href = "index.htm";
		});
	}
/*
	var obj = document.getElementById("objID");
	if (obj.addEventListener) {
		obj.addEventListener("click", func, false);
	} else if (obj.attachEvent) {
		obj.attachEvent("onclick", func);
	}
*/
}

function setupPage() {
	createEventListeners();
}

/* run setupPage() function when page finishes loading */
if (window.addEventListener) {
	window.addEventListener("load", setupPage, false); 
} else if (window.attachEvent)  {
	window.attachEvent("onload", setupPage);
}