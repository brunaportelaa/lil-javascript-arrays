const friends = [
  { firstname: 'Jane', lastname: 'Doe' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Alex', lastname: 'Trebek' },
];

//Create a new array that includes only the full name (firstname + lastname) of each friend.
let fullNames = friends.map( e => {
  return e.firstname + ' ' + e.lastname
})

console.log(fullNames)

fullNames = friends.map(e => `${e.firstname} ${e.lastname}`)
console.log(fullNames)
