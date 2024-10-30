/* 
    FOR AWAIT OF

    we will use "for await of" when we need to perform more than 1 requests
*/

let urls = ['https://rickandmortyapi.com/api/location','https://rickandmortyapi.com/api/character','https://rickandmortyapi.com/api/episode'];

async function fetchData() {
    try {
        for await (let url of urls) {
            let response = await fetch(url);
            let data = await response.json();

            console.log(data);
        }
    } catch(error) {
        console.log(error);
    }
}

fetchData();