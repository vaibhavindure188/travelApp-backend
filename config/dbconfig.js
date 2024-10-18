const mongoose = require("mongoose");

const connectDB = async () => {
  // mongodb://localhost:27017/travelAPPP
  try {
    await mongoose.connect("mongodb+srv://indurevaibhav9:6TY1GeR4jnRB2aX8@travel-app-cluster.ubvcw.mongodb.net/?retryWrites=true&w=majority&appName=travel-app-cluster", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
