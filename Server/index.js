require('./db/connection');
const Users = require('./Models/Users');
const Product = require('./Models/Product');

const express = require('express');
const app = express();

const cors = require('cors');

app.use(express.json());
app.use(cors());


// Registration Route
app.post("/register", async(req, res)=>{
    let user = new Users(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    res.send(result);
});

// Login Route
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

// Add Products Route
app.post("/add_product", async(req, res)=>{
    let product = new Product(req.body);
    let result = await product.save();
    res.send(result);
});

app.listen(4000);