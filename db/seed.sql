use roster_db;

INSERT INTO department
    (name)
    VALUES
        ('Shipping'),
        ('Sales'),
        ('Marketing'),
        ('Legal'),
        ('Accounting');

INSERT INTO role
    (title, salary, department_id)
VALUES
    ('Warehouse Manager', 90000, 1),
    ('Truck Driver', 70000, 1),
    ('Head of Sales', 100000, 2),
    ('Salesperson', 50000, 2),
    ('Head of Marketing', 100000, 3),
    ('Marketing Agent', 60000, 3),
    ('Head of Legal', 110000, 4),
    ('Lawyer', 70000, 4),
    ('Head of Accounting', 120000, 5),
    ('Accountant', 90000, 5);

INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('Kyle', 'Myers', 1, 1),
    ('Renato', 'Bazan', 2, 2),
    ('Matt', 'Morgan', 3, 3),
    ('Will', 'Yergin', 4, 4),
    ('John', 'Smith', 5, NULL),
    ('Alex', 'Connor', 6, NULL),
    ('Jenn', 'Stills', 7, NULL);