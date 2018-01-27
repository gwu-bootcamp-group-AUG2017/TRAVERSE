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
      uid: req.body.uid,
     city: req.body.city,
    type: req.body.type,
      name: req.body.name,
      rating: req.body.rating,
      website: req.body.website,
      url: req.body.url,
      review: req.body.review
    };

    db.Places
      .create(place)
      .then(dbPlace => res.json(dbPlace))
       .catch(console.log(place));
  },
  update: function(req, res) {
    db.Places
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbPlace => res.json(dbPlaces))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Places
      .findById({ _id: req.params.id })
      .then(dbPlace => dbPlace.remove())
      .then(dbPlace => res.json(dbPlace))
      .catch(err => res.status(422).json(err));
  }
};