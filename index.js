/*
 *Setup Kue jobs/eevents
 */
var jobs = require('./jobs');
var events = require('./events');


module.exports = {
    events: events,
    jobs: jobs
};

const methods = [
    /*
     *DNS methods
     */
    'dns.init',
    'dns.add',
    'dns.remove',
    'dns.clean',
    'dns.query'
    /*
     *
     */
]

methods.forEach(function (method) {
    module.exports[method] = function (data) {
        return new Promise(function (resolve, reject) {
            var job = jobs.create(method, data);
            job.on('complete', resolve);
            job.on('failed', reject);
            job.save(reject);
        })
    }
})
