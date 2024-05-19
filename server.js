const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const bookingRouter = require('./routers/booking');

const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');


dotenv.config();

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.use('/api/booking', bookingRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(port, () => {
    console.log(`Server listening on http://localhost:${port}/api/booking`);
});