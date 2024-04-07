# Express API Project

This is a simple Express.js project for creating a RESTful API with CRUD operations.

## Getting Started

To get started with this project, follow the instructions below:

### Prerequisites

- Node.js installed on your machine.

### Installation

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

    ```bash
    cd express-api-project
    ```
3. Install dependencies:
   ```bash
   npm install
   ```

##  Running the Server
> To start the server, run the following command:

```bash
npm run start
```

#### The server will start listening on port 3000 by default.

##  API Endpoints
###  The following API endpoints are available:

* *GET /*: Get a welcome message.
* *POST /post*: Submit data.
* *PUT /put*: Update data.
* *DELETE /delete*: Delete data.

## Testing the Endpoints
###  You can use tools like cURL, Postman, or any HTTP client to test the API endpoints. Here are some sample cURL commands:

```bash
# GET /
curl http://localhost:3000/

# POST /post
curl -X POST -H "Content-Type: application/json" -d '{"data": "Sample data"}' http://localhost:3000/post

# PUT /put
curl -X PUT -H "Content-Type: application/json" -d '{"data": "Updated data"}' http://localhost:3000/put

# DELETE /delete
curl -X DELETE http://localhost:3000/delete

```