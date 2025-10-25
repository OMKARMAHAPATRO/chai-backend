import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    // THE USE :     method used to enable CORS (Cross-Origin Resource Sharing) for the Express application. / midleware
    origin: process.env.CORS_ORIGIN,
    Credentials: true,
  })
);

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb"       
}));
app.use(express.static("public"));  // middleware to serve static files from the "public" directory
app.use(cookieParser())  // middleware to parse cookies from incoming requests



// routes  import 
import userRouter from './routes/user.routes.js'



// routes Declaration
app.use("/api/v1/users",userRouter)

//https:localhost:8000/api/v1/user/...register





export { app };
