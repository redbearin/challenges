class Employee {
	constructor (firstname, lastname) {
		this.firstname = firstname;
		this.lastname = lastname;
    this.email = this.firstname.toLowerCase() + '.' + this.lastname.toLowerCase() + '@company.com';
    this.fullname = this.firstname + ' ' + this.lastname;
	}
}

const emp1 = new Employee("John", "Smith");
const emp2 = new Employee("Mary",  "Sue");
const emp3 = new Employee("Antony", "Walker");
const emp4 = new Employee("Joshua", "Senoron");

document.getElementById('ans').textContent = emp1.lastname;
document.getElementById('ans1').textContent = emp2.firstname;
document.getElementById('ans2').textContent = emp3.email;
document.getElementById('ans3').textContent = emp4.fullname;