////////////////////////////////// GROUP ROUTES

module.exports = function(app) {

app.get("/g", function(req, res){
    res.send("Your groups");
});

app.get("/g/:id", function(req, res){
    res.send("Group with id " + req.params.id);
});

app.post("/g/:id", function(req, res){
    res.send("Joined new group");
});

}
