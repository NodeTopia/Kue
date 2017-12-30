
/*
 *Setup Kue jobs/eevents
 */

module.exports = {
	events : require('./events'),
	jobs : require('./jobs'),
	fleet : require('./fleet'),
	router : require('./router'),
	dns : require('./dns'),
	le : require('./le'),
	scw : require('./scaleway'),
	addon : require('./addons')
};
