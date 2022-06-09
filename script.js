const students = [
  
{ 
  nome: "Sebastian",
  firstGrade: 10,
  secondGrade: 10,
},

{
  nome: "Mariana",
  firstGrade: 10,
  secondGrade: 10,
},

{  nome: "Mariela",
  firstGrade: 9,
  secondGrade: 1,
},

{
  nome: "Marília",
  firstGrade: 7,
  secondGrade: 6,
},

{ 
  nome: "Tuga",
  firstGrade: 3,
  secondGrade: 2,
},
]


// alert(`
// A sua média, ${students[0].nome}, é ${(students[0].fistGrade + students[0].secondGrade) / 2}.`)



function mediaFinal(firstGrade, secondGrade) {
  return Number(((firstGrade + secondGrade) / 2))
}

function printMedia(student) {
  return `
  Caro(a) aluno(a) ${student.nome}, sua média final é ${mediaFinal(student.firstGrade, student.secondGrade)}`
}


for (let student of students) {
  let mediaFinalMessage = printMedia(student)
  alert(mediaFinalMessage)
}

