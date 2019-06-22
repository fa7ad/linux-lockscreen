'use strict';
var path = require('path');
var test = require('ava');
var lockscreen = require('./');

test(function (t) {
	//t.plan(4);

	var orignalImagePath;

	lockscreen.get(function (err, imagePath) {
		orignalImagePath = imagePath;

		lockscreen.set('fixture.jpg', function (err) {
			t.assert(!err, err, '1');

			lockscreen.get(function (err, imagePath) {
				t.assert(!err, err, '2');
				t.assert(imagePath === path.resolve('fixture.jpg'), '3');

				lockscreen.set(orignalImagePath, function (err) {
					t.assert(!err, err, '4');
				});
			});
		});
	});
});
