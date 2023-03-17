const  mongoose = require('mongoose');
const  Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
    name: String,
    email: {type:String, unique: true},
    password: String,
});

//creating user model

const UserModel = mongoose.model('users',UserSchema )

module.exports = UserModel;