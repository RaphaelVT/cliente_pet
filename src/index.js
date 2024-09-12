const express = require("express")
const app = express()
const port = 5000

const cliente_router = require("./router/cliente.js")
const pet_router = require("./router/pet.js")


app.use(express.json())

// cliente
app.use("/cliente", cliente_router)

//pet
app.use("/pet", pet_router)



app.listen(port, () => console.log("Servidor escutando na porta " + port))