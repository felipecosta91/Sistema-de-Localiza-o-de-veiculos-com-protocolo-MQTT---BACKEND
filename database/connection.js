require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.DB_URL)
  .then((err) => {
    if (err)
      console.log(`erro ao iniciar o banco de dados!${err}`)
    console.log('Connectado ao banco de dados!')
  })
  