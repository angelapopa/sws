import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser'; //allows to send data to DB through http

import apiDoc from './api/vocab'; //the hotel api documentation vocabulary, annotated with hydra

import routes from './api/routes/hotels';
import contactRoutes from './api/routes/contacts';
import bookingRoutes from './api/routes/bookings';
import roomRoutes from './api/routes/rooms';
import locationRoutes from './api/routes/location';
import facilityRoutes from './api/routes/facilities';
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
    res.setHeader("Content-Type", 'application/ld+json');
    res.setHeader("Link", '<http://38add60d.ngrok.io/api/vocab>; rel="http://www.w3.org/ns/hydra/core#apiDocumentation"');
    res.contentType('application/ld+json');
    next();
  });

routes(app);
contactRoutes(app);
bookingRoutes(app);
roomRoutes(app);
locationRoutes(app);
facilityRoutes(app);
userRoutes(app);

app.get('/api', (req, res) => 
    res.send(`Node and express server is running on port ${PORT}`)
);

app.get('/api/vocab', (req, res) => 
    res.json(apiDoc)
);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("An error occured!");
});

app.listen(PORT, () => 
    console.log(`your server is running on port ${PORT}`)
);

console.log('it is good!');

