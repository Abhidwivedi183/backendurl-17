require('dotenv').config()


const express = require('express')


const app = express()
const port = 5500

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
  res.send('king kohli')
})
app.get('/login',(req,res)=>{
res.send('<h1>hello naare screen par<h1>');
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
