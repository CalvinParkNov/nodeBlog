require('dotenv').config()
const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const blog = require("./routes/blog")
const bodyParser = require("body-parser");

//middleware

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

//routes
app.use('/', blog);

const port = 3000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`The server is listening on port ${port}...`));
    } catch (error) {
        console.log(error);
    }
}
start();