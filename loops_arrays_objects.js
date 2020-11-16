// arrays - unordered collections of using index positions (lists in python)
// objects - unordered collections using key-value pairs (dictionaries in python)
// loops - (loops in python)

// var sports = ["football", "tennis", "rugby"];
// var  firstSport = sports[0]
// console.log("first sport:", firstSport);

// sports.push("curling");
// sports.push("snooker");
// sports.push("darts");

// sports.unshift("basketball");
// console.log(sports);
// var removedFromStart = sports.shift();
// // var removedSport =sports.pop();
// // console.log('removed sport:',  removedSport);
// console.log("removed from start:", removedFromStart);
// console.log(sports);
// var removedSport = sports.splice(1, 1);
// console.log(sports);
// console.log('removed sport:', removedSport);

// for (var currentSport of sports){
//     var upperCasedSport = currentSport.toUpperCase()
//     console.log(upperCasedSport);
// }
// for (initialise counter (0); condition  (true/false), increment counter (+1))
// for (var i = 0; i < sports.length; i++){
//     var currentSport = sports[i];
//     var upperCasedSport = currentSport.toUpperCase();
//     console.log(upperCasedSport);
// }

var movie = {
    title: "It's a wonderful life",
    year: 1946,
    language: "Spanish",
};
// console.log('movie:', movie); 

// var title = movie.title
// console.log("movie title", title);

movie.cast = ["James Stewart", "Donna Reed"]
movie.language = ['English']
movie['subtitle-language'] = "Spanish"
delete movie.year
movie.rating = {
    critic: 94,
    audience: 96,
};

console.log(movie);
// console.log('audience rating:', movie.rating.audience);

for (var key in movie){
    var value = movie[key];
    console.log(`The ${key} is ${value}`);
}

var keys = Object.keys(movie)
console.log("Keys:", keys)