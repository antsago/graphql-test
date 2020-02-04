const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  //public id
  id: {
    type: String,
    require: true,
    unique: true,
  },
  email: String,
  givenName: String,
  familyName: String,
}, { timestamps: { createdAt: 'created' } });

module.exports = mongoose.model('User', UserSchema);