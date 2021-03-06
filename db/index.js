const connection = require("./connection");

class DB {
    // Keeping a reference to the connection on the class
    constructor(connection) {
    this.connection = connection;
    };

    // Finds all employees to display their roles, salaries, departments, and managers
    findAllEmployees() {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
        );
    };

    // Finds all employees except the given employee id
    findAllPossibleManagers(employeeId) {
        return this.connection.query(
            "SELECT id, first_name, last_name FROM employee WHERE id != ?",
            employeeId
        );
    };

    // Creates a new employee
    createEmployee(employee) {
        return this.connection.query("INSERT INTO employee SET ?", employee);
    };

    // Removes an employee with the given id
    removeEmployee(employeeId) {
        return this.connection.query(
            "DELETE FROM employee WHERE id = ?",
            employeeId
        );
    };

    // Updates the given employee's role
    updateEmployeeRole(employeeId, roleId) {
        return this.connection.query(
            "UPDATE employee SET role_id = ? WHERE id = ?",
            [roleId, employeeId]
        );
    };

    // Updates the given employee's manager
    updateEmployeeManager(employeeId, managerId) {
        return this.connection.query(
            "UPDATE employee SET manager_id = ? WHERE id = ?",
            [managerId, employeeId]
        );
    };

    // Finds all roles to display the department name
    findAllRoles() {
        return this.connection.query(
            "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
        );
    };

    // Creates a new role
    createRole(role) {
        return this.connection.query("INSERT INTO role SET ?", role);
    };

    // Removes a role from the db
    removeRole(roleId) {
        return this.connection.query("DELETE FROM role WHERE id = ?", roleId);
    };

    // Finds all departments
    findAllDepartments() {
        return this.connection.query(
            "SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id GROUP BY department.id, department.name;"
        );
    };

    // Creates a new department
    createDepartment(department) {
        return this.connection.query("INSERT INTO department SET ?", department);
    };

    // Removes a department
    removeDepartment(departmentId) {
        return this.connection.query(
            "DELETE FROM department WHERE id = ?",
            departmentId
        );
    };

    // Finds all employees in a given department
    findAllEmployeesByDepartment(departmentId) {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department department on role.department_id = department.id WHERE department.id = ?;",
            departmentId
        );
    };

    // Finds all employees by manager to display titles and department names
    findAllEmployeesByManager(managerId) {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title FROM employee LEFT JOIN role on role.id = employee.role_id LEFT JOIN department ON department.id = role.department_id WHERE manager_id = ?;",
            managerId
        );
    };
};

module.exports = new DB(connection);