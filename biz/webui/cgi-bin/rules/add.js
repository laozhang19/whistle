var rules = require('../../lib/rules');

module.exports = function(req, res) {
  rules.add(req.body.name, req.body.value);
  res.json({ec: 0, em: 'success'});
};