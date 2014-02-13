/*jslint browser:true */
/*global define*/

// This is the main angularjs module configuration
define([], function () {
    'use strict';
    
	return ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/slide/0");

		$stateProvider
			.state('slide', {
				url: '/slide/{path}',
				template: '<div class="full-frame" ng-include="slideUrl"></div>',
				controller: ['$scope', 'SlideSvc', function ($scope, SlideSvc) {

					if (!SlideSvc.currentSlide()) {
						SlideSvc.firstSlide.go();
					}

					$scope.slideUrl = SlideSvc.currentSlide().url;
				}]
			});
	}];
});