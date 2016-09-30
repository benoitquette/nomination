const express = require('express');
const mongoose = require('mongoose');
const Stuff = mongoose.model('Stuff');
const router = express.Router();

router.route('/stuffs')
  .put((req, res, next) => {
    let stuff = new Stuff();
    stuff.name = req.body.name;
    stuff.save(err => {
      if (err) return res.status(500).send(err);
      return res.json(stuff);
    });
  });

router.route('/stuffs/:id')
  .get((req, res, next) => {
    Stuff.findById(req.params.id, (err, results) => {
      if (err) return res.status(500).send(err);
      return res.json(results);
    });
  });

module.exports = router;
