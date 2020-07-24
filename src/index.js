const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
const breedsUrl = 'https://dog.ceo/api/breeds/list/all'

document.addEventListener("DOMContentLoaded", () => {
    // loadDogImages();
    loadBreeds();

    let dropDown = document.querySelector("#breed-dropdown");
        dropDown.addEventListener("change", (e) => {
        console.log();
        loadBreedsByFilter(e.target.value);
    })
})



// function loadDogImages() {
//     fetch(imgUrl)
//     .then(resp => resp.json())
//     .then(json => loadImagesFromUrls(json["message"])
//     );
// }

// function loadImagesFromUrls(urls) {
//     urls.forEach(element => {
//         img = document.createElement("img");
//         img.src = element;
//         document.getElementById("dog-breeds").append(img);
//     });
// }

function loadBreedsByFilter(letter) {
    fetch(breedsUrl)
    .then(resp => resp.json())
    .then(json => addBreeds(Object.keys(json["message"]).filter(breed => breed.startsWith(letter)))
    );
}

function loadBreeds() {
    let breeds;
    fetch(breedsUrl)
    .then(resp => resp.json())
    .then(json => addBreeds(Object.keys(json["message"]))
    );
}

function addBreeds(breeds) {
    console.log(breeds);
    let dogBreeds = document.getElementById("dog-breeds")
    dogBreeds.innerHTML = "";
    breeds.forEach(breed => {
        let li = document.createElement("li");
        li.className = "breed";
        li.innerText = breed;
        dogBreeds.append(li);
        li.addEventListener("click", () => {
            li.style.color = "blue";
        })
    })
}