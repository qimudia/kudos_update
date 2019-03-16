const db = require('../models');

module.exports = function(app) {

    //route to get all drug information (currently just for 2015)
    app.get('/api/drugs', function(req,res) {
        db.spending2011.findAll({limit:25}).then(function(data) {
            console.log("I worked");
            res.json(data);
        }).catch(function(error) {
            res.json({error:error})
        });
    });

    //route to get drugs based on name (generic and brandName)
    app.get('/api/drugs/:name', function(req,res) {
        db.spending2011.findAll({
            where: {
                $or: [
                    {drugname_generic: {
                            $like: `%${req.params.name}%`}},
                    {drugname_brand: {
                            $like: `%${req.params.name}%`}}
                ]
            }
        }).then(function(data) {
            res.json(data)
        }).catch(function(error) {
            res.json({error:error})
        });
    });

    //route to get drugs with spending higher than inputted value.
    app.get('/api/drugs/spendingH/:number', function(req,res) {
        db.spending2011.findAll({
            where: {
                total_spending: {
                    $gte: req.params.number}}
    }).then(function(data) {
        res.json(data);
    }).catch(function(error) {
        res.json({error:error})
    });
});

    //route to get drugs with spending lower than inputted value.
    app.get('/api/drugs/spendingL/:number', function(req,res) {
        db.spending2011.findAll({
            where: {
                total_spending: {
                    $lte: req.params.number}}
        }).then(function(data) {
            res.json(data);
        }).catch(function(error) {
            res.json({error:error})
        });
    });

    //route to get drugs based on total spending
    app.get('/api/drugs/spending/:range1/:range2', function(req,res) {
        db.spending2011.findAll({
            where: {
                total_spending: {
                    $between: [req.params.range1, req.params.range2]}
            }
        }).then(function(data) {
            res.json(data);
        }).catch(function(error) {
            res.json({error:error})
        });
    });







    //route to post a new drug to watch
    app.post('/api/users', function(req,res) {
        db.Users.create(req.body).then(function(data) {
            res.json(data)
        }).catch(function(error) {
            res.json({error:error})
        });
    });

    app.post('/api/users', function(req,res) {
        
    })







}
