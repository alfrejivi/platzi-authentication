require('dotenv').config();

const config = {
  spotifyClientId: process.env.SPOTIFY_CLIENT_ID,
  spotifyClientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  spotifyClientUri: process.env.SPOTIFY_CLIENT_URI,
};

module.exports = { config: config };
