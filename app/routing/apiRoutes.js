var fiendData = require('../data/fiends.js');
var compareArray = [];
var currentArray = [];
var diffArray = [];
var diff;
module.exports = function(app) {

    app.get('/api/fiends', function(req, res) {
        res.json(fiendData);
    });

    app.post('/api/fiends', function(req, res) {
        fiendData.push(req.body);
        res.json(true);
        for (i = 0; i < req.body.scores.length; i++) {
            currentArray.push(parseInt(req.body.scores[i]))
        }

        console.log('current' + currentArray);
        for (j = 0; j < fiendData.length; j++) {


            var scores = fiendData[j].scores;
 
            for (k = 0; k < scores.length; k++) {
                scores[k] = parseInt(scores[k]);

            }
            console.log('others' + scores);

        }

    })

};
