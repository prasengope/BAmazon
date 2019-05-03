# BAmazon
In this activity, I'll be creating an Amazon-like storefront with the MySQL skills I learned this unit. The app will take in orders from customers and deplete stock from the store's inventory.

Bamazon is an interactive command-line-interface shopping application. It has three main applications:

#### #Customer View
#### #Manager View
#### #Supervisor View

## Program Walkthrough
Here we will walk through what each view of the program should look like when the program is active.

### Customer View
To begin the program with the customer view, type node bamazonCustomer.js into the console. You should be presented with a table of current products and a prompt.
![alt text](./imgs/Screen Shot 2019-05-03 at 6.07.37 PM.png "initial prompt")


To select an item, type in the item id of the item you wish to buy. You will then be presented with a second prompt asking for the quantity of that item. Both prompts only accept integer values.

item list

If the quantity you select does not exceed the current stock of the item, your request will be processed successfully, and your total charge will be displayed following the confirmation message, like below:

success

If your request does exceed the stock, the transaction will not complete, and you will be prompted to return to the initial menu.

To exit the program, select the exit option in the main menu prompt.

Manager View
To begin the program with the manager view, type node bamazonManager.js into the console. The prompt that comes up will look like this:

manager prompt

To view a list of current products, select the first option "View Products For Sale." This will provide the same list that the customer sees in their view. See the screenshot from that section for reference. Upon printing this table to the console, the program will return the user to the main menu.

The second option, "View Low Inventory Products," will allow you to see products with less than 5 items in stock. An example of the output of this is:

low inventory

After printing this table, the user is sent back to the main menu, where they can opt to add inventory to a particular item. This functionality is accomplished in the same way that a customer buys an item. A table of current products is printed, and the user must select by typing in the item_id. From there, the user inputs the desired quantity to add. Here's an example of a successful addition:

add-stock

To add a brand new product to the list of currently available products, select the option "Add New Product." The user should be prompted to provide the name, department, price, and quantity to add of this item. Note, the user cannot create a new department from scratch here. They must select from a list of already availabile departments. To add a department, see the Supervisor view. A successful addition will look like this:

add success

Like with the other options, the user is sent back to the main menu at the end of the action.

Supervisor View
To begin the program with the supervisor view, type node bamazonSupervisor.js into the console.

The initial prompt should look like this:

supervisor prompt

The first option for the user is "View Department by Product Sales." This will generate a table displaying each department, along with their respective overhead costs, total sales for each department, and overall what the total profit/loss is for each department. This is what that output looks like:

view departments

Once this table has been printed to the console, the user will be returned back to the main menu.

The second option, "Create Department," allows the user to create a new department. It follows the same kind of flow as the manager's "Add New Product." The user will be asked to provide a department name and the overhead costs of the department.

Here is an example of a completed prompt for "Create Department" with the success message:

create-department

License
This project is licensed under the MIT License