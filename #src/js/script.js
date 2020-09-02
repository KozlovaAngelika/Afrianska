$(document).ready(function () {
    $('.burger').click(function (event) {
        $('body').toggleClass('lock')
        $('.header').toggleClass('active')
    });
});
// video player
let videoPlayer = function () {
    let video = document.querySelector('.video');
    let playButton = document.guerySelector('.play-pause');
    let playButtonBig = document.querySelector('.button-play-video');
    let controlsContainer = document.querySelector('.action-block-controls');
    let muteButton = document.querySelector('.video-mute');
    let seekBar = document.getElementById('seek-bar');
    let range = document.querySelector('.active-range');

    let flipIcon = function (icon) {
        if (icon.classList.contains('flipped')) {
            icon.classList.remove('flipped');
            return;
        }
        icon.classList.add('flipped');
    };

    playButtonBig.addEventListener('click', function () {
        if (video.paused == true) {
            video.classList.remove('blur-video');
            video.play();
            playButtonBig.classList.add('hide-btn');
            controlsContainer.classList.add('show-container');
            flipIcon(playButton);
        }
    });
    // Event listener for the play/pause button
    playButton.addEventListener('click', function () {
        if (video.paused == true) {
            playButtonBig.classList.add('hide-btn');
            video.classList.remove('blur-video');
            video.play();
            flipIcon(this);
        } else {
            controlsContainer.classList.remove('show-container');
            playButtonBig.classList.remove('hide-btn');
            video.classList.add('blur-video');
            video.pause();
            flipIcon(this);
        }
    });

    video.addEventListener('webkitendfullscreen', function () {
        playButtonBig.classList.remove('hide-btn');
        video.classList.add('blur-video');
        video.pause();
    });

    muteButton.addEventListener('click', function () {
        if (video.muted == false) {
            video.muted = true;
            flipIcon(this);
        } else {
            video.muted = false;
            flipIcon(this);
        }
    });

    seekBar.addEventListener('change', function () {
        let time = video.duration * (seekBar.value / 100);
        video.currentTime = time;
    });

    video.addEventListener('timeupdate', function () {
        let value = (100 / video.duration) * video.currentTime;
        seekBar.value = value;
        range.style.width = value + '%';
    });

    seekBar.addEventListener('mousedown', function () {
        video.pause();
    });

    seekBar.addEventListener('mouseup', function () {
        if (playButton.classList.contains('flipped')) {
            video.pause();
        } else {
            video.play();
        }
    });
}