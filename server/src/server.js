import express from "express";
import dotenv from "dotenv";

import userRouter from "./routes/user.route.js";
import adminRouter from "./routes/admin.route.js";
import songRouter from "./routes/song.route.js";
import albumRouter from "./routes/album.route.js";
import statRouter from "./routes/stat.route.js";
import authRouter from "./routes/auth.route.js";

import { connectDB } from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";

dotenv.config();

const app = express();

app.use(express.json());
app.use(clerkMiddleware());

app.use("/api/users", userRouter);
app.use("/api/admin", adminRouter);
app.use("/api/songs", songRouter);
app.use("/api/album", albumRouter);
app.use("/api/stats", statRouter);
app.use("/api/auth", authRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
