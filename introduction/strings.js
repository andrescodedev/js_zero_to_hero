// WORKING WITH STRINGS
let string_way_01 = 'single quotes';
let string_way_02 = "double quotes";
let string_way_03 = `We can use ${string_way_01} and ${string_way_02}`;
let string_uppercase = 'JS IS A BIG PROGRAMMING LANGUAGE';

console.log(string_way_03);
console.log(`String lenght is ${string_way_01.length}`); // Returns the length of a String object.
console.log(`Uppercase ${string_way_01.toUpperCase()}`); // Converts all the alphabetic characters in a string to uppercase.
console.log(`lowercase ${string_uppercase.toLowerCase()}`); // Converts all the alphabetic characters in a string to lowercase.
console.log(`Substring ${string_uppercase.substring(12,32)}`); // Returns the substring at the specified location within a String object.
