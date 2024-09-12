const express = require("express")
const cep_endereco = require("../middlewares/cep_endereco.js")
const router = express.Router()

const cliente_controller = require("../controllers/cliente.js")

router.post("/", cep_endereco, cliente_controller.store)
router.get("/", cliente_controller.index)
router.get("/:id", cliente_controller.show)
router.put("/:id", cliente_controller.update)
router.delete("/:id", cliente_controller.destroy)

module.exports = router