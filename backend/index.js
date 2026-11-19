import 'dotenv/config';
import express from "express";
import cors from "cors";

import router from './src/router/routes.js';

const app = express();

app.use(
  cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);
app.use(express.json({ limit: "1mb" }));


app.get("/ok", async(req, res) => {
    console.log("ok");
})

app.use("/client", router);

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`server is running ${PORT}`);
});