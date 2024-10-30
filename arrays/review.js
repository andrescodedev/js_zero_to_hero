/* 
    EXAMPLE - USE FILTER() METHOD IN ARRAYS
*/

let clientList = [
    {
        name:'Andrews',
        lastname:'Rooney',
        age:35,
        profession:'Software Engineer',
        genre:'M',
        favoriteFood:'Pizza'
    },
    {
        name:'Andrews',
        lastname:'Hilbert',
        age:45,
        profession:'Ux Design',
        genre:'M',
        favoriteFood:'Hamburguer'
    },
    {
        name:'Kara',
        lastname:'Danvers',
        age:35,
        profession:'Reporter',
        genre:'F',
        favoriteFood:'Pizza'
    },
    {
        name:'Kara',
        lastname:'Soel',
        age:45,
        profession:'Aerospace Engineer',
        genre:'F',
        favoriteFood:'Hot Dog'
    },
    {
        name:'Lisa',
        lastname:'Simpson',
        age:17,
        profession:'Student',
        genre:'F',
        favoriteFood:'Pasta'
    },
    {
        name:'Bart',
        lastname:'Simpson',
        age:17,
        profession:'Student',
        genre:'M',
        favoriteFood:'Hamburguer'
    },
];

function filterByNameOrLastName(nameOrLastNameToFilter) {
    let filteredNamesOrLastNamesList = clientList.filter(
        client => client.name === nameOrLastNameToFilter || 
        client.lastname === nameOrLastNameToFilter);


   
    console.log(`Clients filtered by names and lastnames:`);
    console.log(filteredNamesOrLastNamesList);
}


function filterByAge(ageToFilter) {
    let clientsListFilteredByAge = clientList.filter(client => client.age === ageToFilter);

    console.log(`Clients filtered by age:`);
    console.log(clientsListFilteredByAge);
}


function filterByGenre(genreToFilter) {
    let clientsListFilteredByGenre = clientList.filter(client => client.genre.toLowerCase() === genreToFilter);

    console.log(`Clients filtered by genre:`);
    console.log(clientsListFilteredByGenre);
}


function filterByProfession(professionToFilter) {
    let clientsListFilteredByProfession = clientList.filter(
        client => client.profession.toLowerCase() === professionToFilter);

    console.log(`Clients filtered by professions:`);
    console.log(clientsListFilteredByProfession);
}


function filterByFavoriteFood(foodToFilter) {
    let clientsListFilteredByFavoriteFood = clientList.filter(
        client => client.favoriteFood.toLowerCase() === foodToFilter);

    console.log(`Clients filtered by favorite food:`);
    console.log(clientsListFilteredByFavoriteFood);
}

//filterByNameOrLastName('Kara');
//filterByAge(28);
//filterByGenre('f');
//filterByProfession('reporter');
filterByFavoriteFood('pizza');