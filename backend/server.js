import express from "express";
import cors from "cors";

const app = express();

const port = 3001;

app.get("/", (req, res) => {
  res.send("Project is running");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
