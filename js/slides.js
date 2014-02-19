/*jslint browser:true */
/*global define*/

// This is where you define the tree of slides
define([], function () {
    'use strict';

	return [
        {title: 'Title', url: 'slides/title.html'},
        {title: 'What is it?', url: 'slides/what.html'},
        {title: 'How does it work?', url: 'slides/how.html'},
        {title: 'A simple example', url: 'slides/helloWorld.html'},
        {title: 'Directives', url: 'slides/directives.html', children: [
            {title: 'ngBind', url: 'slides/directive.ngBind.html'},
            {title: 'ngClick', url: 'slides/directive.ngClick.html'},
            {title: 'ngRepeat', url: 'slides/directive.ngRepeat.html'},
            {title: 'ngHide, ngShow, ngIf', url: 'slides/directive.ngHide.html'},
            {title: 'Custom Directives', url: 'slides/directive.custom.html'}
        ]},
        {title: '$scope', url: 'slides/scope.html'},
        {title: 'Controllers', url: 'slides/controllers.html'},
        {title: 'Services', url: 'slides/services.html'},
        {title: 'Routing', url: 'slides/routing.html'},
        {title: 'Promises', url: 'slides/promises.html', children: [
            {title: '$http', url: 'slides/http.html'}
        ]},
        {title: 'Modules', url: 'slides/modules.html'},
        {title: 'Questions?', url: 'slides/end.html'}
	];
});
