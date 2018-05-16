import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser'; //allows to send data to DB through http

import routes from './api/routes/hotels';
import contactRoutes from './api/routes/contacts';
import bookingRoutes from './api/routes/bookings';
import roomRoutes from './api/routes/rooms';
import locationRoutes from './api/routes/location';
import userRoutes from './api/routes/userListRoutes';

const app = express();
const PORT = 3000; 

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/swshotels', {
    useMongoCLient: true
});

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// use express json (as an alternative to bodyparser)
app.use(express.json());

// Set content type
app.use(function (req, res, next) {
    res.setHeader("Content-Type", 'application/json');
    res.contentType('application/json');
    next();
  });

routes(app);
contactRoutes(app);
bookingRoutes(app);
roomRoutes(app);
locationRoutes(app);
userRoutes(app);

app.get('/api', (req, res) => 
    res.send(`Node and express server is running on port ${PORT}`)
);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("An error occured!");
});

app.listen(PORT, () => 
    console.log(`your server is running on port ${PORT}`)
);

console.log('it is good!');

