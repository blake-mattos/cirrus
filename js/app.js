SC.initialize({
  client_id: '781aa72f47d54e21fc84ec186d504e1c'
});

$(document).ready(function() {
  SC.get('/tracks', { genres: 'festival trap' }, function(tracks) {
    $(tracks).each(function(index, track) {
      $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre));
    });
  });
  console.log('test');
});

// $(document).ready(function() {
//   SC.get('/tracks', { genres: 'jazz' }, function(tracks) {
//     $(tracks).each(function(index, track) {
//       $('#results').append($('<li></li>').html(track.title + ' - ' + track.genre+ ' - ' + '<img src="' + track.artwork_url +'">'));
//     });
//   });
// });