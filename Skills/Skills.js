var player;

// This function creates an <iframe> (and YouTube player)
// after the API code downloads.
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "360",
    width: "240",
    videoId: "tPEE9ZwTmy0", // YouTube video ID
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  // This function will be called when the player is ready.
}

function handleButtonClick() {
  var playerDiv = document.getElementById("player");
  playerDiv.style.display = "block"; // Show the player
  player.playVideo(); // Start playing the video
}
