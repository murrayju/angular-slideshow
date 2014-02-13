/*jslint browser:true */
/*global define*/

// This is where you define the tree of slides
define([], function () {
    'use strict';

	return [
		{title: 'The First Page', url: 'slides/p1.html'},
		{title: 'The Second Page', url: 'slides/p2.html', children: [
			{title: 'A child page', url: 'slides/p2.1.html'}
		]}
	];
});
