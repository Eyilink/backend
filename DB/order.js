const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    OrderName: {
        type: String,
        required: [true, "Please provide a Name!"],
        unique: [true, "Name Exist"],
      },
    
     OrderQuantity: {
        type: String,
        required: [true, "Please provide a quantity!"],
        unique: false,
      },
      OrderAdress: {
        type: String,
        required: [true, "Please provide an adress!"],
        unique: false,
      }
  })

  module.exports = mongoose.model("Orders", OrderSchema);