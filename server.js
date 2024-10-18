const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();
const hotelDataAddedToDBRouter = require("./routes/dataimport.router");
const categoryDataAddedToDBRouter = require("./routes/categoryimport.router");
const hotelRouter = require("./routes/hotel.router");
const categoryRouter = require("./routes/category.router");
const singleHoterRouter = require("./routes/singlehotel.router");
const authRouter = require("./routes/auth.router");
const wishlistRouter = require("./routes/wishlist.router");
const connectDB = require("./config/dbconfig");
const app = express();
app.use(express.json());
const path = require('path')
const _dirname = path.dirname("");
const buildpath = path.join(_dirname, "../travel-frontend/build");
app.use(express.static(buildpath));
app.use(cors({
  "origin" : "*"
}));

connectDB();
const PORT = 5000;

app.get("/", (req, res) => {
  res.send("Hello EveryOne");
});

app.use("/api/hoteldata", hotelDataAddedToDBRouter);
app.use("/api/categorydata", categoryDataAddedToDBRouter);
app.use("/api/hotels", hotelRouter);
app.use("/api/category", categoryRouter);
app.use("/api/hotels", singleHoterRouter);
app.use("/api/auth", authRouter);
app.use("/api/wishlist", wishlistRouter);

mongoose.connection.once("open", () => {
  console.log("Connected to DB");
  app.listen(5000 || PORT, () => {
    console.log("Server is Up and Running");
  });
});
