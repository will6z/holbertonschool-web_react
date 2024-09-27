// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two student variables
const student1: Student = {
  firstName: 'John',
  lastName: 'Doe',
  age: 20,
  location: 'New York',
};

const student2: Student = {
  firstName: 'Jane',
  lastName: 'Smith',
  age: 22,
  location: 'Los Angeles',
};

// Store the students in an array
const studentsList: Student[] = [student1, student2];

// Create a table using Vanilla JavaScript
const table = document.createElement('table');
const tableBody = document.createElement('tbody');

// Loop through studentsList and append a row for each student
studentsList.forEach((student) => {
  const row = document.createElement('tr');

  // Create cells for firstName and location
  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  // Append cells to the row
  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  // Append the row to the table body
  tableBody.appendChild(row);
});

// Append the table body to the table
table.appendChild(tableBody);

// Append the table to the document body
document.body.appendChild(table);

