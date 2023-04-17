require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const { logger, logEvents } = require("./backend/middleware/logger");
const errorHandler = require("./backend/middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./backend/config/corsOptions");
const connectDB = require("./backend/config/dbConn");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3500;

console.log(process.env.NODE_ENV);

connectDB();

app.use(logger);

app.use(cors(corsOptions));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

app.use(cookieParser());

// CONNECTING SERVER TO BUILD PATH
app.use(express.static(path.join(__dirname, "frontend-app/build")));

// app.get("/", function (req, res) {
// 	res.sendFile(path.join(__dirname, "frontend-app/build", "index.html"));
// });

// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "frontend-app/build", "index.html"));
// });

const root = path.join(__dirname, "frontend-app", "build");
app.use(express.static(root));
app.get("*", (req, res) => {
    res.sendFile("index.html", { root });
});
/////////////////////////////////

app.use("/", express.static(path.join(__dirname, "backend", "/public")));
app.use("/", express.static(path.join(__dirname, "backend", "/uploads")));

app.use("/", require("./backend/routes/root"));
app.use("/admin", require("./backend/routes/authRoutes"));
app.use("/users", require("./backend/routes/userRoutes"));
app.use("/posts", require("./backend/routes/postRoutes"));
app.use("/sensus", require("./backend/routes/sensusRoutes"));
// app.use("/posts", require("./backend/routes/postRoutes"));c

app.all("*", (req, res) => {
    res.status(404);
    if (req.accepts("html")) {
        res.sendFile(path.join(__dirname, "backend", "views", "404.html"));
    } else if (req.accepts("json")) {
        res.json({ messeage: "404 Not Found" });
    } else {
        res.type("txt").send("404 Not Found");
    }
});

app.use(errorHandler);

mongoose.connection.once("open", () => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});

mongoose.connection.on("error", (err) => {
    console.log(err);
    logEvents(
        `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
        "mongoErrLog.log"
    );
});
