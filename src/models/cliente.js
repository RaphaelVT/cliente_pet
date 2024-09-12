const db = require("../config/db.js");
const Schema = db.Schema;

const ClienteSchema = new Schema({
    nome: {
        type: String,
        required: true
    },
    endereco: {
        type: String, //Schema.Types.Mixed,
        required: true
    },
    numero_casa: {
        type: String,
        required: true
    },
    telefone:{
        type:[(String)]
    }

});

const Cliente = db.model("Cliente", ClienteSchema);

module.exports = Cliente;