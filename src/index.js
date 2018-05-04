const { app } = require('./app/express')
const routes = require('./routes/routes')
const port = 3500

app.set('port', process.env.PORT || port)

app.use('/validator', routes)

app.listen(port, () => console.log('escuchando en el puerto ' + port))
