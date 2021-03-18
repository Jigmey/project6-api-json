let FF14 = require('./model');

let controller = {
    create(request, response){
        let ff14 = request.body
        FF14
          .create(ff14)
          .then(ff14=> response.json(ff14))
      },
      readById(request, response){
        let id = request.params.id
        FF14
          .findById(id)
          .then(ff14s=> response.json(ff14s))
      },
      readAll(request, response){
        FF14
          .find({})
          .then(ff14s=> response.json(ff14s))
      },
      update(request, response) {
        let ff14 = request.body
        let id = request.params.id
        FF14
          .findByIdAndUpdate(id, ff14, {new: true})
          .then(ff14=> response.json(ff14))
    
      },
      destroy(request, response){
        let id = request.params.id
        FF14
          .findByIdAndDelete(id)
          .then(()=> response.json({ok: true}))
      }
}

module.exports = controller;