//Map, Filter, Reduce, and FlatMap
const movies = [
  {
    title: 'Avatar',
    year: '2009',
    rating: 'PG-13',
  },
  {
    title: 'I Am Legend',
    year: '2007',
    rating: 'PG-13',
  },
  {
    title: '300',
    year: '2006',
    rating: 'R',
  },
  {
    title: 'The Avengers',
    year: '2012',
    rating: 'PG-13',
  },
  {
    title: 'The Wolf of Wall Street',
    year: '2013',
    rating: 'R',
  },
];

//Challenge Question #1
//Create a new array that just contains the movie titles.
let movieTitles = movies.map(e => e.title)
console.log(movieTitles)

//Challenge Question #2
//Create a new array that contains only those movies that are PG-13.
let pg13 = movies.filter( e => e.rating === 'PG-13')
console.log(pg13)

//Challenge Question #3
//Determine how many of the movies are rating R.
let ratedR = movies.reduce((acc, curValue) => {
  if (curValue.rating === 'R') {
    acc++
  }
  return acc
}, 0)

console.log(ratedR)
