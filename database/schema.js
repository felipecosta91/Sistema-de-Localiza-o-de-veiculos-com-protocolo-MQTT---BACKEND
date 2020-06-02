const mongoose = require('mongoose')

const schema = mongoose.Schema({
  busId:String,
  lat: String,
  lng: String,
  dateNew: {
    type: Date,
    default: Date.now,
  }
})


module.exports = mongoose.model('sch',schema)