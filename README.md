# AgroAfrica System using NodeJS and MySQL

## Configuration

- **Platform:** node v12.13.1
- **Framework**: express
- **Database**: mysql with knex
- **Testing**: chai, mocha and istanbul
- **Deployment**: docker and travis
- **Digital Ocean**: Ubuntu 18.04

**Postman API doc url** - <https://explore.postman.com/api/5978/agroafrica-backend>


**Check DB Schema design** - (public/db-design.pdf)

**Code coverage** -

![alt text](/public/test-coverage.png)

APIs are divided in five types

1. Users -
    * **post.register**: create a user
    * **get.fetch.id**: get user data by user id
    * **post.generateAuth**: generate  user JWT by email
    * **post.sendAuth**: send user JWT by email
    * **get.verify.email.token**: verify user by email and token
    * **post.login**: login user
    * **post.permission**: admin add  farmer, customer, and admin user permissions
    * **post.role**: admin  add new roles to system e.g. farmer, admin or customer
    * **post.seller**: convert a new user to seller

2. Products -
    * **post.category**: admin adds  a new product category like coffee
    * **post.add**: seller  adds a new product
    * **get.fetch.id**:  users get product details by product id
    * **put.update.id**: seller updates product details by product id
    * **delete.item.id**: seller removes product details by product id
    * **put.readd.id**: seller readds a removed product by its product id

3. Orders -
    * **post.create**: customer creates a new order.
    * **get.order.id**: customer fetches order details by its order id
    * **put.order.id**: customer or farmer order details by order id
    * **post.addToCart**: customer adds a new item to a cart.
    * **get.activeCart.id**: customers gets their active cart details by user id
    * **get.cart.id**: customer fetches  cart details by cart id
    * **delete.removeFromCart**: customer delete items from cart
    * **post.ship**: customer intiates a new order shipment
    * **get.ship.id**: customer or farmer gets  shipment details by their shipment id
    * **put.ship.id**: user updates shipment details based on its shipment id
    * **post.warehouse.id**: admin or seller creates a warehouse based on a product and seller id
4. Transactions -
    * **post.transaction**: create a transaction order.
    * **put.update.id**: admin update transaction details by transaction id
    * **put.update.ref**: update transaction details by reference id
    * **put.update.txid**: customer update transaction details by transaction id
    * **get.fetchEthPrice*: get ether current price in USD
    * **get.fetch.id**: fetch transaction by transaction id
    * **get.fetchAll**: fetch all transactions

5. Upload -
    * **post.saveImage**: save product image by product id.
    * **post.saveWarehouse**: save warehouse image by warehouse id
**API response** - (public/README.md)

### How to run at local

1. download dependencies - node, redis, mysql and docker (optional)
2. Add host details in .env file oresent at root folder
3. run **npm i -g knex** to download knex node module in your system.
4. run **knex:migrate latest** to run migrattion which will create mysql tables whose schema is present uder */migrations* folder.
5. run ** npm i -g   pm2**to install pm2  
5. run npm i to install node dependencies
6. finally run **pm2 start server.js** to fire the app.
7. hit login to get a session and start using APIs.
8. hit npm test to check test cases

### How to run at Digital Ocean:

1. Create a Redis in Digital Ocean  and SQL database from RDS.
2. Create user permission and make sure to keep all in same permission group.
3. Create a key value pair and download it in local.
4. Create docker image at local and push it to Gitlab repository.
5. You can use Digital ocean public IP to hot the server. MAke sure to add RDS and redis environment variable to the task.
6. Login to digital-ocean-cli using this key -> *ssh -i ~/downloads/id_rsa.pub /server IP adddress/* and you can check status of docker and container.
