const express=require('express')
const app=express();
const PORT=1111
const {connection}=require('./db');
const {PostRouter}=require('./Router/Post_Router')

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Baseurl run sucessfully')
})

app.use('/',PostRouter);


app.listen(PORT,async()=>{
    try {
        await connection
        console.log("Connected Db Successfully")
    } catch (error) {
        console.log(error);
    }
  console.log(`server is working on port:${PORT}`)
})