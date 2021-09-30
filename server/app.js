let express = require("express"),

cors = require("cors"),
mongoose = require("mongoose"),
database = require("./database"),
bodyParser = require("body-parser");
// Connect mongoDB
mongoose.Promise = global.Promise;
mongoose
.connect(database.db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(
    () => {
        console.log("Base de Datos Conectada");
    },
    (error) => {
        console.log("No se puede conectar a base de datos. Error: " + error);
    }
 );
const emprendedorAPI = require("../server/routes/emprendedor.route");
const app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
    extended: false,
    })
);
app.use(cors());
// API
app.use("/api", emprendedorAPI);
// Create port
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
    console.log("Conectado al Puerto " + port);
});
// Find 404
app.use((req, res, next) => {
    next(createError(404));
});
// error handler
app.use(function(err, req, res) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
});


