# Bimtrazer Test

My proposal for the Bimtrazer test.
![image](https://github.com/user-attachments/assets/0269a810-a422-45da-afb2-867d73477ce0)

## Requirements

Node.js (20.10.0) and Docker is required to run this project in local.

## Environment variables

Required env variables for this project:

### api-gateway: .env

```
PORT=number
JWT_SECRET=string
```

To test in development:

```
PORT=3000
JWT_SECRET=bimtrazer_test_JWT_Key
```

### front-end: .env.local

```
API_BASE_URL=string
```

To test in development:

```
API_BASE_URL=http://localhost:3000
```

## First steps

Before running the project is necessary to set up the database with the docker-compose file located in /bimtrazer-back:

```
cd ./bimtrazer-back/block-service
docker compose up -d
```

## Run

First start the block service

```
cd ./bimtrazer-back/block-service

npm install

npm run start:dev
```

Then the API

```
cd ./bimtrazer-back/api-gateway

npm install

npm run start:dev
```

At last the front-end app

```
cd ./bimtrazer-front

npm install

npm run dev
```

## Notes

Token is stored in frontend with a max age of 120 seconds, after that session will be ended.
