/*jslint browser:true */
/*global define*/

define([],	function () {
    'use strict';
    
	var dir = {};

	dir.centered = function () {
		return {
			restrict : "E",
			transclude : true,
			template : '<div class="angular-centered" ng-transclude></div>'
		};
	};

	return dir;
});