// document.addEventListener("DOMContentLoaded", function() {
//     getCurrentImageOfTheDay();
//     document.getElementById("search-form").addEventListener("submit", function(event) {
//         event.preventDefault();
//         getImageOfTheDay();
//     });
//     addSearchToHistory();
// });

// function getCurrentImageOfTheDay() {
//     const currentDate = new Date().toISOString().split("T")[0];
//     fetchImage(currentDate);
// }

// function getImageOfTheDay() {
//     const searchDate = document.getElementById("search-input").value;
//     saveSearch(searchDate);
//     fetchImage(searchDate);
// }

// function fetchImage(date) {
//     const apiKey = "LCc8yC3V8qH2zpKDNlqx2G9jEKIw2kwPOhuNCX2a&date=2023-03-30";
//     const apiUrl = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`;

//     fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//             displayImage(data);
//         })
//         .catch(error => {
//             console.error("Error fetching image:", error);
//         });
// }

// function displayImage(data) {
//     const imageContainer = document.getElementById("current-image-container");
//     imageContainer.innerHTML = `
//         <img src="${data.url}" alt="${data.title}">
//         <h3>${data.title}</h3>
//         <p>${data.explanation}</p>
//     `;
// }

// function saveSearch(date) {
//     let searches = JSON.parse(localStorage.getItem("searches")) || [];
//     searches.push(date);
//     localStorage.setItem("searches", JSON.stringify(searches));
// }

// function addSearchToHistory() {
//     let searches = JSON.parse(localStorage.getItem("searches")) || [];
//     const searchHistory = document.getElementById("search-history");
//     searchHistory.innerHTML = "";
//     searches.forEach(date => {
//         const listItem = document.createElement("li");
//         listItem.textContent = date;
//         listItem.addEventListener("click", function() {
//             fetchImage(date);
//         });
//         searchHistory.appendChild(listItem);
//     });
// }



document.addEventListener("DOMContentLoaded", function() {
    getCurrentImageOfTheDay();
    document.getElementById("search-form").addEventListener("submit", function(event) {
        event.preventDefault();
        getImageOfTheDay();
    });
    addSearchToHistory();
});

function getCurrentImageOfTheDay() {
    const currentDate = new Date().toISOString().split("T")[0];
    fetchImage(currentDate);
}

function fetchImage(date) {
    const apiKey = "LCc8yC3V8qH2zpKDNlqx2G9jEKIw2kwPOhuNCX2a&date=2023-03-30";
    const apiUrl = `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayImage(data);
        })
        .catch(error => {
            console.error("Error fetching image:", error);
        });
}

function getImageOfTheDay() {
    const searchDate = document.getElementById("search-input").value;
    saveSearch(searchDate);
    fetchImage(searchDate);
}

function displayImage(data) {
    const imageContainer = document.getElementById("current-image-container");
    imageContainer.innerHTML = `
        <img src="${data.url}" alt="${data.title}">
        <h3>${data.title}</h3>
        <p>${data.explanation}</p>
    `;
}


function saveSearch(date) {
    let searches = JSON.parse(localStorage.getItem("searches")) || [];
    searches.push(date);
    localStorage.setItem("searches", JSON.stringify(searches));
}

function addSearchToHistory() {
    let searches = JSON.parse(localStorage.getItem("searches")) || [];
    const searchHistory = document.getElementById("search-history");
    searchHistory.innerHTML = "";
    searches.forEach(date => {
        const listItem = document.createElement("li");
        listItem.textContent = date;
        listItem.addEventListener("click", function() {
            fetchImage(date);
        });
        searchHistory.appendChild(listItem);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    getCurrentImageOfTheDay();
    document.getElementById("search-form").addEventListener("submit", function(event) {
        event.preventDefault();
        getImageOfTheDay();
    });
    addSearchToHistory();
});
