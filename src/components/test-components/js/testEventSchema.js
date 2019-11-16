const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testEventSchema = new Schema({
  title: String,
  description: String
});

const TestEvents = mongoose.model('TestEvents', testEventSchema);
module.exports = TestEvents; 