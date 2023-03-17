//make a backend to run on port 4000 and connect front end on http://127.0.0.1:5173/ using cors

const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
require('dotenv').config();
const app = express();
const port = 4000;

//json parser
app.use(express.json());

//middleware
app.use(cors((
    {origin: 'http://127.0.0.1:5173',
    credentials: true}
)));
//end of the code block

//CONNECT TO MONGOdb
mongoose.connect(process.env.MONGO_URL)

//send hello world to check server is working
app.get('/', (req, res) => {
    res.send('Hello World!')
    }
);
//send json to check /test page is working
app.get('/test', (req, res) => {
    res.json({message: "test page is working"})
    }
);

//send data from 
app.post('/register',(req,res)=>{
    const {name,email,password}=req.body;
    res.json({name,email,password});
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
    }
);



