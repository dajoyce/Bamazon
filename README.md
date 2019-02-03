# Bamazon

General Overview:
This app was created during week 12 of the UNC Coding Bootcamp and taught our class how to incorporate MySQL and Inquirer into our CLI App. The homework called for the creation of an app named Bamazon (similar to Amazon beta 1.0). Bamazon takes in orders from customers and depletes stock from the store's inventory and notifies the customer of a successful or unsuccessful purchase. If the purchase is successful Bamazon will alert the user of what product(s) they purchased and the cost of the item(s). If the purchase is unsuccessful Bamazon will alert the user that the quantity the user wishes to buy exceeds the inventory and will prompt the user to make another selection.

Before you get started:
Like our last homework, this is a CLI App and it cannot be deployed using GitHub or Heroku. If you choose download this, navigate to the location on your computer and remember to do the npm init and npm install before moving forward. The basic command instructions are listed below and I am also including the following short video which demonstrates a walk-through of a successful/unsuccessful transaction.

Video Link: https://drive.google.com/file/d/1e23iEvV3LqWlF9JHVv1uht-oBXQcUVfW/view

App Basic Command Instructions:

1.  Navigate to the appropriate folder where you downloaded the app and completed the npm init and npm install.
2.  Use nodemon to open bamazonCustomer.js
3.  At this point, you should see a list of items for sale and you will be prompted to enter the ID number for the item you wish to purchase.
4.  Next you will see a prompt asking how many of the items you would like to purchase.
5.  If you selected a product/quantity that is available you should receive a prompt telling you the "Your purchase of [product name] was successful, you have been charged \$[amount = product price * quantity selected].
