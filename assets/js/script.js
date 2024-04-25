const baseURL = "https://module5api.martinwinther.dk"

fetch(baseURL + `=${}`)
.then((res) => res.json())
.then()
.catch(err => console.log("Something went wrong, try again later"))