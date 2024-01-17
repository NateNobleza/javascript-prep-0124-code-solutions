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


  let characteristics ={
    name: 'Nathaniel Nobleza',
    age: '28',
    hobby: 'keyboards',
    invention: 'guac'
  }
function forInLoop1(object){
  const aboutMe = []
  for (let x in characteristics){
  aboutMe.push(x)
  }
  return characteristics
}
console.log('aboutMe', forInLoop1())


 let genes = {
    eye: 'brown',
    skin: 'tan',
    hair: 'black',
    origin: 'Phillippines'
  }
function forInLoop2(object){
  const genetics = []

for (let x in object){
genetics.push(x)
}
return genes
}
console.log('genetics', forInLoop2())
