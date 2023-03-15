// make an express app that listen port 4000
const express = require('express');
const app = express();
const port = 4000;

// make a route
app.get('/', (req, res) => {
    res.send('Hello World!');
    }
);

// listen port 4000
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
    }
);