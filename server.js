const express = require("express");

const app = express();
const PORT = process.env.PORT || 8080;

const db = require("./models");

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));

// Routes
require("./routes/api-routes.js")(app);

// Sync sequelize models and start Express app
db.sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`App is listening on port ${PORT}`);
    });
});