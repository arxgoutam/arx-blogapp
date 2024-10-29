const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const app = express();
require('dotenv').config();

const authRouter = require('./router/authRouter');
const userRouter = require('./router/userRouter');
const postRouter = require('./router/postRouter');

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRouter);
app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);

app.get('/', (req, res)=>{
    res.send("Server Running")
})

app.listen(8000, ()=>{
    console.log("Server Running on port 8000");
});
