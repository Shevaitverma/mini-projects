const express = require('express');
const bodyparser = require('body-parser');

// initialize PORT number....
const PORT = 5000;

// initialize express erver to a variable...
const app = express();

// use body-parser
app.use(bodyparser.urlencoded({extended:true}));

// routes
app.get('/',(req,res)=>{
    res.status(200).send('Welcome to Sir!...')
})
app.get('/calculator',(req, res)=>{
    res.sendFile(__dirname+'/templates/index.html')
})
app.post('/calculator',(req,res)=>{
    let n1 = Number(req.body.v1)
    let n2 = Number(req.body.v2)
    var sum = n1+n2;
    var sub = n1-n2;
    res.send("Sum is: "+sum);
})

// listen server....
app.listen(PORT,(req, res)=>{
    console.log(`Server running on port: ${PORT}`);

})