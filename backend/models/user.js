const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://shivanibhadauria37_db_user:iNYyHuoJsJfQmukK@users.lfagjsy.mongodb.net/?appName=users`)


const userScheema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
})

module.exports = mongoose.model('User', userScheema);