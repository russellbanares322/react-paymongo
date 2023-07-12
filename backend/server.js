require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();

const Xendit = require("xendit-node");
const x = new Xendit({
  secretKey: process.env.XENDIT_SECRET_KEY,
});

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
  next();
});
