//models/Company.js
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var companySchema = new Schema({
  cmpnyName: String
});
module.exports = mongoose.model('Company', companySchema);