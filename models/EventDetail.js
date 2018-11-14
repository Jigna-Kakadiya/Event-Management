//models/EventDetail.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eDetailsSchema = new Schema({
  sname: String,
  activity: String,
  company: String,
  start: String,
  end: Number
});
module.exports = mongoose.model('EventDetail', eDetailsSchema);