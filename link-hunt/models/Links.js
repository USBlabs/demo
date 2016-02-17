var mongoose = require('mongoose');

var LinkSchema = new mongoose.Schema({
  title: String,
  link: String,
  upvotes: {type: Number, default: 0},
});

mongoose.model('Link', LinkSchema);