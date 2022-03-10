import mongoose from 'mongoose'
const TrackerSchema = new mongoose.Schema({
  player_name: {
    type: String,
    trim: true,
    required: 'Player name is required'
  },
  exercise: {
    type: Array,
    trim: true,
    required: 'Category is required'
  },
  amount: {
      type: Number,
      required: 'Amount is required'
  },
  incurred_on: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String,
    trim: true
  }
})

export default mongoose.model('Tracker', TrackerSchema)