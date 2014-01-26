// define the dependencies with requirejs
requirejs.config({
	baseUrl: 'js',
	waitSeconds: 0,

	paths: {
		jquery: "../bower_components/jQuery/jquery.min",
		'jquery.bootstrap': "../bower_components/bootstrap/dist/js/bootstrap.min",
		angular: "../bower_components/angular/angular.min",
		'angular-animate': "../bower_components/angular-animate/angular-animate.min",
		'angular-strap': "../bower_components/angular-strap/dist/angular-strap.min",
		'angular-strap-tpl': "../bower_components/angular-strap/dist/angular-strap.tpl",
		'angular.ui.router': "../bower_components/angular-ui-router/release/angular-ui-router.min",
		fastclick: "../bower_components/fastclick/lib/fastclick"
	},

	shim: {
		angular: {
			deps: ['jquery'],
			exports: 'angular'
		},
		'angular-animate': ['angular'],
		'angular-strap': ['angular', 'angular-animate'],
		'angular-strap-tpl': ['angular-strap'],
		'angular.ui.router': ['angular'],
		'jquery.bootstrap': ['jquery']
	}
});

// This is the main application entry point
// bootstraps the angularjs app with the dom
requirejs(['angular', 'configuration', 'services', 'directives', 'controllers', 'fastclick', 'angular.ui.router', 'jquery.bootstrap', 'angular-strap-tpl'], function (angular, config, svc, dir, ctrl, fastclick) {
	angular.element().ready(function () {

		var mod = angular.module('MainAppModule', ['ui.router', 'ngAnimate', 'mgcrea.ngStrap'])
			.config(config)
			.factory(svc)
			.directive(dir)
			.controller(ctrl);

		angular.bootstrap(document, [mod.name]);
		fastclick.attach(document.body);
	});
});
