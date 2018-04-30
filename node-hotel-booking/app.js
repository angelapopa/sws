const express = require (express);
const app = express();
app.use ((req, res, next) => {
    
    rest.status(200).json({
        message: 'it works!'
    });
});
module.export = app;