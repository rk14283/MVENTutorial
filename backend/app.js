//YTTqtmcvWcBj6WH4
//mongodb+srv://rohankale67:<password>@cluster0.vwyhaxd.mongodb.net/?retryWrites=true&w=majority

const express = require("express");
const { MongoClient, ServerApiVersion } = require("mongodb");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//create our express app
const app = express();

// Handle CORS + middleware
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Methods",
    "GET,HEAD,OPTIONS,POST,PUT,DELETE"
  ); // If using .fetch and not axios
  res.header(
    "Access-Control-Allow-Headers",
    "auth-token, Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// database stuff
//the uri creates a test database
const uri =
  "mongodb+srv://rohankale67:YTTqtmcvWcBj6WH4@cluster0.vwyhaxd.mongodb.net/myOwnDatabase?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => console.log(err));

app.use(bodyParser.json());

// routes
app.get("/", (res, req) => {
  res.send("yay home page");
});

const TodosRoute = require("./routes/Todos");
app.use("/todos", TodosRoute);

//start server
app.listen(3000, () => {
  console.log("listening to 3000");
});
