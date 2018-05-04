const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false}))
//parse application
app.use(bodyParser.json())

app.get('/', (request, response) => {
    response.setHeader('Content-Type', 'application/json');

    response.status(200).json({
      name: "Validador de CUI",
      sms:  "Servicio funcionando..."
    })

})

module.exports = {
    app
}
