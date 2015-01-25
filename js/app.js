
$(document).ready(function() {

	SC.initialize({
		client_id: '781aa72f47d54e21fc84ec186d504e1c'
	});


// what does it need to do?
// user selects a genre -> picks a random track -> autoplay & display art in bg

//select genre -----/

//set selectedGenre as global var
var selectedGenre = ('please choose a genre');

//choose a genre and set it to 'selectedGenre'
$('.genre').click(function() {
		//set selectedGenre to what user clicks on
		selectedGenre = $(this).text();
		// getArt();
		// playSomeSound(selectedGenre);
		console.log('selected genre: ' + selectedGenre);
		getTracks(selectedGenre);
	});

//pick random track from genre -----/

//return tracks from selected genre
function getTracks(genre) {
	console.log('getTracks started:' +selectedGenre);
	SC.get('/tracks', { genres: genre }, function(tracks) {
		// $(tracks).each(function(index, track) {
		// 	//SoundCloud returns 50 tracks by default, this picks one of them at random
		// 	var random = Math.floor(Math.random() * 49);
		// 	$('#results').append($('<li></li>').html(track.id));
		console.log(tracks);
	});
};


//pick one of those tracks at random & store as var


//autoplay & display art in bg -----/


//pass selected track  var to player


var selectedTrackURL = ('https://soundcloud.com/toramusic/jaigantic');
console.log(selectedGenre);


// //player
// function playSomeSound(genre) {
// 	SC.get('/tracks', {
// 		genres: genre,
// 	}, function(tracks) { 
// 			//SoundCloud return 50 tracks by default, this picks one of them at random
// 			var random = Math.floor(Math.random() * 49);
// 			SC.oEmbed(tracks[random].uri, { autoplay: true }, document.getElementById('player'));
// 		});
// };

function playSomeSound(genre) {
	SC.oEmbed(selectedTrackURL, {auto_play: true}, document.getElementById('player')
		);
};

//set art as bg
function setBG() {
	$('body').css("background-color","blue");
};


function getArt() {
	SC.get('/tracks', { genres: 'ambient' }, function(tracks) {
		$(tracks).each(function(index, track) {
			var artUrl = track.artwork_url;
			var bigArt = artUrl.replace("large", "t500x500");
			$('#results').append($('<li></li>').html(track.title + ' - ' + '<img src="' + bigArt + '">'));
		});
	});
};

// function selectedArt() {
// 	console.log('selectedArt: ' +selectedArt);
// 	SC.get('/tracks', { genres: selectedGenre }, function(tracks) {
// 		$(tracks).each(function(index, track) {
// 			var artUrl = track.artwork_url;
// 			var bigArt = artUrl.replace("large", "t500x500");
// 			// $('#results').append($('<li></li>').html(track.title + ' - ' + '<img src="' + bigArt + '">'));
// 			console.log(bigArt);
// 		});
// 	});
// };

});


// SC.initialize({
// 	client_id: '781aa72f47d54e21fc84ec186d504e1c'
// });

// $(document).ready(function() {
// 	SC.get('/tracks', { genres: 'ambient' }, function(tracks) {
// 		$(tracks).each(function(index, track) {
// 			var artUrl = track.artwork_url;
// 			var bigArt = artUrl.replace("large", "t500x500");
// 			$('#results').append($('<li></li>').html(track.title + ' - ' + '<img src="' + bigArt + '">'));
// 		});
// 	});
// 	setBG();
// }
