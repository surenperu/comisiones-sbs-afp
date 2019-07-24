const comisionController = require('../controller/comision-sbs.controller');

const initializeEndPoints=(app)=>{
    app.get("/api/comision-sbs/:year/:month", comisionController.ComisionSbs);
}

module.exports=initializeEndPoints;