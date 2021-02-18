
const {
    UserRoutes
} = require("../routes/index")


module.exports = (app)=>{
    app.use("/users", UserRoutes)
};
