const formWrapper = document.querySelector(".form-wrapper");
const form = document.querySelector("#form");
const searchInput = document.querySelector("#searchInput");
const buttonWrapper = document.querySelector(".button-wrapper");
const searchButton = document.querySelector("#searchButton");
const clearButton = document.querySelector("#clearButton");
const imageListWrapper = document.querySelector(".imageList-wrapper");

runEventListeners();

function runEventListeners() {
    form.addEventListener("submit", search);
}

function search(e) {
    //debugger
    const value = searchInput.value.trim();
    fetch(`https://api.unsplash.com/search/photos?query=${value}`, {
        method: "GET",
        headers: {
            Authorization: "Client-ID 4qP2u_Hp1KhIzGfxAHBVJC4I7HNCPcYPBtYwX6BuUQU" //token verdik beni temsil ediyor
        }

    })
        .then((res) => res.json())
        .then((data) => {
            Array.from(data.results).forEach((image) => {
                console.log(image.urls.small);
            })
        })
        .catch((err) => console.log(err));



    e.preventDefault();
}