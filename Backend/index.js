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



// Connect to MongoDB
try {
  mongoose.connect("mongodb+srv://ce22btech11051:1234@cluster0.bzokniw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
  console.log("Connected to mongoDB");
} catch (error) {
  console.log("Error:", error);
}

// Define routes
app.use("/book", bookRoute);
app.use("/user", userRoute);
//deployment

const dirPath=path.resolve();
app.use(express.static("Frontend/dist"))

app.get("*",(req,res)=>{
res.sendFile(path.resolve(dirPath,'Frontend','dist','index.html'))
})


app.listen(80, () => {
  console.log(`Server is listening on port ${80}`);
});
