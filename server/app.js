const express = require('express');
const firebase = require('firebase');
const bodyParser = require('body-parser');
const config = require('config');

const app = express();

const port = config.get('serverPort');

app.use(bodyParser.json());

firebase.initializeApp(config.get('firebase'));

//Fetch instances
app.get('/api/supplements', function (req, res) {

    console.log("HTTP Get Request");
    const supplementRef = firebase.database().ref("/supplements");

    supplementRef.on("value",
        function (snapshot) {
            res.json(snapshot.val());
            supplementRef.off("value");
        },
        function (errorObject) {
            res.send("The read failed: " + errorObject.code);
        });
});

app.get('/api/brands', function (req, res) {
    const brandsRef = firebase.database().ref("/Brand");

    brandsRef.on("value",
        function (snapshot) {
            res.json(snapshot.val());
            brandsRef.off("value");
        },
        function (errorObject) {
            res.send("The read failed: " + errorObject.code);
        });
});

app.get('/api/Labs', function (req, res) {
    const brandsRef = firebase.database().ref("/Brand/Lab");

    brandsRef.on("value",
        function (snapshot) {
            res.json(snapshot.val());
            brandsRef.off("value");
        },
        function (errorObject) {
            res.send("The read failed: " + errorObject.code);
        });
});

app.listen(port, () => {
    const host = process.env.IP || '0.0.0.0';
    console.log(`Server is running on http://${host}:${port}`);
});