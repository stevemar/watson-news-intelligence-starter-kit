const bodyParser = require('body-parser');

const discovery = require('../services/service-manager').get('watson-discovery');
const queryBuilder = require('../../query-builder');

const NEWS_ENVIRONMENT_ID = 'system';
const NEWS_COLLECTION_ID = 'news';

Object.assign(discovery._options.qs, { aggregation: `[${queryBuilder.aggregations.join(',')}]` })

module.exports = function(app) {
  app.use(bodyParser.json());

  // setup query endpoint for news
  app.post('/api/query', (req, res, next) => {
    const params = Object.assign({}, queryBuilder.build(req.body), {
      environment_id: NEWS_ENVIRONMENT_ID,
      collection_id: NEWS_COLLECTION_ID
    });

    delete discovery._options.jar; // clear the cookies before querying discovery
    discovery.query(params, (err, response) => {
      if (err) {
        const error = {
          code: err.code || 500,
          error: err.error || err.message,
        };
        return res.status(error.code).json(error);
      } else {
        return res.json(response);
      }
    });
  });
}