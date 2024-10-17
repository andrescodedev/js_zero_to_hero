/* 
    slice()
    Returns a copy of a section of an array. For both start and end, 
    a negative index can be used to indicate an offset from the end of the array. For example, 
    -2 refers to the second to last element of the array.
*/

//slice() --> 
let companiesList = ['Microsoft','Apple','Amazon','Nvidia','Ibm','SpaceX'];
let cloudProviders = companiesList.slice(0,3);
let spaceCompany = companiesList.slice(-1);
let otherCloudProviders = companiesList.slice(3,-1);

console.log(companiesList);
console.log(cloudProviders);
console.log(spaceCompany);
console.log(otherCloudProviders);