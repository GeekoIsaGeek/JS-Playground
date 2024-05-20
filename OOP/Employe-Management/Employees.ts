interface IEmployee {
	readonly id: number;
	name: string;
	baseSalary: number;
}

class Employees {
	protected employees: IEmployee[];

	constructor(employees: IEmployee[] = []) {
		this.employees = employees;
	}

	addEmployee(employee: IEmployee) {
		if (this.validateIfExists(employee?.id)) {
			throw new Error('Employee already exists');
		}
		this.employees.push(employee);
	}

	getEmployee(id: number) {
		return this.employees.find((employee) => employee.id === id);
	}

	removeEmployee(id: number) {
		if (this.validateIfExists(id)) {
			this.employees = this.employees.filter((employee) => employee.id !== id);
		} else {
			throw new Error('Employee not found');
		}
	}

	private validateIfExists(id: number) {
		return !!this.employees?.find((employee) => employee.id === id);
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

export { Employees, Employee, FullTimeEmployee, PartTimeEmployee, ContractEmployee };
