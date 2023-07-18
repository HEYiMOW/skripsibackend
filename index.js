const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const { getAllNews } = require('./controllers/NewsControllers')

const { tambahData } = require('./controllers/NewsControllers')

// const db = require('./config/db.local.config'); //Connect to database local
const db = require('./config/db.config'); //Connect to database railway

// // yang membantu proses upload file
const imagekit = require('./lib/imagekit');
const upload = require('./middleware/uploader');


const prefix = '/v1/api/';
app.get(prefix + 'news', getAllNews);
app.post(prefix + 'coffee/add', tambahData);

//app.get(prefix + 'bimbel/:kecamatan', getBimbelByKecamatan);

// //db.authenticate()
//   //.then(() => console.log('Database connected'))
//   //.catch((err) => console.log('error'));

//   app.post(prefix +'coffee/add', upload.single('image'), async (req, res) => {
//     // request body => req.body.name
//     const {coffeeshop_name, desc, address} = req.body
//   const file = req.file

//   console.log(file)

//   // untuk dapat extension file
//   // image.jpg => jpg itu extension nya
//   const split = file.originalname.split('.');
//   const ext = split[split.length - 1];

//   // proses upload file ke imagekit
//   const img = await imagekit.upload({
//       file: file.buffer,
//       fileName: `IMG-${Date.now()}.${ext}`
//   })

  
//   try {
//     let listcoffee = await coffee2s.create({
//       coffeeshop_name:coffeeshop_name,
//       desc:desc,
//       address:address,
//       img:img.url,
//     })
    
//     res.status(200).json({
//       success: true,
//       message: "Add Succesfully",
      
//     });
//   } catch (error) {
//     console.log(error);
//   }
// })

app.get('/', (req, res) => {
    res.send('Ok');
  });
  
app.listen(5000 || process.env.PORT, () => {
   console.log('Server Started');
});