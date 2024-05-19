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


exports.insertBooking = async (req, res) => {
    const hotel = req.body;
    const sql = 'INSERT INTO hotels (hotels_id, hotels_name, hotels_price, hotels_url, hotels_address, hotels_scoreReview) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(sql, [hotel.hotels_id, hotel.hotels_name, hotel.hotels_price, hotel.hotels_url, hotel.hotels_address, hotel.hotels_scoreReview ], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error occurred while inserting hotel.', error: err });
        } else {
            res.status(201).json({ message: 'Hotel inserted successfully.' });
        }
    });
};

exports.updateBooking = async (req, res) => {
    const id = Number(req.params.id);
    const hotel = req.body;
    const sql = 'UPDATE hotels SET hotels_name = ?, hotels_price = ?, hotels_url = ?, hotels_address = ?, hotels_scoreReview = ? WHERE hotels_id = ?';
    db.query(sql, [hotel.hotels_name, hotel.hotels_price, hotel.hotels_url, hotel.hotels_address, hotel.hotels_scoreReview, id], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error occurred while updating hotel.', error: err });
        } else {
            res.status(200).json({ message: 'Hotel updated successfully.' });
        }
    });
};

exports.deleteBooking = async (req, res) => {
    const id = Number(req.params.id);
    const sql = 'DELETE FROM hotels WHERE hotels_id = ?';
    db.query(sql, [id], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error occurred while deleting hotel.', error: err });
        } else {
            res.status(200).json({ message: 'Hotel deleted successfully.' });
        }
    });
};

exports.searchBookings = async (req, res) => {
    const keyword = req.params.keyword;
    const sql = 'SELECT * FROM hotels WHERE hotels_name LIKE ?';
    db.query(sql, [`%${keyword}%`], (err, result) => {
        if (err) {
            res.status(500).json({ message: 'Error occurred while retrieving hotels.', error: err });
        } else {
            res.status(200).json(result);
        }
    });
};


