/*jslint browser:true */
/*global define*/

define(['angular'],	function (angular) {
    'use strict';
    
	var ctrl = {};

	ctrl.SlidesCtrl = ['$scope', '$aside', 'SlideSvc', function ($scope, $aside, SlideSvc) {
		$scope.nextSlide = function () {
			var next = SlideSvc.nextSlide();
			if (next) {
				next.go();
			}
		};

		$scope.prevSlide = function () {
			var prev = SlideSvc.prevSlide();
			if (prev) {
				prev.go();
			}
		};

		$scope.hasPrev = function () {
			return SlideSvc.prevSlide();
		};

		$scope.hasNext = function () {
			return SlideSvc.nextSlide();
		};

		var menu = $aside({
			template: 'menu.html',
			placement: 'left',
			animation: 'animation-fadeAndSlideLeft',
			show: false
		});

		$scope.showMenu = function () {
			menu.$promise.then(function () {
				menu.show();
			});
		};

		// Use arrow keys to change slides
		angular.element('body').bind("keydown keypress", function (event) {
			if (event.keyCode === 37) {
				$scope.prevSlide();
				event.preventDefault();
			}

			if (event.keyCode === 39) {
				$scope.nextSlide();
				event.preventDefault();
			}
		});
	}];

	ctrl.SlideMenuCtrl = ['$scope', 'Slides', 'SlideSvc', function ($scope, Slides, SlideSvc) {
		$scope.slides = Slides;
        $scope.slideSvc = SlideSvc;
	}];

	ctrl.P1Ctrl = ['$scope', function ($scope) {
		$scope.data = 'Check out this data binding!';
	}];

	return ctrl;
});