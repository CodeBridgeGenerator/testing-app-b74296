const assert = require('assert');
const app = require('../../src/app');

describe('\'testRunHistory\' service', () => {
  it('registered the service', () => {
    const service = app.service('testRunHistory');

    assert.ok(service, 'Registered the service (testRunHistory)');
  });
});
