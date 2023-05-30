const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

mongoose.connect('mongodb://localhost:27017/usersdb',
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  }
);

app.use(express.json());