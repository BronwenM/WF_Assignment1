//ensure express is being used
const express = require("express");

//app creation
const app = express();

const port = 8080;

//main page
app.get('/', (req, res) => {
    res.send("Hello There!");
});

app.get('/api/penguins', (req, res) =>{
    //here be the dummy data
    res.send("PINGUINOS!")
});

app.get('/api/bears', (req, res) =>{
    //dummies abound
    res.send("LES OURS");
});

//get the app running by listening on port 8080
app.listen(port, () => {
    console.log("Connection successful! Listening on port ", port);
});