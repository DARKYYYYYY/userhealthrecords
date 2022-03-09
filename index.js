const express = require('express');
require("./config");
const Product = require('./product');
const app = express();

app.use(express.json());

app.get( "/userhealthrecord/:key",async ( req,resp ) => {
    console.log(req.params.key)
      let data = await Product.find(
        {
            "$or":[
                {"UID":{$regex:req.params.key}},
               
            ]
        }
    )
      console.log(65)
    resp.send(data);

} );


app.listen(3000)