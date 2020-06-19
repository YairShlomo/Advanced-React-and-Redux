


// Main starting point of the application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
const router = require('./router');
const mongoose = require('mongoose');
const cors = require('cors');

// DB Setup

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

// Database Name
const dbName = 'auth';

// Connection URL
const mongoDb = 'mongodb://localhost/'+dbName;

mongoose.connect(mongoDb);
var db = mongoose.connection;
db.dbName = dbName
//console.log(db)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
mongoose.connection.on('connected', ()=>{
  console.log('MongoDB connected at port 27017'+db.dbName);
});

// App Setup
app.use(morgan('combined'));
app.use(cors());
app.use(bodyParser.json({ type: '*/*' }));
router(app);

// Server Setup
const port = process.env.PORT || 3090;
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);