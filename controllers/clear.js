var db = require("../models");
//this clears the database removing the objects and returning the json.

module.exports = {
  clearDB: function(req, res) {
    db.Headline.remove({})
      .then(function() {
        return db.Note.remove({});
      })
      .then(function() {
        res.json({ ok: true });
      });
  }
};
