const joke = require('give-me-a-joke');
//access a package library like these and use it its as simple as that but first you need to install the pakage with command npm i give-me-a-joke
const colors = require('colors');
joke.getRandomDadJoke(function(jokes){
    console.log(jokes.rainbow);
});

