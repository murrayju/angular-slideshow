/*jslint browser:true, vars:true */
/*global define*/

define(['slides', 'angular'], function (slides, angular) {
    'use strict';
    
	var factory = {};

	factory.Slides = ['$state', function ($state) {
		// build references for easier navigation
		var processLevel = function (root, parent) {
			var i = 0, prev = parent;
			angular.forEach(root, function (n) {
				n.parent = parent;

				if (!parent) {
					n.path = i.toString();
				} else {
					n.path = parent.path.concat('.').concat(i.toString());
				}
				i += 1;

				n.go = function () {
					$state.go('slide', {path: n.path});
				};

				n.prev = prev;
				if (prev) { prev.next = n; }
				prev = n;

				if (n.children) {
					processLevel(n.children, n);
					prev = n.children[n.children.length - 1];
				}
			});
		};
		processLevel(slides, false);
		return slides;
	}];

	factory.SlideSvc = ['Slides', '$stateParams', function (Slides, $stateParams) {
		var svc = {};

		svc.firstSlide = Slides[0];

		svc.currentSlide = function () {
			if (!$stateParams.path) { return false; }
			var path = $stateParams.path.split('.');
			var slide = false;
			var children = Slides;
            var num, i;
			for (i = 0; i < path.length; i += 1) {
				num = parseInt(path[i], 10);
				if (!children || (num > children.length)) {
					return false;
				}

				slide = children[num];
				children = slide.children;
			}

			return slide;
		};

		svc.prevSlide = function () {
			return svc.currentSlide().prev;
		};

		svc.nextSlide = function () {
			return svc.currentSlide().next;
		};

		return svc;
	}];

	return factory;
});
