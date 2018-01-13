const db = require("../models");

// Defining methods for the articleController
module.exports = {
  findAll: function(req, res) {
    db.Location
      .find(req.query)
      .sort({ location: -1 })
      .then(dbLocation => res.json(dbLocation))
      .catch(err => res.status(422).json(err));
  },
 
  create: function(req, res) {
    const article = {
      _id: req.body._id,
      title: req.body.headline.main,
      url: req.body.web_url
    };
    db.Article
      .create(article)
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  }
};