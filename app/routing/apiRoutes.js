var fiendData = require('../data/fiends.js');
var currentScores = [];
var diff = 51;
var winner;

module.exports = function(app) {
    app.get('/api/fiends', function(req, res) {
        res.json(fiendData);
    });
    app.post('/api/fiends', function(req, res) {
        fiendData.push(req.body);
        res.json(true);
        
        function Winner(n, p, s) {
            this.name = fiendData[j].name;
            this.photo = fiendData[j].photo;
        };
        function getSum(total, num) {
            return parseInt(total) + parseInt(num);
        }
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
        console.log('winner name =  :' + winner.name);
        console.log('winner photo =  :' + winner.photo);
        console.log('diff =  :' + diff);
    })
};
