//server/routes/routes.js
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var EventDetail = require('../../models/EventDetail');
var Activity = require('../../models/Activity');
var Company = require('../../models/Company');

router.get('/', function(req, res){
  res.render('index')
});

router.route('/insert')
.post(function(req,res,next) {
EventDetail.create(req.body,function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})

router.route('/insertActivity')
.post(function(req,res,next) {
Activity.create(req.body,function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})

router.route('/insertCompany')
.post(function(req,res,next) {
Company.create(req.body,function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
})

router.route('/companies')
.get( function(req, res, next) {
  Company.find(function (err, cmpny) {
    if (err) return next(err);
    res.json(cmpny);
  });
});

router.route('/activities')
.get( function(req, res, next) {
  Activity.find(function (err, act) {
    if (err) return next(err);
    res.json(act);
  });
});

/* GET SINGLE company BY ID */
router.get('/company/:id', function(req, res, next) {
  Company.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* GET SINGLE Activity BY ID */
router.get('/activity/:id', function(req, res, next) {
  Activity.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE Activity */
router.delete('/devent/:id', function(req, res, next) {
  EventDetail.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE BOOK */
router.put('/uevent/:id', function(req, res, next) {
  EventDetail.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;