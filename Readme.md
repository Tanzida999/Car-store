Car Store Express Application

Getting Started

To get started with this project, follow these steps:

 1. Clone the Repository:

bash
git clone <repository_url>

2. Navigate to the Project Directory:

bash

cd car-store-express

3. Install Dependencies:
Ensure you have Node.js and npm installed. Run the following command to install the required dependencies:

bash

npm install

4. Run the Application:
Start the development server with:

bash

npm run dev


Features
CRUD operations for managing cars: Add, edit, and remove cars from the store's inventory.
Order management: Place orders and update stock accordingly.
Revenue calculation: Calculate total revenue from all orders.
Schema validation: Ensures proper data validation with Mongoose.

API Endpoints
1. Create a Car
Endpoint: /api/cars
Method: POST
2. Get All Cars
Endpoint: /api/cars
Method: GET
3. Get a Specific Car
Endpoint: /api/cars/:carId
Method: GET
4. Update a Car
Endpoint: /api/cars/:carId
Method: PUT

5. Delete a Car
Endpoint: /api/cars/:carId
Method: DELETE
6. Order a Car
Endpoint: /api/orders
Method: POST
7. Calculate Revenue from Orders
Endpoint: /api/orders/revenue
Method: GET


