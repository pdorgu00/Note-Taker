// Dependencies
const express = require('express');

const app = express();

const db = require("./db/db.json")


//PORT
const PORT = process.env.PORT || 3000;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));


// Routes

require("./routes/htmlRoutes")(app);
require("./routes/apiRoutes")(app);



app.listen(PORT, () => console.log("App listening on PORT: " + PORT));