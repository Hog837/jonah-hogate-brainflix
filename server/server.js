const express = require("express");
const cors = require("cors");
const videoRoutes = require("./routes/videoRoutes");

const app = express();
const PORT = 8080;

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use((_req, _res, next) => {
  console.log("Incoming Request");
  next();
});

app.use((req, res, next) => {
  if (
    req.method === "POST" &&
    req.headers["content-type"] !== "application/json"
  ) {
    return res.status(400).send("Server requires application/json");
  }
  console.log("Continue to the POST request");
  next();
});

app.use("/videos", videoRoutes);
app.listen(PORT, () => {
  console.log(`Server is running through ${PORT}`);
});
