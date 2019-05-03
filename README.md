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
<img width="659" alt="Screen Shot 2019-05-03 at 6 07 37 PM" src="https://user-images.githubusercontent.com/27400450/57168648-a1ff5080-6dd0-11e9-80be-8570e2c95ff7.png">

To select an item, type in the item id of the item you wish to buy. You will then be presented with a second prompt asking for the quantity of that item. Both prompts only accept integer values.
<img width="638" alt="Screen Shot 2019-05-03 at 6 26 17 PM" src="https://user-images.githubusercontent.com/27400450/57168723-fefb0680-6dd0-11e9-904b-8740a09194cf.png">


If the quantity you select does not exceed the current stock of the item, your request will be processed successfully, and your total charge will be displayed following the confirmation message, like below:
<img width="657" alt="Screen Shot 2019-05-03 at 6 27 49 PM" src="https://user-images.githubusercontent.com/27400450/57168750-34075900-6dd1-11e9-99f1-c93bfdfffd3a.png">

If your request does exceed the stock, the transaction will not complete, and you will be prompted to return to the initial menu.

To exit the program, select the exit option in the main menu prompt.

### Manager View
To begin the program with the manager view, type node bamazonManager.js into the console. The prompt that comes up will look like this:

<img width="669" alt="Screen Shot 2019-05-03 at 6 29 37 PM" src="https://user-images.githubusercontent.com/27400450/57168791-70d35000-6dd1-11e9-95ac-7784dcb027bd.png">

To view a list of current products, select the first option "View Products For Sale." This will provide the same list that the customer sees in their view. See the screenshot from that section for reference. Upon printing this table to the console, the program will return the user to the main menu.
<img width="703" alt="Screen Shot 2019-05-03 at 6 31 47 PM" src="https://user-images.githubusercontent.com/27400450/57168858-bc85f980-6dd1-11e9-9b0c-27427f65a14b.png">

The second option, "View Low Inventory Products," will allow you to see products with less than 5 items in stock. An example of the output of this is:
<img width="676" alt="Screen Shot 2019-05-03 at 6 33 28 PM" src="https://user-images.githubusercontent.com/27400450/57168912-f8b95a00-6dd1-11e9-8e06-1454ac5bfe55.png">

After printing this table, the user is sent back to the main menu, where they can opt to add inventory to a particular item. This functionality is accomplished in the same way that a customer buys an item. A table of current products is printed, and the user must select by typing in the item_id. From there, the user inputs the desired quantity to add. Here's an example of a successful addition:
<img width="698" alt="Screen Shot 2019-05-03 at 6 34 52 PM" src="https://user-images.githubusercontent.com/27400450/57168957-31593380-6dd2-11e9-98a9-616253b2b85e.png">

To add a brand new product to the list of currently available products, select the option "Add New Product." The user should be prompted to provide the name, department, price, and quantity to add of this item. Note, the user cannot create a new department from scratch here. They must select from a list of already availabile departments. To add a department, see the Supervisor view. A successful addition will look like this:
<img width="1081" alt="Screen Shot 2019-05-03 at 6 36 47 PM" src="https://user-images.githubusercontent.com/27400450/57169032-839a5480-6dd2-11e9-8411-3ad32558d35f.png">

Like with the other options, the user is sent back to the main menu at the end of the action.

### Supervisor View
To begin the program with the supervisor view, type node bamazonSupervisor.js into the console.

The initial prompt should look like this:
<img width="473" alt="Screen Shot 2019-05-03 at 6 39 52 PM" src="https://user-images.githubusercontent.com/27400450/57169108-dffd7400-6dd2-11e9-81ed-a5e45a78456d.png">

The first option for the user is "View Department by Product Sales." This will generate a table displaying each department, along with their respective overhead costs, total sales for each department, and overall what the total profit/loss is for each department. This is what that output looks like:
<img width="600" alt="Screen Shot 2019-05-03 at 6 38 27 PM" src="https://user-images.githubusercontent.com/27400450/57169074-b17f9900-6dd2-11e9-9c49-cd5e523a3a4f.png">


Once this table has been printed to the console, the user will be returned back to the main menu.

The second option, "Create Department," allows the user to create a new department. It follows the same kind of flow as the manager's "Add New Product." The user will be asked to provide a department name and the overhead costs of the department.

Here is an example of a completed prompt for "Create Department" with the success message:
<img width="808" alt="Screen Shot 2019-05-03 at 6 41 49 PM" src="https://user-images.githubusercontent.com/27400450/57169153-23f07900-6dd3-11e9-8cd0-100545929023.png">


License
This project is licensed under the MIT License