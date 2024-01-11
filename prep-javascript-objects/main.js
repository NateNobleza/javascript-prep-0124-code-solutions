const person = {
  firstName: "Nathaniel",
  lastName: "Nobleza",
  hobby: "Keyboards"
}
console.log(person)
const fullName = person.firstName + " " + person.lastName
console.log(fullName)
person.job = 'Dental Assisstant'
console.log("My job is a" + " " + person.job)
person['previousJob'] = 'Server'
console.log("My Previous job was a" + " " + person['previousJob'])
console.log(person)
