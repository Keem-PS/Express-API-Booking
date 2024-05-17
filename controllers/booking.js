const db = require('../db');
const express = require('express');
const { swaggerSpec, swaggerUi } = require('../swagger');

const app = express();
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


/**
 * @swagger
 * /:
 * get:
 * summary: Get all products
 * description: Get all products
 * responses:
 * 200:
 * description: A list of products
 * content:
 * application/json:
 * schema:
 * type: array
 * items:
 * $ref: '#/components/schemas/Product'
 * 500:
 * description: Some error happened
 */

exports.getAllBookings = async (req, res) => {
    const sql = 'SELECT * FROM hotels';
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error occurred while retrieving booking.', error: err });
        } else {
            res.status(200).json(result);
        }
    });
};

