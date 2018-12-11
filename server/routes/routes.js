//server/routes/routes.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var Event = require('../../models/Event');
var Activity = require('../../models/Activity');
var Company = require('../../models/Company');

router.get('/', function(req, res){
  res.render('index')
});

/* Create Event */
router.route('/insert')
.post(function(req,res,next) {
Event.create(req.body,function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})

/* Create Activity */
router.route('/insertActivity')
.post(function(req,res,next) {
Activity.create(req.body,function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})

/* Create Company */
router.route('/insertCompany')
.post(function(req,res,next) {
Company.create(req.body,function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})

/* Get all Events */
router.route('/events')
.get( function(req, res, next) {
  Event.find(function (err, evnts) {
    if (err) return next(err);
    res.json(evnts);
  });
});

/* Get all Companies */
router.route('/companies')
.get( function(req, res, next) {
  Company.find(function (err, cmpny) {
    if (err) return next(err);
    res.json(cmpny);
  });
});

/* Get all Activities */
router.route('/activities')
.get( function(req, res, next) {
  Activity.find(function (err, act) {
    if (err) return next(err);
    res.json(act);
  });
});

/* GET SINGLE company BY Name */
router.route('/company/:company')
.get( function(req, res, next) {
  Event.find({company : req.params.company},function (err, cmpny) {
    if (err) return next(err);
    res.json(cmpny);
  });
});

/* GET SINGLE Event BY ID */
router.route('/showEvent/:id')
.get( function(req, res, next) {
  Event.findById(req.params.id,function (err, cmpny) {
    if (err) return next(err);
    res.json(cmpny);
  });
});

/* DELETE Event */
router.delete('/devent/:id', function(req, res, next) {
  Event.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE Event */
router.put('/uevent/:id', function(req, res, next) {
  Event.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;