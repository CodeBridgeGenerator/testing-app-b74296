const { TestRunHistory } = require('./testRunHistory.class');
const createModel = require('../../models/testRunHistory.model');
const hooks = require('./testRunHistory.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate'),
    whitelist: ["$populate"],
    multi: ["create"],
  };

  // Initialize our service with any options it requires
  app.use('/testRunHistory', new TestRunHistory(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('testRunHistory');

  service.hooks(hooks);
};