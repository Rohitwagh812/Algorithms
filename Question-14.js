// Write a program to get the ID’s of all the objects and store them in a array

let employees = [
    {
    'id': 11,
    'name':'Abhinav',
    'salary':75000
    },
    {
    'id': 2131,
    'name':'Raj',
    'salary':62000
    },
    {
    'id': 3012,
    'name':'Raj',
    'salary':32000
    }]

    let idArray = []; // create empty array for storing IDs
    for (let i=0; i<  employees.length; i++) {
      let currentEmployees = employees[i]; 
      if (!idArray.includes(currentEmployees.id)) {
        idArray.push(currentEmployees.id); // add unique IDs only
      }
    }
    console.log('IDs:', idArray); 


