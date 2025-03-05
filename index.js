// script.js

// Track information
const tracks = [
    {
      title: "Song 1",
      artist: "Artist 1",
      file: "track1.mp3",
      albumArt: "cover1.jpg"
    },
    {
      title: "Song 2",
      artist: "Artist 2",
      file: "track2.mp3",
      albumArt: "cover2.jpg"
    },
    {
      title: "Song 3",
      artist: "Artist 3",
      file: "track3.mp3",
      albumArt: "cover3.jpg"
    }
  ];
  
  // Initialize variables
  let currentTrackIndex = 0;
  const audio = document.getElementById('audio');
  const playPauseButton = document.getElementById('play-pause');
  const seekBar = document.getElementById('seek-bar');
  const currentTimeDisplay = document.getElementById('current-time');
  const songTitle = document.getElementById('song-title');
  const artistName = document.getElementById('artist-name');
  const albumArt = document.getElementById('album-art');
  
  // Update the music player with current track information
  function updateTrackInfo() {
    const currentTrack = tracks[currentTrackIndex];
    songTitle.textContent = currentTrack.title;
    artistName.textContent = currentTrack.artist;
    albumArt.src = currentTrack.albumArt;
    audio.src = currentTrack.file;
  }
  
  // Play/Pause functionality
  function togglePlay() {
    if (audio.paused) {
      audio.play();
      playPauseButton.textContent = "&#10074;&#10074;"; // Pause symbol
    } else {
      audio.pause();
      playPauseButton.textContent = "&#9658;"; // Play symbol
    }
  }
  
  // Track progress and update seek bar
  audio.ontimeupdate = function() {
    const currentTime = audio.currentTime;
    const duration = audio.duration;
    const progress = (currentTime / duration) * 100;
    seekBar.value = progress;
  
    // Format the current time as minutes:seconds
    const minutes = Math.floor(currentTime / 60);
    const seconds = Math.floor(currentTime % 60);
    currentTimeDisplay.textContent = `${formatTime(minutes)}:${formatTime(seconds)}`;
  };
  
  // Seek to specific time in the audio
  function seekAudio() {
    const seekTime = (seekBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
  }
  
  // Format time in minutes:seconds (e.g., 1:30, 10:04)
  function formatTime(time) {
    return time < 10 ? `0${time}` : time;
  }
  
  // Skip to the next track
  function nextTrack() {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    updateTrackInfo();
    audio.play();
    playPauseButton.textContent = "&#10074;&#10074;"; // Pause symbol
  }
  
  // Skip to the previous track
  function prevTrack() {
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    updateTrackInfo();
    audio.play();
    playPauseButton.textContent = "&#10074;&#10074;"; // Pause symbol
  }
  
  // Initialize the player with the first track
  updateTrackInfo();
  