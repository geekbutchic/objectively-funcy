// Your code here.

getFirstName = (value) => {
  console.log(value.firstName);
  return value.firstName;
};

getLastName = (value) => {
  console.log(value.lastName);
  return value.lastName;
};

getFullName = (value) => {
  return (value.getFullName = value.firstName + " " + value.lastName);
};

setFirstName = (value, name) => {
  return (value.firstName = name);
};

setAge = (value, age) => {
  return (value.age = age);
};

giveBirthday = (person) => {
  if ("age" in person) {
    // or person.age++
    person.age = person.age + 1;
  } else {
    person.age = 1;
  }
};

marry = (person1, person2) => {
  person1.married = true;
  person2.married = true;

  person1.spouseName = person2.firstName + " " + person2.lastName;
  person2.spouseName = person1.firstName + " " + person1.lastName;
};

divorce = (person1, person2) => {
  person1.married = false;
  person2.married = false;

  delete person1.spouseName && delete person2.spouseName;
};

// Our code here. Don't touch!
if (typeof getFirstName === "undefined") {
  getFirstName = undefined;
}

if (typeof getLastName === "undefined") {
  getLastName = undefined;
}

if (typeof getFullName === "undefined") {
  getFullName = undefined;
}

if (typeof setFirstName === "undefined") {
  setFirstName = undefined;
}

if (typeof setAge === "undefined") {
  setAge = undefined;
}

if (typeof giveBirthday === "undefined") {
  giveBirthday = undefined;
}

if (typeof marry === "undefined") {
  marry = undefined;
}

if (typeof divorce === "undefined") {
  divorce = undefined;
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
};
