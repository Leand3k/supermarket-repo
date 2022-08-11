# supermarket-repo

## About

This is a simple application made simulating a warehouse of a small market. It has the basic functions of a CRUD App, meaning that you can create products, read products, update products and delete products.

## Technologies and tools

It contains:

- A REST API made in .NET CORE 6 using the DDD Pattern
- A SQL Server Database
- An Angular CRUD Application
- Docker to run the Angular CRUD

## How to run

- Backend:

Open the project and run the Solution. It should load all projects inside it. Then run the API.

- Frontend:

The frontend has a docker-compose, so all that it's needed is to run it. If you don't have Docker, then install the latest version to day.

`docker-compose up`

If you don't want to run the frontend as a container, then use `ng serve --open` on the Angular CLI. If you don't have Angular CLI, then install the latest version to day.
