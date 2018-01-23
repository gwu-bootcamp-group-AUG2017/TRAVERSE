const db = require("../models");

// Defining methods for the articleController
module.exports = {
  findAll: function(req, res) {
    db.Places
      .find(req.query)
      .sort({ date: -1 })
      .then(dbPlace => res.json(dbPlace))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Places
      .findById(req.params.id)
     .then(dbPlace => res.json(dbPlace))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    const place = {
      name: req.body.name,
      rating: req.body.rating,
      website: req.body.website,
      url: req.body.url,
      review: req.body.review
    };

    db.Places
      .create(place)
      .then(dbPlace => res.json(dbPlace))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Article
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Article
      .findById({ _id: req.params.id })
      .then(dbArticle => dbArticle.remove())
      .then(dbArticle => res.json(dbArticle))
      .catch(err => res.status(422).json(err));
  }
};
