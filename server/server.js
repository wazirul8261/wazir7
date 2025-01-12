import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";

import connectDB from './config/mongodb.js'
import authRouter from './routes/authRoutes.js'
import userRouter from "./routes/userRoute.js";

const app = express();
const port = process.env.PORT || 4000
connectDB();

const allowedOrgins = ['https://wazir7-frontend.onrender.com/']

app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrgins, credentials: true}))


// API Endpoints
app.get('/', (req, res)=> res.send("API is Working"));
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

app.listen(port, ()=> console.log(`Server started on PORT:${port}
    `));
