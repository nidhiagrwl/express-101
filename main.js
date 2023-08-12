const express = require('express')
const app = express()
const port = 4000

const path = require('path');
 
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
app.get('/about', (req, res) => {
  res.send('About PAge') // sending text
})
app.get('/aboutpage',function(req,res){
    res.sendFile(path.join(__dirname+'/about.html')); //sending  file
});
app.get('/api',function(req,res){
    res.json({name:"nidhi"})
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})