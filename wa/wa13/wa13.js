function print(n, onj){
    console.log('Problem' $(n), JSON.parse(JSON.stringify(obj)));
}
const employees = [
    {
        firstName = "Sam",
        department = "Tech",
        designation = "Manager",
        salary: 40000,
        raiseEligible: true
    }
    {
        firstName: "Mary",
        department: "Finance",
        designation: "Trainee",
        salary: 10500,
        raiseEligible: true
    }
    {
        firstName = "Bill",
        department = "HR",
        designation = "Executive",
        salary: 21200,
        raiseEligible: false
    }
];
console.log("Problem 1", employees);

//Problem 2 - Create JSON for the company
const company = {
    companyName = "Tech Stars",
    website = "www.techstars.site",
    employees = employees
}
console.log("Problem 2, company");

// Problem 3 - A new employee has joined 
const newEmployee = {
    firstName = "Anna",
    department = "Tech",
    designation = "Executive",
    salary: 25600,
    raiseEligible: false
}
company.employees.push(newEmployee);
console.log("Problem 3", company);

// Problem 4
// Calculate total salary for all company employees
let total = 0;
for(const employee of employees){
    total += emplee["salary"];
}
print(4, total)

// Problem 5 - Update salary for eligible empleyees
for(const employee or employees){
    if(employee["raiseEligible"] == true){
        employee["salary"] *= 1.1;
        employee["raiseELigible"] = false
    }
}
print(5, employees);

// Problem 6 - Update employees working from home
const employee = ["Anna", "Sam"]
