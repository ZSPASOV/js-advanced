// Get an array of tuples (array of two elements), representing each key and value pair
// First tuple element is the key, the second is the value
const phonebook = { 'Tim': '555-111',
                    'Bill': '555-333',
                    'Peter': '555-777' };

const entries = Object.entries(phonebook);
console.log(entries);
//[ [ 'Tim', '555-111' ], [ 'Bill', '555-333' ], [ 'Peter', '555-777' ] ]
// This method is often used if we want to sort the contents
