var fiendData = require('../data/fiends.js');
var compareArray = [];
var currentScores = [];
var diffArray = [];
var diff = 51;
var winner;
module.exports = function(app) {
    app.get('/api/fiends', function(req, res) {
        res.json(fiendData);
    });
    app.post('/api/fiends', function(req, res) {
        fiendData.push(req.body);
        res.json(true);
        console.log(req.body.name)

        function Winner(n, p, s) {
            this.name = fiendData[j].name;
            this.photo = fiendData[j].photo;
        };

        function getSum(total, num) {
            return parseInt(total) + parseInt(num);
        }
/*        console.log(fiendData);
        var currentScore = req.body.scores.reduce(getSum)
        console.log(currentScore);*/
        for (i = 0; i < req.body.scores.length; i++) {

            currentScores.push(parseInt(req.body.scores[i]));
        }
        console.log('current' + currentScores);
        console.log('-----------------');

var currentScore = fiendData[fiendData.length -1].scores.reduce(getSum);
console.log(currentScore)
        for (j = 0; j < fiendData.length -1; j++) {
            var scores = fiendData[j].scores.reduce(getSum);
            var newDiff = Math.abs(currentScore - scores);
            if(newDiff < diff){
                var winner = new Winner()
/*                diff = newDiff;
                diffIndex = j;
                winnerName = fiendData[j].name;
                winnerPhoto = fiendData[j].photo;*/
            }
            console.log('others' + winner);
            console.log('diff =  :' + diff);
            console.log('winner name =  :' + winner.name);
            console.log('winner photo =  :' + winner.photo);
        }

    })

};
