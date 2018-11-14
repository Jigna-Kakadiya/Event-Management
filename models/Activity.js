//models/Activity.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var activitySchema = new Schema({
  actName: String
});
module.exports = mongoose.model('Activity', activitySchema);