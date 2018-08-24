const express = require('express');
const app = express();
const PORT =  8000
const bodyParser = require('body-parser');
const path = require('path');
let counter = 0;
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.urlencoded({ extended: true }));

require("./server/config/mongoose");
require("./server/config/routes")(app);



app.listen(PORT);




