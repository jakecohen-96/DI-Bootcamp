const express = require('express');
const pool = require('./config/db');
const app = express();
const PORT = 5000;

app.use(express.json());