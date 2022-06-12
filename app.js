const express   = require('express')
  const routes      = require('./api/routes')
  const user        = require('./api/routes/user')
  const page        = require('./api/routes/page')
  const client = require('./controllers/user')

const app       = express()
const mysql     = require('mysql')
const port      = 3000

let bodyParser  =require("body-parser");
const { db } = require('./config/database')

// let dbconnect = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'root',
//     password : '',
//     database : 'db-egil'
//   });

//   dbconnect.connect();

// global.db = dbconnect;
 

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

// all environments
app.set('views','./views')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'))

// const db = require('./config/database')
try {
  async function start(){
    await db.authenticate();
  }
  console.log("connected...")
} catch (error) {
  console.log(error)  
}
// Request Method

app.get('/',routes.index)
app.get('/account',page.account)
app.get('/cart',page.cart)
app.get('/product',page.product)
app.get('/payment',page.payment)
app.get('/main',page.main)

app.post('/register',client.register)
app.post('/login',client.login)
//app.get('/', (req, res) => {res.send('Welcome to e-doeit :)');});


// Listen Port
app.listen(port, () =>
    console.info(`Listening on port ${port}`)
)