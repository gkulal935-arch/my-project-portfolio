const https = require('https');
const fs = require('fs');

const url = "https://actions.google.com/sounds/v1/ambiences/space_station.ogg"; // I'll use a better mp3:
const mp3Url = "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3"; // Or maybe a cyberpunk one. I'll use "https://freepd.com/music/Cyberspace.mp3"
const cyberUrl = "https://freepd.com/music/Cyberspace.mp3";

const file = fs.createWriteStream("public/music.mp3");

https.get(cyberUrl, function(response) {
  response.pipe(file);
  file.on('finish', function() {
    file.close();  
    console.log("Download completed.");
  });
}).on('error', function(err) {
  fs.unlink("public/music.mp3");
  console.error("Error downloading file: ", err.message);
});
