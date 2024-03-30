const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
})

app.use(bodyParser.json());
app.use(cors());

//GET Hotels
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM hotels';
    db.query(sql, (err, result) => {
        if(err) {
            res.status(500).json({ message: 'Error occurred whule retriveing hotels.', error: err});
        }else {
            res.status(200).json(result);
        }
 })
});

// //Create hotels
// app.post('/hotels', (req, res) => {
//     consts
// })


app.listen(3000, () => console.log('Server Start'));