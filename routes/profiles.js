////////////////////////////////// PROFILE ROUTES

module.exports = function(app) {

app.get("/p", function(req, res){
    res.send("Your profile");
});

}
