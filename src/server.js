const express = require("express");
const peopleRoutes = require("./views/v1/people");
const statusRoutes = require("./views/status");

const PORT = 6666;

const app = express();
app.use("/", statusRoutes);
app.use("/v1/", peopleRoutes);

app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
