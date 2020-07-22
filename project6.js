/*    
 *	Author:		Rich Chaffino
 *	Instructor:	Dr. Mandyam
 *	Class:		CIS 023A - Advanced JavaScript
 *	Date:   	21 July 2020
 *	Project:	Number Sorter
 *	Filename:	project6.js
 */

"use strict";

function sortNumbers(evt) {
	if (evt.preventDefault) {
		evt.preventDefault();
	} else {
		evt.returnValue = false;
	}

	var file = document.querySelector("#userFile").files[0];
	var reader = new FileReader();
	if (reader.addEventListener) {
		reader.addEventListener("load", 
			function(){
				var tb = document.getElementById("textbox");
				tb.value = reader.result;
				separator(filterText(tb.value));
			}, false);
	}
	if (reader.attachEvent) {
		reader.attachEvent("onload", 
			function(){
				var tb = document.getElementById("textbox");
				tb.value = reader.result;
				separator(filterText(tb.value));
			});
	}
	reader.readAsText(file);
}

function sortAndSave(evt) {
	if (evt.preventDefault) {
		evt.preventDefault();
	} else {
		evt.returnValue = false;
	}

	var file = document.querySelector("#userFile").files[0];
	var reader = new FileReader();
	if (reader.addEventListener) {
		reader.addEventListener("load", 
			function(){
				var tb = document.getElementById("textbox");
				tb.value = reader.result;
				var arr = filterText(tb.value);
				var arr2 = separator(arr);
				exportFiles(arr2);
			}, false);
	}
	if (reader.attachEvent) {
		reader.attachEvent("onload", 
			function(){
				var tb = document.getElementById("textbox");
				tb.value = reader.result;
				var arr = filterText(tb.value);
				var arr2 = separator(arr);
				exportFiles(arr2);
			});
	}
	reader.readAsText(file);
}

function filterText(str) {
	var t = str.replace(/\s/g, " ");
	t = t.replace(/[^-0-9]/g, " ");
	t = t.replace(/- /g, " ");
	t = t.replace(/-/g, " -");
	t = t.replace(/\s+/g, " ");
	var arr = t.split(" ");
	return arr;
}

function separator(arr) {
	var even = [];
	var odd = [];
	var r = [];
	var count = 0;
	for (var i = 0; i < arr.length; i++) {
		if (count < 20 && !(arr[i] == "" || isNaN(arr[i]))) {
			arr[i] *= 1;
			if (arr[i] % 2 == 0) {
				even.push(arr[i]);
				count++;
			} else {
				odd.push(arr[i]);
				count++;
			}
		}
	}
	r = [even,odd];
	document.getElementById("even").innerHTML = "Even: " + r[0];
	document.getElementById("odd").innerHTML = "Odd: " + r[1];
	return r;
}

function exportFiles(arr) {
	var blobEven = new Blob([arr[0].join(" ")],
		{type: "text/plain;charset=utf-8"});
	var blobOdd = new Blob([arr[1].join(" ")],
		{type: "text/plain;charset=utf-8"});
	saveAs(blobEven, "even.txt");
	saveAs(blobOdd, "odd.txt");
}

var sortBtn = document.getElementById("sortButton");
var sortSaveBtn = document.getElementById("sortSaveButton");

if (sortBtn.addEventListener) {
	sortBtn.addEventListener("click", sortNumbers, false);
	sortSaveBtn.addEventListener("click", sortAndSave, false);
}
if (sortBtn.attachEvent) {
	sortBtn.attachEvent("onclick", sortNumbers);
	sortSaveBtn.attachEvent("onclick", sortAndSave);
}

