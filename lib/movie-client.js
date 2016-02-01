var request = require('request');

// movie client apis
// using for create new instance of MovieClient
// params
//  - apiKey: api key from https://www.themoviedb.org/
function MovieClient(apiKey) {
   this.apiKey = apiKey;
}

// shorcut for movie client prototype
var prototype = MovieClient.prototype;

// find movie 
// using to find movie
// params
//  - selector: object contains property and value to find
//  - options: object
//    properties
//     - pageSize: max number of item returned
//     - pageIndex:  position of page
//  - callback: function will called with 
//    params
//     - error: error ocurr during find
//     - items: item is found
prototype.find = function(selector, options, callback) {

}

// export movie client as module
module.exports = MovieClient;
