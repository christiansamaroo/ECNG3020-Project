// Reference- David Akim(2022)


const express = require("express");
const bodyparser = require("body-parser");
const AntennasRoutes = require("./db/routes/antennas.route");
const TransceiversRoutes = require("./db/routes/transceivers.route");
const StandardsRoutes = require("./db/routes/standards.route");
const VsatlinkDesignsRoutes = require("./db/routes/vsatlinkDesigns.route");
const CubesatlinkDesignsRoutes = require("./db/routes/cubesatlinkDesigns.route");
const UavlinkDesignsRoutes = require("./db/routes/uavlinkDesigns.route");
const BalloonsatlinkDesignsRoutes = require("./db/routes/balloonsatlinkDesigns.route");
const HamlinkDesignsRoutes = require("./db/routes/hamlinkDesigns.route");




const mongoose = require("mongoose");

const app = express();

const dbConnectionString = "mongodb://localhost:27017/EquipmentAndStandards";
mongoose
    .connect(dbConnectionString)
    .then(()=>{
        console.log("Connected to database");
    })
    .catch((err)=>{
        console.log("Connection failed: " + err);
    });

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));

app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});


app.use(AntennasRoutes);
app.use(TransceiversRoutes);
app.use(StandardsRoutes);
app.use(VsatlinkDesignsRoutes);
app.use(CubesatlinkDesignsRoutes);
app.use(UavlinkDesignsRoutes);
app.use(BalloonsatlinkDesignsRoutes);
app.use(HamlinkDesignsRoutes);

module.exports = app;