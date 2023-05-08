const button = document.getElementById("button");
const url = document.getElementById("url");
const baseURL = "https://localhost:8080/";

button.addEventListener("click", function(event) {
	event.preventDefault();
    url.textContent = baseURL;
    let name = document.getElementById("name").value;
    let year = document.getElementById("year").value;
    let query = `?name=${name}&year=${year}`;
    if(name === "" && year !== ""){
        query = `?year=${year}`;
    }
    if(name !== "" && year === ""){
        query = `?name=${name}`;
    }
    if(name === "" && year === ""){
        query = ``;
    }
    let newUrl = url.textContent + query;
	url.textContent = newUrl;
});