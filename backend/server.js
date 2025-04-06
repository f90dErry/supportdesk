const express = require('express')
const dotenv = require('dotenv').config()

const PORT = process.env.PORT || 8000

const app = express()
app.get('/', (req, res) => {
  res.status.json({ message: 'Welcome to the support desk API' })
})

app.listen(PORT, console.log(`Server Started on ${PORT}`))
