var mongoose = require("mongoose");


var articleSchema = new mongoose.Schema({
   title: String,
   content: String
});
    
module.exports = mongoose.model("Article",articleSchema);