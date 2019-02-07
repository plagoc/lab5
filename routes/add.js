var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var friendName = request.query.name;
	var friendDescription = request.query.description;
	var newFriend = {
		'name': friendName,
		'description': friendDescription,
		'imageURL': 'http://lorempixel.com/400/400/people'
	}
	data.friends.push(newFriend);
	console.log(newFriend);
	response.render('index', data);
 }