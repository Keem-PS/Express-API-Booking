const db = require('../db');
const express = require('express');
const app = express();

exports.getBookingById = async (req, res) => {
    const id = Number(req.params.id);
    const sql = 'SELECT * FROM hotels WHERE hotels_id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error occurred while retrieving hotels.', error: err });
        } else {
            if (result.length === 0) {
                res.status(404).json({ message: 'hotels not found.' });
            } else {
                res.status(200).json({ message: 'hotels retrieved successfully.', data: result });
            }
        }
    });
};

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


