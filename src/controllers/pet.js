const Pet = require("../models/pet.js")

const store =  (req, res) => {
    Pet.create(req.body)
    res.json() 
}

const index =  (req, res) => {
    const content = Pet.find(req.query).exec();
    res.json(content)
}

const show =  (req, res) => {
    const content = Pet.findById(req.params.id).exec();
    res.json(content);
}

const update =  (req, res) => {
    Pet.findByIdAndUpdate(req.params.id, req.body).exec()
    res.json()
}

const destroy =  (req, res) => {
    Pet.findByIdAndDelete(req.params.id).exec()
    res.json()
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}