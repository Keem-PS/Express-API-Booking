const express = require('express');
const router = express.Router();
const { getBookingById, getAllBookings } = require('../controllers/booking');



router.get('/:id', getBookingById);

/**
 * @swagger
 * /api/booking/:
 *   get:
 *     summary: Get all hotels
 *     responses:
 *       200:
 *         description: A list of hotels
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                   name:
 *                     type: string
 */

router.get('/', getAllBookings);
// router.post('/', insertBooking);
// router.put('/:id', updateBooking);
// router.delete('/:id', deleteBooking);
// router.get('/search/:keyword', searchBookings);

module.exports = router;