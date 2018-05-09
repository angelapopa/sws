import mongoose from 'mongoose';
import express from 'express';
import bodyParser from 'body-parser'; //allows to send data to DB through http
import routes from './api/routes/hotels';

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

routes(app);

app.get('/', (req, res) => 
    res.send(`Node and express server is running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`your server is running on port ${PORT}`)
);

console.log('it is good!');

