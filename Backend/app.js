import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConnection } from "./database/dbConnection.js";    
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import userRouter from "./routes/UserRouter.js"; 



const app = express();
dotenv.config({ path: "./config/config.env" });


app.use(cors({
    origin: 'http://15.206.209.83:5173', // Allow requests from the frontend URL
    methods: ['GET', 'POST'], // Allow GET and POST methods
    credentials: true, // Allow cookies and credentials to be sent with requests
  }));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/reservation", reservationRouter);
app.use("/api/v1/user", userRouter);


dbConnection();

app.use(errorMiddleware);


export default app;
