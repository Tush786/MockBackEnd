const mongoose=require('mongoose');
require('dotenv').config()
const connection = mongoose.connect(`mongodb+srv://tusharsapate34:czTPNNWcw4QbQ8ax@cluster0.h2hreve.mongodb.net/mock`)


module.exports={connection};