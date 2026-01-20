// User Model
// models/User.model.js

const mongoose = require('mongoose');
console.log('User Schema Loaded...');
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});
module.exports = mongoose.model('User', UserSchema);
