const express = require('express');
const app = express();

app.get("/", (req, res)=>{
    res.send("Ecommerss Project")
});

app.listen(4000);