const express = require('express')
const routes = require('./routes/routes.js')


const app = express()
const PORT = process.env.PORT || 8024

const qs = require('querystring');

var resultjason = [];
	
app.get('/', (req, res) => {
  res.send('Everything seems fine here')


var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'test',
  password : 'sDeX695SpDGpLXWq',
  database : 'milhas'
});
;

connection.connect();

  connection.query("SELECT * FROM conta", function (err, result, fields) {
    if (err) throw err;
	Object.keys(result).forEach(function(key) {

    var format = qs.parse(`login=${result[key].login};senha=${result[key].senha};cod_usario=${result[key].cod_usario};`, ';', '=')
    
    console.log(format)
    });
   
  });


connection.end();
})

app.get('/api/getPrograms/:userId', routes.getPrograms)

app.listen(PORT, () => {
  console.log(`Started application at port: ${PORT}`)
})

