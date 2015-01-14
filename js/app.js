SC.initialize({
  client_id: '781aa72f47d54e21fc84ec186d504e1c'
});

$(document).ready(function() {
  SC.get('/tracks', { genres: 'lesbian acid folk' }, function(tracks) {
    $(tracks).each(function(index, track) {
      $('#results').append($('<li></li>').html(track.title + ' - ' + '<img src="' + track.artwork_url + '">'));
    });
  });
});
