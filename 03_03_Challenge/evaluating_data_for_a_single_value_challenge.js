//Includes, Some, and Every
const bowlingScores = [154, 204, 300, 184, 286];

//Challenge Question #1
//Does the array of bowling scores include a 300?
console.log(bowlingScores.includes(300))

//Challenge Question #2
//Are some of the scores under 150?
console.log(bowlingScores.some(e => e<150))

//Challenge Question #3
//Is every score an even number?
console.log(bowlingScores.every(e => { return e % 2 === 0 } ))

