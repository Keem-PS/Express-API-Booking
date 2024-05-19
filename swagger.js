const swaggerJSdoc = require('swagger-jsdoc');

const options = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Booking API',
            version: '1.0.0',
            description: 'API สำหรับ Booking ',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
    },
    apis: ['./routers/booking.js'], 
};

const swaggerSpec = swaggerJSdoc(options);
module.exports = swaggerSpec;