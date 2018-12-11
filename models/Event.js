//models/EventDetail.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var eDetailsSchema = new Schema({
  activity: String,
  company: String,
  start: Date,
  end: Date
});
module.exports = mongoose.model('Event', eDetailsSchema);