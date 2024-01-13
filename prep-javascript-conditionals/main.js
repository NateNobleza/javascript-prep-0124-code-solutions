const age = 28
function isAdult(age){
  if (age > 18){
    boolVal = true
  } else {
    boolVal = false
  }
  return boolVal
}
console.log(isAdult(age))


const student1Score = 86
function didStudentPass(score){
  if (student1Score <= 100){
    boolVal = true
  } else {
    boolVal = false
  }
  return boolVal
}
console.log(didStudentPass(student1Score))


const student2Score = 87
function gradeCalculator(score){
if (score < 60){
  val = 'F'
} else if (score < 70){
  val = 'D'
} else if (score < 80){
  val = 'C'
} else if (score < 90){
  val = 'B'
} else if (score < 100){
  val = 'A'
} else {
  val = 'A++'
}
return val
}
console.log(gradeCalculator(student2Score))


const season = 'winter'
function seasonMessenger(season){
  if (season === 'summer'){
    val = 'its hot'
  } else if (season === 'spring'){
    val = 'flowers are blooming'
  } else if (season === 'autumn'){
    val = 'the leaves are changeing colors'
  } else if (season === 'winter'){
    val = 'it is cold today'
  } else {
    val = 'please enter a valid season'
  }
return val
}
console.log(seasonMessenger(season))


const dayOfTheWeek = 'thursday'
function dayDetector(dayOfTheWeek){
  if (dayOfTheWeek === 'saturday' || dayOfTheWeek === 'sunday'){
    val = 'have a good weekend'
  } else {
    val = 'its a weekday'
  }
  return val
}
console.log(dayDetector(dayOfTheWeek))
