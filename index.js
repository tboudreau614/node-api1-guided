// import express from 'express'; this is an ES module, not initially supported by Node.js

const express = require("express"); // this is common JS, it is how you do imports in Node.js

const db = require("./data/hubs-model.js");

const server = express(); //this calls the server you're building

server.get("/", (req, res) => {
    res.send({api: "api is up and running bois"});
})

server.get('/hubs', (req, res) => {
    db.find()
    .then(hubs => {
        res.status(200).json(hubs)      
    })
    .catch(error => {
        console.log('oof we have an error on GET/hubs', error);
        res
        .status(500)
        .json({errorMessage: "error getting list of hubs from database"})
    })
})

const port = 4000;
server.listen(port, () => 
    console.log(`api running on port ${port}`)
);