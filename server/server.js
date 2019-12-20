const express = require('express');
const compression = require('compression');
const cors = require('cors');
const config = require('./config');
const mongoose = require('mongoose');
const helmet = require('helmet');
const sanitize = require('mongo-sanitize');
const loadTestData = require('./testData');
const path = require('path');

const app = express();

//import routes
const itemRoutes = require('./routes/item.routes');

app.use(compression());
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', itemRoutes);

app.use((req, res, next) => {
    sanitize(req.body);
    next();
});

//serve static files from react app
app.use(express.static(path.join(__dirname, '/../client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

//connects backend code with the database
mongoose.connect(config.DB, { useNewUrlParser: true});
let db = mongoose.connection;

db.once('open', () => {
   console.log('Connected to the database');
   loadTestData(); 
});

db.on('error', (err) => console.log('Error' + err));

app.listen(config.PORT, function() {    
    console.log('Server is running on port: ', config.PORT);
});