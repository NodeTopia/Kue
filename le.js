var jobs = require('./jobs');
var async = require('async');
var uuid = require('node-uuid');

var le = module.exports = {};

function onComplete(cb) {
	return function(data) {
		cb && cb(null, data);
	};
}

function onError(cb) {
	return function(err) {
		if (err)
			cb && cb(err);
	};
}

le.dns = function(data, cb) {
	var name = 'le.dns';
	var job = jobs.create(name, data);
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
}; 