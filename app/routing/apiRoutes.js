var fiendData = require('../data/fiends.js');
console.log(fiendData)
module.exports = function(app){

	app.get('/api/fiends', function(req, res){

		res.send(fiendData);

	});

	app.post('/api/fiends', function(req, res){
		fiendData.push(req.body);
		res.json(true);
	})
}