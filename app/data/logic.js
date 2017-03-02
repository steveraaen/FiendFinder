const $ = require('jQuery')
$(document).ready(function(){

 $( function() {
    $( "#slider" ).slider();
  } );


var questions =[
'How important is traveling to different parts of the world',
'Do you enjoy taking long road trips by car?',
'1 being cats and 5 being dogs, which do you prefer?',
'1 being the beach and 5 being the mountains, where would you rather go in the summer?',
'1 being the beach and 5 being the mountains, where would you rather go in the summer?',
'1 being the beach and 5 being the mountains, where would you rather go in the summer?',
'1 being the beach and 5 being the mountains, where would you rather go in the summer?',
'1 being the beach and 5 being the mountains, where would you rather go in the summer?',
'1 being the beach and 5 being the mountains, where would you rather go in the summer?'
]
});
for(i = 0; i < questions.length; i++){
	$('.question').append(questions[i]);
}