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
    'dns.query',
    /*
     *Router methods
     */
    'router.add.url',
    'router.add.host',
    'router.add.tls',
    'router.info',
    'router.remove.url',
    'router.remove.host',
    'router.remove.tls',
    /*
     *Fleet methods
     */
    'fleet.container.stop',
    'fleet.container.start',
    'fleet.allocate.resources',
    'fleet.app.deploy',
    'fleet.app.scale',
    'fleet.container.start',
    'fleet.container.stop',
    'fleet.container.restart',
    'fleet.container.move',
    'fleet.deploy',
    'fleet.scale',
    'fleet.node.get',
]

methods.forEach(function (method) {

    let methods = method.split('.')

    function fn(data) {
        return new Promise(function (resolve, reject) {
            var job = jobs.create(method, data);
            job.on('complete', resolve);
            job.on('failed', reject);
            job.save(function (err) {
                if (err) {
                    reject(err)
                }
            });
        })
    }

    switch (methods.length) {
        case 1:
            if (!module.exports[methods[0]]) {
                module.exports[methods[0]] = {}
            }
            module.exports[methods[0]] = fn
            break;
        case 2:
            if (!module.exports[methods[0]]) {
                module.exports[methods[0]] = {}
            }
            if (!module.exports[methods[0]][methods[1]]) {
                module.exports[methods[0]][methods[1]] = {}
            }

            module.exports[methods[0]][methods[1]] = fn
            break;
        case 3:
            if (!module.exports[methods[0]]) {
                module.exports[methods[0]] = {}
            }
            if (!module.exports[methods[0]][methods[1]]) {
                module.exports[methods[0]][methods[1]] = {}
            }
            if (!module.exports[methods[0]][methods[1]][methods[2]]) {
                module.exports[methods[0]][methods[1]][methods[2]] = {}
            }
            module.exports[methods[0]][methods[1]][methods[2]] = fn
            break;
        case 4:
            if (!module.exports[methods[0]]) {
                module.exports[methods[0]] = {}
            }
            if (!module.exports[methods[0]][methods[1]]) {
                module.exports[methods[0]][methods[1]] = {}
            }
            if (!module.exports[methods[0]][methods[1]][methods[2]]) {
                module.exports[methods[0]][methods[1]][methods[2]] = {}
            }
            if (!module.exports[methods[0]][methods[1]][methods[2]][methods[3]]) {
                module.exports[methods[0]][methods[1]][methods[2]][methods[3]] = {}
            }
            module.exports[methods[0]][methods[1]][methods[2]][methods[3]] = fn
            break;
        default:
            module.exports[methods[0]] = fn
    }
})
