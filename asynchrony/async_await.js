/* 
    ASYNC AND AWAIT

*/

/*
function fetchData() {
    fetch('https://rickandmortyapi.com/api/character')
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));
} */

//async and await
async function fetchData() {
    try {
        let response = await fetch('https://rickandmortyapi.com/api/character');
        let data = await response.json();
        console.log(data);

    } catch(error) {
        console.log(error);
    }
}

fetchData();