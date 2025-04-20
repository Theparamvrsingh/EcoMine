const express = require('express');
const serverless = require('serverless-http');
const app = express();

// Import your existing Express app configuration
require('../main.js');

// Export the serverless function
module.exports.handler = serverless(app); 