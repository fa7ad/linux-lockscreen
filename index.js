'use strict';
var path = require('path');
var execFile = require('child_process').execFile;

exports.get = function(cb) {
	execFile('gsettings', [
		'get',
		'org.gnome.desktop.screensaver',
		'picture-uri'
	], function(err, stdout) {
		if (err) {
			cb(err);
			return;
		}

		// strip `file://` and surrounding quotes
		cb(null, stdout.trim().slice(8, -1));
	});
};

exports.set = function(imagePath, cb) {
	if (typeof imagePath !== 'string') {
		throw new Error('imagePath required');
	}

	cb = cb || function() {};

	execFile('gsettings', [
		'set',
		'org.gnome.desktop.screensaver',
		'picture-uri',
		'file://' + path.resolve(imagePath)
	], function(err) {
		cb(err);
	});
};
