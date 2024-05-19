import { Employees, FullTimeEmployee, PartTimeEmployee, ContractEmployee } from './ManageEmployees';

const employees = new Employees();

[
	new FullTimeEmployee('Georgius Vidua', 1, 1200, 100),
	new PartTimeEmployee('Optimus Prime', 17, 0, 40, 55),
	new ContractEmployee('Otto Octavius', 27, 0, 12, 100000),
].forEach((employee) => employees.addEmployee(employee));

console.info(employees, employees.getEmployee(1));
employees.removeEmployee(17);
console.info('\n ~/ Updated employees /~\n\n', employees);
