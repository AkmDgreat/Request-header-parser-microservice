const { StatusCodes } = require("http-status-codes")
const ip = require("ip")

const systemInfo = (req, res) => {
    //const ipAddress = req.socket.remoteAddress // ::1
    const ipAddress = req.ip // ::1
    //const ipAddress = ip.address()

    const language = req.headers["accept-language"]
    //console.log(language) // undefined, cuz I am testing in postman, not browser 
    //u would need to add "accept-language: someValue" in postman/headers

    const software = req.headers["user-agent"]

    res.status(StatusCodes.OK).json({
        ipaddress: ipAddress,
        language: language,
        software: software
    })
} 

module.exports = systemInfo