// Your code here.

const getFirstName = function (unknown) {
  unknown.firstName

  return unknown.firstName
}

const getLastName = function (unknown) {
  unknown.lastName

  return unknown.lastName
}

const getFullName = function (unknown) {
  unknown.getFullName = unknown.firstName + ' ' + unknown.lastName

  return unknown.getFullName
}

const setFirstName = function (unknown, name) {
  unknown.firstName = name

  return unknown.firstName
}

const setAge = function (unknown, unknown2) {
  unknown.age = unknown2

  return unknown.age
}

const giveBirthday = function (person) {
  person.age++ === 0;

  return person.age
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
