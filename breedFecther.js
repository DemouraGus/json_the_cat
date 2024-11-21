const needle = require("needle");

const breed = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

needle.get(url, (error, response, body) => {
  if (error) {
    console.log("Error:", error);
    return;
  }
  if (response.statusCode === 200) {
    if (body.length === 0) {
      console.log("Breed not found");
    } else {
      console.log(body[0].description);
    }
  }
  // console.log("Error:", response);
});