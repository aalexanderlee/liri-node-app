//******** tools for twitter (case 1) *********

var keys = require("./keys.js"); //grabs objects from key.js
var twitKeyList = keys.twitterKeys; //grabs values from twitterKeys object
// console.log(twitKeyList);

var Twitter = require("twitter");

var client = new Twitter ({
	consumer_key: twitKeyList.consumer_key,
	consumer_secret: twitKeyList.consumer_secret,
	access_token_key: twitKeyList.access_token_key,
	access_token_secret: twitKeyList.access_token_secret
});

var action = process.argv[2];
console.log(action);
var value = process.argv.slice(3);
console.log(value);

function twitter() {
	var params = {screen_name: 'aalexanderlee08', count: 20};
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
		if(!error) {
			tweets.forEach(function(tweet) {
				console.log("Tweet Text: " + tweet.text);
				console.log("Tweet Created At: " + tweet.created_at);
			});
		} else {
			// console.log(error);
			return console.log("Error Occurred: " + error);
	
	}
	});
};

if (process.argv[2] === "my-tweets") {
	twitter();
};
//function twitter(){
//Run an error function first, if !error, then proceed...How do you proceed? Break? Continue?
//If (process.argv[2] === my-tweets) {
//Access the Twitter API. Do we have to use PHP? vvvvv
//for (var x in twitKeyList) {stick the access keys from keys.js into a queryURL}
//Once you do, have it iterate through the length of your API data (limited to 20)
//Console log this stuff to the screen
//done
//} 



//******** tools for spotify (case 2) *********
//var spotifyRequest = require("node_modules/node-spotify-api/src/package.json"); //double check pathway

var keys = require("./keys.js");
var spotKeyList = keys.spotifyKeys;
// console.log(spotKeyList);

var Spotify = require("node-spotify-api");
 
var spotify = new Spotify({
	id: spotKeyList.client_id,
	secret: spotKeyList.client_secret
});

// var songName = process.argv.slice(3).join(" ");
// console.log(songName);

function spotFunction(songName) {


	var songName = process.argv.slice(3).join(" ");
	console.log(songName);

	if (songName === "") {
		songName = "The+Sign+Ace+Of+Base"; //if empty, make our argument Ace of Base
	}
 
	spotify.search({ type: 'track', query: songName, limit: 3 }, function(error, data) {
		if (!error) {
			// console.log(data);
			var songList = data.tracks.items;
			// console.log(songList); // lists all data from your spotify search, limit to 1 item
 		
			songList.forEach(function(song) {
				var artistList = song.album.artists; // console.log(artistList);
				var artists = [];
				artistList.forEach(function(artist) {
					artists.push(artist.name);
				});

				//console.log(artists.join(", "));			
				console.log("Artists: " + artists.join(", ")); // loop through artist object to get names
			 	console.log("Album Name: " + song.album.name); // album name from data list
			 	console.log("Song Name: " + song.name); // song title from data list
			 	console.log("Song Preview Link: " + song.preview_url); //preview link for data list
				
			 });

		} else {
			return console.log('Error occurred: ' + error);
		}
	})
}

if (process.argv[2] === "spotify-this-song") {
	spotFunction();
}




//******** tools for omdb (case 3) *********
var request = require("request"); //use request to grab the queryURL for omdb

var movieName = process.argv.slice(3).join(" ");

if (movieName === "") {
	movieName = "Mr.+Nobody.";
}

var omdb = function(){ 
	request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

	if (!error && response.statusCode === 200) {

		console.log("Title of Movie: " + JSON.parse(body).Title); 
		console.log("Year of Movie: " + JSON.parse(body).Year);
		console.log("IMDB Rating: " + JSON.parse(body).imdbRating);
		console.log("Rotten Tomatoes Rating: " + JSON.parse(body).Ratings[1].Value);
		console.log("Country of Origin: " + JSON.parse(body).Country);
		console.log("Language of the Movie: " + JSON.parse(body).Language);
		console.log("Plot of the Movie: " + JSON.parse(body).Plot);
		console.log("Actors in the Movie: " + JSON.parse(body).Actors); 
		}
	});
}

if (process.argv[2] === "movie-this") {
	omdb();
}



	
//******** tools for fs.readFile (case 4) *********
var fs = require("fs"); //initialize fs readFile to grab items from random.txt

var randomFunction = function() {
	fs.readFile("random.txt", "utf8", function(error, data){
		if (error) {
			console.log(error)
		} 
		else 
		{
			
			var dataArr = data.split(",");
			var action = dataArr[0];
			var value = dataArr[1];
			// switch (action) {
			// 	case "spotify-this-song":
			// 		spotFunction(dataArr[0]);
			// 		break;
			// 	case "movie-this":
			// 		omdb(value);
			// 		break;
			// 	case "my-tweets":
			// 		twitter();
			// 		break;
			// };

			//dataArr[0] dataArr[1]
			// spotFunction(dataArr[1]);
			//stick elements of dataArr into process.argv[2] and process.argv[3], respectively
			//pass these through spotFunction()
			
		}
		if (action === "spotify-this-song") {
			spotFunction(value)
		}; 
	});
}

if (process.argv[2] === "do-what-it-says") {
	randomFunction();
}

//.readFile crap from random.txt and put it into 
//stick it into the function spotify(){}

//AFTER YOU set up the FOUR functions for each API source, only call on them with:
//case(actions), they will send you to the functions 

// in case 1-4
// switch (action) {
//   case "my-tweets":
// 	   fs.appendFile("random.txt", (process.argv[2] + process.argv[3]).join(","));
//     twitter();
//     break;
//   case "spotify-this-song":
//     spotFunction(value.join(" "));
// 	   // fs.appendFile("random.txt", (process.argv[2] + process.argv[3]).join(","));
//     break;

//   case "movie-this":
//     request();
// 	   fs.appendFile("random.txt", (process.argv[2] + process.argv[3]).join(","));
//     break;

//   case "do-what-it-says":
//     fs.readFile();
// 	   fs.appendFile("random.txt", (process.argv[2] + process.argv[3]).join(","));
//     break;
// }


//fs.appendFile("random.txt", randomTxt)



