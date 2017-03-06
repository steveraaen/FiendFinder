var fiendData = require('../data/fiends.js');
var match = require('../data/match.js');
var diff = 51;

        function Winner(n, p, s) {
            this.name = fiendData[j].name;
            this.photo = fiendData[j].photo;
            this.scores = fiendData[j].scores;
        };

module.exports = function(app) {
    app.get('/api/fiends', function(req, res) {
        res.json(fiendData);
    });
    app.get('/api/match', function(req, res) {
        res.json(match);
    });
    app.post('/api/fiends', function(req, res) {
        fiendData.push(req.body);
        currentScores = [];
        var winner = {
            name: "",
            photo: "",
            scores: []
        }

        function getSum(total, num) {
            return parseInt(total) + parseInt(num);
        }

        function compare() {
            for (i = 0; i < req.body.scores.length; i++) {
                currentScores.push(parseInt(req.body.scores[i]));
            }
            var currentScore = fiendData[fiendData.length - 1].scores.reduce(getSum);

            for (j = 0; j < fiendData.length - 1; j++) {

                var scores = fiendData[j].scores.reduce(getSum);
                var newDiff = Math.abs(currentScore - scores);
                if (newDiff < diff) {
                    diff = newDiff;
                    var winner = new Winner();
                }
            }
            res.json(true);
            fiendData.push(winner);
          match.push(winner);
            console.log('line 52 :  '+ JSON.stringify(winner));
            console.log('match :  '+ JSON.stringify(match));
            return;
        }
        compare()
            module.exports = winner;
    })
    app.post('/api/match', function(req, res) {
match.push(winner);


            res.json(true);
            console.log('match  :  '+ winner)
    })
};





