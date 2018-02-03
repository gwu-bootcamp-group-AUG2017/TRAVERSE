const db = require("../models");

// Defining methods for the savedController
module.exports = {
  
// get data by user id
  findAll: function(req, res) {
    db.Places
      .find(req.query)
      .sort({ date: -1 })
      .then(dbPlace => res.json(dbPlace))
      .catch(err => res.status(422).json(err));
  },

// save place data from client to mongo db
  findById: function(req, res) {
    db.Places
      .find(req.query)
      .then(dbPlace => res.json(dbPlace))
      .catch(err => res.status(422).json(err));
  },
// load data for save
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
// now save data 
    db.Places
      .create(place)
      .then(dbPlace => res.json(dbPlace))
      .catch(err => res.status(422).json(err));
  },

// delete by id  
  remove: function(req, res) {
    db.Places
      .findById({ _id: req.params.id })
      .then(dbPlace => dbPlace.remove())
      .then(dbPlace => res.json(dbPlace))
      .catch(err => res.status(422).json(err));
  }
};