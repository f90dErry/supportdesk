const asyncHandler = require('express-async-handler')

const User = require('../models/userModels')
const Ticket = require('../models/ticketModel')

// @desc   Get user ticket
// @route  GET /api/ticket
// @access Private
const getTickets = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'getTickets' })
})

// @desc   Create new ticket
// @route  POST /api/ticket
// @access Private
const createTicket = asyncHandler(async (req, res) => {
  res.status(200).json({ message: 'createTicket' })
})

module.exports = {
  getTickets,
  createTicket,
}
