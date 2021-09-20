const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// const titleCased = () => {
//   return tutorials
// }

// const newArray = [];
// for (const statement of tutorials) {
//  newArray.push(statement.charAt(0).toUpperCase() + statement.substring(1));
// }

// let newTutorials = [...tutorials]
// newTutorials[0] = newTutorials[0].toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
// console.log(newTutorials)

const newArray = [];
const titleCased = () => {
  for (const statement of tutorials) {
    newArray.push(statement.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '))
  }
  return newArray
}