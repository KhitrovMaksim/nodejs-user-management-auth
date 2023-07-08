const { Schema, model } = require('mongoose');

const RoleModel = new Schema({
  role: { type: String, unique: true, enum: ['user', 'moderator', 'admin'] },
});

module.exports = model('Role', RoleModel);
