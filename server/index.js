const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const path = require('path');

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




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/posts')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + " " + file.originalname)
    }
  })
  
  // Set up multer to store uploaded files in the "uploads" directory
  const upload = multer({ storage})

// Serve static files from the "uploads" folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.post('/api/upload/posts', upload.single('file'), (req, res) => {
  try {
    const file = req.file;
    if (!file) {
      return res.status(400).json("No file uploaded.");
    }
     // Construct the file URL (to be accessible on the client side)
     const fileUrl = `http://localhost:8000/uploads/posts/${file.filename}`;

    // res.status(200).json(file.filename); // Return the uploaded file's name
    res.status(200).json(fileUrl);
  } catch (error) {
    res.status(500).json("Server error during upload.");
  }
});




app.get('/', (req, res)=>{
    res.send("Server Running")
})

app.listen(8000, ()=>{
    console.log("Server Running on port 8000");
});
