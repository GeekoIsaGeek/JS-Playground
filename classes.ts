interface IEmployee {
	readonly id: number;
	name: string;
	baseSalary: number;
}

class Employees {
	protected employees: IEmployee[];

	constructor() {
		this.employees = [];
	}

	addEmployee(employee: IEmployee) {
		this.employees.push(employee);
	}

	getEmployee(id: number) {
		return this.employees.find((employee) => employee.id === id);
	}

	removeEmployee(id: number) {
		this.employees = this.employees.filter((employee) => employee.id !== id);
	}
}

abstract class Employee {
	public baseSalary: number;
	readonly id: number;
	public name: string;

	constructor(name: string, id: number, baseSalary: number) {
		this.name = name;
		this.id = id;
		this.baseSalary = baseSalary;
	}

	getMonthlySalary() {
		return this.baseSalary;
	}

	get info() {
		return `Name: ${this.name}, ${this.id} Salary: ${this.getMonthlySalary()}`;
	}
}

class FullTimeEmployee extends Employee {
	public benefits: number;

	constructor(name: string, id: number, baseSalary: number, benefits: number) {
		super(name, id, baseSalary);
		this.benefits = benefits;
	}

	getMonthlySalary() {
		return this.baseSalary + this.benefits;
	}
}

class PartTimeEmployee extends Employee {
	public hoursWorked: number;
	public hourlyRate: number;

	constructor(name: string, id: number, baseSalary: number, hoursWorked: number, hourlyRate: number) {
		super(name, id, baseSalary);
		this.hoursWorked = hoursWorked;
		this.hourlyRate = hourlyRate;
	}

	getMonthlySalary() {
		return this.hoursWorked * this.hourlyRate;
	}
}

class ContractEmployee extends Employee {
	public contractDuration: number;
	public totalPay: number;

	constructor(name: string, id: number, baseSalary: number, contractDuration: number, totalPay: number) {
		super(name, id, baseSalary);
		this.contractDuration = contractDuration;
		this.totalPay = totalPay;
	}

	getMonthlySalary() {
		return Math.round(this.totalPay / this.contractDuration);
	}
}

const employees = new Employees();

[
	new FullTimeEmployee('Georgius Vidua', 1, 1200, 100),
	new PartTimeEmployee('Optimus Prime', 17, 0, 40, 55),
	new ContractEmployee('Otto Octavius', 27, 0, 12, 100000),
].forEach((employee) => employees.addEmployee(employee));

console.info(employees, employees.getEmployee(1));
employees.removeEmployee(17);
console.info('\n ~/ Updated employees /~\n\n', employees);
