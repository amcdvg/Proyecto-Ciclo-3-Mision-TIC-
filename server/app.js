let express = require("express");
var path = require("path");
var logger = require("morgan");
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
var db = mongoose.connection;
db.once("open", () => {
    console.log("Conectado a Base de Datos")

});
const emprendedorAPI = require("./routes/emprendedor.route");
const app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
    extended: false,
    })
);
app.use(logger("dev"));
app.use(cors());
// API
app.use("/api", emprendedorAPI);

// Create port
app.set("PORT", process.env.PORT || 3000);
app.listen(app.get("PORT"), () => {
    console.log(`Servidor iniciado en el puerto: ${app.get("PORT")}`);
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
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept");
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
   });
   

