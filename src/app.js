import express from "express";
import cors from "cors";
import healthCheckRouter from "./routes/healthcheck.routes.js";

const app = express();

// basic configurations
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// cors configuration
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "POST", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);

app.use("/api/v1/heathcheck", healthCheckRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Project manager app ");
});

export default app;
