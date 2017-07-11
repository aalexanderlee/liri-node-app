//AFTER YOU set up the FOUR functions for each API source, only call on them with:
//case(actions), they will send you to the functions 

//******** tools for twitter (case 1) *********

var keys = require("./keys.js"); //grabs objects from key.js
var twitKeyList = keys.twitterKeys; //grabs values from twitterKeys object
console.log(twitKeyList);

var Twitter = require("twitter");

var client = new Twitter ({
	consumer_key: twitKeyList.consumer_key,
	consumer_secret: twitKeyList.consumer_secret,
	access_token_key: twitKeyList.access_token_key,
	access_token_secret: twitKeyList.access_token_secret
});

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
console.log(spotKeyList);

var Spotify = require("node-spotify-api");
 
var spotify = new Spotify({
	id: spotKeyList.client_id,
	secret: spotKeyList.client_secret
});

function spotFunction() {

	var songName = process.argv.slice(3).join(" ");
	console.log(songName);
 
	spotify.search({ type: 'track', query: songName }, function(err, data) {
		if (!error) {
			var songList = data.tracks.items;
			console.log(songList);
			songList.forEach(function(song) {
				console.log(song.);
			});
		  // data.forEach(function(){});
		  // console.log(data);
		
		} else {
			return console.log('Error occurred: ' + error);
		}

	})
}

if (process.argv[2] === "spotify-this-song") {
	spotFunction();
}


//function spotify(){
//Run an error function first, then proceed...Break? Continue?
//if (process.argv[2] === "spotify-this-song" && process.argv[3] === "") {
	//use some kind of request to grab from node-spotify-api
	//for (var x in spotKeyList) {stick the client id/client secret into either queryURL
		//or find in node-spotify-api, using parameters song "The Sign" and artist "Ace of Base"
		//}
//else { 
	//if (there is a space " "){
		//.join("+") 
		//process.argv[3] === songName parameter location in node-spotify-api
		//console log the artist name, song name, preview link, album from node-spotify-api
		//}
	//}
//}





//******** tools for omdb (case 3) *********
//var request = require("request"); //double check pathway, the node_modules are downloaded
//var movieName = process.argv[2]; //takes in movie name arg

/*var request = require("request");
var movieName = process.argv[3];

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece";

console.log(queryURL);

request("http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {

if (!error && response.statusCode === 200) {
	
	//if (there is a space in procress.argv[3]) { 
  		//var movieName = .join("+") them	
  		console.log(JSON.parse(body).Title);
  		console.log(JSON.parse(body).Year);
  		console.log(JSON.parse(body).Rated);
  		console.log(JSON.parse(body).Ratings[2].Value);
  		console.log(JSON.parse(body).Country);
  		console.log(JSON.parse(body).Language);
  		console.log(JSON.parse(body).Plot);
  		console.log(JSON.parse(body).Actors);
  		//}
  	//else if (movieName === "") {
  		//var movieName ==="Mr.+Nobody.";
  		console.log(JSON.parse(body).Title);
  		console.log(JSON.parse(body).Year);
  		console.log(JSON.parse(body).Rated);
  		console.log(JSON.parse(body).Ratings[2].Value);
  		console.log(JSON.parse(body).Country);
  		console.log(JSON.parse(body).Language);
  		console.log(JSON.parse(body).Plot);
  		console.log(JSON.parse(body).Actors);
		//}
	
//} Shut the bigger if statement
 

//******** tools for omdb (case 3) *********
//.readFile crap from random.txt and put it into 
//stick it into the function spotify(){}


//ADDD CASEEEEE ACTIONS

*/


