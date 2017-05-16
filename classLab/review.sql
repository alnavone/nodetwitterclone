-- good afternoon cohort 18!

-- CRUD
CREATE tables
CREATE records

READ
SELECT * FROM students;
SELECT first_name FROM students;

UPDATE
ADD FIELDS
REMOVE FIELDS
ALTER FIELDS
UPDATE our records

DELETE
DROP tables
DELETE FIELDS
DELETE records

-- AGGREGATE FUNCTIONS
COUNT(*)
AVG(score)
MAX/MIN
ROUND
LENGTH

-- ASSOCIATIVE TABLES
-- ASSOCIATIVE Entity
Authors
id - primary key
first name
last name
age

AuthorBooks
id - primary key
fk - author_id
fk - book_id

Books
id - primary key
title
year
pages

-- JOINS
SELECT * FROM students
INNER JOIN enrolments
ON students.id = enrolments.student_id;

-- students
--
-- enrolments
--
-- courses
SELECT * FROM students
INNER JOIN enrolments ON students.id = enrolments.student_id
INNER JOIN courses ON courses.id = enrolments.course_id;




--
