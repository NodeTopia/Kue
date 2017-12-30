var jobs = require('./jobs');
var async = require('async');
var uuid = require('node-uuid');

var dns = module.exports = {};

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

dns.init = function(data, cb) {
	var name = 'dns.init';
	var job = jobs.create(name, data);
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
};

dns.add = function(data, cb) {
	var name = 'dns.add';
	var job = jobs.create(name, data);
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
};

dns.remove = function(data, cb) {
	var name = 'dns.remove';
	var job = jobs.create(name, data);
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
};

dns.clean = function(data, cb) {
	var name = 'dns.clean';
	var job = jobs.create(name, data);
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
};

dns.query = function(data, cb) {
	var name = 'dns.query';
	var job = jobs.create(name, data);
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
}; 