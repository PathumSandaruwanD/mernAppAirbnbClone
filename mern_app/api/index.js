//make a backend to run on port 4000 and connect front end on http://127.0.0.1:5173/ using cors

const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors((
    {origin: 'http://127.0.0.1:5173',
    credentials: true}
)));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
    }
);
//send json to check /test page is working
app.get('/test', (req, res) => {
    res.json({message: "test page is working"})
    }
);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
);

// Path: mern_app\api\index.js
//make a backend to run on port 4000 and connect front end on http://

