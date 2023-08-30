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
    result = result.toObject();
    delete result.password;
    res.send(result);
});

app.post("/login", async(req, res)=>{
    if(req.body.password && req.body.email){
        let user = await Users.findOne(req.body).select("-password");
        if(user){
            res.send(user);
        }else{
            res.send({result:"Not Found"});
        }
    }
});

app.listen(4000);