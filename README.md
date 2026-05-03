This is a simple JavaScript-based customer tracking script that demonstrates how to manage and manipulate customer data using arrays and objects.

The program stores customer information such as names, emails, and purchase history, then performs various operations like adding, removing, updating, and displaying customer data.

Features
Store customer data using JavaScript objects
Add new customers dynamically
Remove customers from the list
Update customer information
Track purchase history
Display summarized customer details in the console
  
  Operations Performed

The script demonstrates several key operations:

Add a new customer
customers.push({...});
Remove the first customer
customers.shift();
Update a customer's email
customers[2].email = "newemail@example.com";
Add a purchase to an existing customer
customers[0].purchases.push("Laptop");
Display all customers
customers.forEach(...)
