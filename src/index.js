import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server working at port http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB Connection Error", err);
    process.exit(1);
  });

const port = process.env.PORT || 3000;
