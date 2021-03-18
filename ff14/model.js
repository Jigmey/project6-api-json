let mongoose = require('mongoose')

let ff14Schema = new mongoose.Schema({
  Results: [
    {
        Data: {
            ID: Number,
            Name: String,
            Name_de: String,
            Name_en: String,
            Name_fr: String,
            Name_ja: String
        },
        Text: String
    }
  ]
})

let FF14 = mongoose.model('ff14', ff14Schema)

module.exports = FF14