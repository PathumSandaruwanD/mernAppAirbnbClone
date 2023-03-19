const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt =require('jsonwebtoken');
require('dotenv').config();
const app = express();
const port = 4000;

const jwtSecret = '54q7328ehagvxzx/.?foe[o';

//importing models
const User = require('./Models/users.js');

//json parser
app.use(express.json());

//middleware
app.use(cors({
    origin: 'http://127.0.0.1:5173',
    credentials: true
}));

//CONNECT TO MONGOdb
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB successfully!");
}).catch((error) => {
    console.log("Error connecting to MongoDB: ", error);
});

//send hello world to check server is working
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//send json to check /test page is working
app.get('/test', (req, res) => {
    res.json({ message: "test page is working" });
});

//send data from
app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const userDoc = User.create({
            name,
            email,
            password: hashedPassword
        });
        res.json({ userDoc });
    } catch (error) {
        res.status(422).json(e);
    }
});

//login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email: email })
    try {
        //check emai is exist
        if (userDoc) {
            //check password
            const passwordCheck = bcrypt.compareSync(password, userDoc.password);
            if (passwordCheck) {
                //adding a cookie
                jwt.sign({email:userDoc.email,id:userDoc._id},jwtSecret,{},(err,token)=>{
                    if(err) throw err;
                    res.cookie("token",token).json('password ok')
                })
            } else {
                res.status(422).json('password not ok')
            }
        } else {
            res.json('not found')
        }
    } catch (error) {

    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
