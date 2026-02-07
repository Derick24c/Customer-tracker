let customers = [
    {name: "Derick Cabrera",
        email: "derick24c@gmail.com",
        purchases: ["Phone","Computer"]},
    {name: "Donald Trump",
        email: "donaldjtrump@potus.com",
        purchases: ["Computer"]},
    {name: "Professor Reed",
        email: "markumreed@usf.edu",
        purchases: ["Phone", "Phone Case"]}];

customers.push({
    name: "Joe Biden",
    email: "biden@gmail.com",
    purchases: ["Phone"],
});
customers.shift();

customers[2].email = "Jodebiden@potus.com";

customers[0].purchases.push("Laptop");

customers.forEach(function(customer)
{console.log(`Name: ${customer.name}, Email: ${customer.email}, Number of Purchases: ${customer.purchases.length}`);

});