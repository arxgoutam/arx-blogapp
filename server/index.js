const express = require('express');
const cors = require('cors');
const cookieparser = require('cookie-parser');

const app = express();
const userRouter = require('./router/userRouter');
const authRouter = require('./router/authRouter');

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());

app.use('/api/users', userRouter);
app.use('/api/auth', authRouter);

app.get('/', (req, res)=>{
    res.send("Server Running")
})

app.listen(8000, ()=>{
    console.log("Server Running on port 8000");
});
