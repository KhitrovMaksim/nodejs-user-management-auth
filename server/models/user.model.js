const { Schema, model } = require('mongoose');

const UserModel = new Schema(
  {
    nickname: { type: String, unique: true, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    password: { type: String, required: true },
    created_at: { type: Date, required: true, default: Date.now },
    updated_at: { type: Date, required: true, default: Date.now },
    deleted_at: { type: Date, required: false, default: null },
  },
  { collection: 'users' },
);

module.exports = model('User', UserModel);
