const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const bookingRouter = require('./routers/booking');

dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/booking', bookingRouter);


app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}/api/booking`);
});