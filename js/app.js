
$(document).ready(function() {

	SC.initialize({
		client_id: '781aa72f47d54e21fc84ec186d504e1c'
	});

	// function playSomeSound(genre) {
	// 	SC.get('/tracks', {
	// 		genres: genre,
	// 	}, function(tracks) { 
	// 		//SoundCloud return 50 tracks by default, this picks one of them at random
	// 		var random = Math.floor(Math.random() * 49);
	// 		SC.oEmbed(tracks[random].uri, { autoplay: true }, document.getElementById('player'));
	// 	});
	// };

	$('.genre').click(function(){
		var selectedGenre = $(this).text();
		playSomeSound(selectedGenre);
		console.log(selectedGenre);
	});

function setBG(bigArt) {
	$('body').css("background-color","blue");
};

	SC.get('/tracks', { genres: 'ambient' }, function(tracks) {
		$(tracks).each(function(index, track) {
			var artUrl = track.artwork_url;
			var bigArt = artUrl.replace("large", "t500x500");
			// $('#results').append($('<li></li>').html(track.title + ' - ' + '<img src="' + bigArt + '">'));
console.log(bigArt);
		});
	});

});


// SC.initialize({
// 	client_id: '781aa72f47d54e21fc84ec186d504e1c'
// });

// $(document).ready(function() {
// 	// SC.get('/tracks', { genres: 'ambient' }, function(tracks) {
// 	// 	$(tracks).each(function(index, track) {
// 	// 		var artUrl = track.artwork_url;
// 	// 		var bigArt = artUrl.replace("large", "t500x500");
// 	// 		$('#results').append($('<li></li>').html(track.title + ' - ' + '<img src="' + bigArt + '">'));
// 	// 	});
// 	// });
// // 	setBG();
// // }
