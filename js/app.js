$(document).ready(function() {

    SC.initialize({
        client_id: '781aa72f47d54e21fc84ec186d504e1c'
    });

    // what does it need to do?
    // user selects a genre -> picks a random track -> autoplay & display art in bg

    //select genre -----/

    //set selectedGenre as global var
    var selectedGenre = ('please choose a genre');
    var theTrack;

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

    //return tracks from selected genre, choose one at random & set theTrack to the chosen track
    function getTracks(genre) {
        console.log('getTracks started:' + selectedGenre);
        SC.get('/tracks', {
            genres: genre
        }, function(tracks) {

            // 	//SoundCloud returns 50 tracks by default, this picks one of them at random
            var random = Math.floor(Math.random() * tracks.length);

            theTrack = tracks[random];
            playTrack(theTrack.permalink_url);
            setBG(theTrack.artwork_url);

            console.log('Now Playing: ' + theTrack.title);
        });
    };

    //autoplay & display art in bg -----/

    // play theTrack in player
    function playTrack(trackUrl) {
        SC.oEmbed(trackUrl, {
            auto_play: true
        }, document.getElementById('player'));
    };

    //set art as playerWrap bg
    function setBG(artUrl) {
        var bigArt = artUrl.replace("large", "t500x500");
        $('#playerWrap').css("background-image", 'url(' + bigArt + ')');
        console.log(bigArt);
    };
    console.log(selectedGenre);

    function getArt() {
        SC.get('/tracks', {
            genres: 'ambient'
        }, function(tracks) {
            $(tracks).each(function(index, track) {
                var artUrl = track.artwork_url;
                var bigArt = artUrl.replace("large", "t500x500");
                $('#results').append($('<li></li>').html(track.title + ' - ' + '<img src="' + bigArt + '">'));
            });
        });
    };

    $("#startPlayer").on('click', function() {
        $("#splashWrap").fadeOut('fast');
        $("#selectorWrap").fadeIn('fast');
        console.log('splashWrap should go away');
    });

    $(".logo").on('click', function() {
        $("#splashWrap").show();
        $('#selectorWrap').hide();
        $('#playerWrap').hide();
        $('#player').hide();
        console.log('home');
    });

    $(".genre").on('click', function() {
        $('#selectorWrap').hide();
        $('#playerWrap').show();
    });
});
