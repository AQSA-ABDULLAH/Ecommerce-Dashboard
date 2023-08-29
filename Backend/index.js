require('./db/connection');
const Users = require('./db/Models/Users');

const express = require('express');
const app = express();

const cors = require('cors');

app.use(express.json());
app.use(cors());

app.post("/register", async(req, res)=>{
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);
});

app.listen(4000);