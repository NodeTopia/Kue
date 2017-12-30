var jobs = require('./jobs');
var async = require('async');
var uuid = require('node-uuid');

var addons = module.exports = {};

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

addons.redis = {
	bind : function(data, cb) {
		var name = 'addons.redis.bind';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	},
	unbind : function(data, cb) {
		var name = 'addons.redis.unbind';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	}
};

addons.mongodb = {
	bind : function(data, cb) {
		var name = 'addons.mongodb.bind';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	},
	unbind : function(data, cb) {
		var name = 'addons.mongodb.unbind';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	}
};

addons.replica = {
	bind : function(data, cb) {
		var name = 'addons.replica.bind';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	},
	unbind : function(data, cb) {
		var name = 'addons.replica.unbind';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	}
};

addons.shard = {
	bind : function(data, cb) {
		var name = 'addons.shard.bind';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	},
	unbind : function(data, cb) {
		var name = 'addons.shard.unbind';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	}
};

addons.backup = {
	create : function(data, cb) {
		var name = 'addons.mongodump';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	},
	restore : function(data, cb) {
		var name = 'addons.mongorestore';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	}
};

addons.s3 = {
	bind : function(data, cb) {
		var name = 'addons.s3.bind';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	},
	unbind : function(data, cb) {
		var name = 'addons.s3.unbind';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	}
};


addons.mysql = {
	bind : function(data, cb) {
		var name = 'addons.mysql.bind';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	},
	unbind : function(data, cb) {
		var name = 'addons.mysql.unbind';
		var job = jobs.create(name, data);
		job.on('complete', onComplete(cb));
		job.on('failed', onError(cb));
		job.save(onError(cb));
		return job;
	}
};
