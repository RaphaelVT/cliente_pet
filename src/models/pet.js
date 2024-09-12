
const db = require("../config/db.js");
const Schema = db.Schema;

const PetSchema = new Schema({
    nome: {
        type: String,
        required: true
    }
});

const Pet = db.model("Pet", PetSchema);

module.exports = Pet;