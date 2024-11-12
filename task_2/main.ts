// task_2/js/main.ts

// ========================
// Interfaces Definitions
// ========================

// DirectorInterface with required methods
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// TeacherInterface with required methods
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// ========================
// Classes Implementations
// ========================

// Director class implementing DirectorInterface
class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }

  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }

  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

// Teacher class implementing TeacherInterface
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }

  getCoffeeBreak(): string {
    return "Cannot have a break";
  }

  workTeacherTasks(): string {
    return "Getting to work";
  }
}

// ========================
// Type Definitions and Functions
// ========================

type Employee = Director | Teacher;

// Function to create an Employee based on salary
function createEmployee(salary: number | string): Employee {
  if (typeof salary === 'number') {
    if (salary < 500) {
      return new Teacher();
    } else {
      return new Director();
    }
  } else {
    return new Director();
  }
}

// Type predicate to check if an employee is a Director
function isDirector(employee: Employee): employee is Director {
  return employee instanceof Director;
}

// Function to execute work based on employee type
function executeWork(employee: Employee): void {
  if (isDirector(employee)) {
    console.log(employee.workDirectorTasks());
  } else {
    console.log(employee.workTeacherTasks());
  }
}

// ========================
// String Literal Type and Function
// ========================

// Define a string literal type Subjects
type Subjects = "Math" | "History";

// Function to handle teaching the class based on the subject
function teachClass(todayClass: Subjects): string {
  if (todayClass === "Math") {
    return "Teaching Math";
  } else {
    return "Teaching History";
  }
}

// ========================
// Example Usage
// ========================

const employee1 = createEmployee(200);
executeWork(employee1);  // Output: Getting to work

const employee2 = createEmployee(1000);
executeWork(employee2);  // Output: Getting to director tasks

console.log(teachClass("Math"));       // Output: Teaching Math
console.log(teachClass("History"));    // Output: Teaching History

