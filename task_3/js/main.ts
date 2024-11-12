// task_3/js/main.ts

/// <reference path="./crud.d.ts" />

// Import RowID and RowElement types from interface.ts
import { RowID, RowElement } from './interface';

// Import everything from crud.js as CRUD
import * as CRUD from './crud';

// Create a RowElement object
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insert the row and store the returned RowID
const newRowID: RowID = CRUD.insertRow(row);

// Update the row with a new age value
const updatedRow: RowElement = { 
  ...row, 
  age: 23 
};
CRUD.updateRow(newRowID, updatedRow);

// Delete the row by its RowID
CRUD.deleteRow(newRowID);

