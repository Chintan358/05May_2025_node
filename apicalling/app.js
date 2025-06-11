

fetch("https://node-project-may5.onrender.com/books").then(response => {
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    return response.json();
}).then(data => {
    console.log(data);
}).catch(error => {
    console.error("There has been a problem with your fetch operation:", error);
}
)