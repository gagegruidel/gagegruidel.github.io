//Problem 1
const Sam = { firstName: "Sam", department: "Tech", designation: "Manager", salary: 40000, raiseEligible: true };
const Mary = { firstName: "Mary", department: "Finance", designation: "Trainee", salary: 18500, raiseEligible: true };
const Bill = { firstName: "Bill", department: "HR", designation: "Executive", salary: 21200, raiseEligible: false };
console.log(Sam,Mary,Bill);

//Problem 2
const Company = { companyName: "Tech Stars", website: "www.techstars.site", employees: [Sam, Mary, Bill] };
console.log(Company);

//Problem 3
const Anna = { firstName: "Anna", department: "Tech", designation: "Executive", salary: 25600, raiseEligible: false};
Company.employees.push(Anna);
console.log(Anna);

//Problem 4
const totalSalary = Company.employees.reduce((sum, employee) => sum + employee.salary, 0);
console.log("Employee Total Salary: ", totalSalary);

//Problem 5
function eRaise(HR) {
    HR.employees.forEach(employee => {
        if (employee.raiseEligible) {
            employee.salary *= 1.1;
            employee.raiseEligible = false;
        }
    });
}

eRaise(Company);
console.log("Raises Applied to Eligible Employees: ", Company);

//Problem 6
const homeEmployees = ["Anna", "Sam"];

Company.employees.forEach(employee => {
    employee.wfh = homeEmployees.includes(employee.firstName);
});

console.log("After Working From Home Update: ", Company);
