const employee = {
    name: "John",
    streetAddress:"11 Broadway",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value,
      };
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee;
}// Write your solution in this file!
function deleteFromEmployeeByKey(employee, key){
    let newEmployee={...employee};
    delete newEmployee[key];
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}