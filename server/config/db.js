const mongoose = require("mongoose");
require("dotenv").config();

const connection = process.env.mongodburl;

module.exports = { connection };
