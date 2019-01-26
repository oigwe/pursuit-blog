//NODE MODULES
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const uuidv1 = require('uuid/v1');
const port = 6000;
//DEVELOPER MODULES
const {checkForToken} = require('./middleware');
const privateRouter = require('./routes/private');
const publicRouter = require('./routes/public');


// MIDDLEWARE NEEDED
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// user routes
app.use('/', publicRouter);
app.use(checkForToken);
app.use('/', privateRouter);

app.use((req, res) =>{
    res.status(404)
    res.json({
        "message": "path not found"
    })
})




app.listen(port, () => {
  console.log('Blog is running on Port: '+port);
});