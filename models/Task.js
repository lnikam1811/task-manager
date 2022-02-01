const mongoose = require("mongoose")

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: [20, "No more then 20 characters"],
    trim: true,
  },
  completed: { type: Boolean, default: false },
})

module.exports = mongoose.model("Task", TaskSchema)
