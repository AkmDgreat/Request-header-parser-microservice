const express = require("express")
const router = express.Router()
const systemInfo = require("../Controllers/systemInfo")

router.route("/api/whoami").get(systemInfo)

module.exports = router