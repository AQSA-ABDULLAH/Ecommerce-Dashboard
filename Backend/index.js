require('./db/connection');
const Users = require('./db/Models/Users');
const cors = require('cors');
const express = require('express');
const app = express();
app.use(express.json());

app.post("/register", async(req, res)=>{
    let user = new Users(req.body);
    let result = await user.save();
    res.send(result);
});

app.listen(4000);