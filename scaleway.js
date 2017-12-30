var jobs = require('./jobs');
var async = require('async');
var uuid = require('node-uuid');

var scw = module.exports = {};

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

scw.servers = function(data, cb) {
	var name = 'provider.scaleway.servers';
	var job = jobs.create(name, data || {});
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
};

scw.state = function(data, cb) {
	console.log('state changed ', {
		id : data.id,
		from : data.from,
		to : data.to
	});
	return cb && cb();
	var name = 'provider.scaleway.servers.state';
	var job = jobs.create(name, data || {});
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
};

scw.created = function(data, cb) {
	console.log('created ', data.id)

	return cb && cb();
	var name = 'provider.scaleway.servers.state';
	var job = jobs.create(name, data || {});
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
};
scw.exec = function(data, cb) {
	var name = 'provider.scaleway.exec';
	var job = jobs.create(name, data || {});
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
};
scw.execAll = function(data, cb) {
	var name = 'provider.scaleway.exec.all';
	var job = jobs.create(name, data || {});
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
};
scw.tasks = function(data, cb) {
	var name = 'provider.scaleway.tasks';
	var job = jobs.create(name, data || {});
	job.on('complete', onComplete(cb));
	job.on('failed', onError(cb));
	job.save(onError(cb));
	return job;
};
scw.action = {
	start : function(data, cb) {
		var name = 'provider.scaleway.action.start';
		var job = jobs.create(name, data || {});
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	},
	restart : function(data, cb) {
		var name = 'provider.scaleway.action.restart';
		var job = jobs.create(name, data || {});
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	},
	stop : function(data, cb) {
		var name = 'provider.scaleway.action.stop';
		var job = jobs.create(name, data || {});
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	},
	remove : function(data, cb) {
		var name = 'provider.scaleway.action.remove';
		var job = jobs.create(name, data || {});
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	}
};
scw.spawn = {
	port : function(data, cb) {
		var name = 'provider.scaleway.create.port';
		var job = jobs.create(name, data || {});
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	},
	create : function(data, cb) {
		var name = 'provider.scaleway.create';
		var job = jobs.create(name, data || {});
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	}
};
