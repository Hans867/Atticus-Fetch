/* const antes = `{
    "Order1": [
    {"orderName": "Favorite"},
    {"orderID": 1},
    {"price": 75},
    {"drinks": [
        "Coca Cola",
        "Faxe Kondi",
        "Miranda Orange"
    ]},
    {"Extras": [
        "Sweet potato fries",
        "Antes fritter"
    ]}],
    "Order2": [
    {"orderName": "Gyros"},
    {"orderID": 2},
    {"price": 55},
    {"drinks": [
        "Coca Cola",
        "Faxe Kondi",
        "Miranda Orange"
    ]},
    {"Extras": [
        "Sweet potato fries",
        "Antes fritter"
    ]}]
}`
const antestoJson = JSON.parse(antes)
console.log(antestoJson)

 */

let antesCanvasGlobal = []
let ulGlobal = document.querySelector('#allMovies')

fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    .then(response => response.json())
    .then(antesCanvas => {
        console.log(antesCanvas);
        antesCanvasGlobal = antesCanvas
        const movieCount = document.querySelector('#movieCount')
        const totalMovies = antesCanvas.length
        movieCount.innerHTML = (`${totalMovies} movies fetched`)
        movieInfo(antesCanvas[0])
        allMovies(antesCanvas)
        newerMovies(antesCanvas[0])
    });

function movieInfo (movie) {
    const movieParagraph = document.querySelector('#firstMovie')
    return movieParagraph.innerHTML = JSON.stringify(movie)
}

function allMovies (movies) {
    for (let i = 0; i < movies.length; i++) {
        const li = document.createElement('li')
        li.innerHTML = JSON.stringify(movies[i])
        ulGlobal.appendChild(li)
    }
}

function newerMovies () {
    const newerButton = document.querySelector('#newerButton')
    newerButton.addEventListener('click', function (){
        ulGlobal.innerHTML = ""
            for (let i = 0; i < antesCanvasGlobal.length; i++) {
                if (antesCanvasGlobal[i].year >= '2014' ) {
                const li = document.createElement('li')
                li.innerHTML = JSON.stringify(antesCanvasGlobal[i])
                ulGlobal.appendChild(li)
            }
        }
    })
}






