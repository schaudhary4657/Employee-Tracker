INSERT INTO department (name) 
VALUES 
      ('Engineering'), 
      ('Sales'), 
      ('Marketing'), 
      ('Finance'), 
      ('Human Resources'),
      ('Legal');


INSERT INTO role (title, salary, department_id) 
VALUES 
      ('Lead Engineer', 150000, 1), 
      ('Software Engineer', 80000, 1), 
      ('Salesperson', 100000, 2), 
      ('Marketing Coordinator', 60000, 3), 
      ('Accountant', 90000, 4), 
      ('Human Resource Generalist', 65000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id) 
VALUES 
      ('Mike', 'Harris', 2, null), 
      ('Jack', 'Han', 3, null), 
      ('Sara', 'Carroll', 1, null), 
      ('Austin', 'Reed', 5, null), 
      ("Louise", "Asselin", 6, null), 
      ("Johnny", "Rotton", 4, null);