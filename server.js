var express = require('express')
var app = express()

const options = {
  "root": "./"
}

app.get('/', function (req, res) {
  res.sendFile('./index.html', options )
})
app.get('/:file', function (req, res) {
  console.log(req.params)
  res.sendFile(req.params.file, options)
})


app.listen(3001, () =>{
  console.log('listening port 3001 ...')
})