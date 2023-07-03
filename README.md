 # E2E APP

This project consists of a client and an api service.
The client service is a React app that communicates with the api service to retrieve data. The api service is a Node.js app that serves data to the client app.

### to run the client and server you need just to run 
```
docker-compose up
```
you may have to give it sudo permission
 
if something went wrong with docker please use the following steps to run the client and the server

Running the Project
To run the project, follow these steps:

Open a terminal and navigate to the api directory:


```
cd api

```
Install the dependencies for the client app using Yarn:
```
yarn
```


Start the server :

```
yarn start
```

This will start the server on `http://localhost:5000`

Open a new terminal window or tab and navigate back to the root directory of the project:

```
cd ..
```

```
cd client
```


Install the dependencies for the client app using Yarn:

```
yarn
```

Start the client app:

```
yarn dev
```

This will start the web portal on `http://localhost:5173`.

To run tests use command 
```
yarn test

```