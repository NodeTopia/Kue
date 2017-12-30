var nconf = require('nconf');
var jobs = require('./jobs');
var async = require('async');
var uuid = require('node-uuid');

var router = module.exports = {};

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

router.add = {
	url : function(data, cb) {
		var name = 'router.add.url';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	},
	host : function(data, cb) {
		var name = 'router.add.host';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	},
	tls : function(data, cb) {
		var name = 'router.add.tls';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	}
};
router.info = function(data, cb) {
	var name = 'router.info';
	var job = jobs.create(name, data);
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
};
router.remove = {
	url : function(data, cb) {
		var name = 'router.remove.url';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	},
	host : function(data, cb) {
		var name = 'router.remove.host';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	},
	tls : function(data, cb) {
		var name = 'router.remove.tls';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	}
};
