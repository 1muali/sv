////////////////////////////////// ROUTES

module.exports = function(app) {

require('./profiles')(app);
require('./groups')(app);


app.get("/", function(req, res){
    res.send("Welcome!");
});

}

