# About Project

# How to setup

- Create a `.env` file in main directory . Add following variables to file

```
PORT=<port_number>,
MONGO_DB_URL=<your_mongo_db_url>
```

- To start the server . run the following command

```
npm install
npm start
```

# Folder Structure

### CONFIG

- This folder contains configuration related to environment variables and connection to database.

### MODELS

- This folder contains the models and schemas of current project users and tweets.

### REPOSITORY

- This folder contains the files throught which we interact with models to create instances

### SERVICES

- This folder contains the files containg business logic acting between controllers and repository

### CONTROLLERS

- This folder contains the files which interact with frontend and deals with request , response

### ROUTES

- This folder contains files which contains versions of app like current version `v1`

# How to contribute
