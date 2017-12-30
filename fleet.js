var nconf = require('nconf');
var jobs = require('./jobs');
var async = require('async');
var uuid = require('node-uuid');

var fleet = module.exports = {};

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

fleet.container = {
	stop : function(data, cb) {
		var name = 'fleet.container.stop';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	},
	start : function(data, cb) {
		var name = 'fleet.container.start';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	}
};
fleet.allocate = {
	resources : function(data, cb) {
		var name = 'fleet.allocate.resources';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	}
};
fleet.app = {
	deploy : function(data, cb) {
		var name = 'fleet.app.deploy';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	},
	scale : function(data, cb) {
		var name = 'fleet.app.scale';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	}
};

fleet.start = function(data, cb) {
	var name = 'fleet.container.start';
	var job = jobs.create(name, data);
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
};

fleet.stop = function(data, cb) {
	var name = 'fleet.container.stop';
	var job = jobs.create(name, data);
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
};

fleet.restart = function(data, cb) {
	var name = 'fleet.container.restart';
	var job = jobs.create(name, data);
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
};

fleet.move = function(data, cb) {
	var name = 'fleet.container.move';
	var job = jobs.create(name, data);
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
};

fleet.deploy = function(data, cb) {
	var name = 'fleet.deploy';
	var job = jobs.create(name, data);
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
};

fleet.scale = function(data, cb) {
	var name = 'fleet.scale';
	var job = jobs.create(name, data);
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
};

fleet.getNode = function(data, cb) {
	var name = 'fleet.node.get';
	var job = jobs.create(name, data);
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
};
