require('../db');
var mongoose = require( 'mongoose' );
var Todo     = mongoose.model( 'Todo' );

module.exports = function(app) {
  app.post('/todos', function (req, res){
    new Todo({
      id: Math.random().toString(36).substr(2, 9),
      item: req.body.item,
      completed: false,
      updated_at: Date.now()
    }).save(function (err, todo, count){
      if (err) {
        return err;
      }
      res.json(200, todo);
    });
  });
}