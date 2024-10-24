const express = require('express');

const app = express();
const userRouter = require('./router/userRouter');

app.use(express.json())

app.use('/api/users', userRouter);

app.get('/', (req, res)=>{
    res.send("Server Running")
})

app.listen(8000, ()=>{
    console.log("Server Running on port 8000");
});
