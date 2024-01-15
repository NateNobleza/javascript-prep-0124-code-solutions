const age = 28
function isAdult(age){
  if (age > 18){
    let = boolVal = true
  } else {
    let = boolVal = false
  }
  return boolVal
}
console.log(isAdult(age))


const student1Score = 86
function didStudentPass(score){
  if (student1Score <= 100){
   let boolVal = true
  } else {
    let boolVal = false
  }
  return boolVal
}
console.log(didStudentPass(student1Score))


const student2Score = 87
function gradeCalculator(score){
if (score < 60){
 var val = 'F'
} else if (score < 70){
 var val = 'D'
} else if (score < 80){
  var val = 'C'
} else if (score < 90){
  var val = 'B'
} else if (score < 100){
  var val = 'A'
} else {
  var val = 'A++'
}
return val
}
console.log(gradeCalculator(student2Score))


const season = 'winter'
function seasonMessenger(season){
  if (season === 'summer'){
    var val = 'its hot'
  } else if (season === 'spring'){
    var val = 'flowers are blooming'
  } else if (season === 'autumn'){
    var val = 'the leaves are changeing colors'
  } else if (season === 'winter'){
    var val = 'it is cold today'
  } else {
    var val = 'please enter a valid season'
  }
return val
}
console.log(seasonMessenger(season))


const dayOfTheWeek = 'thursday'
function dayDetector(dayOfTheWeek){
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday'){
    var val = 'have a good weekend'
  } else {
    var val = 'its a weekday'
  }
  return val
}
console.log(dayDetector(dayOfTheWeek))
