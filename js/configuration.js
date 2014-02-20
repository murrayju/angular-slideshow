/*jslint browser:true */
/*global define*/

// This is the main angularjs module configuration
define([], function () {
    'use strict';
    
	return ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise("/slide/0");

		$stateProvider
			.state('slide', {
				url: '/slide/{path:[0-9]+(?:\\.[0-9]+)?}',
				template: '<div class="full-frame" ng-include="slideUrl"></div>',
				controller: ['$scope', 'SlideSvc', function ($scope, SlideSvc) {

					if (!SlideSvc.currentSlide()) {
						SlideSvc.firstSlide.go();
					}

					$scope.slideUrl = SlideSvc.currentSlide().url;
				}]
			})
            .state('slide.demo1', {
                url: "/alabama",
                templateUrl: "demo1.html-8"
            })
            .state('slide.demo2', {
                url: "/alaska",
                templateUrl: "demo2.html-8"
            });
	}];
});