const express = require('express');
const router = express.Router();
const { getBookingById, getAllBookings, insertBooking, updateBooking, deleteBooking, searchBookings } = require('../controllers/booking');

/**
 * @swagger
 * /api/booking/{id}:
 *   get:
 *     summary: Retrieve a single hotel by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The hotel ID
 *     responses:
 *       200:
 *         description: A single hotel
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 hotels_id:
 *                   type: integer
 *                 hotels_name:
 *                   type: string
 *                 hotels_price:
 *                   type: number
 *                 hotels_url:
 *                   type: string
 *                 hotels_address:
 *                   type: string
 *                 hotels_scoreReview:
 *                   type: number
 *       404:
 *         description: Hotel not found
 */

router.get('/:id', getBookingById);

/**
 * @swagger
 * /api/booking/:
 *   get:
 *     summary: Get all hotels
 *     responses:
 *       200:
 *         description: A single hotel
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 hotels_id:
 *                   type: integer
 *                 hotels_name:
 *                   type: string
 *                 hotels_price:
 *                   type: number
 *                 hotels_url:
 *                   type: string
 *                 hotels_address:
 *                   type: string
 *                 hotels_scoreReview:
 *                   type: number
 *       404:
 *         description: Hotel not found
 */

router.get('/', getAllBookings);

/**
 * @swagger
 * /api/booking/:
 *   post:
 *     summary: Create a new hotel
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                 hotels_id:
 *                   type: integer
 *                 hotels_name:
 *                   type: string
 *                 hotels_price:
 *                   type: number
 *                 hotels_url:
 *                   type: string
 *                 hotels_address:
 *                   type: string
 *                 hotels_scoreReview:
 *                   type: number
 *     responses:
 *       201:
 *         description: The created hotel
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 hotels_id:
 *                   type: integer
 *                 hotels_name:
 *                   type: string
 *                 hotels_price:
 *                   type: number
 *                 hotels_url:
 *                   type: string
 *                 hotels_address:
 *                   type: string
 *                 hotels_scoreReview:
 *                   type: number
 */
router.post('/', insertBooking);

/**
 * @swagger
 * /api/booking/{id}:
 *   put:
 *     summary: Update a hotel by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The hotel ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *                 hotels_id:
 *                   type: integer
 *                 hotels_name:
 *                   type: string
 *                 hotels_price:
 *                   type: number
 *                 hotels_url:
 *                   type: string
 *                 hotels_address:
 *                   type: string
 *                 hotels_scoreReview:
 *                   type: number
 *     responses:
 *       200:
 *         description: The updated hotel
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 hotels_id:
 *                   type: integer
 *                 hotels_name:
 *                   type: string
 *                 hotels_price:
 *                   type: number
 *                 hotels_url:
 *                   type: string
 *                 hotels_address:
 *                   type: string
 *                 hotels_scoreReview:
 *                   type: number
 *       404:
 *         description: Hotel not found
 */
router.put('/:id', updateBooking);

/**
 * @swagger
 * /api/booking/{id}:
 *   delete:
 *     summary: Delete a hotel by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: The hotel ID
 *     responses:
 *       204:
 *         description: No content
 *       404:
 *         description: Hotel not found
 */
router.delete('/:id', deleteBooking);

/**
 * @swagger
 * /api/booking/search/{keyword}:
 *   get:
 *     summary: Search hotels by keyword
 *     parameters:
 *       - in: path
 *         name: keyword
 *         required: true
 *         schema:
 *           type: string
 *         description: The keyword to search for in hotel names
 *     responses:
 *       200:
 *         description: A list of matching hotels
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   hotels_id:
 *                      type: integer
 *                   hotels_name:
 *                      type: string
 *                   hotels_price:
 *                      type: number
 *                   hotels_url:
 *                      type: string
 *                   hotels_address:
 *                      type: string
 *                   hotels_scoreReview:
 *                      type: number
 *       500:
 *         description: Error occurred while retrieving hotels
 */
router.get('/search/:keyword', searchBookings);

module.exports = router;