define([],	function () {
	var ctrl = {};

	ctrl.SlidesCtrl = ['$scope', '$aside', 'SlideSvc', 'MessageService', function ($scope, $aside, SlideSvc, msg) {
		$scope.msg = msg;

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
		}

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

	ctrl.SlideMenuCtrl = ['$scope', 'Slides', function ($scope, Slides) {
		$scope.slides = Slides;
	}];

	ctrl.P1Ctrl = ['$scope', function ($scope) {
		$scope.data = 'Check out this data binding!';
	}];

	return ctrl;
});