import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import path from "path"

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 4002; // Changed port number
const URI = process.env.MongoDBURI;

// Connect to MongoDB
try {
  mongoose.connect(URI);
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error:", error);
}

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
//deployment
if(process.env.NODE.ENV==='production'){
const dirPath=path.resolve();
app.use(express.static("Frontend/dist"))

app.get("*",(req,res)=>{
res.sendFile(path.resolve(dirPath,'Frontend','dist','index.html'))
})
}

app.listen(80, () => {
  console.log(`Server is listening on port ${80}`);
});
