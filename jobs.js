var nconf = require('nconf');
var kue = require('kue');

module.exports = kue.createQueue(nconf.get('kue'));
module.exports.client.on('error', function(err) {
	console.error(err);
});
module.exports.on('error', function(err) {
	console.error(err);
});
module.exports.kue = kue;
module.exports.watchStuckJobs(1000);

/*
 *
 */
module.exports.promote(500, 50);
setInterval(function() {
	kue.Job.rangeByState('complete', 0, 1, 'asc', function(err, jobs) {

	});
}, 30 * 1000);
return;
module.exports.on('job enqueue', function(id, type) {
	kue.Job.get(id, function(err, job) {
		if (err)
			return;
		console.log('job %s got queued %s', id, job.type);
	});
}).on('job complete', function(id, result) {
	kue.Job.get(id, function(err, job) {
		if (err)
			return;
		console.log('job %s complete %s', id, job.type);
	});
}).on('job failed', function(id, result) {
	kue.Job.get(id, function(err, job) {
		if (err)
			return;
		console.log('job %s failed %s', id, job.type);
	});
});
