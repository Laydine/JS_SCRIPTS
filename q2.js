function categorizeStudents(students) {
    const result = { pass: [], fail: [] };

    for (let student of students) {
        if (student.grade >= 60) {
            result.pass.push(student.name)
        }
        else {
            result.fail.push(student.name)
        }
    }
    return result;
}
const students = [
    {name: "Racheal", grade: 55 },
    {name: "Joane", grade: 72 },
    {name: "Jose", grade: 65 },
    {name: "Eve", grade: 46},
  ];
  console.log(categorizeStudents(students));

  

  