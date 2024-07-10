

const students = [{ name: "Alice", grade: 90 }, { name: "Bob", grade: 80 }, { name: "Charlie", grade: 95 }, { name: "Dave", grade: 85 }]
const newStudents = [ { name: "Eve", grade: 88 }, { name: "Frank", grade: 92 } ];

//p1
const Allstudent=students.concat(newStudents)
console.log(Allstudent)


//p2
const student_entry=Allstudent.entries()
for (let[index,student] of student_entry){
    console.log(`Index: ${index}, Value:`,student)
}


//p3
const student_every=Allstudent.every(student=>student.grade>=70)
console.log(`\n${student_every}`)

//4
const student_fill = Allstudent.map(student => ({ ...student, grade: 100 }));
console.log(student_fill);

//5
const student_filter=Allstudent.filter(student=>student.grade > 90)
console.log(student_filter)

//6
const student_Charlie=Allstudent.find(student=>student.name ==='Charlie')
console.log(student_Charlie ? `${student_Charlie.name} grade is ${student_Charlie.grade}` : "not found") 

//7
const student_85=Allstudent.findIndex(student=>student.grade === 85)
console.log("first student with 85 grade is  on index ",student_85)


//8
const nestedArray = [[1, 2], [3, 4, 5], [6]];
const flatend_array=nestedArray.flat()
console.log("flatend array : ",flatend_array)

//9
const passed_student=Allstudent.flatMap(student=>[{...student,passing:student.grade>=70}])
console.log("passed student",passed_student)
 
//10
Allstudent.forEach(student => {
    console.log(student.name)
});

//11
string='hello world'
const string_array=Array.from(string)
console.log(string_array)

//12
const student_eve=Allstudent.some(student=>student.name==="Eve")
console.log(student_eve)

//13
const student_bob=Allstudent.findIndex(student=>student.name==="Bob")
console.log(student_bob)

//14
const student_grades=Allstudent.map(student=>student.grade)
console.log(student_grades)

//15
const newStudent = { name: "Grace", grade: 87 }
students.push(newStudent)
console.log(students)

//16
students.pop()
console.log(students)


//17
const student_reverse=students.reverse()
console.log(student_reverse)


//18
const student_first=students.shift()
console.log(student_first)


//19
const averageGrade = students.reduce((sum, student) => sum + student.grade,0) / students.length;
console.log(students)
console.log(averageGrade);