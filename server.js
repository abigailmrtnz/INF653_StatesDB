require('dotenv').config(); //stays at top
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors');
const corsOptions = require('./config/corsOptions');
const {logger} = require('./middleware/logEvents');
const {errorHandler} = require('./middleware/errorHandler');
const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const PORT = process.env.port || 3500;

//Connect to MongoDB
connectDB();

//Custom middleware logger
app.use(logger);

//Cross Origin Resource Sharing
app.use(cors(corsOptions));

app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use('/',express.static(path.join(__dirname, '/public')));

//Root and states routes
app.use('/', require('./routes/root'));
app.use('/states', require('./routes/api/states'));

//Routes
app.all( '*', (req,res) => { 
    res.status(404)
    if(req.accepts('html')){
        res.sendFile(path.join(__dirname, 'views','404.html'));
    }else if(req.accepts('json')){
            res.json({error: '404 Not Found'});
    } else { res.type('text').send('404 Not Found')}
    
});

app.use(errorHandler);

//Mongoose connect
mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`server running on port ${PORT}`));
});