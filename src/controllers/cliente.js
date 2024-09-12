const Cliente = require("../models/cliente.js")

const store =  (req, res) => {
    Cliente.create(req.body)
    res.json() 
}

const index =  (req, res) => {
    const content = Cliente.find(req.query).exec();
    res.json(content)
}

const show =  (req, res) => {
    const content = Cliente.findById(req.params.id).exec();
    res.json(content);
}

const update =  (req, res) => {
    Cliente.findByIdAndUpdate(req.params.id, req.body).exec()
    res.json()
}

const destroy =  (req, res) => {
    Cliente.findByIdAndDelete(req.params.id).exec()
    res.json()
}

module.exports = {
    store,
    index,
    show,
    update,
    destroy
}