const moongoose = require("mongoose");
const Schema = mongoose.Schema;

//Define our model
const userSchema = new Schema({
  email: {type: String, unique:true, lowercase: true },
  password: String,
});

//create the model class
const modelClass = mongoose.model('user', userSchema);
//Export the model
module.exports = modelClass;