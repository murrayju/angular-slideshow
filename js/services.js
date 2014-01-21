define(['slides'], function (slides) {
	var factory = {};

	factory.MessageService = ['$timeout', function ($timeout) {
		var svc = {
			autoDismiss: 5000,
			messages: []
		};

		svc.add = function (err, txt) {
			var msg = {
				error: err,
				txt: txt,
				dismissed: false
			};
			svc.messages.push(msg);

			if (svc.autoDismiss) {
				$timeout(function () {
					msg.dismissed = true;
				}, svc.autoDismiss);
			}
		};

		svc.error = function (txt) {
			svc.add(true, txt);
		};

		svc.success = function (txt) {
			svc.add(false, txt);
		};

		svc.clear = function () {
			svc.messages.length = 0;
		};

		svc.last = function () {
			if (svc.messages.length === 0) { return false; }

			var msg = svc.messages[svc.messages.length - 1];
			return msg.dismissed ? false : msg;
		};

		return svc;
	}];

	factory.Slides = ['$state', function ($state) {
		// build references for easier navigation
		var processLevel = function (root, parent) {
			var i = 0;
			var prev = parent;
			angular.forEach(root, function (n) {
				n.parent = parent;

				if (!parent) {
					n.path = i.toString();
				} else {
					n.path = parent.path.concat('.').concat(i.toString());
				}
				i++;

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
			for (var i=0; i<path.length; i++) {
				var num = parseInt(path[i]);
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
