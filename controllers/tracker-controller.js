import Tracker from '../models/tracker-model'

//import mongoose from 'mongoose'

const create = async (req, res) => {
  try {
    const tracker = new Tracker(req.body)
    await tracker.save()
    return res.status(200).json({
      message: "Exercise recorded!"
    })
  } catch (err) {
    return res.status(400).json({
    })
  }
}


export default create
    