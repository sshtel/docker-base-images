const express = require('express')
const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
  console.log('received request GET /')
  console.log(req.rawHeaders)
  const ip = req.headers['cf-connecting-ip'] || req.headers['x-forwarded-for'] || req.socket.remoteAddress
  console.log(ip)
  res.send('Hello World from BusyBox Custom')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
