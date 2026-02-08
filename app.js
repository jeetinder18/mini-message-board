const express = require("express");
const app = express();

const path = require("node:path");

const indexRouter = require("./routes/indexRouter");

app.set("views", path.join(__dirname, "/views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log(`My server listening on http://localhost:${PORT}`);
});
server.on("error", (err) => {
    console.error("Server failed to start:", err.message);
    process.exit(1);
});