const { Pool } = require("pg");

const pool = new Pool({
  user: "your_username",
  host: "localhost",
  database: "your_database",
  password: "your_password",
  port: 5432,
});

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to the database", err);
  } else {
    console.log("Connection successful:", res.rows);
  }
});

pool.query(
  `CREATE TABLE IF NOT EXISTS products (
id SERIAL PRIMARY KEY,
name VARCHAR(100),
description VARCHAR(100),
price INT ,
created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`,
  (err, res) => {
    if (err) {
      console.error("Error creating table:", err);
    } else {
      console.log("Table created successfully");
    }
  }
);

const insertProduct = (name, description, price) => {
    const query = 'INSERT INTO products (name, description, price) VALUES ($1, $2, $3)';
    const values = [name, description, price];
    pool.query(query, values, (err, res) => {
    if (err) {
    console.error('Error inserting data:', err);
    } else {
    console.log('Product inserted successfully');
    }
    });
    };

   


const updateProduct = (name, newPrice) => {
    const query = 'UPDATE products SET price = $1 WHERE name = $2';
    const values = [newPrice, name];
    pool.query(query, values, (err, res) => {
    if (err) {
    console.error('Error updating data:', err);
    } else {
    console.log('Product updated successfully');
    }
    });
    };
    

    const deleteProduct = (name) => {
        const query = 'DELETE FROM products WHERE name = $1';
        const values = [name];
        pool.query(query, values, (err, res) => {
        if (err) {
        console.error('Error deleting data:', err);
        } else {
        console.log('product deleted successfully');
        }
        });
        };
       
        insertProduct('Trousers', 'High quality trousers', 30);
        updateProduct('Trousers', 50);
        deleteProduct('Trousers');
    