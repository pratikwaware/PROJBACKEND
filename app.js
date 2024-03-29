require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//my coutes
const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const categoryRoutes = require("./routes/category");
const productRoutes = require("./routes/product");
const orderRoutes = require("./routes/order");
const paymentBRoutes = require("./routes/paymentBRoutes");
// mongoose.connect("mongodb://localhost:27017/test", { useNewUrlParser: true });
// mongodb+srv://pratikwaware:pratikwaware@cluster0.mnsck.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
// DB connection
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch(() => {
    console.log("DB got lost");
  });

// middleware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// My Routes
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", orderRoutes);
app.use("/api", paymentBRoutes);
app.get("/", (req, res) => {
  res.send("backend on");
});

//PORT

const port = process.env.PORT || 8000;

//strating a server

app.listen(port, () => {
  console.log(`app is running at ${port}`);
});
