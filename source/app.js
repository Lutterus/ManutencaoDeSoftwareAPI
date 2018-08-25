const express = require('express')
const routes = require('./routes/routes.js')

const app = express()
const PORT = process.env.PORT || 8000


app.get('/', (req, res) => {
 // res.send('Everything seems fine here')


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'test',
  password : 'sDeX695SpDGpLXWq',
  database : 'milhas'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
});

connection.end();
})

app.get('/api/getPrograms/:userId', routes.getPrograms)

app.listen(PORT, () => {
  console.log(`Started application at port: ${PORT}`)
})

