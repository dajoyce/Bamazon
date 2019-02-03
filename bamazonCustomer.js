//require the npm packages needed
var mysql = require("mysql");
var inquirer = require("inquirer");

//connect to the database
var connection = mysql.createConnection({
  host: "localhost",
  port: 8889,
  user: "root",
  password: "root",
  database: "bamazon_DB"
});

connection.connect(function(err) {
  console.log("Connected as id: " + connection.threadId);
  whatToBuy();
});

//Show the customer what is for sale from mysql table
var whatToBuy = function() {
  connection.query("SELECT * FROM products", function(err, res) {
    for (var i = 0; i < res.length; i++) {
      console.log(
        res[i].item_id +
          " || " +
          res[i].product_name +
          " || " +
          res[i].department_name +
          " || " +
          res[i].price +
          " || " +
          res[i].stock_quantity +
          "\n"
      );
    }
    customerSelection(res);
  });
};

//Customer chooses item and quantity
var customerSelection = function(res) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message: "Enter the ID of the item you would like to purchase?"
      }
    ])
    .then(function(answer) {
      var correct = false;
      for (var i = 0; i < res.length; i++) {
        if (res[i].item_id == answer.choice) {
          correct = true;
          var product = answer.choice;
          var id = i;
          inquirer
            .prompt({
              type: "input",
              name: "quantity",
              message: "How many would you like to buy?",
              validate: function(value) {
                if (isNaN(value) == false) {
                  return true;
                } else {
                  return false;
                }
              }
            })
            .then(function(answer) {
              if (res[id].stock_quantity - answer.quantity > 0) {
                connection.query(
                  "UPDATE products SET stock_quantity = ? WHERE item_id= ?",
                  [res[id].stock_quantity - answer.quantity, product],
                  function(err, res2) {
                    if (err) {
                      console.log(err);
                    }
                    console.log(
                      "Your purchase of " +
                        res[id].product_name +
                        " was successful, you have been charged $" +
                        answer.quantity * res[id].price
                    );
                    whatToBuy();
                  }
                );
              } else {
                console.log("Sorry we do not have enough of that item. Please make another selection.");
                // promptCustomer(res);
                whatToBuy();
              }
            });
        }
      }
    });
};
