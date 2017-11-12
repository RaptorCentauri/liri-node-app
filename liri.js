
//CHANGES!!!!!


//Requirements
const request = require('request');
// const omdbKeys = require('omdbKeys');
const Spotify = require('node-spotify-api');
const keys = require('./keys.js');




// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says



//Variables
let command = process.argv[2];
let argument = process.argv[3];



//The functionss
function myTweets() {
	console.log(`twitter`);
}

function spotifyThis() {
	console.log('spotify');

  let spotify = new Spotify({
    id: keys.spotifyKeys.id,
    secret: keys.spotifyKeys.secret,
  });

	spotify.search({type:`track`, query:`${argument}`})
    .then(function(response) {
      console.log(response);
    })
    .catch(function(err) {
      console.log(`Error: ${err}`);
    });
}

function movieThis(){

 let apiKey = keys.omdbKeys.key;

  var queryURL = `http://www.omdbapi.com/?t="${argument}"&apikey=${apiKey}`;

  request(queryURL, function (error, response, body){

    if (!error && response.statusCode === 200){

      let movieInfo = {
        //Title
        Title: JSON.parse(body).Title,
        //Release Year
        Year: JSON.parse(body).Year,
        //IMDB Rating
        ImdbRating: JSON.parse(body).Ratings[0].Value,
        //Rotten Tomato Rating
        RottenRating: JSON.parse(body).Ratings[1].Value,
        //Countyr where move was produced
        Country: JSON.parse(body).Country,
        //Language
        Language: JSON.parse(body).Language,
        //Plot
        Plot: JSON.parse(body).Plot,
        //Actors
        Actors: JSON.parse(body).Actors,
      }

      for (key in movieInfo){
        console.log(`${key}: ${movieInfo[key]}`);
      }

    }

    else {
      console.log(`error: ${error}`);
    }
  })
}

function doIt(){
	console.log('do it');
}


//Which command to run?
switch (command) {
	case 'my-tweets': myTweets();
	break;

	case 'spotify-this-song': spotifyThis();
	break;

	case 'movie-this': movieThis();
	break;

	case 'do-what-it-says': doIt();
	break;

	default:

}
