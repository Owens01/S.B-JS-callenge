"use strick";

/* 1. Simple Function
 Write a function greet(name) that takes a name as a parameter and 
returns a greeting string "Hello, <name>!".)*/

function greet(name) {
  return `Hello ${name}!`;
}
console.log("Hello, Owen");

/*2. Array Basics
Create an array of numbers and write a function sumArray(arr) 
that takes an array of numbers as input and returns the sum of 
the numbers.*/

const numbers = [50, 80, 90, 100];

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

const result = sumArray(numbers);
console.log(result);

/*3. Object Creation
Create an object car with properties make, model, and year.
Write a function getCarInfo(car) that returns a string like 
"Make: <make>, Model: <model>, Year: <year>".*/

const car = {
  make: "Toyota",
  model: "Avalon",
  year: "2020",
};

function getCarInfo(car) {
  return `Make: ${car.make}, Model: ${car.model}, Year: ${car.year}`;
}

console.log(getCarInfo(car));

/*4. Loop through Array
Write a function printArray(arr) that loops through an array 
and prints each element.*/

const friends = ["Emma", "Jude", "John", "Micheal"];

function printArray(arr) {
  for (let i = 0; i < friends.length; i++) {}
  return friends;
}

console.log(printArray(friends));

/*5. Conditional Statements
Write a function checkNumber(num) that takes a number as input 
and returns "Even" if the number is even, and "Odd" if the number
is odd.*/

function checkNumber(num) {
  if (num % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

console.log(checkNumber(10));

/* 6. Array of Objects
Create an array of student objects where each object has 
properties name, age, and grade. Write a function 
printStudentNames(students) that prints the names of all students.*/

const student = [
  { name: "Emma Obi", age: 18, grade: 80 },
  { name: "Jude Uzoh", age: 29, grade: 60 },
  { name: "Micheal Uda", age: 26, grade: 50 },
];

function printStudentNames(students) {
  student.forEach((student) => {
    console.log(student.name);
  });
}
printStudentNames(student);

/*7. Loop with Condition
Write a function filterEvenNumbers(arr) that takes an array of 
numbers and returns a new array with only the even numbers.*/

function filterEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterEvenNumbers(number));

/*8. Modify Object Property
Given a person object with properties name and age, write a 
function celebrateBirthday(person) that increases the person's 
age by 1.*/

function celebrateBirthday(person) {
  person.age += 1;
}
const person = {
  name: "Micheal Uda",
  age: 15,
};

console.log(`before birthday: ${person.name} is ${person.age} years old`);
celebrateBirthday(person);
console.log(`After birthday: ${person.name} is ${person.age} years old`);

/*9. Array Manipulation
Write a function removeFirstAndLast(arr) that removes the first 
and last elements from an array and returns the modified array.*/

function removeFirstAndLast(arr) {
  return arr.slice(1, -1);
}

const nums = [30, 50, 0, 12];
console.log(removeFirstAndLast(nums));

/*10. Function inside Object
Add a method introduce() to the person object that prints 
"Hi, I am <name> and I am <age> years old!".*/

const me = {
  name: "Agunwa Chidi",
  age: 26,
  introduce: function () {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old!`);
  },
};
me.introduce();

/* 11. Nested Loops
Write a function multiplyTable(n) that prints a multiplication 
table for numbers from 1 to n.*/

function multiplyTable(n) {
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n; j++) {
      row += i * j + "\t";
    }
    console.log(row);
  }
}
multiplyTable(8);

/*12. Combining Arrays and Loops
Write a function mergeArrays(arr1, arr2) that takes two arrays 
and returns a single array with all elements from both arrays.*/

function mergeArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
const arr1 = [3, 4, 5];
const arr2 = [6, 7, 8];
console.log(mergeArrays(arr1, arr2));

/* 13. Searching in an Array
Write a function findStudentByName(students, name) that searches
 for a student by name in an array of student objects and returns 
 the student object if found, or null if not found.*/

const students = [
  { name: "Emma Obi", age: 18, grade: 80 },
  { name: "Jude Uzoh", age: 29, grade: 60 },
  { name: "Micheal Uda", age: 26, grade: 40 },
];

function findStudentByName(students, name) {
  return students.find((student) => students.name === name) || null;
}
console.log(findStudentByName(students, "Jude"));

/*14. Conditional with Objects
Write a function checkPassing(students) that takes an array of 
students and returns a list of students with grade >= 50.*/

function checkPassing(students) {
  return students.filter((student) => student.grade >= 50);
}
console.log(checkPassing(students));

/*15. Object with Array Property
Modify the car object to have a features array 
(e.g., ["air conditioning", "navigation"]). Write a function 
printCarFeatures(car) that prints all features of the car.*/

const cars = {
  make: "Toyota",
  model: "Avalon",
  year: 2020,
  features: ["air conditioning", "navigation", "Bluetooth"],
};

function printCarFeatures(cars) {
  console.log(`Features of the ${cars.make} ${cars.model} ${cars.year}:`);
  cars.features.forEach((feature) => console.log(feature));
}
printCarFeatures(cars);

/*16. Array of Functions
Write an array mathOperations with functions for addition, 
subtraction, multiplication, and division. Write a function 
executeOperations(arr, a, b) that calls each function with the 
arguments a and b and prints the results.*/

const mathOperations = [
  {
    name: "Addition",
    operation: (a, b) => a + b,
  },
  {
    name: "Subtraction",
    operation: (a, b) => a - b,
  },
  {
    name: "Multiplication",
    operation: (a, b) => a * b,
  },
  {
    name: "Division",
    operation: (a, b) => a / b,
  },
];

function executeOperations(arr, a, b) {
  arr.forEach((operation) => {
    const result = operation.operation(a, b);
    console.log(`${operation.name}: ${a} 
        ${getOperation(operation.name)} ${b} = ${result}`);
  });
}

function getOperation(operationName) {
  switch (operationName) {
    case "Addition":
      return "+";
    case "Subtraction":
      return "-";
    case "Multiplication":
      return "*";
    case "Division":
      return "/";
    default:
      return "";
  }
}

executeOperations(mathOperations, 5, 10);

/*17. Higher-Order Functions
Write a function filterArray(arr, callback) that takes an array 
and a callback function and returns a new array where the 
callback function returns true.*/

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function filterArray(arr, callback) {
  const filterArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i, arr)) {
      filterArray.push(arr[i]);
    }
  }
  return filterArray;
}
//console.log(filterArray(arr, callback));

/*18. Object in Loop
Write a function updateGrades(students, bonus) that loops 
through the students and increases their grades by the bonus 
amount.*/

const studentId = [
  { name: "Emma Obi", grade: 80 },
  { name: "Jude Uzoh", grade: 60 },
  { name: "Micheal Uda", grade: 40 },
];

function updateGrades(studentId, bonus) {
  studentId.forEach((studentId) => {
    studentId.grade += bonus;
  });
}

console.log("Before updating grades:");
console.log(studentId);

updateGrades(studentId, 6);

console.log("After updating grades:");
console.log(studentId);

/*19. Recursion
Write a recursive function factorial(n) that returns the 
factorial of a number.*/

function factorial(n) {
  if (n <= 1) return 1;
  return n * factorial(n - 1);
}

console.log(factorial(8));

/*20. Array of Objects Manipulation
Write a function promoteStudents(students) that increases the 
grade of each student in an array by 10%, but caps it at 100.*/

const studentPro = [
  { name: "Emma Obi", grade: 80 },
  { name: "Jude Uzoh", grade: 60 },
  { name: "Micheal Uda", grade: 40 },
];

function promoteStudents(students) {
  studentPro.forEach((studentPro) => {
    studentPro.grade = Math.min(studentPro.grade * 1.1, 100);
  });
}

console.log("Before promote students:");
console.log(studentPro);

promoteStudents(students);

console.log("After promote students:");
console.log(studentPro);

/*21. Sorting an Array
Write a function sortStudentsByGrade(students) that sorts an 
array of student objects by their grade in descending order.*/

const studentSort = [
  { name: "Emma Obi", grade: 80 },
  { name: "Jude Uzoh", grade: 90 },
  { name: "Micheal Uda", grade: 85 },
];

function sortStudentsByGrade(studentSort) {
  return studentSort.sort((a, b) => b.grade - a.grade);
}

console.log("Before sorting:");
console.log(studentSort);

const sortedStudent = sortStudentsByGrade(studentSort);

console.log("After sorting:");
console.log(sortedStudent);

/*22. Combining Array Methods
Write a function averageGrade(students) that calculates the 
average grade of all students using map() and reduce().*/

function averageGrade(studentGrade) {
  const total = studentGrade
    .map((student) => student.grade)
    .reduce((acc, grade) => acc + grade, 0);
  return total / studentGrade.length;
}

const studentGrade = [
  { name: "Emma Obi", grade: 80 },
  { name: "Jude Uzoh", grade: 90 },
  { name: "Micheal Uda", grade: 40 },
];

console.log("Average Grade:", averageGrade(studentGrade));

/*23. Nested Objects
Create a school object that contains an array of classroom 
objects. Each classroom has a name and a list of students. 
Write a function printClassrooms(school) that prints the 
classroom names and their student counts.*/

const school = {
  classrooms: [
    { name: "Math", students: ["Alice", "Bob"] },
    { name: "Science", students: ["Charlie", "David"] },
    { name: "English", students: ["Jude", "Micheal", "Uzoh", "Uda"] },
  ],
};

function printClassrooms(school) {
  school.classrooms.forEach((classroom) => {
    console.log(`${classroom.name}: ${classroom.students.length} students`);
  });
}

printClassrooms(school);

/*24. Array Filtering with Conditions
Write a function filterPassingStudentsInClass(school, className) 
that filters and returns the names of students with grades >= 50 
in the specified classroom.*/

const schoolB = {
  classes: {
    "class A": [
      { name: "Charlie Amad", grade: 50 },
      { name: "Alice Faith", grade: 90 },
      { name: "Bob Agu", grade: 48 },
    ],

    "class B": [
      { name: "Emma Obi", grade: 80 },
      { name: "Jude Uzoh", grade: 87 },
      { name: "Micheal Uda", grade: 39 },
    ],
  },
};

function filterPassingStudentsInClass(schoolB, className) {
  const classStudent = schoolB.classes[className];

  return classStudent
    .filter((student) => student.grade >= 50)
    .map((student) => student.name);
}

console.log(
  filterPassingStudentsInClass(schoolB, "class A"),
  filterPassingStudentsInClass(schoolB, "class B")
);

/*25. Comprehensive Project
Create a simple "Gradebook" system. You should be able to:
Add students to the gradebook.
View all students.
Search for a student by name.
Update a student’s grade.
Filter and display students who are passing (grade >= 50). 
Use all concepts learned (functions, arrays, objects, loops, 
conditionals).*/

class Gradebook {
  constructor() {
    this.students = [];
  }

  addStudent(name, grade) {
    this.students.push({ name, grade });
  }

  viewAllStudents() {
    return this.students;
  }

  searchStudentByName(name) {
    return this.students.find((student) => student.name === name) || null;
  }

  updateStudentGrade(name, newGrade) {
    const student = this.searchStudentByName(name);
    if (student) {
      student.grade = newGrade;
    }
  }

  filterPassingStudents() {
    return this.students.filter((student) => student.grade >= 50);
  }
}

const gradebook = new Gradebook();
gradebook.addStudent("Obi", 60);
gradebook.addStudent("Uzoh", 45);
console.log(gradebook.viewAllStudents());
console.log(gradebook.searchStudentByName("Obi"));
gradebook.updateStudentGrade("Obi", 70);
console.log(gradebook.filterPassingStudents());
