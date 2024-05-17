const express = require('express');
const router = express.Router();
const { getAllBookings } = require('../controllers/booking');

//router.get('/:id', getBookingById);
router.get('/', getAllBookings);
// router.post('/', insertBooking);
// router.put('/:id', updateBooking);
// router.delete('/:id', deleteBooking);
// router.get('/search/:keyword', searchBookings);

module.exports = router;