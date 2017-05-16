<!-- good afternoon cohort 18! -->

# Databases and Why We Need Them
When we are first learning to code, we save everything in memory, so after the session ends, everything is gone.

To save data from the user, we have different options. We can save the data just to a file. The problem with this is it becomes slow, and becomes problematic, because, what if lots of users are opening the same file at the same file, and searching through a file can become quite slow.

With databases, you structure your data, you put it in a structured fashion. You can easily store and retrieve your data. There are two main database structures. One is called a relational database, and the other is called NoSQL. Later in the bootcamp we will cover NoSQL DBs like MongoDB, but for today, we will be focusing on relational databases.

NoSQL databases use key values, documents, different ways to store data. Relational databases use a language called SQL, which is a language used to query, fetch, and store data in databases. Sqlite3 is a very lightweight development database. It's not meant for production. It stores all the data in one big binary file. It's great for a situation where you're building a quick app and want to test it. Otherwise, we'll use something like MySQL or Postgres. We mainly use Postgres in this course.

The basis of any relational database is tables. Every table has columns and rows. You store your data in rows, and structure your data in columns.

If I have a user in my database, I have columns such as `first_name, last_name, email, phone_number`. You store the use info in rows.

ex. table

In tables we need a primary key. We usually use something called an `id`. We can't have two rows with an id of 1, otherwise, we won't be able to identify that row. I need to get the user by the primary key, which in this case is the id.

The main we use to operations on databases is called CRUD (Create, Read, Update, and Destroy).

We'll see later we don't have to use SQL, but if you were to use SQL to create a table in the database, you'd do something like this:

```sql
CREATE TABLE users(
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  first_name VARCHAR(255),
  last_name VARCHAR(255),
  email VARCHAR(255),
  phone_number: VARCHAR(255)
)
```

There's also insert, select, delete...
```sql
INSERT INTO users(first_name, last_name, email, phone_number) VALUES("Jacob", "Tran", "jacob@codecore.ca", "(555) 555-5555")

SELECT * FROM users WHERE id = 1;
DELETE FROM users WHERE id=1;
```

If you go inside your terminal and want to play with SQL, just open it up and type `sqlite3` or download the sqlite3browser app: http://sqlitebrowser.org/

```sql
-- Here you can try some commands like CREATE, INSERT, SELECT, and DELETE.
```

# ERDs

Entity Relationship Diagrams
Relationships
UML ERDs
Crows Feet Notation
Lucid Charts

Use Case Diagrams
State Machine Diagrams
