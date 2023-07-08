'use strict';

const express = require('express');
require('dotenv').config();

const path = require('path');

const server = express();

server.use(express.static(path.join(__dirname, 'reactbuild')));

const PORT = process.env.VITE_PORT;

server.get("/*", (req, res, next) => {
    res.sendFile(path.join(__dirname, "reactbuild", "index.html"));
});

server.listen(PORT, (err) => {
    console.log(`Server started on port: ${PORT}`);
    if (err)
        console.log(err);
});