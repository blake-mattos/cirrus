SC.initialize({
	client_id: '781aa72f47d54e21fc84ec186d504e1c'
});

$(document).ready(function() {
	SC.get('/tracks', { genres: 'ambient' }, function(tracks) {
		$(tracks).each(function(index, track) {
			var artUrl = track.artwork_url;
			var bigArt = artUrl.replace("large", "t500x500");
			$('#results').append($('<li></li>').html(track.title + ' - ' + '<img src="' + bigArt + '">'));
		});
	});
	function setBG() {
		$('#bigWrap').css('background-image', 'url(https://i1.sndcdn.com/artworks-000058493054-vcrifw-t500x500.jpg)');
	};
	setBG();
});
