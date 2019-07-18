//WOO LINE ONE!!!
//CHANGES!!!!!

//I MADE A NEW COMMENT FOR TESTING


//Requirements
const request = require('request');
// const omdbKeys = require('omdbKeys');
const Spotify = require('node-spotify-api');
const keys = require('./keys.js');


<<<<<<< HEAD
<<<<<<< HEAD
=======
//The functions
=======
//The Functions
>>>>>>> 0f531b1... typo
function commandToRun(cmd){
	switch (cmd) {
		case 'my-tweets': myTweets();
		break;
>>>>>>> cbad1f8... fixed a typo in liri.js


// my-tweets
// spotify-this-song
// movie-this
// do-what-it-says


<<<<<<< HEAD
=======
		case 'help': helpMe();

		default: helpMe();
	}
}
>>>>>>> 7e84de6... added help command

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

			for(i=0; i<response.tracks.items.length; i++){
	      let spotifyInfo = {
	        //Track
	        Track: response.tracks.items[i].name,
	        //Artist
	        Artist: response.tracks.items[i].artists[0].name,
	        //Album
	        Album: response.tracks.items[i].album.name,
	        //Previw Link
	        Link: response.tracks.items[i].preview_url,
	      }

				console.log(`==============================================================================================================================`);
			   for (key in spotifyInfo){
					 console.log(`${key}: ${spotifyInfo[key]}`);
				 };
 				console.log(`==============================================================================================================================`);
				console.log(``);
			}

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

<<<<<<< HEAD
=======
    for (const [key,value] of body) {
        console.log(value)
    }

>>>>>>> a650be2... for testing
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
<<<<<<< HEAD
=======

function helpMe(){
	console.log(`Commands: "my-tweets", "spotify-this-song", "movie-this", "do-what-it-says"`);
}
//============================================================

if(process.argv[4] != null){
	console.log(`Multi-word searches must be in quotations!`);
}
else{
	commandToRun(command);
}
>>>>>>> 7e84de6... added help command
