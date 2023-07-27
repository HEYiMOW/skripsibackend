const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const { getAllNews, tambahData } = require('./controllers/NewsControllers')

const { Login } = require('./controllers/UserController')
//const db = require('./config/db.local.config'); //Connect to database local
const db = require('./config/db.config'); //Connect to database railway

const prefix = '/v1/api/';
app.get(prefix + 'news', getAllNews);
app.post(prefix + 'add', tambahData);

//app.get(prefix + 'bimbel/:kecamatan', getBimbelByKecamatan);

app.post(prefix+ 'login', Login)

db.authenticate()
.then(() => console.log('Database connected'))
.catch((err) => console.log('error'));

app.get('/', (req, res) => {
    res.send('Ok');
  });
  
app.listen(5000 || process.env.PORT, () => {
   console.log('Server Started');
});