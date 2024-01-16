// create your loops here.
function whileLoop1(){
let whileLoop1Output = []
let round = 0
while (round < 10){
  whileLoop1Output.push(round)
  const numberOfRounds = round + 1
  round = numberOfRounds
}
return whileLoop1Output
}
console.log('whileLoop1output', whileLoop1())


function whileLoop2(){
  let whileLoop2Output = []
  let round = 0
  while (round < 20){
  whileLoop2Output.push(round)
  round += 2
  }
  return whileLoop2Output
}
console.log('whileLoop2Output', whileLoop2())


function forLoop1(){
  let forLoop1Output = []
  for (let round = 0; round < 10; round++){
forLoop1Output.push(round)
  }
  return forLoop1Output
}
console.log('forLoop1Output', forLoop1())


function forLoop2(){
  for (let round = 100; round >= 0; round--){
console.log('time till explosion!', round)
}
 }
console.log(forLoop2())


function forInLoop1(object){
  const aboutMe = ['name', 'age', 'hobby', 'invention']
  let characteristics = {
    name: 'Nathaniel Nobleza',
    age: '28',
    hobby: 'keyboards',
    invention: 'guac'
  }
  for (let x in aboutMe){
  aboutMe.push(characteristics)
  }
  return characteristics
}
console.log('aboutMe', forInLoop1())


function forInLoop2(object){

  const genetics = ['eye', 'skin', 'hair', 'origin']
  let characteristics = {
    eye: 'brown',
    skin: 'tan',
    hair: 'black',
    origin: 'Phillippines'
  }
for (let x in genetics){
genetics.push(characteristics)
}
return characteristics
}
console.log('genetics', forInLoop2())
