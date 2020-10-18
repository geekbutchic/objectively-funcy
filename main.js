// Your code here.

const getFirstName = function (unknown) {
  return unknown.firstName
}

const getLastName = function (unknown) {
  return unknown.lastName
}

const getFullName = function (unknown) {
  return unknown.getFullName = unknown.firstName + ' ' + unknown.lastName
}

const setFirstName = function (unknown, name) {
  return  unknown.firstName = name

}
// return ${person.firstName} ${person.lastName};
// string interpolation

const setAge = function (unknown, age) {
  return unknown.age = age
}

const giveBirthday = function (person) {
  if ('age' in person) {
    person.age++
  } else {
    person.age = 1;
  }
}

const marry = function(person1, person2) {
  person1.married = true;
  person2.married = true;

  person1.spouseName = person2.firstName + ' ' + person2.lastName;
  person2.spouseName = person1.firstName + ' ' + person1.lastName;
}

const divorce = function (person1, person2) {
  person1.married = false;
  person2.married = false;

  delete person1.spouseName
  delete person2.spouseName 
}

// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
