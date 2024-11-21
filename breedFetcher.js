const needle = require("needle");

const fetchBreedDescription = function(breedName, callback) {

  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  needle.get(url, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }
    if (response.statusCode === 200) {
      if (body.length === 0) {
        callback("Breed not found", null);
      } else {
        callback(null, body[0].description);
      }
    } else {
      callback(`Error: Received status code ${response.statusCode}`, null);
    }
  });
};

module.exports = { fetchBreedDescription };