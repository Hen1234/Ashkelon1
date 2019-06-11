const express = require("express");
const app = express();

app.use(express.json());

app.get("/hello", (req, res) => {
	res.header("Access-Control-Allow-Origin","*");
	console.log("hello");
    res.send("hello");
});


const port = process.env.PORT || 3000; //environment variable
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});